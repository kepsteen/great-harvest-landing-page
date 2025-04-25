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
			className="px-[24px] py-[50px] sm:px-[80px] border-t border-textGray flex flex-col gap-[10px]"
		>
			<div className="text-center flex items-center justify-center text-[3rem] mb-[10px] bg-[#c7a983] h-[85px] w-[255px] mx-auto text-white shadow-[0px_4px_4px_0px_#00000040]">
				<h2>FAQs</h2>
			</div>
			<div className="flex flex-col w-full max-w-[700px] lg:max-w-[1000px] mx-auto gap-[20px]">
				{faqs.map((faq, index) => (
					<div
						key={faq.question + index}
						className="rounded-lg overflow-hidden bg-white w-full border-[0.5px] border-[#534f49]"
					>
						<div className="relative">
							<input
								type="checkbox"
								id={`accordion-${index + 1}`}
								className="absolute opacity-0 peer"
							/>
							<label
								htmlFor={`accordion-${index + 1}`}
								className="flex items-center justify-between w-full p-[10px] cursor-pointer"
							>
								<span className="font-medium text-[#534f49] text-[1rem]">
									{faq.question}
								</span>
								<FiChevronDown className="text-2xl transition-transform duration-200 peer-checked:rotate-180" />
							</label>
							<div className="max-h-0 overflow-hidden transition-all duration-300 peer-checked:max-h-[200px]">
								<div className="text-[1rem] text-black px-[10px] pb-[15px]">
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
