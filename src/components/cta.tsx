import { IconHeadset } from "@tabler/icons-react";
import { Button } from "./ui/button";
import { VideoComponent } from "./ui/video";

export function CTA() {
	return (
		<section className="w-full p-5 mx-auto bg-gray-50 md:px-20 md:py-10 lg:px-40">
			<div className="bg-white rounded-xl border border-gray-300 p-5 flex lg:gap-20 shadow lg:flex-row flex-col gap-y-5 ">
				<div className="flex flex-col gap-y-3">
					<div className="w-2/12 bg-amber-200 h-[1px]" />
					<h4 className="text-amber-600 text-lg font-bold">Siap Naik Level dengan Setrika Uap Laundry Terbaik?</h4>
					<p className="text-sm text-gray-600">Mulai ubah cara kerja laundry Anda dengan teknologi setrika uap hemat energi, tanpa listrik, dan hasil lebih rapi. Dapatkan solusi terbaik untuk efisiensi operasional dan kepuasan pelanggan.</p>
					<Button href="https://api.whatsapp.com/send?phone=6281282345567" link className="text-xs">
						Bergabunglah Bersama Kami <IconHeadset size={16} />
					</Button>
				</div>
				<VideoComponent src="https://www.youtube.com/embed/uFuFrkmA394?si=27BDdLmbG8CHrPRj" />
			</div>
		</section>
	);
}
