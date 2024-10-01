// import logo from './logo.svg';
import './App.css';
import MedicalSurveyForm from './SurveyPage';

// import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import RetinopathyPrediction from "./RetinopathyPrediction";



function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <nav className="bg-indigo-600 p-4 text-white">
          <div className="max-w-7xl mx-auto flex justify-between">
            <Link to="/" className="text-lg font-bold">Medical App</Link>
            <div className="space-x-4">
              <Link to="/" className="hover:underline">Home</Link>
              <Link to="/survey" className="hover:underline">Survey Form</Link>
              <Link to="/predict" className="hover:underline">Retinopathy Prediction</Link>
            </div>
          </div>
        </nav>

        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/survey" element={<MedicalSurveyForm />} />
            <Route path="/predict" element={<RetinopathyPrediction />} />
          </Routes>
        </div>
      </div>
    </Router>

  );
}

export default App;
