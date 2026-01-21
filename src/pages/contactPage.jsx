
import { 
	FiMail, 
	FiPhone, 
	FiMapPin,
	FiClock,
	FiMessageSquare
} from "react-icons/fi";

export default function ContactPage() {

	return (
		<div className="w-full min-h-[calc(100vh-100px)] bg-gradient-to-b from-primary to-white text-secondary">
			{/* Hero Section */}
			<div className="relative w-full h-[300px] overflow-hidden">
				<div
					className="absolute inset-0 bg-cover bg-center"
					style={{ backgroundImage: "url('/bg.jpg')" }}
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
				<div className="relative z-10 flex items-center justify-center h-full">
					<div className="text-center px-4">
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
							Contact <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">Us</span>
						</h1>
						<p className="text-lg md:text-xl text-cyan-100 max-w-2xl">
							Get in touch with our team - we're here to help!
						</p>
					</div>
				</div>
			</div>

			{/* Main Content */}
			<div className="max-w-3xl mx-auto px-4 py-12 flex flex-col items-center justify-center">
				<div className="grid grid-cols-1 w-full">
					{/* Contact Info */}
					<div className="lg:col-span-1 space-y-6 w-full">
						<div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-secondary/10">
							<h2 className="text-2xl font-bold text-secondary mb-6 text-center">
								Get in Touch
							</h2>
							
							<div className="space-y-6">
								<div className="flex items-start gap-4">
									<div className="bg-accent/20 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
										<FiMail className="text-xl text-accent" />
									</div>
									<div>
										<h3 className="font-semibold text-secondary mb-1">Email</h3>
										<a 
											href="mailto:info@icomputers.com" 
											className="text-accent hover:underline"
										>
											info@computershop.com
										</a>
										<p className="text-sm text-secondary/70 mt-1">
											We'll respond within 24 hours
										</p>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="bg-accent/20 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
										<FiPhone className="text-xl text-accent" />
									</div>
									<div>
										<h3 className="font-semibold text-secondary mb-1">Phone</h3>
										<a 
											href="tel:+94112345678" 
											className="text-accent hover:underline"
										>
											+94 11 233 9678
										</a>
										<p className="text-sm text-secondary/70 mt-1">
											Mon-Sat: 9:00 AM - 6:00 PM
										</p>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="bg-accent/20 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
										<FiMapPin className="text-xl text-accent" />
									</div>
									<div>
										<h3 className="font-semibold text-secondary mb-1">Address</h3>
										<p className="text-secondary/80">
											123 Computer Street,<br />
											Colombo 05,<br />
											Sri Lanka
										</p>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="bg-accent/20 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
										<FiClock className="text-xl text-accent" />
									</div>
									<div>
										<h3 className="font-semibold text-secondary mb-1">Business Hours</h3>
										<p className="text-secondary/80 text-sm">
											Monday - Friday: 9:00 AM - 6:00 PM<br />
											Saturday: 9:00 AM - 4:00 PM<br />
											Sunday: Closed
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="bg-gradient-to-r from-accent/20 to-indigo-500/20 rounded-2xl p-6 shadow-lg">
							<h3 className="font-bold text-secondary mb-3 flex items-center gap-2">
								<FiMessageSquare className="text-accent" />
								Need Help?
							</h3>
							<p className="text-secondary/80 text-sm">
								Have questions about our products or services? 
								Our friendly team is ready to assist you with any inquiries.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}