import "./IncreaseButton.css";
import { useState } from "react";

const IncreaseButton = (props) => {
	return (
		<button
			className="btn"
			type="button"
			onClick={props.increase}>
			Zvýšiť o 1
		</button>
	);
};

export default IncreaseButton;
