import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
const navigation = [
  { name: "Home", href: "/", id: 0 },
  { name: "Startup Idea", href: "/services", id: 1 },
  { name: "Opportunities", href: "/opportunities", id: 2 },
  { name: "Problems/Gaps & Our Solutions", href: "/pandg", id: 3 },
  { name: "Analysis", href: "/analysis", id: 4 },
  { name: "Strategies", href: "/strategies", id: 5 },
  // { name: "Announcement", href: "/announcement", id: 6 },
  { name: "Revenues", href: "/revenues", id: 7 },
  { name: "Contact Us", href: "https://qo-box.com/contact.html", id: 9 }, // added by jay
  { name: "About Us", href: "https://qo-box.com/about.html#story-section", id: 10 },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const location = useLocation();

  return (
    <Disclosure as="nav" className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <Disclosure.Button className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </Disclosure.Button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img alt="Your Company" src={logo} className="h-8 w-auto" />
              <span className="ml-4 text-black font-poppins text-2xl font-medium">
                QO Digital
              </span>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.id}
                    to={item.href}
                    className={`px-3 py-2 text-sm font-medium ${
                      location.pathname === item.href ||
                      (item.href === "/services" && location.pathname.startsWith("/services"))
                        ? "text-base"
                        : "text-gray-500 hover:text-black"
                    }`}
                    {...(item.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Disclosure.Panel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <Disclosure.Button
              key={item.id}
              as="a"
              href={item.href}
              aria-current={location.pathname === item.href ? "page" : undefined}
              className={classNames(
                location.pathname === item.href
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </Disclosure.Button>
          ))}
        </div>
      </Disclosure.Panel>
    </Disclosure>
  );
}
