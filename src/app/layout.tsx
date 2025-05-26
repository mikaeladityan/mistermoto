import type { Metadata, Viewport } from "next";
import "./globals.css";
import { quicksand } from "~/utils/font";
import { Provider } from "jotai";

export const metadata: Metadata = {
	title: "Setrika Uap Laundary Profesional - Mistermoto",
	description: "Mistermoto menjual Setrika Uap Laundry dan Meja Setrika Uap terbaik. Tanpa listrik, hemat gas, dan hasil rapi. Cocok untuk pengusaha laundry & konveksi.",
	keywords: ["setrika uap gas", "mesin setrika laundry profesional", "setrika industri hemat energi", "boiler setrika otomatis"],
	openGraph: {
		title: "Setrika Uap Gas Mistermoto – 25 Detik Rapi, Tanpa Listrik",
		description: "Mesin setrika laundry profesional yang pangkas biaya hingga 30% dan percepat proses hingga 2× lipat. Order paket Anda sekarang!",
	},
	icons: {
		icon: "/favicon.ico",
		apple: "/apple-icon.png",
		shortcut: "/favicon.ico",
		other: [
			{
				rel: "mask-icon",
				url: "/icon0.svg",
				color: "#ffffff",
			},
		],
	},
	manifest: "/manifest.json",
	authors: {
		name: "Mikael Aditya Nugroho",
		url: "https://instagram.com/mikaeladityan",
	},
};

export const viewport: Viewport = {
	themeColor: "white",
	colorScheme: "normal",
	width: "device-width",
	initialScale: 1.0,
};
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`antialiased ${quicksand.className} bg-gray-50 scroll-smooth`}>
				<Provider>{children}</Provider>
			</body>
		</html>
	);
}
