import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About"
import Home from "./components/Home"
import NoteState from "./context/notes/NotesState";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import AlertState from "./context/alert/AlertState";
export default function App() {

  return (
    <NoteState>
      <AlertState>
    <Router>
      
      
        <Navbar />
      
        <div className="container">
        <Switch>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/signUp" exact>
            <SignUp />
          </Route>
        </Switch>
      </div>
    </Router>
    </AlertState>

    </NoteState>
  );
}
