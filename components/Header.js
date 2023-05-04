"use client";

import { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { getHeaderData } from "../lib/api";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import NestedLink from "./NestedLink";
import { forwardRef } from "react";

const MyLink = forwardRef((props, ref) => {
  let { href, children, ...rest } = props;
  return (
    <Link href={href} ref={ref} {...rest}>
      {children}
    </Link>
  );
});

MyLink.displayName = "MyLink";

export default function Header({ data, metaData }) {
  const [isScrolling, setScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 10) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    });
  });

  return (
    <Popover
      className={`absolute left-0 top-0 z-20 w-full bg-transparent lg:fixed ${
        isScrolling && "lg:bg-white lg:shadow-md"
      }`}
    >
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-6 lg:justify-start lg:space-x-10">
          <Logo data={data} metaData={metaData} isScrolling={isScrolling} />

          <div className="flex items-end justify-end xl:flex-col">
            {/* Call to Action Buttons */}
            <CallToActionButtons
              callToAction={data?.callToAction}
              isScrolling={isScrolling}
            />

            {/* Nav links */}
            <NavLinks
              navigationLinks={data?.navigationLinks}
              isScrolling={isScrolling}
            />

            <div className="-my-2 -mr-2 xl:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-primary-300 hover:bg-primary-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
                <span className="sr-only">Open menu</span>
                {/* Menu Bars Icon */}
                <svg
                  className="h-6 w-6"
                  x-description="Heroicon name: outline/menu"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </Popover.Button>
            </div>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right p-2 transition md:left-auto md:right-0 md:w-full md:max-w-xl xl:hidden"
        >
          {({ close }) => (
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <MobileMenuLogo logo={data?.siteLogo} metaData={metaData} />

                  <div className="-mr-2">
                    <Popover.Button
                      type="button"
                      className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                    >
                      <span className="sr-only">Close menu</span>
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                    </Popover.Button>
                  </div>
                </div>

                <MobileMenuLinksNested
                  navigationLinks={data?.navigationLinks}
                  close={close}
                />
              </div>

              <div className="px-5 py-6">
                <MobileMenuLinks
                  navigationLinks={data?.navigationLinks}
                  close={close}
                />

                <MobileMenuCallToActions
                  callToAction={data?.callToAction}
                  close={close}
                />
              </div>
            </div>
          )}
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

const Logo = ({ data, metaData }) => {
  return (
    data && (
      <div className="flex flex-1 justify-start">
        <Link href="/" className="cursor-pointer">
          <span className="sr-only">{metaData?.organizationName}</span>
          {/* Site Logo */}
          <div>
            {data?.siteLogo && (
              <Image
                className="h-6 w-auto drop-shadow-md lg:h-10 "
                src={`https:${data?.siteLogo?.fields?.file?.url}`}
                height={data?.siteLogo?.fields?.file?.details?.image?.height}
                width={data?.siteLogo?.fields?.file?.details?.image?.width}
                alt={metaData?.organizationName}
              />
            )}
          </div>
        </Link>
      </div>
    )
  );
};

const NavLinks = ({ navigationLinks, isScrolling }) => {
  return (
    navigationLinks && (
      <nav className="mt-2 hidden space-x-8 xl:flex">
        {navigationLinks?.map((navLink) => {
          return navLink?.fields?.childPages ? (
            <NestedLink
              navLink={navLink}
              isScrolling={isScrolling}
              key={navLink?.fields?.title}
            />
          ) : (
            <Link
              href={`/${navLink?.fields?.slug}`}
              key={navLink?.fields?.title}
              className={`block text-base font-semibold uppercase tracking-wider text-primary-800 hover:text-black`}
            >
              {navLink?.fields?.title}
            </Link>
          );
        })}
      </nav>
    )
  );
};

const CallToActionButtons = ({ callToAction, isScrolling }) => {
  return (
    <div className="ml-auto mr-8 hidden flex-1 items-center justify-end space-x-6 whitespace-nowrap md:flex xl:ml-8 xl:mr-0">
      {callToAction &&
        callToAction?.map((callToActionButton, index) => {
          const contentType = callToActionButton?.sys?.contentType?.sys?.id;
          if (
            contentType === "buttonLink" &&
            index === callToAction.length - 1
          ) {
            return (
              <Link
                href={`/${callToActionButton?.fields?.page?.fields?.slug}`}
                key={callToActionButton?.fields?.text}
                className={`button button-sm inline-flex bg-primary-600 text-white  ${
                  isScrolling
                    ? "hover:bg-primary-500 hover:text-white focus:ring-primary-700"
                    : "hover:bg-primary-500 hover:text-white focus:ring-primary-700"
                }`}
              >
                {callToActionButton?.fields?.text}
              </Link>
            );
          } else if (contentType === "callLink") {
            // format number text. remove all characters that are not digits
            const href = `tel:${callToActionButton?.fields?.number?.replace(
              /\D+/gm,
              ""
            )}`;
            return (
              <MyLink
                onClick={() => {
                  close();
                }}
                key={callToActionButton?.fields?.number}
                href={href}
                className="group flex items-center space-x-2 text-lg text-primary-950"
              >
                <span className="sr-only">Telephone</span>
                {/* Telephone icon */}
                <span className="stroke-current text-primary-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                <span className="flex border border-primary-200 bg-white px-3 py-1 group-hover:border-primary-400">
                  {callToActionButton?.fields?.number}
                </span>
              </MyLink>
            );
          }
          return (
            <Link
              href={`/${callToActionButton?.fields?.page?.fields?.slug}`}
              key={callToActionButton?.fields?.text}
              className={`font-semibold text-primary-900 hover:text-primary-600`}
            >
              {callToActionButton?.fields?.text}
            </Link>
          );
        })}
    </div>
  );
};

const MobileMenuLogo = ({ logo, metaData }) => {
  return (
    logo && (
      <Link href="/">
        <span className="flex">
          <span className="sr-only">{metaData?.organizationName}</span>
          <div className="min-h-6 w-auto">
            <Image
              className="h-6 w-auto"
              src={`https:${logo?.fields?.file?.url}`}
              height={logo?.fields?.file?.details?.image?.height}
              width={logo?.fields?.file?.details?.image?.width}
              alt={logo?.fields?.title}
            />
          </div>
        </span>
      </Link>
    )
  );
};

const MobileMenuLinksNested = ({ navigationLinks, close }) => {
  return (
    navigationLinks &&
    navigationLinks?.map((navigationLink) => {
      if (navigationLink?.fields?.childPages) {
        return (
          <div className="mt-6" key={navigationLink?.fields?.title}>
            <p className="font-bold uppercase tracking-wide text-gray-500">
              {navigationLink?.fields?.title}
            </p>
            <nav className="mt-1 grid grid-cols-1 gap-2">
              {navigationLink?.fields?.childPages?.map((childPage) => (
                <MyLink
                  onClick={() => {
                    close();
                  }}
                  href={`/${childPage?.fields?.slug}`}
                  target="_self"
                  key={childPage?.fields?.slug}
                  className="flex items-center rounded-lg py-1 text-gray-900 hover:bg-gray-50"
                >
                  <div className="text-theme-title text-base font-medium">
                    {childPage?.fields?.title}
                  </div>
                </MyLink>
              ))}
            </nav>
          </div>
        );
      }
    })
  );
};

const MobileMenuLinks = ({ navigationLinks, close }) => {
  return (
    navigationLinks && (
      <div className="grid gap-4 text-center">
        {navigationLinks?.map((navigationLink) => {
          if (!navigationLink?.fields?.childPages) {
            return (
              <MyLink
                onClick={() => {
                  close();
                }}
                href={`/${navigationLink?.fields?.slug}`}
                key={`${navigationLink?.fields?.slug}`}
                target="_self"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                {navigationLink?.fields?.title}
              </MyLink>
            );
          }
        })}
      </div>
    )
  );
};

const MobileMenuCallToActions = ({ callToAction, close }) => {
  return (
    callToAction && (
      <div className="mt-6">
        {callToAction?.map((ctaBtn) => {
          if (ctaBtn?.fields?.text) {
            return (
              <MyLink
                onClick={() => {
                  close();
                }}
                href={`/${ctaBtn?.fields?.page?.fields?.slug}`}
                key={ctaBtn?.fields?.text}
                className="button flex w-full bg-primary-600 text-white hover:bg-primary-500 focus:ring-primary-500"
              >
                {ctaBtn?.fields?.text}
              </MyLink>
            );
          }
        })}
      </div>
    )
  );
};
