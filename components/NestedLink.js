import { useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";

export default function NestedLink({ navLink, isScrolling }) {
  const [open, setOpen] = useState(false);

  const openPopOver = () => {
    setOpen(true);
  };

  const closePopOver = () => {
    setOpen(false);
  };

  return (
    <Popover
      className="group relative"
      onMouseEnter={openPopOver}
      onMouseLeave={closePopOver}
    >
      <>
        <Popover.Button>
          <p
            className={`relative flex items-center text-base font-semibold uppercase tracking-wider text-primary-800 hover:text-black`}
          >
            <span>{navLink?.fields?.title}</span>
            <svg
              className="group-hover:text-header-caret-hover-color text-header-caret-color ml-2 h-5 w-5 fill-primary-400 transition-transform group-hover:rotate-180"
              x-description="Heroicon name: solid/chevron-down"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </p>
        </Popover.Button>
        <Transition
          show={open}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Popover.Panel
            className="absolute top-full z-10 flex w-screen max-w-xs flex-col pt-3 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2"
            static
          >
            <div className="relative overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900 ring-opacity-15">
              <span
                className="is-block absolute -top-2 left-1/2 -ml-3"
                aria-hidden="true"
              >
                <svg
                  className="h-[8px] w-[20px] fill-current text-primary-400"
                  viewBox="0 0 5 2"
                  preserveAspectRatio="none"
                >
                  <path d="M 0 2 L 2.5 0 L 5 2 Z"></path>
                </svg>
              </span>
              <div className="relative grid">
                {!navLink?.fields?.isSubnavParent && (
                  <Link
                    href={`/${navLink?.fields?.slug}`}
                    className="group/child-nav flex items-center border-b border-gray-200 border-opacity-50 px-5 pb-4 pt-6 hover:bg-gray-50"
                  >
                    <div className="ml-3 flex items-center gap-3 transition-all">
                      <p className="text-theme-title group-hover/child-nav:text-secondary-950 font-heading text-sm font-semibold tracking-wide 2xl:text-base">
                        {navLink?.fields?.title} Overview
                      </p>
                      <svg
                        className="fill-gray-400 transition-transform group-hover/child-nav:translate-x-2 group-hover/child-nav:fill-primary-500"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="long-arrow-right"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        data-fa-i2svg=""
                        height="12"
                      >
                        <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"></path>
                      </svg>
                    </div>
                  </Link>
                )}
                {navLink &&
                  navLink?.fields?.childPages?.map((navLinkButton) => (
                    <Link
                      href={`/${navLinkButton?.fields?.slug}`}
                      key={`/${navLinkButton?.fields?.slug}`}
                      className="group/child-nav flex items-center border-b border-gray-200 border-opacity-50 px-5 pb-4 pt-6 hover:bg-gray-50"
                    >
                      <div className="ml-3 flex items-center gap-3 transition-all">
                        <p className="text-theme-title group-hover/child-nav:text-secondary-950 font-heading text-sm font-semibold tracking-wide 2xl:text-base">
                          {navLinkButton?.fields?.title}
                        </p>
                        <svg
                          className="fill-gray-400 transition-transform group-hover/child-nav:translate-x-2 group-hover/child-nav:fill-primary-500"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="long-arrow-right"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          data-fa-i2svg=""
                          height="12"
                        >
                          <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"></path>
                        </svg>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </>
    </Popover>
  );
}
