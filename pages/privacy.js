import React from "react";
import Head from "next/head";
import Navbar from "../app/components/Navbar";
import Footer from "../app/components/Footer";

const PrivacyPage = () => {
	return (
		<>
			<Head>
				<title>Privacy Policy - YourApp</title>
				<meta
					name="description"
					content="Privacy Policy for YourApp. Learn how we collect, use, and protect your personal information."
				/>
			</Head>
			<div className="min-h-screen flex flex-col bg-white">
				<Navbar />
				<main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
					<div className="max-w-4xl mx-auto">
						<h1 className="text-4xl font-bold text-zinc-900 mb-8">
							Privacy Policy
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
									1. Introduction
								</h2>
								<p className="text-zinc-700 leading-relaxed">
									YourApp ("we," "our," or "us") is committed to protecting your
									privacy. This Privacy Policy explains how we collect, use,
									disclose, and safeguard your information when you use our
									website and service.
								</p>
							</section>

							<section>
								<h2 className="text-2xl font-semibold text-zinc-900 mb-4">
									2. Information We Collect
								</h2>
								<p className="text-zinc-700 leading-relaxed mb-4">
									We collect information that you provide directly to us, as
									well as information automatically collected when you use our
									service:
								</p>
								<h3 className="text-xl font-semibold text-zinc-900 mb-2">
									Information You Provide
								</h3>
								<ul className="list-disc pl-6 space-y-2 text-zinc-700 mb-4">
									<li>Name and email address when you create an account</li>
									<li>Profile information and preferences</li>
									<li>
										Payment information (processed securely through third-party
										providers)
									</li>
									<li>Communications with us, including support requests</li>
								</ul>
								<h3 className="text-xl font-semibold text-zinc-900 mb-2">
									Automatically Collected Information
								</h3>
								<ul className="list-disc pl-6 space-y-2 text-zinc-700">
									<li>Device information and identifiers</li>
									<li>Log data (IP address, browser type, pages visited)</li>
									<li>Usage data and analytics</li>
									<li>Cookies and similar tracking technologies</li>
								</ul>
							</section>

							<section>
								<h2 className="text-2xl font-semibold text-zinc-900 mb-4">
									3. How We Use Your Information
								</h2>
								<p className="text-zinc-700 leading-relaxed mb-4">
									We use the information we collect to:
								</p>
								<ul className="list-disc pl-6 space-y-2 text-zinc-700">
									<li>Provide, maintain, and improve our service</li>
									<li>Process transactions and send related information</li>
									<li>
										Send you technical notices, updates, and support messages
									</li>
									<li>Respond to your comments, questions, and requests</li>
									<li>Monitor and analyze trends, usage, and activities</li>
									<li>Detect, prevent, and address technical issues</li>
									<li>Personalize and improve your experience</li>
								</ul>
							</section>

							<section>
								<h2 className="text-2xl font-semibold text-zinc-900 mb-4">
									4. Information Sharing and Disclosure
								</h2>
								<p className="text-zinc-700 leading-relaxed mb-4">
									We do not sell, trade, or rent your personal information to
									third parties. We may share your information in the following
									circumstances:
								</p>
								<ul className="list-disc pl-6 space-y-2 text-zinc-700">
									<li>
										<strong>Service Providers:</strong> We may share information
										with third-party service providers who perform services on
										our behalf
									</li>
									<li>
										<strong>Legal Requirements:</strong> We may disclose your
										information if required by law or in response to valid
										requests by public authorities
									</li>
									<li>
										<strong>Business Transfers:</strong> In connection with any
										merger, sale, or acquisition of our business
									</li>
									<li>
										<strong>With Your Consent:</strong> We may share your
										information with your explicit consent
									</li>
								</ul>
							</section>

							<section>
								<h2 className="text-2xl font-semibold text-zinc-900 mb-4">
									5. Data Security
								</h2>
								<p className="text-zinc-700 leading-relaxed">
									We implement appropriate technical and organizational security
									measures to protect your personal information against
									unauthorized access, alteration, disclosure, or destruction.
									However, no method of transmission over the Internet or
									electronic storage is 100% secure, and we cannot guarantee
									absolute security.
								</p>
							</section>

							<section>
								<h2 className="text-2xl font-semibold text-zinc-900 mb-4">
									6. Cookies and Tracking Technologies
								</h2>
								<p className="text-zinc-700 leading-relaxed">
									We use cookies and similar tracking technologies to track
									activity on our service and hold certain information. You can
									instruct your browser to refuse all cookies or to indicate
									when a cookie is being sent. However, if you do not accept
									cookies, you may not be able to use some portions of our
									service.
								</p>
							</section>

							<section>
								<h2 className="text-2xl font-semibold text-zinc-900 mb-4">
									7. Your Rights and Choices
								</h2>
								<p className="text-zinc-700 leading-relaxed mb-4">
									You have certain rights regarding your personal information:
								</p>
								<ul className="list-disc pl-6 space-y-2 text-zinc-700">
									<li>Access and receive a copy of your personal data</li>
									<li>Rectify inaccurate or incomplete data</li>
									<li>Request deletion of your personal data</li>
									<li>Object to processing of your personal data</li>
									<li>Request restriction of processing your personal data</li>
									<li>Data portability</li>
									<li>Withdraw consent at any time</li>
								</ul>
							</section>

							<section>
								<h2 className="text-2xl font-semibold text-zinc-900 mb-4">
									8. Children's Privacy
								</h2>
								<p className="text-zinc-700 leading-relaxed">
									Our service is not intended for children under the age of 13.
									We do not knowingly collect personal information from children
									under 13. If you are a parent or guardian and believe your
									child has provided us with personal information, please
									contact us immediately.
								</p>
							</section>

							<section>
								<h2 className="text-2xl font-semibold text-zinc-900 mb-4">
									9. Changes to This Privacy Policy
								</h2>
								<p className="text-zinc-700 leading-relaxed">
									We may update our Privacy Policy from time to time. We will
									notify you of any changes by posting the new Privacy Policy on
									this page and updating the "Last updated" date. You are
									advised to review this Privacy Policy periodically for any
									changes.
								</p>
							</section>

							<section>
								<h2 className="text-2xl font-semibold text-zinc-900 mb-4">
									10. Contact Us
								</h2>
								<p className="text-zinc-700 leading-relaxed">
									If you have any questions about this Privacy Policy, please
									contact us at{" "}
									<a
										href="mailto:privacy@yourapp.com"
										className="text-zinc-900 hover:underline"
									>
										privacy@yourapp.com
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

export default PrivacyPage;
