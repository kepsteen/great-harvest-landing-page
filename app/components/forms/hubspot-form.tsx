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
	.hs-form-field > label {
		color: #5A5A5A;
		font-weight: 600;
		font-size: 0.9rem;
		margin-bottom: 0.25rem;
		display: block;
	}
	.hs-input {
		width: 100%;
		border: 1px solid #D1D1D1;
		border-radius: 0.375rem;
		padding: 0.75rem;
		background-color: #FFFEF5;
		font-size: 1rem;
		outline: none;
		transition: border-color 0.2s;
	}
	.hs-input:focus {
		border-color: #6C9F58;
		box-shadow: 0 0 0 2px rgba(108, 159, 88, 0.2);
	}
	.hs-input.error {
		border-color: #e74c3c;
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
	.hs-button {
		background-color: #6C9F58;
		color: white;
		border: none;
		border-radius: 2rem;
		padding: 0.75rem 2rem;
		font-size: 1rem;
		font-weight: 600;
		cursor: pointer;
		transition: background-color 0.2s;
		margin-top: 0.5rem;
		align-self: center;
	}
	.hs-button:hover {
		background-color: #5b8a4a;
	}
	.inputs-list {
		padding: 0;
		list-style: none;
	}
	.hs-fieldtype-textarea .input {
		height: auto;
	}
	textarea.hs-input {
		min-height: 100px;
		resize: vertical;
	}
	.hs-field-desc {
		font-size: 0.8rem;
		color: #777;
		margin-bottom: 0.5rem;
	}
	.hs-form-radio-display {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
	@media (min-width: 768px) {
		.hs-form {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: 1.5rem;
		}
		.hs-submit, .hs-fieldtype-textarea, .hs-fieldtype-radio {
			grid-column: span 2;
		}
		.hs-submit .actions {
			display: flex;
			justify-content: center;
		}
	}
`;

const HubspotContactForm = (props: {
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
					target: "#hubspotForm",
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
				document.getElementById("hubspotForm");
			if (formContainer) {
				formContainer.innerHTML = "";
			}
		};
	}, [region, portalId, formId, customCss]);

	return (
		<div
			className={`hubspot-form-wrapper ${className}`}
		>
			<div id="hubspotForm"></div>
		</div>
	);
};

export default HubspotContactForm;
