import { Link } from "react-router-dom";
import { 
	FiPackage, 
	FiTool, 
	FiUsers, 
	FiAward,
	FiTrendingUp,
	FiShield
} from "react-icons/fi";

export default function AboutPage() {
	return (
		<div className="w-full min-h-[calc(100vh-100px)] bg-gradient-to-b from-primary to-white text-secondary">
			{/* Hero Section */}
			<div className="relative w-full h-[400px] overflow-hidden">
				<div
					className="absolute inset-0 bg-cover bg-center"
					style={{ backgroundImage: "url('/bg.jpg')" }}
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
				<div className="relative z-10 flex items-center justify-center h-full">
					<div className="text-center px-4">
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
							About <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">Our Shop</span>
						</h1>
						<p className="text-lg md:text-xl text-cyan-100 max-w-2xl">
							Your trusted partner for all your computing needs
						</p>
					</div>
				</div>
			</div>

			{/* Main Content */}
			<div className="max-w-6xl mx-auto px-4 py-12">
				{/* Mission Section */}
				<section className="mb-16">
					<div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-secondary/10">
						<h2 className="text-3xl font-bold text-secondary mb-6 flex items-center gap-3">
							<FiTrendingUp className="text-accent" />
							Our Mission
						</h2>
						<p className="text-lg text-secondary/90 leading-relaxed mb-4">
							At I-Computers, we believe everyone deserves access to reliable, high-quality computer 
							hardware and exceptional service. Whether you're a student, professional, gamer, or 
							creative professional, we're here to help you find the perfect tech solution.
						</p>
						<p className="text-lg text-secondary/90 leading-relaxed">
							We combine genuine parts, transparent pricing, and friendly guidance to make your 
							tech journey smooth and worry-free.
						</p>
					</div>
				</section>

				{/* Services Section */}
				<section className="mb-16">
					<h2 className="text-3xl font-bold text-secondary mb-8 text-center">
						What We Offer
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						<div className="bg-white/60 backdrop-blur-md rounded-xl p-6 shadow-lg border border-secondary/10 hover:shadow-xl transition-shadow">
							<div className="bg-accent/20 w-14 h-14 rounded-full flex items-center justify-center mb-4">
								<FiPackage className="text-2xl text-accent" />
							</div>
							<h3 className="text-xl font-bold text-secondary mb-2">Product Sales</h3>
							<p className="text-secondary/80">
								Wide range of CPUs, GPUs, motherboards, RAM, storage devices, and complete 
								custom-built systems for every need and budget.
							</p>
						</div>

						<div className="bg-white/60 backdrop-blur-md rounded-xl p-6 shadow-lg border border-secondary/10 hover:shadow-xl transition-shadow">
							<div className="bg-accent/20 w-14 h-14 rounded-full flex items-center justify-center mb-4">
								<FiTool className="text-2xl text-accent" />
							</div>
							<h3 className="text-xl font-bold text-secondary mb-2">Repairs & Upgrades</h3>
							<p className="text-secondary/80">
								Expert diagnostics, SSD upgrades, RAM installation, and comprehensive 
								repair services with data-safe practices.
							</p>
						</div>

						<div className="bg-white/60 backdrop-blur-md rounded-xl p-6 shadow-lg border border-secondary/10 hover:shadow-xl transition-shadow">
							<div className="bg-accent/20 w-14 h-14 rounded-full flex items-center justify-center mb-4">
								<FiUsers className="text-2xl text-accent" />
							</div>
							<h3 className="text-xl font-bold text-secondary mb-2">Consultation</h3>
							<p className="text-secondary/80">
								Friendly guidance to help you choose the right components or systems 
								based on your specific requirements and usage.
							</p>
						</div>

						<div className="bg-white/60 backdrop-blur-md rounded-xl p-6 shadow-lg border border-secondary/10 hover:shadow-xl transition-shadow">
							<div className="bg-accent/20 w-14 h-14 rounded-full flex items-center justify-center mb-4">
								<FiAward className="text-2xl text-accent" />
							</div>
							<h3 className="text-xl font-bold text-secondary mb-2">Quality Assurance</h3>
							<p className="text-secondary/80">
								Only genuine, warranty-backed hardware. We stand behind every product 
								and service we provide.
							</p>
						</div>

						<div className="bg-white/60 backdrop-blur-md rounded-xl p-6 shadow-lg border border-secondary/10 hover:shadow-xl transition-shadow">
							<div className="bg-accent/20 w-14 h-14 rounded-full flex items-center justify-center mb-4">
								<FiShield className="text-2xl text-accent" />
							</div>
							<h3 className="text-xl font-bold text-secondary mb-2">Data Safety</h3>
							<p className="text-secondary/80">
								Your data is our priority. All repairs and upgrades are performed 
								with utmost care to protect your information.
							</p>
						</div>

						<div className="bg-white/60 backdrop-blur-md rounded-xl p-6 shadow-lg border border-secondary/10 hover:shadow-xl transition-shadow">
							<div className="bg-accent/20 w-14 h-14 rounded-full flex items-center justify-center mb-4">
								<FiTrendingUp className="text-2xl text-accent" />
							</div>
							<h3 className="text-xl font-bold text-secondary mb-2">Custom Builds</h3>
							<p className="text-secondary/80">
								From budget-friendly student laptops to high-performance gaming rigs 
								and professional workstations.
							</p>
						</div>
					</div>
				</section>

				{/* Values Section */}
				<section className="mb-16">
					<div className="bg-gradient-to-r from-accent/20 to-indigo-500/20 rounded-2xl p-8 shadow-xl">
						<h2 className="text-3xl font-bold text-secondary mb-6 text-center">
							Our Core Values
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							<div className="text-center">
								<div className="text-4xl font-bold text-accent mb-2">100%</div>
								<h3 className="text-xl font-semibold text-secondary mb-2">Genuine Parts</h3>
								<p className="text-secondary/80">
									We only source and sell authentic, warranty-backed hardware
								</p>
							</div>
							<div className="text-center">
								<div className="text-4xl font-bold text-accent mb-2">0%</div>
								<h3 className="text-xl font-semibold text-secondary mb-2">Hidden Costs</h3>
								<p className="text-secondary/80">
									Transparent pricing with no surprises or hidden fees
								</p>
							</div>
							<div className="text-center">
								<div className="text-4xl font-bold text-accent mb-2">100%</div>
								<h3 className="text-xl font-semibold text-secondary mb-2">Customer Focus</h3>
								<p className="text-secondary/80">
									Your satisfaction is our top priority in every interaction
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="text-center">
					<div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-secondary/10">
						<h2 className="text-3xl font-bold text-secondary mb-4">
							Ready to Get Started?
						</h2>
						<p className="text-lg text-secondary/80 mb-6 max-w-2xl mx-auto">
							Browse our products, get in touch with our team, or visit us in-store. 
							We're here to help you find the perfect tech solution.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link
								to="/products"
								className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white rounded-full font-semibold hover:bg-accent/90 transition shadow-lg hover:shadow-xl"
							>
								Browse Products
							</Link>
							<Link
								to="/contact"
								className="inline-flex items-center justify-center px-6 py-3 border-2 border-accent text-accent rounded-full font-semibold hover:bg-accent/10 transition"
							>
								Contact Us
							</Link>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}