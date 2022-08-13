import React from "react";
import useOutsideClick from "../hooks/useOutsideClick";

const Select = ({ className, error, handleSelect, list, placeholder, value }) => {
	const { handleClick, ref, visible } = useOutsideClick();

	return (
		<div>
			<div
				ref={ref}
				className={`${
					className || "w-full"
				} border ${error ? "border-red-600" : "border-gray-500 hover:border-gray-600"} rounded-lg p-2 shadow-xl appearance-none focus:outline-none focus:shadow-outline relative`}
			>
				<div
					onClick={handleClick}
					className="flex justify-between items-center h-full w-full text-sm text-gray-700 cursor-pointer"
				>
					<span>{placeholder}</span>
					<i className="fas fa-chevron-down text-xs" />
				</div>
				<div
					className={`${
						!visible && "hidden"
					} absolute left-0 top-0 rounded-lg w-full h-56 overflow-y-auto`}
				>
					<ul className="bg-gray-300 border border-gray-500 rounded-lg text-gray-700">
						{list?.map((item) => (
							<li
								onClick={() => {
									handleSelect(item);
									handleClick(false);
								}}
								className={`hover:bg-gray-500 hover:text-gray-200 cursor-pointer flex items-center px-2 ${
									value === item && "text-gray-500"
								}`}
								key={item}
							>
								<i
									className={`fas fa-check text-sm ${
										value !== item && "invisible"
									}`}
								/>
								<span className="mx-2">
									{typeof item === "number" ? String(item).padStart(2, 0) : item}
								</span>
							</li>
						))}
					</ul>
				</div>
			</div>
			{error &&
				<div>
					<p className="font-semibold text-xs text-red-600 m-1">{error}</p>
				</div>}
		</div>
	);
};

export default Select;
