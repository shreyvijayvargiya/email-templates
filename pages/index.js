import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useInView } from "framer-motion";

const categories = [
  { name: "Onboarding", icon: "✦", count: 48, color: "#f97316" },
  { name: "Marketing", icon: "◈", count: 72, color: "#8b5cf6" },
  { name: "Transactional", icon: "◆", count: 55, color: "#06b6d4" },
  { name: "Reviews", icon: "★", count: 34, color: "#f59e0b" },
  { name: "Feedback", icon: "◉", count: 41, color: "#10b981" },
  { name: "Re-engagement", icon: "↺", count: 29, color: "#ec4899" },
  { name: "Newsletters", icon: "◎", count: 38, color: "#6366f1" },
  { name: "More added", icon: "+", count: "∞", color: "#64748b" },
];

const previews = [
  { bg: "#fff7ed", accent: "#f97316", label: "Welcome Series", lines: [3,5,2,4] },
  { bg: "#f5f3ff", accent: "#8b5cf6", label: "Promo Blast", lines: [2,6,3] },
  { bg: "#ecfeff", accent: "#06b6d4", label: "Order Confirm", lines: [4,3,5,2] },
  { bg: "#fffbeb", accent: "#f59e0b", label: "Review Request", lines: [3,4,2] },
  { bg: "#f0fdf4", accent: "#10b981", label: "NPS Survey", lines: [2,5,3,4] },
  { bg: "#fdf4ff", accent: "#ec4899", label: "Win-back", lines: [5,2,4,3] },
];

function FloatingCard({ preview, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}
      className="rounded-2xl overflow-hidden cursor-pointer flex-shrink-0"
      style={{ background: preview.bg, boxShadow: "0 4px 20px rgba(0,0,0,0.07)", width: 160 }}
    >
      <div className="p-3">
        <div className="rounded-lg mb-2 flex items-center justify-center" style={{ background: preview.accent, height: 70 }}>
          <div className="text-white text-xs font-bold opacity-80">{preview.label[0]}</div>
        </div>
        <div className="space-y-1.5 mb-2">
          {preview.lines.map((w, i) => (
            <div key={i} className="rounded-full" style={{ height: 5, width: `${w * 18}%`, background: preview.accent, opacity: 0.25 + i * 0.15 }} />
          ))}
        </div>
        <div className="text-xs font-semibold" style={{ color: preview.accent, fontSize: 9, letterSpacing: 1 }}>{preview.label.toUpperCase()}</div>
      </div>
    </motion.div>
  );
}

function CategoryPill({ cat, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: index * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2.5 rounded-2xl px-4 py-3 cursor-default"
      style={{ background: cat.color + "12", border: `1px solid ${cat.color}22` }}
    >
      <span className="text-lg" style={{ color: cat.color }}>{cat.icon}</span>
      <div>
        <div className="text-sm font-semibold text-slate-700">{cat.name}</div>
        <div className="text-xs" style={{ color: cat.color }}>{cat.count} templates</div>
      </div>
    </motion.div>
  );
}


function ImageModal({ image, onClose }) {
  if (!image) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="relative max-w-[95vw] max-h-[95vh] overflow-auto rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-slate-600 hover:text-slate-800 shadow-lg transition-colors"
          aria-label="Close"
        >
          ✕
        </button>
        <img
          src={image.src}
          alt={image.name}
          className="w-full h-auto block"
          style={{ maxHeight: "90vh" }}
        />
        <div className="p-4 text-center">
          <div className="text-sm font-medium text-slate-700 truncate max-w-full">{image.name}</div>
          <div className="text-xs text-slate-400 mt-0.5">{image.category}</div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function TemplateImageCard({ image, index, onClick }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: Math.min(index * 0.02, 0.3), duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, scale: 1.02, boxShadow: "0 12px 40px rgba(0,0,0,0.15)" }}
      onClick={() => onClick(image)}
      className="rounded-xl overflow-hidden cursor-pointer bg-white"
      style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
    >
      <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
        <img
          src={image.src}
          alt={image.name}
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="p-2.5">
        <p className="text-xs font-medium text-slate-700 truncate" title={image.name}>
          {image.name}
        </p>
        <span className="text-[10px] text-slate-400">{image.category}</span>
      </div>
    </motion.div>
  );
}

