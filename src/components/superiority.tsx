"use client";
import { IconBoltFilled, IconChartAreaLineFilled, IconUserFilled } from "@tabler/icons-react";
import { publicSans } from "~/utils/font";
import { motion as m } from "motion/react";

const data = [
	{
		icon: <IconBoltFilled size={60} className="text-amber-200" />,
		title: "Super Cepat",
		desc: <>Selesaikan 5 kg hanya dalam 30 menit.</>,
	},
	{
		icon: <IconChartAreaLineFilled size={60} className="text-amber-200" />,
		title: "Hemat Biaya",
		desc: <>Menggunakan LPG Hemat 30% biaya operasional.</>,
	},
	{
		icon: <IconUserFilled size={60} className="text-amber-200" />,
		title: "Maksimalkan SDM",
		desc: <>Cukup 2 operator untuk setrika listrik konvensional.</>,
	},
];
export function Superiority() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 w-full">
			{data.map((d, i) => (
				<m.div initial={{ x: "-50%", opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.3 * i }} viewport={{ once: true }} className="flex items-center justify-start gap-2 border-b border-gray-300 bg-gray-100 p-5 md:border-b md:border-r md:flex-col flex-row md:items-start lg:flex-row" key={i}>
					{d.icon}
					<div className="flex flex-col">
						<h3 className={`${publicSans.className} text-xl font-bold text-amber-500 text-balance`}>{d.title}</h3>
						<p className="text-gray-500 font-medium">{d.desc}</p>
					</div>
				</m.div>
			))}
		</div>
	);
}
