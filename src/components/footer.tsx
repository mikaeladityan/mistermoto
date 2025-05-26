import Link from "next/link";
import { Brand } from "./ui/brand";
import { IconBrandShopee, IconBrandYoutubeFilled } from "@tabler/icons-react";

export function Footer() {
	return (
		<footer className="w-full grid grid-cols-1 md:grid-cols-2 md:pb-10 gap-y-5 bg-gray-100 p-5" id="footer">
			<Brand className="text-center items-center" />

			<div className="text-center md:text-start flex flex-col gap-y-2 font-medium text-gray-600">
				<p>Jl Menanggal Indah 8 No. 21, Gayungan, Kota Surabaya.</p>
				<p>Jl Mutiara Gading Jaya “Ruko Unicorn No 19.20”, Tarumajaya, Kab. Bekasi.</p>
				<Link href={"https://api.whatsapp.com/send?phone=6281282345567&text=Hallo%20Mistermoto%20Indonesia"}>+62 812-8234-5567</Link>
			</div>

			<div className="flex items-center justify-center space-x-3 md:col-span-2 lg:col-span-1">
				<Link target="_blank" href={"https://www.facebook.com/setrikauaplaundrygas/"} className="flex items-center justify-center w-12 rounded-xl h-12  bg-amber-600/10">
					<svg fill="#e17100" width="25px" height="25px" viewBox="0 0 24 24" id="facebook" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" className="icon flat-color">
						<path id="primary" d="M14,6h3a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H14A5,5,0,0,0,9,7v3H7a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1H9v7a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1V14h2.22a1,1,0,0,0,1-.76l.5-2a1,1,0,0,0-1-1.24H13V7A1,1,0,0,1,14,6Z"></path>
					</svg>
				</Link>
				<Link target="_blank" href={"https://www.tiktok.com/@mistermoto.idhttps://www.tiktok.com/@mistermoto.id"} className="flex items-center justify-center w-12 rounded-xl h-12  bg-amber-600/10">
					<svg fill="#e17100" width="25px" height="25px" viewBox="0 0 24 24" id="tiktok" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" className="icon flat-color">
						<path id="primary" d="M21,7V9a1,1,0,0,1-1,1,8,8,0,0,1-4-1.08V15.5A6.5,6.5,0,1,1,6.53,9.72a1,1,0,0,1,1.47.9v2.52a.92.92,0,0,1-.28.62,2.49,2.49,0,0,0,2,4.23A2.61,2.61,0,0,0,12,15.35V3a1,1,0,0,1,1-1h2.11a1,1,0,0,1,1,.83A4,4,0,0,0,20,6,1,1,0,0,1,21,7Z"></path>
					</svg>
				</Link>
				<Link target="_blank" href="https://www.youtube.com/channel/UCF29sU5FnhkFCPVZspW94Zw" className="flex items-center justify-center w-12 rounded-xl h-12  bg-amber-600/10">
					<IconBrandYoutubeFilled className="text-amber-600" size={25} stroke={0.5} />
				</Link>
				<Link target="_blank" href="https://shope.ee/9zNVIfSJX7" className="flex items-center justify-center w-12 rounded-xl h-12  bg-amber-600/10">
					<IconBrandShopee className="text-amber-600" size={25} stroke={2} />
				</Link>
				<Link target="_blank" href="https://www.tokopedia.com/tukanglaundry/home?utm_source=salinlink&utm_medium=share&utm_campaign=Shop-5492104-654869-Halaman" className="flex items-center justify-center w-12 rounded-xl h-12  bg-amber-600/10">
					<svg width="25px" height="25px" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none">
						<path
							fill="#e17100"
							fillRule="evenodd"
							d="M96 28c-9.504 0-17.78 5.307-22.008 13.127C82.736 42.123 88.89 44 96 47.332c7.11-3.332 13.264-5.209 22.008-6.205C113.781 33.31 105.506 28 96 28Zm0-12c-15.973 0-29.568 10.117-34.754 24.28C52.932 40 42.462 40 28.53 40H28a6 6 0 0 0-6 6v124a6 6 0 0 0 6 6h92c27.614 0 50-22.386 50-50V46a6 6 0 0 0-6-6h-.531c-13.931 0-24.401 0-32.715.28C125.566 26.113 111.97 16 96 16ZM34 52.001V164h86c20.987 0 38-17.013 38-38V52.001c-18.502.009-29.622.098-37.872.966-8.692.915-13.999 2.677-21.445 6.4a6 6 0 0 1-5.366 0c-7.446-3.723-12.753-5.485-21.445-6.4-8.25-.868-19.37-.957-37.872-.966ZM50 96c0-9.941 8.059-18 18-18s18 8.059 18 18-8.059 18-18 18-18-8.059-18-18Zm18-30c-16.569 0-30 13.431-30 30 0 16.569 13.431 30 30 30 1.126 0 2.238-.062 3.332-.183l20.425 20.426a6 6 0 0 0 8.486 0l20.425-20.426c1.094.121 2.206.183 3.332.183 16.569 0 30-13.431 30-30 0-16.569-13.431-30-30-30-12.764 0-23.666 7.971-28 19.207C91.666 73.971 80.764 66 68 66Zm40.082 55.433A30.1 30.1 0 0 1 96 106.793a30.101 30.101 0 0 1-12.082 14.64L96 133.515l12.082-12.082ZM124 78c-9.941 0-18 8.059-18 18s8.059 18 18 18 18-8.059 18-18-8.059-18-18-18ZM76 96a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm48 8a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
							clipRule="evenodd"
						/>
					</svg>
				</Link>
			</div>
		</footer>
	);
}
