import React, { useState } from "react";
import axios from "axios";
import { Loading, Notify } from "notiflix";
import { server_name } from "./api";
import { useNavigate } from "react-router-dom";

const MedicalSurveyForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        gender: "Male",
        diabetesType: "Type 1",
        systolicBP: 120,
        diastolicBP: 80,
        hbA1c: 90,
        estimatedAvgGlucose: 150,
        diagnosisYear: 2014,
        retinopathyStatus: "No",
        retinopathyProbability: 0.0,
    });

    const [completed, setCompleted] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        Loading.circle('Submitting...');

        await axios.post(`${server_name}/submit-data`, formData);

        Loading.remove();
        Notify.success('Thank you for your contribution!');
        navigate('/');
        // setCompleted(true);

    };

    return (
        <div className="relative min-h-screen bg-gradient-to-r from-blue-200 via-purple-300 to-pink-300 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full bg-black opacity-40"></div>
            </div>
            <div className="relative z-10 max-w-4xl mx-auto p-8">
                <div className="bg-white bg-opacity-60 backdrop-blur-md p-8 rounded-xl shadow-xl border border-gray-200">
                    <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-900">Medical Survey Form</h2>
                    {
                        completed ? (
                            <>
                                <h5 className="text-green-600 text-center font-bold">Thank you!</h5>

                            </>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Gender */}
                                <div>
                                    <label className="block text-lg font-semibold text-gray-800 mb-2">Gender</label>
                                    <select
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                                        required={true}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                                        required={true}

                                        className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                                        required={true}

                                        className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                                        required={true}

                                        className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                                        required={true}

                                        className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                {/* Retinopathy Status */}
                                <div>
                                    <label className="block text-lg font-semibold text-gray-800 mb-2">Retinopathy Status</label>
                                    <select
                                        name="retinopathyStatus"
                                        value={formData.retinopathyStatus}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="No">No</option>
                                        <option value="Mild Non-Proliferative">Mild Non-Proliferative</option>
                                        <option value="Moderate Non-Proliferative">Moderate Non-Proliferative</option>
                                        <option value="Severe Non-Proliferative">Severe Non-Proliferative</option>
                                        <option value="Proliferative">Proliferative</option>
                                    </select>
                                </div>

                                {/* Retinopathy Probability */}
                                <div>
                                    <label className="block text-lg font-semibold text-gray-800 mb-2">Retinopathy Probability</label>
                                    <select
                                        name="retinopathyProbability"
                                        value={formData.retinopathyProbability}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value={0}>0</option>
                                        <option value={0.5}>0.5</option>
                                        <option value={1.5}>1.5</option>
                                        <option value={2.5}>2.5</option>
                                        <option value={3.5}>3.5</option>
                                        <option value={4.5}>4.5</option>
                                    </select>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out"
                                >
                                    Submit
                                </button>
                            </form>
                        )
                    }
                </div>
            </div>
            <footer className="bg-gray-800 text-white text-center py-4">
                <p className="text-sm">&copy; 2024. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default MedicalSurveyForm;
