import { publicSans } from "~/utils/font";

export function Review() {
	return (
		<section className="px-5 w-full mx-auto relative md:w-10/12">
			<div className="bg-gray-100/80 flex items-center justify-center w-72 h-56 rounded-xl absolute -z-[1] -top-5 left-0" />
			<h3 className={`${publicSans.className} text-center text-2xl font-bold`}>Our Happy Clients</h3>
			<p className="text-gray-600 text-sm font-medium text-center md:w-9/12 mx-auto lg:w-7/12">Kami mengutamakan kepuasaan pelanggan dan after sales yg baik. Testimoni dibawah ini bisa menjadi salah satu penguat mu untuk memulai bisnis bersama kami.</p>

			<div className="flex flex-nowrap gap-5 mt-5 overflow-x-scroll items-start justify-start pb-10">
				<div className="bg-gray-50 border border-gray-300 p-5 rounded-xl shadow-xl min-w-[90%] md:min-w-[70%] lg:min-w-[40%]">
					<h5 className="font-bold text-xl">Arief Sidoarjo</h5>
					<h6 className="text-sm text-gray-600 mb-5">Pengusaha Laundry</h6>
					<p>Begitu saya menggunakan setrika uap mistermoto, bisnis laundry saya melesat. Setrika cepat selesai, saya bisa menerima orderan lebih banyak lagi.</p>
				</div>

				<div className="bg-gray-50 border border-gray-300 p-5 rounded-xl shadow-xl min-w-[90%] md:min-w-[70%] lg:min-w-[40%]">
					<h5 className="font-bold text-xl">Ibu Suharti</h5>
					<h6 className="text-sm text-gray-600 mb-5">Ibu Rumah Tangga</h6>
					<p>Beli setrika Mistermoto bulan Maret pas awal-awal Pandemi. Alhamdulillah usaha setrika kiloan laris terus</p>
				</div>

				<div className="bg-gray-50 border border-gray-300 p-5 rounded-xl shadow-xl min-w-[90%] md:min-w-[70%] lg:min-w-[40%]">
					<h5 className="font-bold text-xl">Erick Sidosermo</h5>
					<h6 className="text-sm text-gray-600 mb-5">Pengusaha Laundry</h6>
					<p>Support Edaaan, diajari sampai bisa. Saya malah yang sungkan tanya-tanya terus. Suwun Mistermoto.id</p>
				</div>
			</div>
		</section>
	);
}
