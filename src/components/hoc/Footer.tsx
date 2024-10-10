import React from "react";
import { STRING_DATA } from "../../shared/Constants";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ROUTE_CONSTANTS } from "@/shared/Routes";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="flex flex-col  gap-8 lg:p-10 px-4 py-10 bg-neutral text-neutral-content rounded">
        <div className="grid grid-cols-12 gap-4">
          {" "}
          <p className="text-sm lg:col-span-4 lg:block hidden">
            e-auctiondekho is not liable for copyright infringement without a
            formal complaint. We aim to share public domain information or
            content under fair use. If you are a copyright holder with concerns,
            please contact us to resolve any issues.
          </p>
          <div className="lg:col-span-8 col-span-full space-y-4 flex flex-col h-full lg:items-end items-center">
            <nav className="flex items-center justify-center gap-4 text-sm ">
              <Link
                href={ROUTE_CONSTANTS.CITIES}
                className="link link-hover min-w-fit"
              >
                {STRING_DATA.CITIES}
              </Link>
              <Link
                href={ROUTE_CONSTANTS.BANKS}
                className="link link-hover min-w-fit"
              >
                {STRING_DATA.BANKS}
              </Link>
              <Link
                href={ROUTE_CONSTANTS.CATEGORY}
                className="link link-hover min-w-fit"
              >
                {STRING_DATA.CATEGORIES}
              </Link>
              <Link
                href={ROUTE_CONSTANTS.ASSETS}
                className="link link-hover min-w-fit"
              >
                {STRING_DATA.ASSETS}
              </Link>
            </nav>

            <nav className="flex  items-center justify-center gap-4 text-sm">
              <Link href={ROUTE_CONSTANTS.TERMS} className="link link-hover">
                {STRING_DATA.TERMS_CONDITIONS}
              </Link>
              <Link href={ROUTE_CONSTANTS.PRIVACY} className="link link-hover">
                {STRING_DATA.PRIVACY_POLICY}
              </Link>
              <Link href={ROUTE_CONSTANTS.ABOUT_US} className="link link-hover">
                {STRING_DATA.ABOUT_US}
              </Link>
            </nav>
            <nav className="flex items-center justify-center gap-4 text-sm">
              <Link href={ROUTE_CONSTANTS.CONTACT} className="link link-hover">
                {STRING_DATA.CONTACT_US}
              </Link>
              <Link
                href={"/sitemap.xml"}
                className="link link-hover"
                target="_blank"
              >
                {STRING_DATA.SITEMAP}
              </Link>
            </nav>
          </div>
          <p className="text-sm lg:hidden col-span-full">
            e-auctiondekho is not liable for copyright infringement without a
            formal complaint. We aim to share public domain information or
            content under fair use. If you are a copyright holder with concerns,
            please contact us to resolve any issues.
          </p>
        </div>

        <aside className="text-center text-sm">
          <p>© {new Date().getFullYear()} Omnistack Innovation Pvt Ltd</p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;

export const revalidate = 0;
