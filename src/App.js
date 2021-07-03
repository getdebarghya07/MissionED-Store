import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Explorecourses from "./components/pages/Explorecourses";
import Authentication from "./components/pages/Authentication";
import { AuthProvider } from "./contexts/AuthContext";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/ForgotPassword";
import UpdateProfile from "./components/UpdateProfile";
import Refreshtotop from "./components/Refreshtotop";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Refreshtotop>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Explorecourses" exact component={Explorecourses} />
          </Switch>
        </Refreshtotop>
        <Switch>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/Dashboard" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/Sign-up" component={Authentication} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
