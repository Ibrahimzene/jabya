"use client";
import { AppContext } from "@/AppContext";
import { useContext } from "react";

export default function PageWelcome() {
	const { welcomeMessage } = useContext(AppContext);
	return (
		<main>
			<p>{welcomeMessage}</p>
		</main>
	);
}