export default function App() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 400], [0, -60]);
  const [marqueeX, setMarqueeX] = useState(0);
  const [images, setImages] = useState([]);
  const [imagesLoading, setImagesLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetch("/emails.json")
      .then((res) => res.json())
      .then((data) => {
        setImages(data.emails || []);
      })
      .catch(() => setImages([]))
      .finally(() => setImagesLoading(false));
  }, []);

  useEffect(() => {
    let frame;
    let x = 0;
    const animate = () => {
      x -= 0.4;
      if (x < -800) x = 0;
      setMarqueeX(x);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    if (selectedImage) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
		<div
			className="min-h-screen"
			style={{ background: "#fafaf8", fontFamily: "'DM Sans', sans-serif" }}
		>
			<link
				href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Playfair+Display:wght@700;900&display=swap"
				rel="stylesheet"
			/>

			{/* Nav */}
			<motion.nav
				initial={{ opacity: 0, y: -10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="flex items-center justify-between px-8 py-5"
				style={{ borderBottom: "1px solid #f0ede8" }}
			>
				<div className="flex items-center gap-2">
					<div
						className="w-7 h-7 rounded-lg flex items-center justify-center"
						style={{ background: "linear-gradient(135deg, #f97316, #ec4899)" }}
					>
						<span className="text-white text-xs font-bold">@</span>
					</div>
					<span className="font-bold text-slate-800 text-sm tracking-tight">
						MailKit
					</span>
				</div>
				<motion.a
					href="https://shreyvijayvargiya.gumroad.com/l/email-templates-that-converts"
					whileHover={{ scale: 1.04 }}
					whileTap={{ scale: 0.97 }}
					className="text-sm font-semibold text-white rounded-full px-5 py-2.5"
					style={{
						background: "linear-gradient(135deg, #f97316, #ec4899)",
						boxShadow: "0 4px 14px rgba(249,115,22,0.35)",
					}}
				>
					Get Access →
				</motion.a>
			</motion.nav>

			{/* Hero */}
			<motion.section
				style={{ y: heroY }}
				className="text-center px-6 pt-20 pb-12 relative overflow-hidden"
			>
				{/* bg blobs */}
				<div className="absolute inset-0 pointer-events-none">
					<div
						className="absolute top-10 left-1/4 w-80 h-80 rounded-full blur-3xl opacity-30"
						style={{ background: "#fdba74" }}
					/>
					<div
						className="absolute top-20 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-20"
						style={{ background: "#c4b5fd" }}
					/>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-xs font-semibold"
					style={{
						background: "#fff7ed",
						border: "1px solid #fed7aa",
						color: "#ea580c",
					}}
				>
					<span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
					300+ Premium Email Templates
				</motion.div>

				<motion.h1
					initial={{ opacity: 0, y: 25 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.1 }}
					className="text-slate-900 leading-none mb-6 relative"
					style={{
						fontFamily: "'Playfair Display', serif",
						fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
						fontWeight: 900,
					}}
				>
					Emails that get
					<br />
					<span
						style={{
							background: "linear-gradient(135deg, #f97316, #ec4899)",
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
						}}
					>
						opened & clicked.
					</span>
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="text-slate-500 text-lg mb-10 max-w-lg mx-auto leading-relaxed"
					style={{ fontWeight: 400 }}
				>
					A growing library of beautifully designed email templates across every
					category — ready to copy, customize, and send.
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.3 }}
					className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-16"
				>
					<motion.a
						id="get-access"
						href="https://shreyvijayvargiya.gumroad.com/l/email-templates-that-converts"
						whileHover={{
							scale: 1.05,
							boxShadow: "0 8px 30px rgba(249,115,22,0.45)",
						}}
						whileTap={{ scale: 0.97 }}
						className="font-bold text-white rounded-full px-10 py-4 text-base relative overflow-hidden"
						style={{
							background: "linear-gradient(135deg, #f97316, #ec4899)",
							boxShadow: "0 4px 20px rgba(249,115,22,0.35)",
						}}
					>
						<span className="relative z-10">Get Instant Access — Pay Once</span>
					</motion.a>
					<span className="text-slate-400 text-sm">
						No subscription. No login. Just download.
					</span>
				</motion.div>

				{/* Stats row */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5, duration: 0.6 }}
					className="flex justify-center gap-12 mb-16"
				>
					{[
						["300+", "Templates"],
						["8+", "Categories"],
						["1×", "Payment"],
					].map(([num, label]) => (
						<div key={label} className="text-center">
							<div
								className="text-2xl font-black text-slate-800"
								style={{ fontFamily: "'Playfair Display', serif" }}
							>
								{num}
							</div>
							<div className="text-xs text-slate-400 font-medium">{label}</div>
						</div>
					))}
				</motion.div>
			</motion.section>

			{/* Marquee previews */}
			<div
				className="overflow-hidden py-6 mb-6"
				style={{
					borderTop: "1px solid #f0ede8",
					borderBottom: "1px solid #f0ede8",
					background: "#fdf8f5",
				}}
			>
				<div
					className="flex gap-4"
					style={{
						transform: `translateX(${marqueeX}px)`,
						width: "max-content",
					}}
				>
					{[...previews, ...previews, ...previews, ...previews].map((p, i) => (
						<FloatingCard key={i} preview={p} index={i % 6} />
					))}
				</div>
			</div>

			{/* Template gallery */}
			<section className="max-w-6xl mx-auto px-6 py-16">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="text-center mb-10"
				>
					<h2
						className="text-slate-800 mb-3"
						style={{
							fontFamily: "'Playfair Display', serif",
							fontSize: "2.2rem",
							fontWeight: 800,
						}}
					>
						Browse all templates
					</h2>
					<p className="text-slate-400 text-base">
						Click any template to preview in full size.
					</p>
				</motion.div>
				{imagesLoading ? (
					<div className="flex justify-center py-20">
						<div className="w-10 h-10 rounded-full border-2 border-orange-400 border-t-transparent animate-spin" />
					</div>
				) : images.length > 0 ? (
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
						{images.map((img, i) => (
							<TemplateImageCard
								key={img.src}
								image={img}
								index={i}
								onClick={setSelectedImage}
							/>
						))}
					</div>
				) : (
					<div className="text-center py-20 text-slate-400">
						No template images found.
					</div>
				)}
			</section>

			<AnimatePresence>
				{selectedImage && (
					<ImageModal
						image={selectedImage}
						onClose={() => setSelectedImage(null)}
					/>
				)}
			</AnimatePresence>

			{/* Categories */}
			<section className="max-w-3xl mx-auto px-6 py-16">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="text-center mb-12"
				>
					<h2
						className="text-slate-800 mb-3"
						style={{
							fontFamily: "'Playfair Display', serif",
							fontSize: "2.2rem",
							fontWeight: 800,
						}}
					>
						Every email, covered.
					</h2>
					<p className="text-slate-400 text-base">
						Templates for every stage of your customer journey.
					</p>
				</motion.div>
				<div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
					{categories.map((cat, i) => (
						<CategoryPill key={cat.name} cat={cat} index={i} />
					))}
				</div>
			</section>

			{/* What you get */}
			<section className="max-w-3xl mx-auto px-6 pb-16">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="rounded-3xl p-8 sm:p-12 text-center"
					style={{
						background: "linear-gradient(135deg, #fff7ed, #fdf4ff)",
						border: "1px solid #fed7aa",
					}}
				>
					<h2
						className="text-slate-800 mb-4"
						style={{
							fontFamily: "'Playfair Display', serif",
							fontSize: "2rem",
							fontWeight: 800,
						}}
					>
						What you get
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
						{[
							{
								icon: "🖼",
								title: "300+ Images",
								desc: "High-res email template previews, organized by category",
							},
							{
								icon: "⚡",
								title: "Instant Zip",
								desc: "One payment, instant download. No account needed.",
							},
							{
								icon: "♾",
								title: "Growing Library",
								desc: "New templates added regularly — you get updates free.",
							},
						].map((item, i) => (
							<motion.div
								key={item.title}
								initial={{ opacity: 0, y: 15 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.1, duration: 0.5 }}
								className="text-center p-4"
							>
								<div className="text-3xl mb-3">{item.icon}</div>
								<div className="font-bold text-slate-800 mb-1 text-base">
									{item.title}
								</div>
								<div className="text-slate-400 text-sm leading-relaxed">
									{item.desc}
								</div>
							</motion.div>
						))}
					</div>

					{/* CTA */}
					<motion.a
						href="https://shreyvijayvargiya.gumroad.com/l/email-templates-that-converts"
						whileHover={{
							scale: 1.05,
							boxShadow: "0 10px 35px rgba(249,115,22,0.45)",
						}}
						whileTap={{ scale: 0.97 }}
						className="inline-block font-bold text-white rounded-full px-12 py-4 text-base"
						style={{
							background: "linear-gradient(135deg, #f97316, #ec4899)",
							boxShadow: "0 4px 20px rgba(249,115,22,0.35)",
						}}
					>
						Pay Once, Get Everything →
					</motion.a>
					<div className="text-xs text-slate-400 mt-3">
						Secure checkout · Instant download · No subscription
					</div>
				</motion.div>
			</section>

			{/* Footer */}
			<footer
				className="text-center pb-10 text-slate-400 text-xs"
				style={{ borderTop: "1px solid #f0ede8", paddingTop: 24 }}
			>
				<div className="flex items-center justify-center gap-2 mb-2">
					<div
						className="w-5 h-5 rounded-md flex items-center justify-center"
						style={{ background: "linear-gradient(135deg, #f97316, #ec4899)" }}
					>
						<span className="text-white text-xs font-bold">@</span>
					</div>
					<span className="font-semibold text-slate-600 text-sm">MailKit</span>
				</div>
				300+ email templates for teams who care about design.
			</footer>
		</div>
	);
}