import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: "mistermoto.id",
			},
			{
				hostname: "is3.cloudhost.id",
			},
		],
	},
};

export default nextConfig;
