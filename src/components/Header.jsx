"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS =
[
	{ href: "/", label: "Главная" },
	{ href: "/form", label: "Форма" },
	{ href: "/components", label: "Все компоненты" },
	{ href: "/api", label: "Апишки" },
	{ href: "/store", label: "Стор" },
];

export function Header()
{
	const pathname = usePathname();

	return (
		<div className="container">
			<header className="header">
				<nav className="header__navigation">
					{NAV_LINKS.map(({ href, label }) =>
					{
						const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
						return (
							<Link
								key={href}
								href={href}
								className={`header__navigation-link ${isActive ? "active" : ""}`}
							>
								{label}
							</Link>
						);
					})}
				</nav>
			</header>
		</div>
	);
}
