"use client";

import { scrollToSection } from "~/utils/scroll";
import { IconCircleFilled } from "@tabler/icons-react";
import { motion as m } from "motion/react";

export const PackageButton = () => (
	<m.button initial={{ opacity: 0, y: "-50%" }} animate={{ opacity: 1, y: 0 }} onClick={() => scrollToSection("#")} className="px-3 w-fit bg-amber-100 rounded-full py-1.5 text-sm font-bold flex items-center justify-start gap-2 text-gray-500 overflow-hidden">
		<div className="relative">
			<IconCircleFilled size={14} className="text-amber-500" />
			<IconCircleFilled size={14} className="text-amber-500 border border-amber-400 rounded-full animate-ping absolute top-0  z-[5]" />
		</div>
		Paket Setrika Full Otomatis
	</m.button>
);
