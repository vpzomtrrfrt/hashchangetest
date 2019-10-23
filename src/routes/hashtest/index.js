import { h, Component } from "preact";

export default class HashTest extends Component {
	updateHash = () => {
		this.setState({hash: location.hash});
	};

	componentDidMount() {
		window.addEventListener("hashchange", this.updateHash);
		this.updateHash();
	}

	componentWillUnmount() {
		window.removeEventListener("hashchange", this.updateHash);
	}

	render({}, {hash}) {
		return <div>
			<h1>Hash Link Test</h1>
			<p><a href="#bare">Fragment link</a></p>
			<p><a href="/hashtest#relative">Relative link</a></p>
			<p>The hash is: {hash}</p>
		</div>;
	}
}
