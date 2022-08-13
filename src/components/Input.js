import React from "react";

const Input = ({ caps, error, label, usePlaceholder, value, ...props }) => (
	<>
		{label && (
			<label
				className={`${!caps && "capitalize"} font-semibold text-xs ${
					error ? "text-red-600" : "text-gray-800"
				}`}
			>
				{label}
			</label>
		)}
		<input
			className={`border ${
				error ? "border-red-600" : "border-gray-500"
			} form-input ${usePlaceholder && value && "placeholder-gray-700"} text-gray-700 rounded-lg px-3 py-2 w-full`}
			value={value}
			{...props}
		/>
		{error && (
			<p className="font-semibold text-red-600 text-xs mx-1">{error}</p>
		)}
	</>
);

export default Input;
