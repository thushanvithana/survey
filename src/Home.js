import React from "react";

const Home = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            {/* Hero Section */}
            <section className="relative overflow-hidden text-black text-center py-12 flex-grow">
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute inset-0 w-full h-full object-cover"
                    src="https://videos.pexels.com/video-files/7579973/7579973-hd_1280_720_50fps.mp4"
                />
                <div className="relative z-10 container mx-auto px-4 py-12">
                    <h1 className="text-5xl font-extrabold mb-4">Welcome to the comprehensive tool for retinopathy prediction</h1>
                    <p className="text-lg mb-6">
                        Empowering patients and professionals with advanced tools for diabetes management and retinopathy prediction.
                    </p>
                    <div className="flex justify-center">
                        <a href="#features" className="bg-white text-indigo-600 px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">Learn More</a>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-semibold text-center mb-8">Our Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                            <h3 className="text-xl font-semibold mb-4">Survey Form</h3>
                            <p className="text-gray-700 mb-4">
                                Easily log your medical data including blood pressure, glucose levels, and more through our user-friendly survey form.
                            </p>
                            <a href="/survey" className="text-indigo-600 hover:underline">Start Survey</a>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                            <h3 className="text-xl font-semibold mb-4">Retinopathy Prediction</h3>
                            <p className="text-gray-700 mb-4">
                                Use our advanced prediction tool to assess the risk of retinopathy based on your medical information.
                            </p>
                            <a href="/predict" className="text-indigo-600 hover:underline">Make a Prediction</a>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                            <h3 className="text-xl font-semibold mb-4">Insights & Reports</h3>
                            <p className="text-gray-700 mb-4">
                                Access detailed insights and reports based on your survey data and predictions to track your health progress.
                            </p>
                            <a href="#reports" className="text-indigo-600 hover:underline">Explore Reports</a>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-gray-800 text-white text-center py-4">
                <p className="text-sm">&copy; 2024. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
