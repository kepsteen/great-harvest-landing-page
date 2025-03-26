import { cn } from "@/lib/utils";

interface DividerProps {
	color?: string;
	bgColor?: string;
	className?: string;
}

export default function Divider({
	color = "bg-cream",
	bgColor = "bg-brandBlue",
	className,
}: DividerProps) {
	return (
		<div
			className={cn(
				"flex flex-col w-full divider-background",
				className,
				bgColor
			)}
		>
			<div
				className={cn(
					color,
					"h-[3px] w-full divider-line"
				)}
			></div>
		</div>
	);
}
