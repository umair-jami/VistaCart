import Footer from "../footer/page";
import Navbar from "../navbar/page";
import Offer from "../offer/page";

export default function Account() {
    return (
        <>
        <Offer/>
        <Navbar/>
      <div className="min-h-screen bg-gray-100 flex flex-col container">
        {/* Header */}
        <header className="py-4 px-6 bg-white shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <nav>
              <ul className="flex space-x-4 text-sm text-gray-600">
                <li>Home</li>
                <li>/</li>
                <li>My Account</li>
              </ul>
            </nav>
            <div className="text-sm">
              Welcome, <span className="text-red-500">Umair jami</span>
            </div>
          </div>
        </header>
  
        {/* Content */}
        <div className="flex flex-1">
          {/* Sidebar */}
          <aside className="w-64 bg-white shadow-md p-6">
            <h3 className="text-lg font-bold mb-4">Manage My Account</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-red-500 font-semibold">My Profile</li>
              <li>Address Book</li>
              <li>My Payment Options</li>
            </ul>
            <h3 className="text-lg font-bold mt-6 mb-4">My Orders</h3>
            <ul className="space-y-2 text-sm">
              <li>My Returns</li>
              <li>My Cancellations</li>
            </ul>
            <h3 className="text-lg font-bold mt-6 mb-4">My Wishlist</h3>
          </aside>
  
          {/* Main Content */}
          <main className="flex-1 bg-white p-8 shadow-md">
            <h1 className="text-2xl font-bold text-red-500 mb-6">Edit Your Profile</h1>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">First Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-2 rounded-md text-Text1"
                    defaultValue="Umair"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-2 rounded-md text-Text1"
                    defaultValue="Jami"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 p-2 rounded-md text-Text1"
                  defaultValue="info@gmail.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 p-2 rounded-md text-Text1"
                  defaultValue="Kingston, 5236, Pakistan"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Password Changes</label>
                <div className="grid grid-cols-1 gap-2">
                  <input
                    type="password"
                    className="w-full border border-gray-300 p-2 rounded-md"
                    placeholder="Current Password"
                  />
                  <input
                    type="password"
                    className="w-full border border-gray-300 p-2 rounded-md"
                    placeholder="New Password"
                  />
                  <input
                    type="password"
                    className="w-full border border-gray-300 p-2 rounded-md"
                    placeholder="Confirm New Password"
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-red-500 text-white py-2 px-4 rounded-md"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </main>
        </div>
      </div>
      <Footer/>
      </>
    );
  }
  