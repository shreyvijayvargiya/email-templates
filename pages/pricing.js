import React, { useState, useRef, useEffect } from "react";
import Head from "next/head";
import Navbar from "../app/components/Navbar";
import Footer from "../app/components/Footer";
import { motion } from "framer-motion";
import { Check, ArrowRight, CheckCircle2, Mail, X } from "lucide-react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const PricingPage = () => {
	// Replace these with your actual Polar plan IDs
	const plans = [
		{
			id: "bf5d934b-da7c-4861-a427-6dcf2b211cff", // Polar plan ID
			name: "Pro",
			price: "$29",
			period: "month",
			description: "Perfect for individuals and small teams",
			features: [
				"All core features",
				"Priority support",
				"Advanced analytics",
				"Custom integrations",
				"API access",
			],
			popular: true,
			type: "subscription",
		},
		{
			id: "pro-yearly", // Polar plan ID
			name: "Pro",
			price: "$290",
			period: "year",
			description: "Best value for long-term users",
			features: [
				"All Pro features",
				"2 months free",
				"Priority support",
				"Advanced analytics",
				"Custom integrations",
				"API access",
			],
			popular: false,
			type: "subscription",
		},
		{
			id: "enterprise",
			name: "Enterprise",
			price: "Custom",
			period: "",
			description: "For large organizations with custom needs",
			features: [
				"Everything in Pro",
				"Dedicated account manager",
				"Custom SLA",
				"On-premise deployment",
				"Advanced security",
				"24/7 priority support",
				"Custom integrations",
			],
			popular: false,
			type: "enterprise",
		},
	];

	return (
		<>
			<Head>
				<title>Pricing - YourApp</title>
				<meta
					name="description"
					content="Choose the perfect plan for your needs. Flexible pricing with no hidden fees."
				/>
			</Head>
			<div className="min-h-screen flex flex-col">
				<Navbar />

				<section className="flex-1 py-20 px-4 sm:px-6 lg:px-8">
					<div className="max-w-6xl mx-auto">
						<div className="text-center mb-12">
							<h1 className="text-4xl font-bold text-zinc-900 mb-4">
								Simple, Transparent Pricing
							</h1>
							<p className="text-lg text-zinc-600 max-w-2xl mx-auto">
								Choose the plan that works best for you. All plans include a
								14-day free trial.
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
							{plans.map((plan, index) => (
								<motion.div
									key={plan.id}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.1 }}
									className={`relative p-8 bg-white border-2 rounded-xl ${
										plan.popular
											? "border-zinc-900 shadow-lg"
											: "border-zinc-200"
									}`}
								>
									{plan.popular && (
										<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
											<span className="px-4 py-1 bg-zinc-900 text-white text-xs font-semibold rounded-full">
												Most Popular
											</span>
										</div>
									)}
									<div className="text-center mb-6">
										<h3 className="text-2xl font-bold text-zinc-900 mb-2">
											{plan.name}
										</h3>
										<div className="mb-2">
											<span className="text-4xl font-bold text-zinc-900">
												{plan.price}
											</span>
											{plan.period && (
												<span className="text-zinc-600">/{plan.period}</span>
											)}
										</div>
										<p className="text-sm text-zinc-600">{plan.description}</p>
									</div>
									<ul className="space-y-3 mb-6">
										{plan.features.map((feature, idx) => (
											<li key={idx} className="flex items-start gap-2">
												<Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
												<span className="text-sm text-zinc-700">{feature}</span>
											</li>
										))}
									</ul>
									{/* Button Logic */}
									{plan.type === "enterprise" ? (
										// Enterprise plan - Contact Sales button
										<a
											href="/contact"
											className={`w-full py-3 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 ${
												plan.popular
													? "bg-zinc-900 text-white hover:bg-zinc-800"
													: "bg-zinc-100 text-zinc-900 hover:bg-zinc-200"
											}`}
										>
											<Mail className="w-4 h-4" />
											Contact Sales
										</a>
									) : (
										// User is logged in but this is not their active plan
										<button
											className={`w-full py-3 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 ${
												plan.popular
													? "bg-zinc-900 text-white hover:bg-zinc-800"
													: "bg-zinc-100 text-zinc-900 hover:bg-zinc-200"
											}`}
										>
											<ArrowRight className="w-4 h-4" />
											Subscribe to {plan.name}
										</button>
									)}
								</motion.div>
							))}
						</div>
					</div>
				</section>

				<Footer />
			</div>
		</>
	);
};

export default PricingPage;
