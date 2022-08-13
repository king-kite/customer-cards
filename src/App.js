import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import CardBack from "./components/CardBack";
import CardFront from "./components/CardFront";
import Form from "./components/Form";
import "./style.css";

const App = () => {
  let timeout;
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [typingCVV, setTypingCVV] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    if (name === "cardNumber" || name === "cvv") {
      const lastIndex = value[value.length - 1];
      if (value && isNaN(lastIndex)) return;
    }

    if (name === "cardNumber" && value.length > 16) return;
    if (name === "cvv" && value.length > 3) return;

    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setErrors((prevState) => ({
      ...prevState,
      [name]: "",
    }));
  };

  const handleSelect = (name, value) => {
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setErrors((prevState) => ({
      ...prevState,
      [name]: "",
      exprDate: "",
    }));
  };

  const validate = () => {
    const validateLength = (field) => {
      if (field in form) {
        if (form[field].length <= 0)
          return setErrors((prevState) => ({
            ...prevState,
            [field]: "Field is required*",
          }));
        else return true;
      } else
        return setErrors((prevState) => ({
          ...prevState,
          [field]: "Field is required*",
        }));
    };

    const validateNumber = (name, limit, alias) => {
      if (form[name] && form[name].length !== limit) {
        return setErrors((prevState) => ({
          ...prevState,
          [name]: `${alias} must be ${limit} digits*`,
        }));
      } else if (form[name] && form[name].length === limit) return true;
    };

    const validateExpiryDate = () => {
      if (form.year && form.month) {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth() + 1;

        if (currentYear >= form.year) {
          if (currentMonth >= form.month) {
            return setErrors((prevState) => ({
              ...prevState,
              exprDate: "This Card Has Expired",
            }));
          }
        }
        return true;
      }
    };

    let a = validateNumber("cardNumber", 16, "Card Number");
    let b = validateNumber("cvv", 3, "CVV");

    let c = validateExpiryDate();

    let d = validateLength("cardName");
    let e = validateLength("cardNumber");
    let f = validateLength("month");
    let g = validateLength("year");
    let h = validateLength("cvv");

    if (a && b && c && d && e && f && g && h) {
      return true;
    }
    return false;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    setLoading(true);
    timeout = setTimeout(() => {
      const valid = validate();      

      if (valid === true) {
        setMessage(`${form?.cardName}'s card was successfully created!`)
        setShowForm(false);
      }

      setLoading(false);
    }, 2000)

  }

  useEffect(() => {
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div
      className={`w-full flex flex-col justify-center items-center ${
        showForm ? "my-40" : "my-5"
      }`}
    >
      <section
        className={showForm ? "hidden" : "block flex flex-col items-center"}
      >
        {message &&
          <div className="bg-green-500 border-2 border-green-600 flex justify-between items-center p-2 rounded-lg text-gray-200">
            <p className="text-base mr-5 ml-2" >{message}</p>
            <i 
              onClick={() => setMessage(null)}
              className="fas fa-times text-sm ml-5 mr-2 cursor-pointer" 
            />
          </div>
        }
        <div className="my-2">
          <CardFront
            cardName={form?.cardName || ""}
            cardNumber={form?.cardNumber || ""}
            month={form?.month || ""}
            year={form?.year || ""}
          />
        </div>
        <div className="my-2">
          <CardBack cvv={form?.cvv} />
        </div>

        <div className="w-48 p-2">
          <Button
            onClick={() => {
              setErrors({});
              setForm({});
              setLoading(false);
              setMessage(null);
              setShowForm(true);
            }}
            title="Create Card"
          />
        </div>
      </section>

      <div
        className={`${
          showForm ? "block" : "hidden"
        } bg-white rounded-lg shadow-lg w-full max-w-xl mx-3 px-6 pt-12 pb-6 relative`}
      >
        <Card
          cardName={form?.cardName || ""}
          cardNumber={form?.cardNumber || ""}
          cvv={form?.cvv || ""}
          month={form?.month || ""}
          typingCVV={typingCVV}
          year={form?.year || ""}
        />

        <Form
          form={form}
          errors={errors}
          handleChange={handleChange}
          handleSelect={handleSelect}
          handleSubmit={handleSubmit}
          loading={loading}
          setTypingCVV={setTypingCVV}
        />
      </div>
    </div>
  );
};

export default App;