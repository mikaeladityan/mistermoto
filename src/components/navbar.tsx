"use client";
import { IconHeadset, IconHelpCircleFilled, IconHomeFilled, IconInfoCircleFilled, IconIroningSteamFilled, IconPhoneFilled } from "@tabler/icons-react";
import { Button } from "./ui/button";
import SideBar from "./ui/sidebar";
import { Brand } from "./ui/brand";
import { scrollToSection } from "~/utils/scroll";
import { JSX } from "react";
import Image from "next/image";

export interface Menu {
	title: string;
	href: string;
	icon: JSX.Element;
}
export const menuItems: Array<Menu> = [
	{ title: "Home", href: "#header", icon: <IconHomeFilled size={20} className="w-fit" /> },
	{ title: "Tentang Kami", href: "#about", icon: <IconInfoCircleFilled size={20} className="w-fit" /> },
	{ title: "Paket Pembelian", href: "#pricing", icon: <IconIroningSteamFilled size={20} className="w-fit" /> },
	{ title: "Kontak", href: "#footer", icon: <IconPhoneFilled stroke={2} size={20} className="w-fit" /> },
	{ title: "FAQ", href: "#faq", icon: <IconHelpCircleFilled size={20} className="w-fit" /> },
];
export function Navbar() {
	return (
		<nav className="sticky top-0 left-0 right-0 flex items-center justify-between gap-5 overflow-x-hidden w-full px-5 py-5 border-b border-gray-300 bg-gray-50 z-40 mx-auto md:px-10 lg:px-20">
			<div className="flex items-center justify-start gap-5 w-full">
				<SideBar menuItems={menuItems} />

				<div className="flex items-center justify-start gap-2">
					<Image src={"/brand.png"} width={2000} height={2000} alt="Mistermoto Indonesia" priority className="w-12 lg:block hidden" />
					<Brand />
				</div>
			</div>
			<div className="hidden lg:flex items-center justify-center w-full gap-x-5">
				{menuItems.map((menu, i) => (
					<button
						key={i}
						onClick={(e) => {
							scrollToSection(e, menu.href);
						}}
						className="font-semibold flex items-center justify-center gap-2 text-sm text-gray-600"
					>
						{menu.icon} <span className="w-full text-nowrap">{menu.title}</span>
					</button>
				))}
			</div>
			<div className="w-full flex items-center justify-end">
				<Button link href="https://api.whatsapp.com/send?phone=6281282345567&text=Hallo%20Mistermoto%20Indonesia" className="text-sm">
					<IconHeadset size={16} /> Hubungi Kami
				</Button>
			</div>
		</nav>
	);
}
