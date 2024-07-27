import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import OrganDonorForm from "./components/OrganDonorForm";
import HospitalForm from "./components/HospitalForm";
import BloodDonorForm from "./components/BloodDonorForm";
import BloodBankForm from "./components/BloodBankForm";
import PatientForm from "./components/PatientForm";
import DetailsPage from "./components/DetailsPage";
import Login from "./components/Login";
import Register from "./components/Register";
import HomePage from "./Pages/HomePage";
import Profile from "./components/Profile";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = !!localStorage.getItem("token");
  return isLoggedIn ? children : <Navigate to="/" />;
};

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/details" element={<DetailsPage />} />
      

        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />

        <Route
          path="/register-organ-donor"
          element={
            <PrivateRoute>
              <OrganDonorForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/register-hospital"
          element={
            <PrivateRoute>
              <HospitalForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/register-blood-donor"
          element={
            <PrivateRoute>
              <BloodDonorForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/register-blood-bank"
          element={
            <PrivateRoute>
              <BloodBankForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/register-patient"
          element={
            <PrivateRoute>
              <PatientForm />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
