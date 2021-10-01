function App() {
	return (
		<div className="App">
			<button className="button">New</button>
			<ul>
				<li>
					<a href="#">edit</a>
					&nbsp;
					<strong style={{ color: "#f00" }}>RED</strong>
				</li>
				<li>
					<a href="#">edit</a>
					&nbsp;
					<strong style={{ color: "#0f0" }}>GREEN</strong>
				</li>
				<li>
					<a href="#">edit</a>
					&nbsp;
					<strong style={{ color: "#00f" }}>BLUE</strong>
				</li>
			</ul>
		</div>
	);
}

export default App;
