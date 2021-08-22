import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./component/pages/Home";
import Counter from "./component/pages/Counter";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Counter" component={Counter} />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
