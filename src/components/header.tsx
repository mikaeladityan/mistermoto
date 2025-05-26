"use client";
import { publicSans } from "~/utils/font";
import { Button } from "./ui/button";
import { Suspense } from "react";
import { VideoComponent } from "./ui/video";
import { PackageButton } from "./ui/package";
import Image from "next/image";
import { scrollToSection } from "~/utils/scroll";

export function Header() {
	return (
		<header className="w-full md:w-10/12 mx-auto max-w-screen min-h-[80svh] items-center gap-y-5 pt-14 pb-5 px-5 justify-between relative grid grid-cols-1 lg:grid-cols-2" id="header">
			<div className="flex flex-col gap-y-5">
				<Image alt="element" width={2000} height={2000} src="/element/effect.svg" className="absolute -z-[1] top-10 left-10 w-fit md:top-28 md:left-36 lg:top-60 lg:left-0" priority />
				<div className="flex flex-col gap-y-5 items-center lg:items-start">
					<PackageButton />
					<h1 className={`${publicSans.className} w-full mx-auto text-gray-800 font-[800] text-2xl text-center lg:text-start leading-relaxed`}>
						Setrika Uap Laundry: <br /> 25 Detik Rapi, Tanpa Listrik
					</h1>
					<h2 className="text-center lg:text-start text-gray-600 font-semibold">Kinerja 2× lebih cepat dan biaya 30% lebih hemat untuk usaha laundry maupun konveksi profesional.</h2>
				</div>
				<div className="flex items-center justify-center lg:justify-start gap-5 w-full">
					<Button className="bg-gray-50 text-amber-600" link href="https://api.whatsapp.com/send?phone=6281282345567&text=Saya%20mau%20konsultasi%20Setrika%20Uap%20Boiler">
						Konsultasi Gratis
					</Button>
					<Button onClick={(e) => scrollToSection(e, "#pricing")}>Pesan Sekarang!</Button>
				</div>
			</div>

			<Suspense fallback={<span>Loading...</span>}>
				<VideoComponent className="rounded-3xl shadow border border-gray-300" src="https://www.youtube.com/embed/tn0e_nUlqds?si=Hls3YsBL4Bdb5kAB" />
			</Suspense>
			<Image alt="element" width={2000} height={2000} src="/element/effect.svg" className="absolute -z-[1] top-52 right-20 md:top-64 md:right-32 lg:top-20 lg:right-10 w-fit" priority />
		</header>
	);
}
