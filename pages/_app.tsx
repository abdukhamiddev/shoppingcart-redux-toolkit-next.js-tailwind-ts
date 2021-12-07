import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider as StoreProvider } from 'react-redux';
import { store } from '../store/intex';
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta
					httpEquiv='Content-Security-Policy'
					content='upgrade-insecure-requests'
				/>
			</Head>
			<StoreProvider store={store}>
				<Component {...pageProps} />
			</StoreProvider>
		</>
	);
}

export default MyApp;
