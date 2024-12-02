'use client'
import React, { useState } from 'react';
import Container from '../re-usable/container/Container';
import Link from 'next/link';
import { HiMiniBars3BottomRight } from 'react-icons/hi2';
import { ImCancelCircle } from 'react-icons/im';

const Navbar = () => {
    const [menu, SetMenu] = useState(false);
    const handleMenu = () => SetMenu(!menu);

    const wishlistCount = 10; 
    const cartCount = 10; 


    return (
        <header className="bg-black">
            <Container>
                <nav className="flex justify-between items-center text-white h-20 w-full">
                    <div className="text-xl font-medium">
                        <Link href="/">Redux Store</Link>
                    </div>
                    <ul className="hidden md:flex items-center gap-6 capitalize text-lg font-medium">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/shop">Shop</Link></li>
                        <li className="relative">
                            <Link href="/wishlist">Wishlist</Link>
                            <span className="text-white bg-red-500 w-6 h-5 rounded-3xl flex justify-center items-center text-11 font-light absolute -top-2 -right-2">
                                {wishlistCount}
                            </span>
                        </li>
                        <li className="relative">
                            <Link href="/cart">Cart</Link>
                            <span className="text-white bg-red-500 w-6 h-5 rounded-3xl flex justify-center items-center text-11 font-light absolute -top-2 -right-2">
                                {cartCount}
                            </span>
                        </li>
                    </ul>
                    <div className="md:hidden flex gap-5 items-center">
                        <div className="relative text-xl font-medium">
                            <Link href="/cart">Cart</Link>
                            <span className="text-white bg-red-500 w-6 h-5 rounded-3xl flex justify-center items-center text-11 font-light absolute -top-2 -right-2">
                                {cartCount}
                            </span>
                        </div>
                        <button
                            className="block text-white font-bold focus:outline-none"
                            onClick={handleMenu}
                        >
                            <HiMiniBars3BottomRight size={30} />
                        </button>

                        <div
                            className={`fixed top-0 h-full w-64 bg-white shadow-md transition-all duration-500 text-black text-xl font-medium capitalize ${menu ? "opacity-100 right-0" : "opacity-0 -right-1/2"}`}
                        >
                            <button
                                className="block text-black font-bold focus:outline-none absolute top-2 right-2"
                                onClick={handleMenu}
                            >
                                <ImCancelCircle size={25} />
                            </button>
                            <ul className="px-4 py-6 text-sm">
                                <li className="py-1 text-xl font-medium">
                                    <Link href="/">Home</Link>
                                </li>
                                <li className="py-1 text-xl font-medium">
                                    <Link href="/about-us">About Us</Link>
                                </li>
                                <li className="py-1 text-xl font-medium">
                                    <Link href="/wishlist">Wishlist</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </Container>
        </header>
    );
};

export default Navbar;
