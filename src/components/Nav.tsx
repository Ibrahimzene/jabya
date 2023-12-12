"use client";
import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation";

export const Nav = () => {
	const activeSegment = useSelectedLayoutSegment();
	
	return (
		<nav>
			<ul className="flex gap-4 bg-slate-700 text-white p-2 font-semibold rounded mb-4">
				<li>
					<Link href="/"
					className={activeSegment === '(welcome)' ? "text-yellow-200" : ""}
					>Welcome</Link>
				</li>
				<li>
					<Link href="/techskills"
					className={activeSegment === 'techskills' ? "text-yellow-200" : ""}
					>Tech Skills</Link>
				</li>
				<li>
					<Link href="/techbooks"
					className={activeSegment === 'techbooks' ? "text-yellow-200" : ""}
					>Tech Books</Link>
				</li>
			</ul>
		</nav>
	)
}