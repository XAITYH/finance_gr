import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
	weight: ['400', '700'],
	subsets: ['latin'],
});

export const metadata = {
	title: 'Школа финансовой грамоты "Филин"',
	description: 'Научись управлять своими финансами вместе с нами!',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={montserrat.className}>{children}</body>
		</html>
	);
}
