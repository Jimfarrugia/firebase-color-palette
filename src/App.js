import { useEffect, useState } from "react";
import { collection, onSnapshot, addDoc } from "@firebase/firestore";
import db from "./firebase";

function App() {
	const [colors, setColors] = useState([]);

	const handleNewColor = async () => {
		const colorsCollection = collection(db, "colors");
		const payload = { name: "cyan", value: "#0ff" };
		await addDoc(colorsCollection, payload);
	};

	useEffect(
		() =>
			onSnapshot(collection(db, "colors"), snapshot =>
				setColors(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
			),
		[]
	);

	return (
		<div className="App">
			<button className="button" onClick={handleNewColor}>
				New
			</button>
			<ul>
				{colors &&
					colors.length > 0 &&
					colors.map(color => (
						<li key={color.id}>
							<button>edit</button>
							&nbsp;
							<strong style={{ color: color.value }}>
								{color.name.toUpperCase()}
							</strong>
						</li>
					))}
			</ul>
		</div>
	);
}

export default App;
