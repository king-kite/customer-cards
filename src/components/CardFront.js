import React from "react";

const CardFront = ({ cardName, cardNumber, month, year }) => {
	const numberArray = cardNumber?.split("");
	const firstArray = numberArray?.slice(0, 4);
	const secondArray = numberArray?.slice(4, 8);
	const thirdArray = numberArray?.slice(8, 12);
	const fourthArray = numberArray?.slice(12, 16);
	return (
		<div className="flex justify-center">
			<section className={`flex flex-col credit-card rounded-lg shadow-lg`}>
				<div className="flex justify-between items-center text-gray-200 text-5xl mb-1 mx-3">
					<div>
						<i className="fab fa-cc-discover" />
					</div>
					<div>
						<i className="fab fa-cc-visa" />
					</div>
				</div>

				<div className="bg-transparent border rounded p-1 mb-5 mt-3 mx-3">
					<div className="flex justify-between items-center text-gray-200 text-lg px-1">
						<span>
							{firstArray?.[0] || "#"}
							{firstArray?.[1] || "#"}
							{firstArray?.[2] || "#"}
							{firstArray?.[3] || "#"}
						</span>
						<span>
							{typeof secondArray?.[0] === "string" ? (
								<i className="fas fa-star stars" />
							) : (
								"#"
							)}
							{typeof secondArray?.[1] === "string" ? (
								<i className="fas fa-star stars" />
							) : (
								"#"
							)}
							{typeof secondArray?.[2] === "string" ? (
								<i className="fas fa-star stars" />
							) : (
								"#"
							)}
							{typeof secondArray?.[3] === "string" ? (
								<i className="fas fa-star stars" />
							) : (
								"#"
							)}
						</span>
						<span>
							{typeof thirdArray?.[0] === "string" ? (
								<i className="fas fa-star stars" />
							) : (
								"#"
							)}
							{typeof thirdArray?.[1] === "string" ? (
								<i className="fas fa-star stars" />
							) : (
								"#"
							)}
							{typeof thirdArray?.[2] === "string" ? (
								<i className="fas fa-star stars" />
							) : (
								"#"
							)}
							{typeof thirdArray?.[3] === "string" ? (
								<i className="fas fa-star stars" />
							) : (
								"#"
							)}
						</span>
						<span>
							{fourthArray?.[0] || "#"}
							{fourthArray?.[1] || "#"}
							{fourthArray?.[2] || "#"}
							{fourthArray?.[3] || "#"}
						</span>
					</div>
				</div>

				<div className="flex justify-between items-center my-2 mx-3">
					<div>
						<p className="text-xs text-gray-400">Card Holder</p>
						<p className="text-sm text-gray-200 tracking-wide">
							{cardName || "------------------"}
						</p>
					</div>
					<div className="border border-gray-100 rounded text-gray-200 p-2">
						<p className="text-xs text-gray-400">Expires</p>
						<p className="text-sm text-gray-200">
							{typeof month === "number" ? String(month).padStart(2, 0) : "MM"}/
							{typeof year === "number" ? String(year).slice(2, 4) : "YY"}
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default CardFront;
