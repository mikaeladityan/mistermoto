"use client";
import Image from "next/image";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "../ui/button";
import { IconCheckbox } from "@tabler/icons-react";

export function FullAutomation() {
	const [open, setOpen] = useState<string>("review");
	return (
		<div className="bg-gray-50 border border-gray-300 rounded-xl shadow-lg relative overflow-hidden">
			<div className="grid grid-cols-3 items-start">
				<div className="flex flex-col border-r border-gray-300 h-full shadow-lg bg-gray-50">
					<button type="button" onClick={() => setOpen("review")} className={twMerge(" text-start px-3 py-5 text-sm font-medium border-b", open === "review" ? "bg-white border- border-amber-500" : "bg-gray-50 border-gray-300")}>
						Produk Review
					</button>
					<button type="button" onClick={() => setOpen("detail")} className={twMerge(" text-start px-3 py-5 text-sm font-medium border-b", open === "detail" ? "bg-white border- border-amber-500" : "bg-gray-50 border-gray-300")}>
						Detail Produk
					</button>
					<button type="button" onClick={() => setOpen("specification")} className={twMerge(" text-start px-3 py-5 text-sm font-medium border-b", open === "specification" ? "bg-white border- border-amber-500" : "bg-gray-50 border-gray-300")}>
						Spesifikasi
					</button>
					<button type="button" onClick={() => setOpen("price")} className={twMerge(" text-start px-3 py-5 text-sm font-medium border-b", open === "price" ? "bg-white border- border-amber-500" : "bg-gray-50 border-gray-300")}>
						Harga Produk
					</button>
				</div>

				{open === "review" && (
					<div className="col-span-2 p-5 flex flex-col gap-y-3">
						<h4 className="font-bold md:text-sm lg:text-lg">
							Setrika Uap <br /> Boiler Full Otomatis
						</h4>
						<Image src={"/service/full-otomatis.png"} alt="Produk By Mistermoto Indonesia" width={2000} height={2000} className="w-full h-full object-center object-cover" priority />
					</div>
				)}
				{open === "detail" && (
					<div className="col-span-2 p-5 flex flex-col gap-y-3">
						<h4 className="font-bold md:text-sm lg:text-lg">
							Setrika Uap <br /> Boiler Full Otomatis
						</h4>
						<p className="text-sm text-gray-600">Air di boiler akan mengisi otomatis ketika akan habis, Api kompor akan mengecil otomatis jika tekanan naik dan membesar otomatis jika tekanan turun. Tidak repot terus-terusan mengisi air dan lebih hemat Gas LPG</p>
					</div>
				)}
				{open === "specification" && (
					<div className="col-span-2 p-5 flex flex-col gap-y-3">
						<h4 className="font-bold md:text-sm lg:text-lg">
							Setrika Uap <br /> Boiler Full Otomatis
						</h4>
						<div className="flex flex-col gap-y-1">
							<div className="flex items-start justify-start gap-2">
								<IconCheckbox size={16} className="w-fit mt-1" />
								<p className="w-full">Boiler 25 liter</p>
							</div>
							<div className="flex items-start justify-start gap-2">
								<IconCheckbox size={16} className="w-fit mt-1" />
								<p className="w-full">Include 2 setrika uap</p>
							</div>
							<div className="flex items-start justify-start gap-2">
								<IconCheckbox size={16} className="w-fit mt-1" />
								<p className="w-full">Include 10m selang high pressure</p>
							</div>
							<div className="flex items-start justify-start gap-2">
								<IconCheckbox size={16} className="w-fit mt-1" />
								<p className="w-full">Include Regulator Gas</p>
							</div>
						</div>
					</div>
				)}
				{open === "price" && (
					<div className="col-span-2 p-5 flex flex-col gap-y-3">
						<h4 className="font-bold md:text-sm lg:text-lg">
							Setrika Uap <br /> Boiler Full Otomatis
						</h4>
						<p className="font-bold text-amber-600">Rp 7.500.000</p>
						<Button link href="https://wa.me/p/6589204944454162/6281282345567" className="text-xs">
							Pesan Sekarang
						</Button>
					</div>
				)}
			</div>
		</div>
	);
}
