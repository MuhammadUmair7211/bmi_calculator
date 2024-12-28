import React, { useState } from "react";

const Calculator = () => {
	const [weight, setWeight] = useState("");
	const [height, setHeight] = useState("");
	const [bmi, setBmi] = useState("");
	const [health, setHealth] = useState("");

	const calculateBmi = () => {
		if (!weight && !height) {
			{
				alert("Please Enter Weight and Height");
			}
		} else {
			let value = weight / (height * height);
			setBmi(value.toFixed(3));

			if (value > 18.5 && value < 24.5) {
				setHealth("Normal Weight");
			} else if (value <= 18.5) {
				setHealth("Underweight");
			} else if (value > 25 && value < 29.9) {
				setHealth("Overweight");
			} else if (value > 30) {
				setHealth("Obesity");
			}
		}
	};

	return (
		<div className="w-[400px] bg-white text-black px-6 py-8 mt-6 rounded-lg">
			<h1 className="text-red-600 font-bold text-lg text-center">
				BMI Calculator
			</h1>
			<form
				className="flex flex-col mt-6"
				onSubmit={(e) => {
					e.preventDefault();
				}}
			>
				<label htmlFor="" className="mt-2">
					Weight (kg)
				</label>
				<input
					type="number"
					placeholder="Enter Weight"
					value={weight}
					className="border w-full p-2 outline-none"
					onChange={(e) => {
						setWeight(e.target.value);
					}}
				/>
				<label htmlFor="" className="mt-4">
					Height (m)
				</label>
				<input
					type="number"
					placeholder="Enter Height"
					className="border w-full p-2 outline-none"
					value={height}
					onChange={(e) => {
						setHeight(e.target.value);
					}}
				/>
				<button
					onClick={calculateBmi}
					className="bg-red-600 text-white hover:bg-red-700 transition-all py-2 mt-6"
				>
					Calculate
				</button>
				<div className="mt-8">Result: {bmi}</div>
				<p>{health}</p>
			</form>
		</div>
	);
};

export default Calculator;
