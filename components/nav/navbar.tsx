"use client";
import Link from "next/link";
import { Logo } from "../logo";
import { NavItems } from "./navItems";
import { useState } from "react";
import { MobileNavbar } from "./mobileNavbar";
import { Theme } from "../interfaces/themes";
import Image from "next/image";

interface item {
	textContent: string;
	url: string;
}

export const linksItems: item[] = [
	{ textContent: "accueil", url: "/" },
	{ textContent: "projets", url: "/#projects" },
	{textContent:"apprentissages",url:"/apprentissages"},
	{ textContent: "contact", url: "/contact" }
];

export const Navbar: React.FC = () => {
	const [display, setDisplay] = useState<boolean>(false);
	const blurDisplay = display ? "block" : "none";
	
  return (
		<header className="mt-4 py-[var(--spacing-md)] rounded-[12px] mx-auto max-w-[1500px] z-10 section-padding" id="header">
			<div
				className="blur-overlay z-50 hidden absolute top-0 left-0 h-full w-full bg-[rgba(255,255,255,0.1)] backdrop-blur-[4px]"
				style={{
					display: display ? "block" : "none",
				}}></div>
			<nav className="nav w-full flex items-center justify-between">
				<Logo theme={Theme.LIGHT}></Logo>
				<NavItems items={linksItems}></NavItems>
				<Link
					className="link mail"
					href="mailto:hello.nagelkilian@gmail.com">
					hello.nagelkilian@gmail.com
				</Link>
				<Image
					width={20}
					height={20}
					id="toggleMenu"
					src="/media/icones/bars-white.svg"
					onClick={() => {
						setDisplay(true);
					}}
					alt="icone menu"
					style={{ width: "20px", height: "20px" }}></Image>
				<MobileNavbar display={display} setDisplay={setDisplay} />
			</nav>
		</header>
	);
};
