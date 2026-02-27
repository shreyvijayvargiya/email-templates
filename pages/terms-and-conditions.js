import React from "react";
import Head from "next/head";
import Navbar from "../app/components/Navbar";
import Footer from "../app/components/Footer";

const TermsAndConditionsPage = () => {
	return (
		<>
			<Head>
				<title>Terms and Conditions - YourApp</title>
				<meta
					name="description"
					content="Terms and Conditions for YourApp. Read our terms of service and usage policies."
				/>
			</Head>
			<div className="min-h-screen flex flex-col bg-white">
				<Navbar />
				<main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
					<div className="max-w-4xl mx-auto">
						<h1 className="text-4xl font-bold text-zinc-900 mb-8">
							Terms and Conditions
						</h1>
						<div className="prose prose-zinc max-w-none space-y-6">
							<p className="text-sm text-zinc-600 mb-8">
								Last updated:{" "}
								{new Date().toLocaleDateString("en-US", {
									year: "numeric",
									month: "long",
									day: "numeric",
								})}
							</p>

							<section>
								<h2 className="text-2xl font-semibold text-zinc-900 mb-4">
									1. Acceptance of Terms
								</h2>
								<p className="text-zinc-700 leading-relaxed">
									By accessing and using this website and service, you accept
									and agree to be bound by the terms and provision of this
									agreement. If you do not agree to abide by the above, please
									do not use this service.
								</p>
							</section>

							<section>
								<h2 className="text-2xl font-semibold text-zinc-900 mb-4">
									2. Use License
								</h2>
								<p className="text-zinc-700 leading-relaxed mb-4">
									Permission is granted to temporarily download one copy of the
									materials on YourApp's website for personal, non-commercial
									transitory viewing only. This is the grant of a license, not a
									transfer of title, and under this license you may not:
								</p>
								<ul className="list-disc pl-6 space-y-2 text-zinc-700">
									<li>Modify or copy the materials</li>
									<li>
										Use the materials for any commercial purpose or for any
										public display
									</li>
									<li>
										Attempt to reverse engineer any software contained on
										YourApp's website
									</li>
									<li>
										Remove any copyright or other proprietary notations from the
										materials
									</li>
									<li>
										Transfer the materials to another person or "mirror" the
										materials on any other server
									</li>
								</ul>
							</section>

							<section>
								<h2 className="text-2xl font-semibold text-zinc-900 mb-4">
									3. User Accounts
								</h2>
								<p className="text-zinc-700 leading-relaxed mb-4">
									When you create an account with us, you must provide
									information that is accurate, complete, and current at all
									times. You are responsible for safeguarding the password and
									for all activities that occur under your account.
								</p>
								<p className="text-zinc-700 leading-relaxed">
									You agree not to disclose your password to any third party and
									take sole responsibility for any activities or actions under
									your account, whether or not you have authorized such
									activities or actions.
								</p>
							</section>

							<section>
								<h2 className="text-2xl font-semibold text-zinc-900 mb-4">
									4. Service Availability
								</h2>
								<p className="text-zinc-700 leading-relaxed">
									We reserve the right to withdraw or amend our service, and any
									service or material we provide, in our sole discretion without
									notice. We will not be liable if, for any reason, all or any
									part of the service is unavailable at any time or for any
									period.
								</p>
							</section>

							<section>
								<h2 className="text-2xl font-semibold text-zinc-900 mb-4">
									5. Prohibited Uses
								</h2>
								<p className="text-zinc-700 leading-relaxed mb-4">
									You may use our service only for lawful purposes and in
									accordance with these Terms. You agree not to use the service:
								</p>
								<ul className="list-disc pl-6 space-y-2 text-zinc-700">
									<li>
										In any way that violates any applicable law or regulation
									</li>
									<li>
										To transmit, or procure the sending of, any advertising or
										promotional material without our prior written consent
									</li>
									<li>
										To impersonate or attempt to impersonate the company, a
										company employee, another user, or any other person or
										entity
									</li>
									<li>
										In any way that infringes upon the rights of others, or in
										any way is illegal, threatening, fraudulent, or harmful
									</li>
								</ul>
							</section>

							<section>
								<h2 className="text-2xl font-semibold text-zinc-900 mb-4">
									6. Intellectual Property Rights
								</h2>
								<p className="text-zinc-700 leading-relaxed">
									The service and its original content, features, and
									functionality are and will remain the exclusive property of
									YourApp and its licensors. The service is protected by
									copyright, trademark, and other laws. Our trademarks and trade
									dress may not be used in connection with any product or
									service without our prior written consent.
								</p>
							</section>

							<section>
								<h2 className="text-2xl font-semibold text-zinc-900 mb-4">
									7. Disclaimer
								</h2>
								<p className="text-zinc-700 leading-relaxed">
									The information on this website is provided on an "as is"
									basis. To the fullest extent permitted by law, YourApp
									excludes all representations, warranties, conditions, and
									terms relating to our website and the use of this website.
								</p>
							</section>

							<section>
								<h2 className="text-2xl font-semibold text-zinc-900 mb-4">
									8. Limitation of Liability
								</h2>
								<p className="text-zinc-700 leading-relaxed">
									In no event shall YourApp, nor its directors, employees,
									partners, agents, suppliers, or affiliates, be liable for any
									indirect, incidental, special, consequential, or punitive
									damages, including without limitation, loss of profits, data,
									use, goodwill, or other intangible losses, resulting from your
									use of the service.
								</p>
							</section>

							<section>
								<h2 className="text-2xl font-semibold text-zinc-900 mb-4">
									9. Changes to Terms
								</h2>
								<p className="text-zinc-700 leading-relaxed">
									We reserve the right, at our sole discretion, to modify or
									replace these Terms at any time. If a revision is material, we
									will provide at least 30 days notice prior to any new terms
									taking effect.
								</p>
							</section>

							<section>
								<h2 className="text-2xl font-semibold text-zinc-900 mb-4">
									10. Contact Information
								</h2>
								<p className="text-zinc-700 leading-relaxed">
									If you have any questions about these Terms and Conditions,
									please contact us at{" "}
									<a
										href="mailto:support@yourapp.com"
										className="text-zinc-900 hover:underline"
									>
										support@yourapp.com
									</a>
									.
								</p>
							</section>
						</div>
					</div>
				</main>
				<Footer />
			</div>
		</>
	);
};

export default TermsAndConditionsPage;
