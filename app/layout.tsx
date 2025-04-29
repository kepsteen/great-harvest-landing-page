import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import "./globals.css";
import Script from "next/script";

const albertSans = Albert_Sans({
	variable: "--font-albert-sans",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title:
		"Franchise | Great Harvest Bread Company",
	description:
		"Great Harvest Bread Company is a family-owned bakery that offers a wide range of breads, pastries, and other baked goods. We are currently seeking franchisees to join our network of independent bakeries.",

	// Add Open Graph metadata
	openGraph: {
		title:
			"Franchise | Great Harvest Bread Company",
		description:
			"Great Harvest Bread Company is a family-owned bakery that offers a wide range of breads, pastries, and other baked goods. We are currently seeking franchisees to join our network of independent bakeries.",
	},

	// Add Twitter metadata
	twitter: {
		title:
			"Franchise | Great Harvest Bread Company",
		description:
			"Great Harvest Bread Company is a family-owned bakery that offers a wide range of breads, pastries, and other baked goods. We are currently seeking franchisees to join our network of independent bakeries.",
		card: "summary_large_image",
	},
	icons: {
		icon: [
			{ url: "/favicon/favicon.ico" },
			{
				url: "/favicon/favicon-16x16.png",
				sizes: "16x16",
				type: "image/png",
			},
			{
				url: "/favicon/favicon-32x32.png",
				sizes: "32x32",
				type: "image/png",
			},
		],
		apple: [
			{ url: "/favicon/apple-touch-icon.png" },
		],
		other: [
			{
				url: "/favicon/android-chrome-192x192.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				url: "/favicon/android-chrome-512x512.png",
				sizes: "512x512",
				type: "image/png",
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<link
				rel="preload"
				href="https://js.hsforms.net/forms/shell.js"
				as="script"
			/>

			<body
				className={`${albertSans.variable} antialiased`}
			>
				<Navbar />
				<main>{children}</main>
				<Script
					id="hs-script-loader"
					src="//js.hs-scripts.com/53298.js"
					strategy="lazyOnload"
					async
					defer
				/>
				<Footer />
			</body>
		</html>
	);
}
