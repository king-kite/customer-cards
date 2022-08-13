const Card = ({ cardName, cardNumber, cvv, month, typingCVV, year }) => {
	const numberArray = cardNumber?.split("");
	const firstArray = numberArray?.slice(0, 4);
	const secondArray = numberArray?.slice(4, 8);
	const thirdArray = numberArray?.slice(8, 12);
	const fourthArray = numberArray?.slice(12, 16);

	const getCVVLength = () => {
		let lengthArray = [...Array(String(cvv).length).map((e, i) => "*")];
		return lengthArray;
	};

	return (
		<div className="flex justify-center credit-card-container">
			<section
				className={`flex flex-col credit-card rounded-lg ${
					!typingCVV && "px-1"
				} shadow-lg`}
			>
				{typingCVV ? (
					<div className="bg-black h-10 w-full mt-5" />
				) : (
					<div className="flex justify-between items-center text-gray-200 text-5xl mb-1 mx-3">
						<div>
							<i className="fab fa-cc-discover" />
						</div>
						<div>
							<i className="fab fa-cc-visa" />
						</div>
					</div>
				)}

				{typingCVV ? (
					<div className="bg-transparent text-right p-1 mt-3 mb-1 mx-3">
						<h6 className="text-right text-sm text-gray-100 mr-1">CVV</h6>
						<div className="bg-white w-full p-2 rounded flex justify-end items-center">
							<p className="text-xs py-1">
								{cvv &&
									getCVVLength().map((e, i) => (
										<span className="mx-1" key={i}>
											*
										</span>
									))}
							</p>
						</div>
					</div>
				) : (
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
				)}

				{typingCVV ? (
					<div className="flex justify-end items-center mx-4">
						<div className="text-gray-200 text-5xl">
							<i className="fab fa-cc-discover" />
						</div>
					</div>
				) : (
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
								{typeof month === "number"
									? String(month).padStart(2, 0)
									: "MM"}
								/{typeof year === "number" ? String(year).slice(2, 4) : "YY"}
							</p>
						</div>
					</div>
				)}
			</section>
		</div>
	);
};

export default Card;
