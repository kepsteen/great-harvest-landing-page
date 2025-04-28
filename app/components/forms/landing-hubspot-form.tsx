"use client";

import React, { useEffect } from "react";

// Add type declaration for HubSpot Forms API
declare global {
	interface Window {
		hbspt: {
			forms: {
				create: (config: {
					region: string;
					portalId: string;
					formId: string;
					target: string | HTMLElement;
					css?: string;
					cssRequired?: string;
				}) => void;
			};
		};
	}
}

// Default styles for the form
const defaultStyles = `
	.hs-form {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		font-family: inherit;
	}
`;

const LandingHubspotContactForm = (props: {
	region: string;
	portalId: string;
	formId: string;
	customCss?: string;
	className?: string;
}) => {
	const {
		region,
		portalId,
		formId,
		customCss,
		className = "",
	} = props;

	useEffect(() => {
		const script =
			document.createElement("script");
		script.src =
			"https://js.hsforms.net/forms/shell.js";
		document.body.appendChild(script);

		script.addEventListener("load", () => {
			if (window.hbspt) {
				window.hbspt.forms.create({
					region: region,
					portalId: portalId,
					formId: formId,
					target: "#landingHubspotForm",
					css: customCss || defaultStyles,
				});
			}
		});

		return () => {
			// Clean up script when component unmounts
			const existingScript =
				document.querySelector(
					'script[src="https://js.hsforms.net/forms/shell.js"]'
				);
			if (
				existingScript &&
				existingScript.parentNode
			) {
				existingScript.parentNode.removeChild(
					existingScript
				);
			}
			// Remove form when component unmounts
			const formContainer =
				document.getElementById("landingHubspotForm");
			if (formContainer) {
				formContainer.innerHTML = "";
			}
		};
	}, [region, portalId, formId, customCss]);

	return (
		<div
			className={`hubspot-form-wrapper ${className}`}
		>
			<div id="landingHubspotForm"></div>
		</div>
	);
};

export default LandingHubspotContactForm;
