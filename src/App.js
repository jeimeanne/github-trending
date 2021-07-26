import { BrowserRouter, Route, Switch } from "react-router-dom";
import Trending from "./components/Trending";
import Developers from "./components/Developers";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Trending} path='/' exact />
        <Route component={Developers} path='/developers' />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
