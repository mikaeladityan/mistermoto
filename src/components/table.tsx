import { IconCheck } from "@tabler/icons-react";
import { publicSans } from "~/utils/font";
import { VideoComponent } from "./ui/video";
const data = ["Desain anti panas", "Penyaluran uap optimal langsung ke pakaian", "Bongkar pasang praktis"];
export function Table() {
	return (
		<section className="w-full mx-auto p-5 bg-amber-50 md:px-20 grid grid-cols-1 md:grid-cols-2 md:gap-x-10 lg:px-40">
			<div>
				<h3 className={`${publicSans.className} text-xl font-bold`}>Meja Setrika Uap Premium</h3>
				<h4 className="font-semibold text-gray-600">Hasil Maksimal, Lebih Nyaman</h4>

				<div className="flex flex-col gap-y-1 my-5">
					{data.map((data, i) => (
						<p key={i} className="flex items-start justify-start gap-2">
							<IconCheck size={25} stroke={2} className="w-fit" /> <span className="w-full">{data}</span>
						</p>
					))}
				</div>
			</div>

			<VideoComponent src="https://is3.cloudhost.id/s3-assets/mistermoto.id/table.mp4" video={true} />
		</section>
	);
}
