// import logo from './logo.svg';
import './App.css';
import InsertPartner from './views/InsertPartner';
import MyComponent from './views/InsertPartner';
import { Navlink } from './views/NavLink';
import ShowData from './views/ShowData';
import SearchData from './views/SearchData';
import Update from './views/Update';
// import update
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navlink />

        <Switch>
          <Route exact path="/insert">
            <InsertPartner />
          </Route>
          <Route path="/getall">
            <ShowData />
          </Route>
          <Route path="/getcommon">
            <SearchData />
          </Route>
          <Route path="/update">
            <Update />
          </Route>
        </ Switch >
      </div >


    </BrowserRouter>

  );
}

export default App;
