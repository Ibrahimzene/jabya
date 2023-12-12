"use client";
import { AppContext } from "@/AppContext";
import Image from "next/image";
import { useContext } from "react";

export default function PageTechBooks() {
	const { techBooks } = useContext(AppContext);

	return (
		<>
			<p className="mb-4">There are {techBooks.length} tech books:</p>
			{techBooks.map((techBook) => {
				return (
					<div className="mb-3 flex gap-3 w-[40rem]" key={techBook.id}>
					<Image className="v-40 h-fit" src={`/images/techBooks/${techBook.idCode}.jpg`} alt="book" width="100" height="100"/>
						<div>
							<p className="font-bold text-xl">
								{techBook.title}
							</p>
							<p className="italic">{techBook.description}</p>
						</div>
					</div>
				);
			})}
		</>
	);
}