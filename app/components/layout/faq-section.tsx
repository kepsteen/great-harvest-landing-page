import { FiChevronDown } from "react-icons/fi";

const faqs = [
	{
		question:
			"Am I required to work in the business?",
		answer:
			"No, you are not required to work in the business. You can hire employees to work in the business.",
	},
	{
		question:
			"Am I required to work in the business?",
		answer:
			"No, you are not required to work in the business. You can hire employees to work in the business.",
	},
	{
		question:
			"Am I required to work in the business?",
		answer:
			"No, you are not required to work in the business. You can hire employees to work in the business.",
	},
	{
		question:
			"Am I required to work in the business?",
		answer:
			"No, you are not required to work in the business. You can hire employees to work in the business.",
	},
	{
		question:
			"Am I required to work in the business?",
		answer:
			"No, you are not required to work in the business. You can hire employees to work in the business.",
	},
];

export default function FAQSection() {
	return (
		<section className="px-[20px] py-[30px] sm:px-[80px] bg-brandBlue">
			<div className="text-center flex items-center justify-center text-[3rem] mb-[55px] bg-cream rounded-full h-[250px] w-[250px] mx-auto">
				<h2>FAQs</h2>
			</div>
			<ul className="flex flex-col w-full bg-cream overflow-hidden">
				{faqs.map((faq, index) => (
					<li
						key={faq.question + index}
						className="border-b last:border-b-0 border-primary text-md"
					>
						<div className="relative">
							<input
								type="checkbox"
								id={`accordion-${index + 1}`}
								className="absolute opacity-0 peer"
							/>
							<label
								htmlFor={`accordion-${index + 1}`}
								className="flex items-center justify-between w-full p-4 cursor-pointer transition-colors duration-150 hover:bg-cream/80"
							>
								<span className="font-medium text-black">
									{faq.question}
								</span>
								<FiChevronDown className="transition-transform duration-200 peer-checked:rotate-180" />
							</label>
							<div className="max-h-0 overflow-hidden transition-all duration-300 peer-checked:max-h-[200px] peer-checked:border-t border-primary">
								<div className="p-6 text-black/80 leading-relaxed bg-cream/50">
									{faq.answer}
								</div>
							</div>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
}
