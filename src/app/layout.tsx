import type { Metadata } from "next";
import "./globals.css";
import "@/assets/styles/index.scss";
import { Header } from "@/components/Header";
import { ConfirmDialog } from "@/components/ui/ConfirmDialog";

export const metadata: Metadata =
{
	title: "Next Frontend Template",
	description: "Шаблон фронтенда на Next.js",
};

export default function RootLayout(
	{
		children,
	}: Readonly<
	{
		children: React.ReactNode;
	}>
)
{
	return (
		<html lang="ru">
			<body>
				<div className="default-layout">
					<Header />
					<main className="default-layout__main">
						{children}
					</main>
				</div>
				<ConfirmDialog />
			</body>
		</html>
	);
}
