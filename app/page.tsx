"use client";
import init, { add, greet } from "wasm-lib";
import { useEffect, useState } from "react";

export default function Home() {
	const [ans, setAns] = useState(0);
	const [message, setMessage] = useState("");
	useEffect(() => {
		init().then(() => {
			setMessage(greet("Hello WASM"));
		});
	});

	const handleAdd = (input: number) => {
		console.log(`input ${ans}`);
		setAns((prevState) => add(prevState, input));
	};
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<p>{message}</p>
			<p>wasm add {ans}</p>
			<button type="button" onClick={() => handleAdd(2)}>
				Add
			</button>
		</main>
	);
}
