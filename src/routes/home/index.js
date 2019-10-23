import { h } from 'preact';
import style from './style';

const Home = () => (
	<div class={style.home}>
		<h1>Home</h1>
		<p>This is the Home component.</p>
		<p>
			<a href="/hashtest#initial">Hashtest</a>
		</p>
	</div>
);

export default Home;
