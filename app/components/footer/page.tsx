import React from "react";
import send from "../../assets/footer/icon-send.png";
import apstore from "../../assets/footer/AppStore.png";
import playstore from "../../assets/footer/GooglePlay.png";
import fb from "../../assets/footer/Icon-Facebook.png";
import linkdein from "../../assets/footer/Icon-Linkedin.png";
import x from "../../assets/footer/Icon-Twitter.png";
import insta from "../../assets/footer/icon-instagram.png";
import qr from "../../assets/footer/Qr Code.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">
        <div>
          <h3 className="font-semibold text-lg">Exclusive</h3>
          <p className="mt-2">Subscribe</p>
          <p className="text-gray-400">Get 10% off your first order</p>
          <form className="flex items-center border border-gray-600 rounded-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 bg-black text-gray-400 placeholder-gray-400 border-none rounded-l-md focus:outline-none"
            />
            <button className="px-4 py-2 bg-transparent text-gray-400 hover:text-white rounded-r-md">
              <Image src={send} alt="snd" />
            </button>
          </form>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Support</h3>
          <p className="mt-2">111 Bijoy Sarani, Dhaka,</p>
          <p>DH 1515, Bangladesh.</p>
          <p className="mt-2">exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Account</h3>
          <ul className="mt-2 space-y-1">
          <Link href="/components/account" >Account</Link>
            <div>
              <Link href="/components/login">Login/</Link>
              <Link href="/components/signup">Register</Link>
            </div>
            <Link href="/components/cart">Cart</Link><br />
            <Link href="/components/wishlist">Wishlist</Link>
            <li>Shop</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Quick Link</h3>
          <ul className="mt-2 space-y-1">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <Link href="/components/contact">Contact</Link>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Download App</h3>
          <p className="mt-2 text-gray-400">Save $3 with App New User Only</p>
          <div className="mt-4 flex">
            <div className="w-20 h-20">
              <Image src={qr} alt="qr" />
            </div>
            <div className="flex flex-col">
              <div className="w-20">
                <Image src={apstore} alt="apstore" className="h-10"/>
              </div>
              <div className=" w-20">
                <Image src={playstore} alt="apstore" className="h-10" />
              </div>
            </div>
          </div>
          <div className="mt-4 flex space-x-4">
            <div className=" w-8 h-8">
              <Image src={fb} alt="fb" />
            </div>
            <div className=" w-8 h-8">
              <Image src={x} alt="fb" />
            </div>
            <div className=" w-8 h-8">
              <Image src={insta} alt="fb" />
            </div>
            <div className=" w-8 h-8">
              <Image src={linkdein} alt="fb" />
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-xs mt-8">
        © Copyright Rimel 2022. All rights reserved
      </div>
    </footer>
  );
}
