import { Component, h, render } from "preact";
import { Router } from "preact-router";

function MainPage() {
	console.log("rdsd");
	return <div>
		<p><a href="/hashtest">To hashtest (root-relative)</a></p>
	</div>;
}

class TestPage extends Component {
	render(props, state) {
		return <div>
			<p>hash is {state.hash}</p>
			<p><a href="#something">Hash Link</a></p>
			<p><a href="./hashtest#third">Relative link</a></p>
			<p><a href="/hashtest#another">Root-relative link</a></p>
		</div>;
	}

	componentDidMount() {
		this.setState({hash: location.hash});

		window.addEventListener("hashchange", () => {
			console.log("got hashchange", location.hash);
			this.setState({hash: location.hash});
		});
	}
}

function App() {
	return <Router>
		<MainPage path="/" />
		<TestPage path="/hashtest" />
		<div default>Not Found</div>
	</Router>;
}

render(<App />, document.getElementById("container"));
