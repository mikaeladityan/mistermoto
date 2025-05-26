import { About } from "~/components/about";
import { CTA } from "~/components/cta";
import { FAQAccordion } from "~/components/faq";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import { Navbar } from "~/components/navbar";
import { Option } from "~/components/option";
import { Pricing } from "~/components/pricing";
import { Review } from "~/components/review";
import { Superiority } from "~/components/superiority";
import { Table } from "~/components/table";

export default function Home() {
	return (
		<>
			<Navbar />
			<Header />
			<Superiority />
			<main className="flex flex-col space-y-10">
				<About />
				<Option />
				<Table />
				<Pricing />
				<Review />
				<FAQAccordion />
				<CTA />
			</main>
			<Footer />
		</>
	);
}
