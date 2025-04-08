import { FiChevronDown } from "react-icons/fi";

const faqs = [
	{
		question:
			"Am I required to work in the business?",
		answer:
			"At first, yes. But once you've assembled a well-trained and competent team, you can focus on things like additional units, increasing catering, wholesale accounts, farmer's markets, etc.",
	},
	{
		question: "What are typical store hours?",
		answer:
			"Great Harvest Bakery Cafes are open on-average seven days a week anytime from 7:00 AM to 6:00 PM.",
	},
	{
		question:
			"Do I need to own my real estate, and do you assist with build out, design, etc.?",
		answer:
			"You do not need to own your building; however, some franchisees do. We assist in the real estate hunt, lease negotiation, design and build out of your Great Harvest.",
	},
	{
		question:
			"Does Great Harvest provide training?",
		answer:
			"Yes! You will attend a comprehensive training that will cover everything from business ownership to baking and everything in between.",
	},
];

export default function FAQSection() {
	return (
		<section
			id="faq"
			className="px-[20px] py-[60px] sm:px-[80px] bg-bgTan border-t border-textGray"
		>
			<div className="text-center flex items-center justify-center text-[3rem] mb-[55px] bg-darkGreen rounded-full h-[250px] w-[250px] mx-auto text-white">
				<h2>FAQs</h2>
			</div>
			<div className="flex flex-col w-full max-w-[700px] lg:max-w-[1000px] mx-auto gap-4">
				{faqs.map((faq, index) => (
					<div
						key={faq.question + index}
						className="rounded-lg overflow-hidden bg-white w-full"
					>
						<div className="relative">
							<input
								type="checkbox"
								id={`accordion-${index + 1}`}
								className="absolute opacity-0 peer"
							/>
							<label
								htmlFor={`accordion-${index + 1}`}
								className="flex items-center justify-between w-full p-6 cursor-pointer"
							>
								<span className="font-medium text-[#555] text-xl">
									{faq.question}
								</span>
								<FiChevronDown className="text-2xl transition-transform duration-200 peer-checked:rotate-180" />
							</label>
							<div className="max-h-0 overflow-hidden transition-all duration-300 peer-checked:max-h-[200px]">
								<div className="p-6 pt-0 text-[#555] leading-relaxed">
									{faq.answer}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
