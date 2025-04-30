import Image from "next/image";
import HubspotContactForm from "../../forms/hubspot-form";
import "./contact-section-2.css";

// Define custom styles for the HubSpot form
const customHubspotStyles = `
	.hsfc-FieldLabel,
	.hs-input {
		font-family: var(--font-ghSimple) !important;
		outline: 2px solid #3ce041;
    border: 1px solid #f913f9;
	}
	.hsfc-TextField::placeholder {
		font-family: var(--font-ghSimple);
	}
	.hs-input:-ms-input-placeholder {
		font-family: var(--font-ghSimple);
	}
	.hs-input::-ms-input-placeholder { 
		font-family: var(--font-ghSimple);
	}
	.hsfc-TextInput .input input:focus-visible {
    outline: 2px solid #3ce041;
    border: 1px solid #f913f9;
	}
	input {
		background-color: #000;
	}
`;

export default function ContactSection2() {
	return (
		<section
			id="readytofranchise"
			className="bg-brand-blue bg-[url('/decorative/chevron-background.svg')] bg-repeat bg-center py-8 px-4 md:px-20"
		>
			<div className="max-w-3xl mx-auto">
				<Image
					src="/decorative/white-wheat-desktop.svg"
					alt=""
					width={300}
					height={130}
					className="mx-auto mb-4 hidden md:block"
				/>
				<Image
					src="/decorative/white-wheat-mobile.svg"
					alt=""
					width={177}
					height={130}
					className="mx-auto mb-4 block md:hidden"
				/>
				<h2 className="text-center text-white text-5xl font-bold mb-4 font-ghSimple">
					Bake With Us
				</h2>
				<h3 className="text-center text-white font-bold mb-2 font-ghSimple text-[1.25rem]">
					Franchise Interest Form
				</h3>
				<p className="text-center text-white text-lg font-bold w-full">
					*Required Information
				</p>
				<HubspotContactForm
					region="na1"
					portalId="53298"
					formId="3d7b7292-e1bb-4778-b4b8-1ccbc20dbc81"
					customCss={customHubspotStyles}
					className="w-full"
				/>
			</div>
		</section>
	);
}
