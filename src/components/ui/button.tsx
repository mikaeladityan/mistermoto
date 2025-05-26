import Link from "next/link";
import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export function Button({ className, children, type = "button", onClick, link, href }: ButtonHTMLAttributes<HTMLButtonElement> & { link?: boolean; href?: string }) {
	return link ? (
		<Link type={type} href={href || "/"} target="_blank" className={twMerge("px-4 py-2.5 font-bold bg-amber-600 rounded-lg text-gray-50 w-fit flex items-center justify-center gap-2 border border-amber-600", className)}>
			{children}
		</Link>
	) : (
		<button type={type} onClick={onClick} className={twMerge("px-4 py-2.5 font-bold bg-amber-600 rounded-lg text-gray-50 w-fit flex items-center justify-center gap-2 border border-amber-600", className)}>
			{children}
		</button>
	);
}
