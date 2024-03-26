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
	{ textContent: "biographie", url: "/#biographie" },
	{ textContent: "projets", url: "/" },
];

export function enableScroll() {
	// Enable scrolling (to re-enable scrolling)
	document.body.style.overflow = "";
	// or
	document.documentElement.style.overflow = "";
}

export function disableScroll() {
	// Disable scrolling
	document.body.style.overflow = "hidden";
	// or
	document.documentElement.style.overflow = "hidden";
}

export const Navbar: React.FC = () => {
	const [display, setDisplay] = useState<boolean>(false);
	const blurDisplay = display ? "block" : "none";
	if (display) {
		disableScroll();
	} else {
		enableScroll();
	}
	return (
		<header id="header">
			<div
				className="blur-overlay"
				style={{
					display: display ? "block" : "none",
				}}></div>
			<nav className="nav">
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
