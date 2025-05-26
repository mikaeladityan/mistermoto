import { VideoComponent } from "./ui/video";

const data: string[] = ["Setrika yang menggunakan tekanan uap panas dari proses pemanasan air (menggunakan tabung boiler) dengan Gas LPG", "Setrika uap gas/boiler ini tidak menggunakan listrik sama sekali", "Mudah dioperasikan dan menghemat waktu", "Dapat digunakan untuk semua jenis bahan kain", "Setrika yang tidak lengket dan tidak akan gosong"];
export const About = () => (
	<section className="w-full md:w-10/12 grid grid-cols-1 md:items-start md:grid-cols-2 md:gap-x-5 gap-y-5 p-5 mx-auto md:mt-10 lg:gap-x-20" id="about">
		<div className="flex flex-col gap-y-2 col-span-2 md:col-span-1">
			<h3 className="font-bold text-xl">Kenalan dengan Mistermoto</h3>
			<p className="text-sm tracking-wide">Bingung memilih antara setrika listrik biasa atau setrika uap gas? Lihat perbandingannya secara langsung dan temukan solusi terbaik untuk efisiensi waktu dan biaya operasional bisnis laundry atau konveksi Anda.</p>
			<div className="hidden flex-col gap-y-1 col-span-2 lg:flex">
				{data.map((d, i) => (
					<p key={i} className="text-sm py-2 border-b border-gray-300 tracking-wider flex gap-2 items-start justify-start">
						{i + 1}. <span>{d}</span>
					</p>
				))}
			</div>
		</div>

		<VideoComponent src="https://www.youtube.com/embed/kLH0QF3EnCQ?si=HIslnrvb9RGtPw3v" className="shadow-lg p-2 bg-gray-50 rounded-lg h-72" />

		<div className="flex flex-col gap-y-1 col-span-2 lg:hidden">
			{data.map((d, i) => (
				<p key={i} className="text-sm py-2 border-b border-gray-300 tracking-wider flex gap-2 items-start justify-start">
					{i + 1}.
					<span>
						{d} {d}
					</span>
				</p>
			))}
		</div>
	</section>
);
