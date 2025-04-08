import HubspotContactForm from "../forms/hubspot-form";

// Custom CSS for the contact form
const contactFormCss = `
	.hs-form {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		background-color: #F6F0E8;
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
	.hs-input:not([type="checkbox"]):focus {
		border-color: rgb(108, 134, 61);
		outline: rgb(108, 134, 61) solid 1px;
	}
	.hs-input[type="radio"] {
		appearance: none;
		-webkit-appearance: none;
		width: 20px;
		height: 20px;
		border: 1px solid #D1D1D1;
		border-radius: 50%;
		outline: none;
		margin-right: 8px;
		vertical-align: middle;
		position: relative;
		cursor: pointer;
		background-color: white;
	}
	.hs-input[type="radio"]:checked {
		border: 2px solid #6C9F58;
	}
	.hs-input[type="radio"]:checked::after {
		content: "";
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background-color: #6C9F58;
	}
	.hs-input[type="radio"]:focus {
		outline: none;
	}
	.hs-fieldtype-radio {
		padding: 0;
		background-color: transparent;
	}
	.hs-fieldtype-radio .inputs-list {
		list-style: none;
		padding: 0;
		margin: 10px 0 0;
	}
	.hs-fieldtype-radio .inputs-list li {
		margin-bottom: 14px;
	}
	.hs-fieldtype-radio label {
		display: flex;
		align-items: center;
		font-weight: normal;
		color: #333;
		font-size: 0.95rem;
	}
	.hs-fieldtype-radio .hs-form-field > label {
		font-weight: 600;
		margin-bottom: 2px;
	}
	.hs-fieldtype-radio .hs-form-field p {
		margin-top: 0;
		margin-bottom: 10px;
		color: #555;
		font-size: 0.9rem;
		line-height: 1.4;
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
		<section
			id="readyToFranchise"
			className="mt-[-3px] bg-bgTan py-[30px] px-[20px] flex flex-col items-center gap-[40px] w-full lg:hidden max-w-[1040px]"
		>
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
