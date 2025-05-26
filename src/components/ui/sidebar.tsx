"use client";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { motion as m, AnimatePresence } from "motion/react";
import { Brand } from "./brand";
import { Button } from "./button";
import { scrollToSection } from "~/utils/scroll";
import { Menu } from "../navbar";

export default function SideBar({ menuItems }: { menuItems: Menu[] }) {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	return (
		<>
			<button onClick={() => setSidebarOpen(true)} aria-label="Open menu" className=" p-2 bg-gray-50 border border-gray-300 rounded-full shadow-lg lg:hidden block">
				<IconMenu2 size={24} stroke={1.5} className="text-amber-500" />
			</button>

			<AnimatePresence>
				{sidebarOpen && (
					<>
						<m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40" onClick={() => setSidebarOpen(false)} />

						<m.aside initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }} transition={{ type: "spring", stiffness: 300, damping: 30 }} className="fixed top-0 left-0 bottom-0 w-8/12 bg-gray-100 shadow-lg z-50 p-6 flex flex-col gap-y-5">
							<div className="flex items-center justify-between">
								<Brand />
								<button onClick={() => setSidebarOpen(false)} aria-label="Close menu" className="p-1">
									<IconX size={24} stroke={1.5} className="text-gray-700" />
								</button>
							</div>

							<nav className="flex-1 flex flex-col gap-5 mt-6 ms-3">
								{menuItems.map((item) => (
									<button
										key={item.href}
										onClick={(e) => {
											scrollToSection(e, item.href);
											setSidebarOpen(false);
										}}
										className="flex items-center gap-2 text-sm font-extrabold text-black hover:text-amber-500 transition-colors"
									>
										<span className="text-gray-500">{item.icon}</span>
										{item.title}
									</button>
								))}
							</nav>

							<div className="mt-auto">
								<Button className="w-full mt-1">Hubungi Kami</Button>
							</div>
						</m.aside>
					</>
				)}
			</AnimatePresence>
		</>
	);
}
