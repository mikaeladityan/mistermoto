import { AutomationApi } from "./pricing/api";
import { FullAutomation } from "./pricing/full";
import { Manual } from "./pricing/manual";
import { Table } from "./pricing/table";
import { Button } from "./ui/button";

export function Pricing() {
	return (
		<section className="w-full mx-auto px-5 flex flex-col gap-y-10 md:w-10/12" id="pricing">
			<div className="flex flex-col gap-y-1">
				<h3 className="text-2xl font-bold lg:text-3xl">
					Paket Harga <br /> Setrika Uap Laundry
				</h3>
				<p className="text-sm lg:text-lg font-medium text-gray-600">Siap Pakai, Siap Untung</p>
				<div className="w-6/12 h-[1.5px] lg:w-2/12 bg-amber-500" />
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 items-start gap-y-10 gap-x-0 md:gap-x-10">
				<FullAutomation />
				<AutomationApi />
				<Manual />
				<Table />
			</div>

			<div className="flex items-center justify-center gap-5">
				<Button className="bg-gray-50 text-amber-600" link href="https://api.whatsapp.com/send?phone=6281282345567&text=Saya%20mau%20konsultasi%20Setrika%20Uap%20Boiler">
					Konsultasi Gratis
				</Button>
				<Button link href="https://api.whatsapp.com/send?phone=6281282345567">
					Pesan Sekarang
				</Button>
			</div>
		</section>
	);
}
