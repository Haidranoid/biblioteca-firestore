import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import EditarSubscriptor from "./subscriptores/EditarSubscriptor";
import MostrarSubscriptor from "./subscriptores/MostrarSubscriptor";
import NuevoSubscriptor from "./subscriptores/NuevoSubscriptor";
import Subscriptores from "./subscriptores/Subscriptores";
import NavBar from "./layout/NavBar";
import Home from "./layout/Home";
import _404 from "./layout/_404";

function App() {
  return (
    <Router>
      <NavBar/>
      <div className="container">

        <Switch>
          <Route exact path="/subscriptores/nuevo" component={NuevoSubscriptor}/>
          <Route exact path="/subscriptores" component={Subscriptores}/>
          <Route exact path="/subscriptores/editar/:id" component={EditarSubscriptor}/>
          <Route exact path="/subscriptores/:id" component={MostrarSubscriptor}/>
          <Route exact path="/" component={Home}/>
          <Route component={_404}/>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
