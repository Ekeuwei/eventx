import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/Home";

import Login from "./components/user/Login";
import Register from "./components/user/Register";

import { loadUser } from "./actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import store from "./store";
import Profile from "./components/user/Profile";
import ProtectedRoute from "./components/route/ProtectedRoute";
import UpdateProfile from "./components/user/UpdateProfile";
import UpdatePassword from "./components/user/UpdatePassword";
import ForgotPassword from "./components/user/ForgotPassword";
import NewPassword from "./components/user/NewPassword";

import axios from "axios";

// Payments
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";


import EventList from "./components/planner/EventList";
import EventDetails from "./components/planner/EventDetails";
import EmptyEvent from "./components/planner/EmptyEvent";
import Config from "./components/planner/Config";
import BookingLogin from "./components/booking/BookingLogin";
import AccountSetup from "./components/booking/AccountSetup";
import BookingHome from "./components/booking/BookingHome";
import Notification from "./components/booking/Notification";
import EventsSearch from "./components/booking/EventsSearch";
import Chooser from "./components/Chooser";

// require('dotenv').config();
export const BASE_URI = 'https://ec2-54-245-130-236.us-west-2.compute.amazonaws.com:8443';

function App() {
  const [stripeApiKey, setStripeApiKey] = useState("");

  useEffect(() => {
    store.dispatch(loadUser());

    // async function getStripeApiKey() {
    //   const { data } = await axios.get("/api/v1/stripeapi");
    //   setStripeApiKey(data.stripeApiKey);
    // }

    // getStripeApiKey();
  }, []);

  const { user, isAuthenticated, loading } = useSelector((state) => state.auth);

  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <div className="main-content">
          <Route path="/" component={BookingHome} exact />
          <Route path="/search/:keyword" component={BookingHome} />

          {/* Events Planner */}
          <Route path="/events" component={EventList} />
          <Route path="/stats" component={EventDetails} />
          <Route path="/empty" component={EmptyEvent} />
          <Route path="/config" component={Config} />

          {/* Booking */}
          <Route path="/booking" component={BookingHome} exact />
          <Route path="/booking/login" component={BookingLogin} exact />
          <Route path="/booking/setup" component={AccountSetup} exact />
          <Route path="/booking/notification" component={Notification} />
          <Route path="/booking/search/:keyword" component={EventsSearch} />


          {/* User */}
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} exact />
          <Route path="/password/forgot" component={ForgotPassword} exact />
          <Route path="/password/reset/:token" component={NewPassword} exact />
          <Route path="/user" component={Profile} exact />
          {/* <ProtectedRoute path = "/me" component = {MyProfile} exact /> */}
          <ProtectedRoute path="/me/update" component={UpdateProfile} exact />
          <ProtectedRoute
            path="/password/update"
            component={UpdatePassword}
            exact
          />
        </div>
       

        {/* {!loading && (!isAuthenticated || user.role !== "admin") && <Footer />} */}
      </div>
    </Router>
  );
}

export default App;
