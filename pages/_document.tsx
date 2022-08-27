import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html>
			<Head>
				<link rel='icon' href='/favicon.ico' />

				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin='anonymous'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700&display=swap'
					rel='stylesheet'
				/>
				<title>
					Hacker News Posts |
					Find the latest tech posts
				</title>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
