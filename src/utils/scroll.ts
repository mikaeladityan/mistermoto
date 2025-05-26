export const scrollToSection = (e: React.MouseEvent, href: string) => {
	e.preventDefault();
	const id = href.replace("#", ""); // Remove "#" if present
	const el = document.getElementById(id);
	if (!el) return;
	const topPos = el.getBoundingClientRect().top + window.pageYOffset - 100;
	window.scrollTo({ top: topPos, behavior: "smooth" });
};
