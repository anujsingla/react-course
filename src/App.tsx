import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContextProvider } from "./context/UserContextProvider";
import { AppRoutes } from './Components/AppRoutes';
import { NavLinkComponent } from './Components/NavLinkComponent';
import { HashRouter } from "react-router-dom";

const queryClient = new QueryClient();

function App() {
  return (
    <HashRouter>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <header className="App-header">
            <UserContextProvider>
              <NavLinkComponent />
              <AppRoutes />
            </UserContextProvider>
          </header>
        </div>
      </QueryClientProvider>
    </HashRouter>
  );
}

export default App;
