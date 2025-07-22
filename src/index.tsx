import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// абсолютные пути до index.ts
import { App } from 'app/App';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorMessage } from 'widgets';
import { Suspense } from 'react';
import { StoreProvider } from 'app/providers';

// const rootElement: HTMLElement = document.getElementById('root');
// const root = ReactDOM.createRoot(rootElement);
const basename = process.env.NODE_ENV === 'production' ? '/help-51' : '/';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<BrowserRouter basename={basename}>
		<StoreProvider>
			<Suspense fallback=''>
				<ErrorBoundary fallback={<ErrorMessage />}>
					<App />
				</ErrorBoundary>
			</Suspense>
		</StoreProvider>
	</BrowserRouter>
);