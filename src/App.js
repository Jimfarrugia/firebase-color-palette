import { useEffect } from "react";
import { collection, onSnapshot } from "@firebase/firestore";
import db from "./firebase";

function App() {
	useEffect(() => {
		onSnapshot(collection(db, "colors"), snapshot => {
			console.log(snapshot.docs.map(doc => doc.data()));
		});
	});

	return (
		<div className="App">
			<button className="button">New</button>
			<ul>
				<li>
					<button>edit</button>
					&nbsp;
					<strong style={{ color: "#f00" }}>RED</strong>
				</li>
				<li>
					<button>edit</button>
					&nbsp;
					<strong style={{ color: "#0f0" }}>GREEN</strong>
				</li>
				<li>
					<button>edit</button>
					&nbsp;
					<strong style={{ color: "#00f" }}>BLUE</strong>
				</li>
			</ul>
		</div>
	);
}

export default App;
