import React from "react";

const Button = ({ disabled, loading, title, ...props }) => (
	<button
		className={`
			${loading || disabled ? "bg-gray-700 cursor-not-allowed" : "bg-blue-700 hover:bg-blue-600 cursor-pointer"}
			text-center text-gray-200 text-lg w-full py-2 rounded my-2 outline-none border-none
		`}
		disabled={disabled}
		{...props}
	>
		{title}
	</button>
);

export default Button;