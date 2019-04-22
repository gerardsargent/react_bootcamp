class Hello extends React.Component {
	static defaultProps = {
		from: 'Anonymous',
		bangs: 1
	}

	render(props) {
		const { to, from, bangs, img } = this.props
		let exclamations = "!".repeat(bangs)

		return (
			<div className="Hello">
				<h1>Hello {to} from {from} {`${exclamations}`}</h1>
				<img src={img} alt="Hello" style={{maxWidth: '500px'}}/>
			</div>
		);
	}
}
