"use client";
import { IconPlayerPlay } from "@tabler/icons-react";
import { useRef, useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";

const spinStyle = {
	animation: "spin 8s linear infinite",
};

const curvedText = "• Play Video • ";

type PropsVideoComponent = {
	src: string;
	className?: string;
	video?: boolean;
};

export const VideoComponent = ({ src, className, video }: PropsVideoComponent) => {
	const iframeRef = useRef<HTMLIFrameElement>(null);
	const videoRef = useRef<HTMLVideoElement>(null);
	const [isMobile, setIsMobile] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth <= 768);
		};
		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	const handlePlay = () => {
		const iframe = iframeRef.current;
		const video = videoRef.current;
		if (!iframe) return;
		if (!video) return;

		try {
			const srcWithAutoplay = new URL(iframe.src || video.src);
			srcWithAutoplay.searchParams.set("autoplay", "1");
			srcWithAutoplay.searchParams.set("mute", "0");
			srcWithAutoplay.searchParams.set("playsinline", "1");
			iframe.src = srcWithAutoplay.toString();
		} catch (error) {
			console.error("Invalid iframe src URL", error);
		}

		iframe.style.pointerEvents = "auto";
	};

	const renderCurvedText = () => {
		const characters = curvedText.repeat(2).split("");
		return characters.map((char, i) => {
			const angle = i * (360 / characters.length);
			return (
				<span
					key={i}
					style={{
						transform: `rotate(${angle}deg) translate(25px) rotate(-${angle + 23}deg)`,
					}}
				>
					{char}
				</span>
			);
		});
	};

	return (
		<div className={twMerge("relative w-full aspect-video overflow-hidden rounded-md", className)}>
			{isLoading && (
				<div className="absolute inset-0 z-10 overflow-hidden rounded-md">
					<div className="w-full h-full bg-gray-200 shimmer" />
				</div>
			)}
			{video ? <video ref={videoRef} src={src} className="w-full h-full rounded-md object-cover" controls onLoadedData={() => setIsLoading(false)} /> : <iframe ref={iframeRef} src={src} className={twMerge("w-full h-full rounded-xl transition-opacity duration-500", isLoading ? "opacity-0" : "opacity-100")} allow="accelerometer; autoplay=false; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen title="Video player" referrerPolicy="strict-origin-when-cross-origin" onLoad={() => setIsLoading(false)} />}

			{!isMobile && !isLoading && (
				<button onClick={handlePlay} className="absolute top-2 right-2 z-20 bg-black/80 backdrop-blur-sm p-3 rounded-full shadow-md flex items-center justify-center hover:bg-black/70 transition focus:outline-none" aria-label="Play video">
					<div className="relative w-12 h-12 flex items-center justify-center">
						<div className="absolute inset-0" style={spinStyle}>
							<div className="curved-text">{renderCurvedText()}</div>
						</div>
						<IconPlayerPlay className="text-amber-500 relative z-10" size={20} />
					</div>
				</button>
			)}
		</div>
	);
};
