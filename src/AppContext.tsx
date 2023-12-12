"use client";
import { createContext, useEffect, useState } from "react";
import { ITechBook, ITechSkill } from "./interfaces";
import axios from "axios";

interface IAppContext {
	welcomeMessage: string;
	techSkills: ITechSkill[];
	techBooks: ITechBook[];
}

interface IAppProvider {
	children: React.ReactNode;
}

const techSkillsUrl =
	"https://edwardtanguay.vercel.app/share/skills_with_id.json";
const techBooksUrl = 'https://edwardtanguay.vercel.app/share/techBooks.json';
const welcomeMessage = "Welcome to this tech site.";

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const [techSkills, setTechSkills] = useState<ITechSkill[]>([]);
	const [techBooks, setTechBooks] = useState<ITechBook[]>([]);

	useEffect(() => {
		(async () => {
			const response = await axios.get(techSkillsUrl);
			const _techSkills = response.data;
			setTechSkills(_techSkills);
		})();
	}, []);

	useEffect(() => {
		(async () => {
			const response = await axios.get(techBooksUrl);
			const _techBooks = response.data;
			setTechBooks(_techBooks);
		})();
	}, []);

	return (
		<AppContext.Provider
			value={{
				welcomeMessage,
				techSkills,
				techBooks
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
