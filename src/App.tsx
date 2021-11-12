import logo from "./logo.svg";
import styles from "./App.css";

function App() {
	return (
		<div className={styles.App}>
			<header className={styles["App-header"]}>
				<img src={logo} className={styles["App-logo"]} alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					初始化配置
				</a>
			</header>
		</div>
	);
}

export default App;