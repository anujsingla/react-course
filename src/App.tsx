import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter } from "react-router-dom";
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorBoundaryFallbackComponent } from "./Components/ErrorBoundaryFallbackComponent";
import { ErrorBoundaryHandle } from "./Components/ErrorBoundaryHandle";

const queryClient = new QueryClient();

function App() {
  return (
    <HashRouter>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <header className="App-header">
            <ErrorBoundary FallbackComponent={ErrorBoundaryFallbackComponent}>
              <ErrorBoundaryHandle />
            </ErrorBoundary>
            <ErrorBoundaryHandle />
          </header>
        </div>
      </QueryClientProvider>
    </HashRouter>
  );
}

export default App;
