"use client";
import React, { useEffect } from "react";
import Link from "next/link"

const footerLinks = [
	{
		sectionTitle: "Contact",
		links: [
			{
				text: "email",
				url: "mailto:nagelkilian05@gmail.com",
				ariaText: "me contacter par email",
			},
			{
				text: "github",
				url: "https://github.com/kilian-nagel",
				ariaText: "se rendre sur ma page github",
			},
			{
				text: "linkedIn",
				url: "https://fr.linkedin.com/in/kilian-nagel",
				ariaText: "se rendre sur ma page linkedIn",
			},
		],
	},
	{
		sectionTitle: "Navigation",
		links: [
			{
				text: "biographie",
				url: "/#biographie",
				ariaText: "se rendre sur la partie biographie",
			},
			{
				text: "projets",
				url: "/#projects",
				ariaText: "se rendre sur la page projets",
			},
			{
				text: "projet professionnel",
				url: "/#projet-professionnel",
				ariaText: "se rendre sur la page projet professionnel",
			},
			{
				text: "expériences",
				url: "/experiences",
				ariaText: "se rendre sur la page expériences",
			},
		],
	},
];

export const Footer: React.FC = () => {
    useEffect(() => {
        const updateTime = () => {
          const now = new Date();
          const hours = String(now.getHours()).padStart(2, "0");
          const minutes = String(now.getMinutes()).padStart(2, "0");

          let hour_element = document.getElementById("time");
          if(hour_element){
            hour_element.innerText = `${hours}:${minutes}`
          }
        };

        // Initial call to set the time immediately
        updateTime();

        // Update the time every 5 seconds
        const interval = setInterval(updateTime, 5000);

        // Cleanup interval on unmount
        return () => clearInterval(interval);
    }, []);

	return (
		<footer className="mt-20 border-none">
            <div className="bg-cover bg-center"> 
                  <main className="py-10 section-padding flex justify-between items-end">
                    <div>
                                <h3 className="text-6xl font-black pb-4">Collaborons <br/>ensemble pour un projet.</h3>

                        <div className="flex items-center gap-5"> 
                            <ul style={{ listStyleType: "none" }} className="flex gap-3">
                                    {footerLinks[0].links.map((item, index) => (
                                        <Link href={item.url} key={index}>{item.text}</Link>
                                    ))}
                            </ul>
                            <div className="mt-1 w-[5px] h-[5px] rounded-full bg-white"></div>
                            <ul style={{ listStyleType: "none" }} className="flex gap-3">
                                    {footerLinks[1].links.map((item, index) => (
                                        <Link href={item.url} key={index}>{item.text}</Link>
                                    ))}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <p className="leading-[14px]" id="time">18:24</p> 
                        <p>France</p> 
                    </div>
                  </main>
            </div>
		</footer>
	);
};
