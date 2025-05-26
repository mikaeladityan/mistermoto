"use client";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const faqItems = [
	{
		question: "Apakah Setrika Uap Mistermoto ada Garansi dan support?",
		answer: "Yap. Tentu saja.. Kami berikan Garansi Sparepart 3 TAHUN dan Garansi Service 1 TAHUN. Selain itu kami support Anda seumur hidup. jika ada kendala silahkan hubungi Kami. GRATIS!",
	},
	{
		question: "Saya belum pernah pakai Setrika Uap Boiler. Apakah dibantu untuk pemasangannya?",
		answer: "Tentu saja bisa kami bantu untuk pemasangannya.",
	},
	{
		question: "Apa saja kelengkapan Setrika Uap Mistermoto?",
		answer: "Anda akan mendapatkan Kepala Setrika, Kompor, dan 1 set Boiler. Full Set sudah siap pakai.",
	},
	{
		question: "Apakah sudah dilengkapi safety valve (Pengaman tekanan uap)?",
		answer: "Ya. Setrika Uap Mistermoto sudah dilengkapi safety valve.",
	},
	{
		question: "Apakah sudah dilengkapi safety valve (Pengaman tekanan uap)?",
		answer: "Ya. Setrika Uap Mistermoto sudah dilengkapi safety valve.",
	},
	{
		question: "Bisa bayar ditempat?",
		answer: "Untuk wilayah Jabodetabek, Surabaya dan sekitarnya bisa COD (bayar di tempat). untuk daerah lain, silahkan hubungi kami apakah wilayah Anda bisa kami jangkau atau tidak.",
	},
	{
		question: "Apa yang dimaksud kapasitas liter Boiler?",
		answer: "kapasitas liter adalah kapasitas volume air yang bisa diisikan kedalam tabung, semakin kecil tabung semakin cepat habis airnya. untuk 10 liter bisa di gunakan untuk 2-3 jam pemakaian, 15 liter bisa di gunakan untuk 3-4 jam pemakaian, 25 liter bisa di gunakan untuk 6 jam an pemakaian, 35 liter bisa untuk 7-8 jam pemakaian. jika air habis bisa di iisi lagi.",
	},
];

export function FAQAccordion() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggle = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section className="w-full mx-auto relative px-5 md:w-10/12" id="faq">
			<h3 className="text-xl font-bold text-center mb-5">Pertanyaan yang Sering Diajukan</h3>
			<div className="space-y-3">
				{faqItems.map((item, index) => (
					<div key={index} className="bg-gray-50 border rounded-xl shadow border-gray-300 overflow-hidden">
						<button onClick={() => toggle(index)} className={twMerge("w-full text-left px-4 py-3 font-semibold flex justify-between items-center", openIndex === index ? "bg-amber-600/10 text-amber-600" : "bg-gray-50 text-gray-800")}>
							<span>{item.question}</span>
							<span>{openIndex === index ? "−" : "+"}</span>
						</button>
						{openIndex === index && <div className="p-4 text-gray-600 font-medium">{item.answer}</div>}
					</div>
				))}
			</div>
		</section>
	);
}
