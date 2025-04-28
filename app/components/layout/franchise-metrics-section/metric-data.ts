import { MetricCardData } from "./metric.interface";

export const metricCardData: MetricCardData[] = [
	{
		id: 1,
		imageSrc: "/images/vermont-exterior.png",
		imageAlt:
			"The exterior of a Great Harvest Bread Company in Vermont",
		badgeText: "Average Unit Volume",
		title: "$948,105",
		bullets: [
			"Everything Baked Fresh Daily",
			"Diverse Menu Offerings",
			"Unmatched Quality",
			"Super-Loyal Customer Base",
		],
		footerText: "We Train You to Win",
		badgeSvgPath: "/icons/metric-badge1.svg",
	},
	{
		id: 2,
		imageSrc: "/images/buchanan-exterior.png",
		imageAlt:
			"The exterior of a Great Harvest Bread Company in Buchanan, Michigan",
		badgeText: "Create It",
		title: "Build Options",
		bullets: [
			"Grow Your Empire",
			"One Bakery Cafe",
			"Multiple Units",
			"Non-Traditional Space",
		],
		footerText:
			"Leverage Our 50 years of Franchising",
		badgeSvgPath: "/icons/metric-badge2.svg",
	},
	{
		id: 3,
		imageSrc:
			"/images/ongoing-support-franchisee.png",
		imageAlt:
			"Image of a franchisee cheerfully buttering a loaf of bread",
		badgeText: "Streams of Income",
		title: "Playbook for Success",
		bullets: [
			"Flexible Income Streams",
			"Community Partnerships",
			"Local and National Marketing Support",
		],
		footerText: "Let's Make Bread Together",
		badgeSvgPath: "/icons/metric-badge3.svg",
	},
];
