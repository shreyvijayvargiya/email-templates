import React from "react";
import Head from "next/head";
import Link from "next/link";
import Navbar from "../app/components/Navbar";
import Footer from "../app/components/Footer";
import { FileText, Shield, Scale } from "lucide-react";

const LegalPage = () => {
	const legalDocuments = [
		{
			icon: FileText,
			title: "Terms and Conditions",
			description:
				"Read our terms of service and understand the rules and regulations for using our service.",
			href: "/terms-and-conditions",
		},
		{
			icon: Shield,
			title: "Privacy Policy",
			description:
				"Learn how we collect, use, and protect your personal information and data.",
			href: "/privacy",
		},
		{
			icon: Scale,
			title: "Cookie Policy",
			description:
				"Understand how we use cookies and similar tracking technologies on our website.",
			href: "/cookies",
		},
	];

	return (
		<>
			<Head>
				<title>Legal - YourApp</title>
				<meta
					name="description"
					content="Legal documents and policies for YourApp. Terms, Privacy Policy, and more."
				/>
			</Head>
			<div className="min-h-screen flex flex-col bg-white">
				<Navbar />
				<main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
					<div className="max-w-4xl mx-auto">
						<h1 className="text-4xl font-bold text-zinc-900 mb-4">
							Legal Information
						</h1>
						<p className="text-lg text-zinc-600 mb-12">
							Review our legal documents and policies to understand your rights
							and responsibilities when using our service.
						</p>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
							{legalDocuments.map((doc, index) => {
								const Icon = doc.icon;
								return (
									<Link
										key={index}
										href={doc.href}
										className="block p-6 border border-zinc-200 rounded-xl hover:border-zinc-300 hover:shadow-lg transition-all group"
									>
										<div className="flex items-start gap-4">
											<div className="p-3 bg-zinc-100 rounded-xl group-hover:bg-zinc-200 transition-colors">
												<Icon className="w-6 h-6 text-zinc-900" />
											</div>
											<div className="flex-1">
												<h3 className="text-xl font-semibold text-zinc-900 mb-2 group-hover:text-zinc-700 transition-colors">
													{doc.title}
												</h3>
												<p className="text-sm text-zinc-600 leading-relaxed">
													{doc.description}
												</p>
											</div>
										</div>
									</Link>
								);
							})}
						</div>

						<div className="bg-zinc-50 border border-zinc-200 rounded-xl p-8">
							<h2 className="text-2xl font-semibold text-zinc-900 mb-4">
								Quick Links
							</h2>
							<ul className="space-y-3">
								<li>
									<Link
										href="/terms-and-conditions"
										className="text-zinc-900 hover:text-zinc-700 hover:underline transition-colors"
									>
										Terms and Conditions
									</Link>
								</li>
								<li>
									<Link
										href="/privacy"
										className="text-zinc-900 hover:text-zinc-700 hover:underline transition-colors"
									>
										Privacy Policy
									</Link>
								</li>
								<li>
									<Link
										href="/cookies"
										className="text-zinc-900 hover:text-zinc-700 hover:underline transition-colors"
									>
										Cookie Policy
									</Link>
								</li>
							</ul>
						</div>

						<div className="mt-12 p-6 bg-zinc-900 text-white rounded-xl">
							<h3 className="text-xl font-semibold mb-3">
								Questions About Our Legal Policies?
							</h3>
							<p className="text-zinc-300 mb-4">
								If you have any questions or concerns about our legal documents,
								please don't hesitate to contact us.
							</p>
							<a
								href="mailto:legal@yourapp.com"
								className="inline-block px-4 py-2 bg-white text-zinc-900 rounded-lg font-medium hover:bg-zinc-100 transition-colors"
							>
								Contact Legal Team
							</a>
						</div>
					</div>
				</main>
				<Footer />
			</div>
		</>
	);
};

export default LegalPage;
