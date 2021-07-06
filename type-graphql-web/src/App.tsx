import { ChakraProvider } from '@chakra-ui/react';
import { Home } from "./pages/Home";
import { NavBar } from "./components/NavBar";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import PersonDetails from "./pages/PersonDetails";
import { QueryResults } from './pages/QueryResults';


function App() {
  
  return (
    <ChakraProvider>
      <BrowserRouter >
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/details" exact component={PersonDetails} />
          <Route path="/results" exact component={QueryResults} />
        </Switch>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
