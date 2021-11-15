import React from "react";
import styles from "./App.module.css";
// import Header from "./components/header/Header";
// import Footer from "./components/footer/Footer";
import { Header, Footer } from "./components";

const App: React.FC = () => {
	return (
		<div className={styles.App}>
			<Header></Header>
			<Footer></Footer>
		</div>
	);
};

export default App;
