function getNum() {
	return Math.floor(Math.random() * 10 + 1)
}

class GetNum extends React.Component {
	render() {
		const num = getNum()

		return (
			<div>
				<h1>Your random number is... {num}</h1>
				<p>{num === 7 ? `Congratulations!` : `Try again - you need 7`}</p>
			</div>
		);
	}
}
