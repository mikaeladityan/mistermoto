"use client";
import { twMerge } from "tailwind-merge";
import { Option } from "../option";
import { useAtom } from "jotai";
import { optionAtom } from "~/store/option";

export function ButtonOption({ slug, title, className }: { slug: Option["slug"]; title: Option["title"]; className?: string }) {
	const [active, setActive] = useAtom(optionAtom);
	return (
		<button onClick={() => setActive(slug)} className={twMerge("border border-amber-600 rounded-full px-5 py-1 text-sm text-nowrap font-semibold tracking-wider z-10", active === slug ? "bg-amber-600 text-gray-50 opacity-100" : "bg-gray-50 text-gray-800 opacity-30", className)}>
			{title}
		</button>
	);
}
