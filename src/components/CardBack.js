import React from "react";

const Card = ({ cvv }) => {
	const getCVVLength = () => {
		let lengthArray = [...Array(String(cvv).length).map((e, i) => "*")];
		return lengthArray;
	};

	return (
		<div className="flex justify-center">
			<section
				className={`flex flex-col credit-card rounded-lg px-1 shadow-lg`}
			>
				<div className="bg-black h-10 w-full mt-5" />

				
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

					<div className="flex justify-end items-center mx-4">
						<div className="text-gray-200 text-5xl">
							<i className="fab fa-cc-discover" />
						</div>
					</div>
			</section>
		</div>
	);
};

export default Card;
