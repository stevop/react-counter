import "./ResetButton.css";

const ResetButton = (props) => {
	return (
		<button
			className="btn"
			type="button"
			onClick={props.reset}>
			Reset
		</button>
	);
};

export default ResetButton;
