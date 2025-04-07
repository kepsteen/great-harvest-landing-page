import HubspotContactForm from "../forms/hubspot-form";

// Custom CSS for the contact form
const contactFormCss = `
	.hs-form {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		background-color: #eee7de;
		padding: 2rem;
		border-radius: 0.5rem;
	}
	.hs-form-field > label {
		color: #333;
		font-weight: 600;
		font-size: 1rem;
		margin-bottom: 0.25rem;
		display: block;
	}
	.hs-input {
		width: 100%;
		border: 1px solid #D1D1D1;
		border-radius: 0.5rem;
		padding: 0.75rem;
		background-color: white;
		font-size: 1rem;
	}
	.hs-form-field {
		margin-bottom: 1rem;
	}
	.hs-form > div:first-of-type {
		margin-top: 1rem;
	}
	h3.form-title {
		font-size: 1.75rem;
		color: #333;
		margin-bottom: 1rem;
		font-weight: 600;
	}
	.form-section-title {
		font-size: 1.5rem;
		color: #333;
		margin-top: 1rem;
		margin-bottom: 0.5rem;
		grid-column: span 2;
	}
	.hs-button {
		background-color: #6C9F58;
		color: white;
		border: none;
		border-radius: 2rem;
		padding: 1rem 2rem;
		font-size: 1.25rem;
		font-weight: 700;
		width: 236px;
		cursor: pointer;
		display: block;
		margin: 1.5rem auto 0;
	}
	.required-text {
		font-size: 0.875rem;
		color: #666;
		margin-bottom: 1rem;
		text-align: center;
	}
	.hs-error-msgs {
		list-style: none;
		padding: 0;
		margin: 0.25rem 0 0;
	}
	.hs-error-msg {
		color: #e74c3c;
		font-size: 0.8rem;
	}
	textarea.hs-input {
		min-height: 100px;
	}
	@media (min-width: 768px) {
		.hs-form {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			column-gap: 2rem;
			row-gap: 1.5rem;
		}
		.required-text {
			grid-column: span 2;
		}
		.hs-submit, .hs-fieldtype-textarea, .hs-fieldtype-radio {
			grid-column: span 2;
		}
	}
`;

export default function ContactSection() {
	return (
		<section className="mt-[-3px] bg-bgTan py-[30px] px-[20px] flex flex-col items-center gap-[40px] w-full lg:hidden max-w-[1040px]">
			<h2 className="text-center text-[3rem] w-full leading-snug">
				Contact Us and Let&apos;s Make Some Bread
				together!
			</h2>
			<div className="w-full form-container">
				<div className="required-text">
					*Required Information
				</div>
				<HubspotContactForm
					region="na1"
					portalId="53298"
					formId="05728241-e3e2-45d6-83ac-b1e830b96e0d"
					customCss={contactFormCss}
					className="contact-us-form"
				/>
			</div>
		</section>
	);
}
