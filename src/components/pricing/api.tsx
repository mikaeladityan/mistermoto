"use client";
import Image from "next/image";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "../ui/button";
import { IconCheckbox } from "@tabler/icons-react";

const data = [
	{ title: "Paket A", slug: "a", image: "/service/api-a.png", spec: ["Boiler 10 liter", "Include Kompor", "Include 5m selang", "Include 1 setrika"], price: "Rp 3.000.000" },
	{ title: "Paket B", slug: "b", image: "/service/api-b.png", spec: ["Boiler 15 liter", "Include Kompor", "Include 5m selang", "Include 1 setrika"], price: "Rp 3.500.000" },
	{ title: "Paket C", slug: "c", image: "/service/api-c.png", spec: ["Boiler 15 liter", "Include Kompor", "Include 10m selang", "Include 2 setrika"], price: "Rp 4.000.000" },
	{ title: "Paket D", slug: "d", image: "/service/api-d.png", spec: ["Boiler 25 liter", "Include Kompor", "Include 10m selang", "Include 2 setrika"], price: "Rp 4.750.000" },
];
export function AutomationApi() {
	const [open, setOpen] = useState<string>("review");
	const [spec, setSpec] = useState<string>("a");
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
							Setrika Uap <br /> Boiler Otomatis Api
						</h4>
						<div className="flex items-center justify-start gap-3 overflow-x-scroll flex-nowrap">
							{data.map((d, i) => (
								<button onClick={() => setSpec(d.slug)} key={i} type="button" className={twMerge("px-4 text-xs py-1 border border-amber-600 rounded-full text-nowrap font-medium", spec === d.slug ? "bg-amber-600 text-white" : "bg-gray-50")}>
									{d.title}
								</button>
							))}
						</div>
						{data
							.filter((d) => d.slug === spec)
							.map((data, i) => (
								<Image key={i} src={data.image} alt="Produk By Mistermoto Indonesia" width={2000} height={2000} className="w-full h-full object-center object-cover" priority />
							))}
					</div>
				)}
				{open === "detail" && (
					<div className="col-span-2 p-5 flex flex-col gap-y-3">
						<h4 className="font-bold md:text-sm lg:text-lg">
							Setrika Uap <br /> Boiler Otomatis Api
						</h4>
						<p className="text-sm text-gray-600">Api kompor akan mengecil otomatis jika tekanan naik dan membesar otomatis jika tekanan turun. Sistem otomatis membuat penggunaan Gas lebih hemat & Efisien</p>
					</div>
				)}
				{open === "specification" && (
					<div className="col-span-2 p-5 flex flex-col gap-y-3">
						<h4 className="font-bold md:text-sm lg:text-lg">
							Setrika Uap <br /> Boiler Otomatis Api
						</h4>
						<div className="flex items-center justify-start gap-3 overflow-x-scroll flex-nowrap">
							{data.map((d, i) => (
								<button onClick={() => setSpec(d.slug)} key={i} type="button" className={twMerge("px-4 text-xs py-1 border border-amber-600 rounded-full text-nowrap font-medium", spec === d.slug ? "bg-amber-600 text-white" : "bg-gray-50")}>
									{d.title}
								</button>
							))}
						</div>
						<div className="flex flex-col gap-y-1">
							{data
								.filter((d) => d.slug === spec)
								.map((data, i) => (
									<React.Fragment key={i}>
										{data.spec.map((spec, i) => (
											<div key={i} className="flex items-start justify-start gap-2">
												<IconCheckbox size={16} className="w-fit mt-1" />
												<p className="w-full">{spec}</p>
											</div>
										))}
									</React.Fragment>
								))}
						</div>
					</div>
				)}
				{open === "price" && (
					<div className="col-span-2 p-5 flex flex-col gap-y-3">
						<h4 className="font-bold md:text-sm lg:text-lg">
							Setrika Uap <br /> Boiler Otomatis Api
						</h4>
						<div className="flex items-center justify-start gap-3 overflow-x-scroll flex-nowrap">
							{data.map((d, i) => (
								<button onClick={() => setSpec(d.slug)} key={i} type="button" className={twMerge("px-4 text-xs py-1 border border-amber-600 rounded-full text-nowrap font-medium", spec === d.slug ? "bg-amber-600 text-white" : "bg-gray-50")}>
									{d.title}
								</button>
							))}
						</div>
						{data
							.filter((d) => d.slug === spec)
							.map((data, i) => (
								<p className="font-bold text-amber-600" key={i}>
									{data.price}
								</p>
							))}

						<Button link href="https://wa.me/p/6514901155252444/6281282345567" className="text-xs">
							Pesan Sekarang
						</Button>
					</div>
				)}
			</div>
		</div>
	);
}
