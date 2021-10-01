import { useEffect, useState } from "react";
import { collection, onSnapshot } from "@firebase/firestore";
import db from "./firebase";

function App() {
	const [colors, setColors] = useState([]);

	useEffect(
		() =>
			onSnapshot(collection(db, "colors"), snapshot =>
				setColors(snapshot.docs.map(doc => doc.data()))
			),
		[]
	);

	return (
		<div className="App">
			<button className="button">New</button>
			<ul>
				{colors &&
					colors.length > 0 &&
					colors.map((color, i) => (
						<li key={i}>
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
