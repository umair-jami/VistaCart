"use client"
import React from "react";
import Offer from "../components/offer/page";
import Navbar from "../components/navbar/page";
import Footer from "../components/footer/page";

export default function Custom404() {
    return (
        <>
        <Offer/>
        <Navbar/>
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <div className="text-center">
          <p className="text-gray-500 text-sm">Home / 404 Error</p>
          <h1 className="text-6xl font-bold text-black mt-4">404 Not Found</h1>
          <p className="text-gray-500 mt-2">
            Your visited page not found. You may go home page.
          </p>
          <button
            className="mt-6 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600"
            onClick={() => (window.location.href = '/')}
          >
            Back to home page
          </button>
        </div>
      </div>
      <Footer/>
      </>
    );
  }
  