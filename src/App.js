import DecreaseButton from "./components/DecreaseButton";
import IncreaseButton from "./components/IncreaseButton";
import ResetButton from "./components/ResetButton";
import { useState } from "react";

const App = () => {
	const [value, setValue] = useState(0);
	const decreaseByOne = () => {
		const newValue = value - 1;
		setValue(newValue);
	};
	const increaseByOne = () => {
		const newValue = value + 1;
		setValue(newValue);
	};
	const reset = () => {
		setValue(0);
	};

	return (
		<div className="App">
			<h1>Počítadlo</h1>
			<h2>{value}</h2>
			<DecreaseButton decrease={decreaseByOne} />
			<IncreaseButton increase={increaseByOne} />
			<ResetButton reset={reset} />
		</div>
	);
};

export default App;
