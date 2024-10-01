import React, { useState } from "react";
import axios from "axios";
import { Loading, Notify } from "notiflix";
import { server_name } from "./api";
import { useNavigate } from "react-router-dom";


const RetinopathyPrediction = () => {
    const [formData, setFormData] = useState({
        gender: "Male",
        diabetesType: "Type 1",
        systolicBP: 120,
        diastolicBP: 80,
        hbA1c: 90,
        estimatedAvgGlucose: 150,
        diagnosisYear: 2014,
    });

    const [prediction, setPrediction] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        Loading.circle('Predicting...');

        const response = await axios.post(`${server_name}/predict-retinopathy`, formData);

        console.log(response.data);
        Loading.remove();
        const predictionMessage = parseInt(response.data.prediction) === 0
            ? "You're not at risk for retinopathy."
            : "You have a possibility of retinopathy.";

        const resultMessage = `Predicted Result: ${predictionMessage}`;

        setPrediction(resultMessage);
    };

    return (
        <>
            <div className="relative bg-white overflow-hidden min-h-screen">
                <div className="absolute inset-0">
                    <video
                        autoPlay
                        muted
                        loop
                        className="w-full h-full object-cover"
                        src="https://videos.pexels.com/video-files/9150545/9150545-hd_1280_720_24fps.mp4"
                    />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                <div className="relative z-10 max-w-4xl mx-auto p-8">
                    <div className="bg-white bg-opacity-70 backdrop-blur-md p-8 rounded-lg shadow-xl border border-gray-200">
                        <h2 className="text-4xl font-bold mb-6 text-center text-gray-900">Retinopathy Prediction</h2>
                        {
                            !prediction && (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Gender */}
                                    <div>
                                        <label className="block text-lg font-semibold text-gray-800 mb-2">Gender</label>
                                        <select
                                            name="gender"
                                            value={formData.gender}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        >
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                    </div>

                                    {/* Diabetes Type */}
                                    <div>
                                        <label className="block text-lg font-semibold text-gray-800 mb-2">Diabetes Type</label>
                                        <select
                                            name="diabetesType"
                                            value={formData.diabetesType}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        >
                                            <option value="Type 1">Type 1</option>
                                            <option value="Type 2">Type 2</option>
                                        </select>
                                    </div>

                                    {/* Systolic BP */}
                                    <div>
                                        <label className="block text-lg font-semibold text-gray-800 mb-2">Systolic BP</label>
                                        <input
                                            type="number"
                                            name="systolicBP"
                                            value={formData.systolicBP}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        />
                                    </div>

                                    {/* Diastolic BP */}
                                    <div>
                                        <label className="block text-lg font-semibold text-gray-800 mb-2">Diastolic BP</label>
                                        <input
                                            type="number"
                                            name="diastolicBP"
                                            value={formData.diastolicBP}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        />
                                    </div>

                                    {/* HbA1c (mmol/mol) */}
                                    <div>
                                        <label className="block text-lg font-semibold text-gray-800 mb-2">HbA1c (mmol/mol)</label>
                                        <input
                                            type="number"
                                            name="hbA1c"
                                            value={formData.hbA1c}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        />
                                    </div>

                                    {/* Estimated Avg Glucose (mg/dL) */}
                                    <div>
                                        <label className="block text-lg font-semibold text-gray-800 mb-2">Estimated Avg Glucose (mg/dL)</label>
                                        <input
                                            type="number"
                                            name="estimatedAvgGlucose"
                                            value={formData.estimatedAvgGlucose}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        />
                                    </div>

                                    {/* Diagnosis Year */}
                                    <div>
                                        <label className="block text-lg font-semibold text-gray-800 mb-2">Diagnosis Year</label>
                                        <input
                                            type="number"
                                            name="diagnosisYear"
                                            value={formData.diagnosisYear}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500"
                                    >
                                        Predict
                                    </button>
                                </form>
                            )
                        }

                        {/* Prediction Result */}
                        {prediction && (
                            <div className="mt-8 p-6 bg-gray-100 rounded-lg shadow-md">
                                <h3 className="text-2xl font-semibold text-gray-800">Prediction Result</h3>
                                <p className="text-lg text-gray-700 mt-2">{prediction}</p>
                            </div>
                        )}
                    </div>

                </div>

            </div>
            <footer className="bg-gray-800 text-white text-center py-4">
                <p className="text-sm">&copy; 2024. All rights reserved.</p>
            </footer>
        </>
    );
};

export default RetinopathyPrediction;
