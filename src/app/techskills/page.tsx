"use client";
import { AppContext } from "@/AppContext";
import Link from "next/link";
import { useContext } from "react";

export default function PageTechSkills() {
	const { techSkills } = useContext(AppContext);

	return (
		<>
			<p>There are {techSkills.length} tech skills.</p>
			<ul className="list-disc ml-6 mt-4">
				{techSkills.map((techSkill) => {
					return (
						<li key={techSkill.id}>
							<Link href={`/techskills/${techSkill.id}`}>
								{techSkill.name}
							</Link>
						</li>
					);
				})}
			</ul>
		</>
	);
}