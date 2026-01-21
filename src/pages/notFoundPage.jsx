import { Link } from "react-router-dom";
import { FiHome, FiSearch, FiArrowLeft } from "react-icons/fi";

export default function NotFoundPage() {
	return (
		<div className="w-full min-h-[calc(100vh-100px)] bg-gradient-to-b from-primary to-white text-secondary flex items-center justify-center">
			<div className="max-w-2xl mx-auto px-4 py-12 text-center">
				{/* 404 Illustration */}
				<div className="mb-8">
					<div className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-accent via-indigo-500 to-violet-500 bg-clip-text text-transparent mb-4">
						404
					</div>
					<div className="w-32 h-1 bg-gradient-to-r from-accent via-indigo-500 to-violet-500 mx-auto rounded-full"></div>
				</div>

				{/* Error Message */}
				<h1 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
					Page Not Found
				</h1>
				<p className="text-lg text-secondary/80 mb-8 max-w-md mx-auto">
					Oops! The page you're looking for doesn't exist. It might have been moved, 
					deleted, or the URL might be incorrect.
				</p>

				{/* Action Buttons */}
				<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
					<Link
						to="/"
						className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-white rounded-full font-semibold hover:bg-accent/90 transition shadow-lg hover:shadow-xl"
					>
						<FiHome />
						Go to Homepage
					</Link>
					<Link
						to="/products"
						className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-accent text-accent rounded-full font-semibold hover:bg-accent/10 transition"
					>
						<FiSearch />
						Browse Products
					</Link>
				</div>

				{/* Quick Links */}
				<div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-secondary/10">
					<h2 className="text-xl font-bold text-secondary mb-4">
						Popular Pages
					</h2>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
						<Link
							to="/"
							className="text-accent hover:underline text-sm font-medium"
						>
							Home
						</Link>
						<Link
							to="/products"
							className="text-accent hover:underline text-sm font-medium"
						>
							Products
						</Link>
						<Link
							to="/about"
							className="text-accent hover:underline text-sm font-medium"
						>
							About
						</Link>
						<Link
							to="/contact"
							className="text-accent hover:underline text-sm font-medium"
						>
							Contact
						</Link>
					</div>
				</div>

				{/* Back Button */}
				<button
					onClick={() => window.history.back()}
					className="mt-8 inline-flex items-center gap-2 text-secondary/70 hover:text-accent transition"
				>
					<FiArrowLeft />
					<span className="text-sm font-medium">Go Back</span>
				</button>
			</div>
		</div>
	);
}