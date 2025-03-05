"use client";
import Button from "../ui/Button";

import { useState, useEffect } from "react";
import Link from "next/link";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the page has been scrolled
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav
      className="w-full sticky top-0 bg-white py-4 z-10 transition-shadow duration-300"
      style={{
        boxShadow: scrolled ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo placeholder */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold">
              Logo
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none" onClick={toggleMobileMenu} aria-expanded={mobileMenuOpen ? "true" : "false"}>
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg className={`${mobileMenuOpen ? "hidden" : "block"} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Icon when menu is open */}
              <svg className={`${mobileMenuOpen ? "block" : "hidden"} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <div className="dropdown relative inline-flex rtl:[--placement:bottom-end]">
              <button id="dropdown-product" type="button" className="dropdown-toggle flex items-center gap-1 px-4 py-2 rounded-md dropdown-open:bg-gray-100" aria-haspopup="menu" aria-expanded="false" aria-label="Product dropdown">
                Product
                <span className="icon-[tabler--chevron-down] dropdown-open:rotate-180 size-4"></span>
              </button>

              <ul className="dropdown-menu dropdown-open:opacity-100 hidden min-w-[700px] p-6 bg-white shadow-lg rounded-md border" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-default">
                <div className="mb-8">
                  <h3 className="text-xl font-medium mb-2">Product Overview</h3>
                  <p className="text-gray-600">Meet your new MVP of audience engagement</p>
                </div>

                <div className="grid grid-cols-2 gap-8 mb-8">
                  <li className="flex gap-4">
                    <div className="p-3 bg-gray-100 rounded-full h-12 w-12 flex items-center justify-center">{/* Icon placeholder */}</div>
                    <div>
                      <h4 className="font-medium text-lg">Integrate + target</h4>
                      <p className="text-gray-600">Send mail fueled by your data</p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div className="p-3 bg-gray-100 rounded-full h-12 w-12 flex items-center justify-center">{/* Icon placeholder */}</div>
                    <div>
                      <h4 className="font-medium text-lg">Print + send</h4>
                      <p className="text-gray-600">Get your mail out the door in hours</p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div className="p-3 bg-gray-100 rounded-full h-12 w-12 flex items-center justify-center">{/* Icon placeholder */}</div>
                    <div>
                      <h4 className="font-medium text-lg">Personalize + convert</h4>
                      <p className="text-gray-600">Create direct mail that leads to action</p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div className="p-3 bg-gray-100 rounded-full h-12 w-12 flex items-center justify-center">{/* Icon placeholder */}</div>
                    <div>
                      <h4 className="font-medium text-lg">Measure + optimize</h4>
                      <p className="text-gray-600">Tie your mail to conversions</p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div className="p-3 bg-gray-100 rounded-full h-12 w-12 flex items-center justify-center">{/* Icon placeholder */}</div>
                    <div>
                      <h4 className="font-medium text-lg">Lob Audience</h4>
                      <p className="text-gray-600">Expand your reach with precision</p>
                    </div>
                  </li>
                </div>

                <hr className="my-6" />

                <div className="grid grid-cols-4 gap-4">
                  <li>
                    <Link href="#" className="font-medium">
                      Integrations
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="font-medium">
                      Address Verification
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="font-medium">
                      Direct Mail API
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="font-medium">
                      Security
                    </Link>
                  </li>
                </div>
              </ul>
            </div>

            <div className="dropdown relative inline-flex rtl:[--placement:bottom-end]">
              <button id="dropdown-solutions" type="button" className="dropdown-toggle flex items-center gap-1 px-4 py-2 rounded-md dropdown-open:bg-gray-100" aria-haspopup="menu" aria-expanded="false" aria-label="Solutions dropdown">
                Solutions
                <span className="icon-[tabler--chevron-down] dropdown-open:rotate-180 size-4"></span>
              </button>
              <ul className="dropdown-menu dropdown-open:opacity-100 hidden min-w-[700px] p-6 bg-white shadow-lg rounded-md border" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-default">
                <div className="mb-8">
                  <h3 className="text-xl font-medium mb-2">Product Overview</h3>
                  <p className="text-gray-600">Meet your new MVP of audience engagement</p>
                </div>

                <div className="grid grid-cols-2 gap-8 mb-8">
                  <li className="flex gap-4">
                    <div className="p-3 bg-gray-100 rounded-full h-12 w-12 flex items-center justify-center">{/* Icon placeholder */}</div>
                    <div>
                      <h4 className="font-medium text-lg">Integrate + target</h4>
                      <p className="text-gray-600">Send mail fueled by your data</p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div className="p-3 bg-gray-100 rounded-full h-12 w-12 flex items-center justify-center">{/* Icon placeholder */}</div>
                    <div>
                      <h4 className="font-medium text-lg">Print + send</h4>
                      <p className="text-gray-600">Get your mail out the door in hours</p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div className="p-3 bg-gray-100 rounded-full h-12 w-12 flex items-center justify-center">{/* Icon placeholder */}</div>
                    <div>
                      <h4 className="font-medium text-lg">Personalize + convert</h4>
                      <p className="text-gray-600">Create direct mail that leads to action</p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div className="p-3 bg-gray-100 rounded-full h-12 w-12 flex items-center justify-center">{/* Icon placeholder */}</div>
                    <div>
                      <h4 className="font-medium text-lg">Measure + optimize</h4>
                      <p className="text-gray-600">Tie your mail to conversions</p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div className="p-3 bg-gray-100 rounded-full h-12 w-12 flex items-center justify-center">{/* Icon placeholder */}</div>
                    <div>
                      <h4 className="font-medium text-lg">Lob Audience</h4>
                      <p className="text-gray-600">Expand your reach with precision</p>
                    </div>
                  </li>
                </div>

                <hr className="my-6" />

                <div className="grid grid-cols-4 gap-4">
                  <li>
                    <Link href="#" className="font-medium">
                      Integrations
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="font-medium">
                      Address Verification
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="font-medium">
                      Direct Mail API
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="font-medium">
                      Security
                    </Link>
                  </li>
                </div>
              </ul>
            </div>

            <div className="dropdown relative inline-flex rtl:[--placement:bottom-end]">
              <button id="dropdown-resources" type="button" className="dropdown-toggle flex items-center gap-1 px-4 py-2 rounded-md dropdown-open:bg-gray-100" aria-haspopup="menu" aria-expanded="false" aria-label="Resources dropdown">
                Resources
                <span className="icon-[tabler--chevron-down] dropdown-open:rotate-180 size-4"></span>
              </button>
              <ul className="dropdown-menu dropdown-open:opacity-100 hidden min-w-[700px] p-6 bg-white shadow-lg rounded-md border" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-default">
                <div className="mb-8">
                  <h3 className="text-xl font-medium mb-2">Product Overview</h3>
                  <p className="text-gray-600">Meet your new MVP of audience engagement</p>
                </div>

                <div className="grid grid-cols-2 gap-8 mb-8">
                  <li className="flex gap-4">
                    <div className="p-3 bg-gray-100 rounded-full h-12 w-12 flex items-center justify-center">{/* Icon placeholder */}</div>
                    <div>
                      <h4 className="font-medium text-lg">Integrate + target</h4>
                      <p className="text-gray-600">Send mail fueled by your data</p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div className="p-3 bg-gray-100 rounded-full h-12 w-12 flex items-center justify-center">{/* Icon placeholder */}</div>
                    <div>
                      <h4 className="font-medium text-lg">Print + send</h4>
                      <p className="text-gray-600">Get your mail out the door in hours</p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div className="p-3 bg-gray-100 rounded-full h-12 w-12 flex items-center justify-center">{/* Icon placeholder */}</div>
                    <div>
                      <h4 className="font-medium text-lg">Personalize + convert</h4>
                      <p className="text-gray-600">Create direct mail that leads to action</p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div className="p-3 bg-gray-100 rounded-full h-12 w-12 flex items-center justify-center">{/* Icon placeholder */}</div>
                    <div>
                      <h4 className="font-medium text-lg">Measure + optimize</h4>
                      <p className="text-gray-600">Tie your mail to conversions</p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div className="p-3 bg-gray-100 rounded-full h-12 w-12 flex items-center justify-center">{/* Icon placeholder */}</div>
                    <div>
                      <h4 className="font-medium text-lg">Lob Audience</h4>
                      <p className="text-gray-600">Expand your reach with precision</p>
                    </div>
                  </li>
                </div>

                <hr className="my-6" />

                <div className="grid grid-cols-4 gap-4">
                  <li>
                    <Link href="#" className="font-medium">
                      Integrations
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="font-medium">
                      Address Verification
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="font-medium">
                      Direct Mail API
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="font-medium">
                      Security
                    </Link>
                  </li>
                </div>
              </ul>
            </div>

            <Button variant="outline" href="/home" className="ml-4">
              Book a demo
            </Button>

            <Button href="/home" variant="secondary">
              Get started for free
            </Button>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        <div className={`${mobileMenuOpen ? "block" : "hidden"} md:hidden pt-4`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="block">
              <button className="text-left w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Product</button>
              {/* Mobile submenu can be implemented with state management */}
            </div>

            <div className="block">
              <button className="text-left w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Solutions</button>
            </div>

            <div className="block">
              <button className="text-left w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Resources</button>
            </div>

            <div className="pt-4 space-y-2">
              <Button variant="outline" href="/home" className="w-full">
                Book a demo
              </Button>

              <Button href="/home" variant="secondary" className="w-full">
                Get started for free
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
