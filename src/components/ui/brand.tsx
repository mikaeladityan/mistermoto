import { twMerge } from "tailwind-merge";
import { publicSans } from "~/utils/font";

export const Brand = ({ className }: { className?: string }) => (
	<div className={twMerge("flex flex-col items-start justify-center", className)}>
		<span className={`font-bold ${publicSans.className} text-xl text-amber-600`}>Mistermoto</span>
		<span className="uppercase font-medium text-sm leading-3 text-amber-500">Indonesia</span>
	</div>
);
