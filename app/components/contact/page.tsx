import Link from "next/link";
import Footer from "../footer/page";
import Navbar from "../navbar/page";
import Offer from "../offer/page";

export default function Contact() {
    return (
        <>
        <Offer/>
        <Navbar/>
      <div className="min-h-screen bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="text-sm mb-6">
            <Link href="/" className="text-gray-600">Home</Link> / <span className="text-gray-800">Contact</span>
          </div>
  
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold text-red-500 mb-4 flex items-center">
                <i className="fas fa-phone-alt mr-2"></i> Call To Us
              </h2>
              <p className="text-gray-600 mb-4">We are available 24/7, 7 days a week.</p>
              <p className="text-gray-800 font-semibold mb-6">Phone: +88001112222</p>
              <hr className="mb-6" />
              <h2 className="text-lg font-semibold text-red-500 mb-4 flex items-center">
                <i className="fas fa-envelope mr-2"></i> Write To Us
              </h2>
              <p className="text-gray-600 mb-2">Fill out our form and we will contact you within 24 hours.</p>
              <p className="text-gray-800 ">Email: customer@exclusive.com</p>
              <p className="text-gray-800 ">Email: support@exclusive.com</p>
            </div>
  
            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name *"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email *"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Your Phone *"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  ></textarea>
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      </>
    );
  }
  