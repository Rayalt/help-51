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

ReactDOM.createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<StoreProvider>
			<Suspense fallback=''>
				<ErrorBoundary fallback={<ErrorMessage />}>
					<App />
				</ErrorBoundary>
			</Suspense>
		</StoreProvider>
	</BrowserRouter>
);