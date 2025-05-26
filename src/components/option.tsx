import Image from "next/image";
import { JSX } from "react";
import { publicSans } from "~/utils/font";
import { ButtonOption } from "./option/button.option";
import { ContentOption } from "./option/content.option";
import { Button } from "./ui/button";
export interface Option {
	title: string;
	slug: string;
	description: JSX.Element;
	image: string;
}
const data: Array<Option> = [
	{
		title: "Full Otomatis",
		slug: "full-otomatis",
		description: (
			<div className="flex flex-col gap-y-3">
				<b>Boiler Full Otomatis</b> <p>Air terisi otomatis melalui pompa, dan api kompor menyesuaikan tekanan uap. Cocok untuk pemakaian 24 jam nonstop</p>
			</div>
		),
		image: "/images/image-01.jpg",
	},
	{
		title: "Otomatis Api",
		slug: "otomatis-api",
		description: (
			<div className="flex flex-col gap-y-3">
				<b>Boiler Otomatis Api</b> <p>Api akan mengecil otomatis saat tekanan tinggi, dan membesar saat tekanan turun. Efisiensi gas maksimal, cocok untuk usaha menengah.</p>
			</div>
		),
		image: "/images/image-02.jpg",
	},
	{
		title: "Manual",
		slug: "manual",
		description: (
			<div className="flex flex-col gap-y-3">
				<b>Boiler Manual</b> <p>Pengaturan api sepenuhnya manual via knob. Pilihan ekonomis untuk pemula.</p>
			</div>
		),
		image: "/images/image-03.jpg",
	},
];

export const Option = () => {
	return (
		<section className="w-full mx-auto px-5 relative flex flex-col gap-y-5 md:gap-y-10 overflow-x-hidden md:w-10/12">
			<Image alt="element" width={2000} height={2000} src="/element/effect.svg" className="absolute z-[-1] top-5 left-10 w-fit md:left-32 lg:left-60 lg:top-2 md:top-0" priority />
			<div className="flex flex-col gap-y-2">
				<h5 className={`${publicSans.className} uppercase text-amber-600 text-xs text-center font-bold`}>Jenis Produk</h5>
				<h3 className={`${publicSans.className} font-bold text-2xl text-center w-9/12 md:w-8/12 mx-auto`}>Pilihan Setrika Uap Sesuai Kebutuhan Anda</h3>
				<p className="text-center text-sm w-10/12 md:w-10/12 mx-auto text-balance">Tersedia 3 Jenis Boiler Mistermoto dan Sesuaikan dengan Skala Usaha Anda</p>
			</div>

			<div className="flex items-center justify-start gap-5 overflow-x-scroll flex-nowrap relative z-[1] md:hidden">
				{data.map((d, i) => (
					<ButtonOption slug={d.slug} title={d.title} key={i} />
				))}
			</div>
			<div className="grid grid-cols-5 bg-gray-50 border border-gray-200 rounded-xl shadow-lg overflow-hidden w-full lg:w-9/12 mx-auto">
				<div className="md:flex flex-col items-star border-r border-gray-200 hidden">
					{data.map((d, i) => (
						<ButtonOption className={`p-5 w-full text-start rounded-none border-b-gray-300 border-t-0 border-x-0`} slug={d.slug} title={d.title} key={i} />
					))}
				</div>
				<div className="col-span-5 md:col-span-4 p-5">
					<ContentOption data={data} />
				</div>
			</div>
			<Button className="mx-auto" link href="https://api.whatsapp.com/send?phone=6281282345567">
				Konsultasi & Pesan
			</Button>
		</section>
	);
};
