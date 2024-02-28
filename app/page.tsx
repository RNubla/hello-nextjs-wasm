"use client";
import init, { add } from "wasm-lib";
import { useEffect, useState } from "react";

export default function Home() {
	const [ans, setAns] = useState(0);
	useEffect(() => {
		init().then(() => {
			setAns(add(1, 1));
		});
	});
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<p>wasm add {ans}</p>
		</main>
	);
}
