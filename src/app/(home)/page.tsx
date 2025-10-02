"use client";
import { Navbar } from "@/app/(home)/navbar";
import { TemplateGallery } from "@/app/(home)/template-gallery";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import {FullScreenLoader} from "@/components/full-screen-loader";

const Home = () => {
    const documents = useQuery(api.documents.get);

    if (!documents) {
        return (
            <FullScreenLoader label="Please Wait"/>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            {/* Navbar */}
            <div className="fixed top-0 left-0 right-0 z-50 h-16 bg-white shadow-md border-b border-gray-200">
                <Navbar />
            </div>

            {/* Hero Section */}
            <section className="relative mt-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-24 px-6 sm:px-12 lg:px-24">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
                        Create, Collaborate, & Share
                    </h1>
                    <p className="text-lg sm:text-xl text-white/80 mb-8">
                        Your all-in-one document editor for work, projects, and personal notes. Start with templates or create a blank document instantly.
                    </p>
                    <div className="flex justify-center gap-4">
                        <a
                            href="#templates"
                            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-xl transition"
                        >
                            Explore Templates
                        </a>
                        <a
                            href="#documents"
                            className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition"
                        >
                            My Documents
                        </a>
                    </div>
                </div>

                {/* Decorative background */}
                <div className="absolute inset-0 overflow-hidden -z-10">
                    <svg
                        className="absolute top-0 left-1/2 transform -translate-x-1/2 opacity-20"
                        width="1200"
                        height="600"
                        fill="none"
                        viewBox="0 0 1200 600"
                    >
                        <circle cx="600" cy="300" r="300" fill="white" />
                    </svg>
                </div>
            </section>

            {/* Template Gallery */}
            <section id="templates" className="px-6 sm:px-12 lg:px-24 py-16">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Templates</h2>
                <TemplateGallery />
            </section>

            {/* User Documents */}
            <section id="documents" className="px-6 sm:px-12 lg:px-24 py-16 bg-white">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">My Documents</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {documents.map((document) => (
                        <div
                            key={document._id}
                            className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
                        >
                            <h3 className="font-semibold text-lg text-gray-800">{document.title}</h3>
                            {document.initialContent && (
                                <p className="text-gray-500 mt-2 line-clamp-3">{document.initialContent}</p>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;