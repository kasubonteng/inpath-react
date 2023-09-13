import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/navbar";
import { Tabs } from "./components/ui/Tabs";

function App() {
	return (
		<main className="font-normal ">
			<Tabs />
			<Navbar />
			<Hero />
		</main>
	);
}

export default App;
