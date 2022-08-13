import React from "react";
import Button from "./Button";
import Input from "./Input";
import Select from "./Select";

const getExpiryMonth = () => {
  const arrayOfMonths = [];
  for (let i = 1; i <= 12; i++) {
    arrayOfMonths.push(i);
  }
  return arrayOfMonths;
}

const getExpiryYear = () => {
  const arrayOfYears = [];
  const currentYear = new Date().getFullYear();
  const futureYear = new Date(currentYear + 10, 0, 1).getFullYear();
  for (let i = currentYear; i <= futureYear; i++) {
    arrayOfYears.push(i);
  }
  return arrayOfYears;
}


const Form = ({ form, errors, handleChange, handleSelect, handleSubmit, loading, setTypingCVV }) => (
	<form className="mt-20 mb-3" onSubmit={handleSubmit}>
		<div className="my-5">
			<Input
				error={errors?.cardNumber || ""}
				label="card number"
				name="cardNumber"
				onChange={handleChange}
				placeholder="0000 0000 0000 0000"
				value={form?.cardNumber || ""}
			/>
		</div>

		<div className="my-5">
			<Input
				error={errors?.cardName || ""}
				label="card name"
				name="cardName"
				onChange={handleChange}
				placeholder="ALEXANDER THE GREAT"
				value={form?.cardName || ""}
			/>
		</div>

		<div className="flex my-5">
			<div className="w-2/3 mr-2">
				<label className={`font-semibold text-xs ${errors?.exprDate || errors?.month || errors?.year ? "text-red-600" : "text-gray-800"}`}>
					Expiration Date
				</label>
				<div className="flex items-center">
					<div className="mr-2 w-full">
						<Select 
							error={errors?.month ? errors.month : errors?.exprDate ? true : ""}
							handleSelect={(month) => handleSelect('month', month)}
							list={getExpiryMonth()}
							placeholder={typeof form?.month === "number" ? String(form.month).padStart(2, 0) : "Month"}
							value={form?.month || ""}
						/>
					</div>

					<div className="ml-2 w-full">
						<Select 
							error={errors?.year ? errors.year : errors?.exprDate ? true : ""}
							handleSelect={(year) => handleSelect('year', year)}
							list={getExpiryYear()}
							placeholder={form?.year || "Year"}
							value={form?.year || ""}
						/>
					</div>

				</div>
				{errors?.exprDate && <div>
						<p className="font-semibold text-xs text-red-600 m-1">{errors?.exprDate}</p>
					</div>
				}
			</div>
			<div className="w-1/3 ml-2">
				<div className="">
					<Input
						caps
						error={errors?.cvv || ""}
						label="CVV"
						name="cvv"
						onBlur={() => setTypingCVV(false)}
						onChange={handleChange}
						onFocus={() => setTypingCVV(true)}
						placeholder="000"
						value={form?.cvv || ""}
					/>
				</div>
			</div>
		</div>

		<div className="outline-none border-none">
			<Button 
				loading={loading}
				title={loading ? "Validating..." : "Submit"}
			/>
		</div>
	</form>
);

export default Form;
