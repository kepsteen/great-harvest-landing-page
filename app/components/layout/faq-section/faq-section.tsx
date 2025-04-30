import "./faq.css";

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
			className="bg-dark-wood bg-[url('/decorative/chevron-background.svg')] bg-repeat px-[24px] py-[150px] sm:px-[80px] flex flex-col gap-[10px]"
		>
			<div className="text-center font-bold flex items-center justify-center text-[3rem] mb-[10px] bg-[#c7a983] h-[85px] w-[255px] mx-auto text-black shadow-[0px_4px_4px_0px_#00000040]">
				<h2>FAQs</h2>
			</div>
			<div className="flex flex-col w-full max-w-[632px] mx-auto gap-[20px]">
				{faqs.map((faq) => (
					<details
						key={faq.question}
						className="bg-white rounded-lg border-[0.5px] border-charcoal-gray p-[10px]"
					>
						<summary className="text-charcoal-gray font-bold text-[1rem] pb-[10px] cursor-pointer focus:outline-offset-2 flex justify-between items-start gap-2 hover:underline hover:underline-offset-2">
							<span className="flex-1">
								{faq.question}
							</span>
						</summary>
						<div className="faq-answer-content">
							<p className="text-[1rem] text-black pb-[15px]">
								{faq.answer}
							</p>
						</div>
					</details>
				))}
			</div>
		</section>
	);
}
