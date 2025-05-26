"use client";
import { useAtom } from "jotai";
import { Option } from "../option";
import { optionAtom } from "~/store/option";
import Image from "next/image";

export function ContentOption({ data }: { data: Array<Option> }) {
	const [active] = useAtom(optionAtom);
	return data
		.filter((d) => d.slug === active)
		.map((data, i) => (
			<div key={i} className="flex flex-col gap-y-5">
				<Image src={String(data.image)} alt="Photo by Mistermoto Indonesia" width={2000} height={2000} className="w-full h-auto object-center object-cover rounded-xl" priority />
				{data.description}
			</div>
		));
}
