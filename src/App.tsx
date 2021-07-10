import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter } from "react-router-dom";
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorBoundaryFallbackComponent } from "./Components/ErrorBoundaryFallbackComponent";
import { UserList } from "./Components/UserList";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const queryClient = new QueryClient();

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <div className="App">
            <header className="App-header">
              <ErrorBoundary FallbackComponent={ErrorBoundaryFallbackComponent}>
                <UserList />
              </ErrorBoundary>
            </header>
          </div>
        </QueryClientProvider>
      </Provider>
    </HashRouter>
  );
}

export default App;
