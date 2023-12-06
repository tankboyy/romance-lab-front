import BackNav from "@/_component/free/backNav";

export default function Layout({
																 children, // will be a page or nested layout
															 }: {
	children: React.ReactNode
}) {

	return (
		<section>
			<body className="bg-[#f5f5f5]">
			<main>
				{children}
			</main>
			</body>
		</section>
	);
}