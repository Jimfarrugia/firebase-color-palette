import { useEffect, useState } from "react";
import { collection, onSnapshot } from "@firebase/firestore";
import db from "./firebase";

function App() {
	const [colors, setColors] = useState([]);
	// console.log(colors);

	useEffect(
		() =>
			onSnapshot(collection(db, "colors"), snapshot =>
				setColors(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
			),
		[]
	);

	return (
		<div className="App">
			<button className="button">New</button>
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
