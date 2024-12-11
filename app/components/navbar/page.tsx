"use client";
import Link from "next/link";
import React, { useState } from "react";
import searchIcon from "../../assets/navphoto/Component 2.png";
import whishlist from "../../assets/navphoto/Wishlist.png";
import cart from "../../assets/navphoto/Cart1.png";
import user from "../../assets/navphoto/user.png";
import cancel from "../../assets/navphoto/cancel.png";
import review from "../../assets/navphoto/review.png";
import order from "../../assets/navphoto/order.png";
import logout from "../../assets/navphoto/logout.png";
import manage from "../../assets/navphoto/manage.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for user dropdown
  const router = useRouter();

  // Toggle user dropdown
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      // Assert that the target is an HTMLElement to safely use .closest()
      if (!(event.target instanceof HTMLElement)) return;

      if (!event.target.closest(".user-dropdown")) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <nav className="container mx-auto flex flex-wrap justify-between items-center h-auto sticky top-0 z-30 bg-white px-4 sm:px-6 md:px-12 shadow-md">
      <div className="flex items-center w-full md:w-auto justify-between">
        <h1 style={{ fontWeight: 700 }} className="text-2xl">
          Exclusive
        </h1>
        <button
          className="md:hidden text-xl focus:outline-none"
          aria-label="Toggle Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      <div className="hidden md:flex gap-8">
        <Link href="/">Home</Link>
        <Link href="/components/contact">Contact</Link>
        <Link href="/components/about">About</Link>
        <Link href="/components/signup">Sign Up</Link>
      </div>

      <div
        className={`${
          menuOpen ? "flex" : "hidden"
        } flex-col md:flex-row gap-4 md:gap-8 w-full md:w-auto mt-4 md:mt-0`}
      >
        <Link href="/" className="hover:text-gray-700">
          Home
        </Link>
        <Link href="/components/contact" className="hover:text-gray-700">
          Contact
        </Link>
        <Link href="/components/about" className="hover:text-gray-700">
          About
        </Link>
        <Link href="/components/signup" className="hover:text-gray-700">
          Sign Up
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center mt-4 md:mt-0 w-full md:w-auto">
        <div className="relative w-full md:w-[300px]">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="bg-secondary w-full pl-4 pr-12 py-3 rounded-md focus:outline-none"
          />
          <Image
            src={searchIcon}
            alt="search icon"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer"
          />
        </div>
        <div className="flex gap-4 items-center">
          <Image
            src={whishlist}
            alt="wishlist"
            onClick={() => router.push("/components/wishlist")}
            className="w-5 h-5 cursor-pointer"
          />
          <Image
            src={cart}
            alt="cart"
            onClick={() => router.push("/components/carts")}
            className="w-5 h-5 cursor-pointer"
          />
          {/* User Icon with Dropdown */}
          <div className="relative user-dropdown">
            <Image
              src={user}
              alt="user"
              className="w-5 h-5 cursor-pointer"
              onClick={toggleDropdown}
            />
            {dropdownOpen ? (
              <div className="absolute right-0 mt-2 w-48 bg-black rounded-lg shadow-lg z-50">
                <ul className="py-2 text-gray-700">
                  <li className="px-4 py-2 flex items-center gap-2 cursor-pointer">
                    <Image
                      src={manage}
                      alt="Manage My Account"
                      onClick={() => router.push("/components/account")}
                    />
                  </li>
                  <li className="px-4 py-2 flex items-center gap-2 cursor-pointer">
                    <Image src={order} alt="My Order" />
                  </li>
                  <li className="px-4 py-2 flex items-center gap-2 cursor-pointer">
                    <Image src={cancel} alt="My Cancellations" />
                  </li>
                  <li className="px-4 py-2 flex items-center gap-2 cursor-pointer">
                    <Image src={review} alt="My Reviews" />
                  </li>
                  <li className="px-4 py-2 flex items-center gap-2 cursor-pointer">
                    <Image src={logout} alt="Logout" />
                  </li>
                </ul>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
