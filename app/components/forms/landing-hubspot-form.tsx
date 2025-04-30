"use client";

import React, { useEffect } from "react";
import Script from "next/script";

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

	// Handle form creation in the Script's onLoad callback
	const handleScriptLoad = () => {
		if (window.hbspt) {
			window.hbspt.forms.create({
				region: region,
				portalId: portalId,
				formId: formId,
				target: "#landingHubspotForm",
				css: customCss || defaultStyles,
			});
		}
	};

	// Effect to clean up the form when the component unmounts or props change
	useEffect(() => {
		return () => {
			// Remove form when component unmounts or dependencies change
			const formContainer =
				document.getElementById(
					"landingHubspotForm"
				);
			if (formContainer) {
				formContainer.innerHTML = "";
			}
		};
		// Re-run cleanup if props change to ensure old form is removed before new one loads
	}, [region, portalId, formId, customCss]);

	return (
		<div
			className={`hubspot-form-wrapper ${className}`}
		>
			{/* Container for the HubSpot form */}
			<div id="landingHubspotForm"></div>

			{/* Load HubSpot script using next/script */}
			<Script
				src="https://js.hsforms.net/forms/shell.js"
				strategy="afterInteractive"
				onLoad={handleScriptLoad}
			/>
		</div>
	);
};

export default LandingHubspotContactForm;
