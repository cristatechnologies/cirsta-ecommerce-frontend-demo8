import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Facebook from "../../../Helpers/icons/Facebook";
import Instagram from "../../../Helpers/icons/Instagram";
import Youtube from "../../../Helpers/icons/Youtube";
import FontAwesomeCom from "../../../Helpers/icons/FontAwesomeCom";
import { LinkedinIcon, TwitterIcon } from "react-share";

export default function FooterFive({ settings }) {
  const { websiteSetup } = useSelector((state) => state.websiteSetup);
  const [firstCol, setFirstCol] = useState(null);
  const [secondCol, setSecondCol] = useState(null);
  const [thirdCol, setThirdCol] = useState(null);
  useEffect(() => {
    if (!firstCol) {
      setFirstCol(
        websiteSetup &&
          websiteSetup.payload &&
          websiteSetup.payload.footer_first_col
      );
    }
  });
  useEffect(() => {
    if (!secondCol) {
      setSecondCol(
        websiteSetup &&
          websiteSetup.payload &&
          websiteSetup.payload.footer_second_col
      );
    }
  });
  useEffect(() => {
    if (!thirdCol) {
      setThirdCol(
        websiteSetup &&
          websiteSetup.payload &&
          websiteSetup.payload.footer_third_col
      );
    }
  });

  return (
    <footer>
      <div className="p-10 flex flex-wrap lg:flex-nowrap items-start justify-around  h-auto">
        {/* logo goes here     
            <div>
              <Link href="/" passHref>
                <a>
                  {settings && (
                    <Image
                      width="250"
                      height="70"
                      src={`${
                        process.env.NEXT_PUBLIC_BASE_URL + settings.logo
                      }`}
                      alt="logo"
                    />
                  )}
                </a>
              </Link>
            </div> */}
        {/* logo area */}
        {/* <Instagram className="fill-current text-[var(--secondary-color)] group-hover:text-[var(--primary-color)] " /> */}

        {firstCol && (
          <>
            <div className="flex flex-col item-center justify-center py-6  w-2/4 lg:w-1/6 ">
              <h2 className="text-[var(--primary-color)] font-serif text-sm font-semibold">
                {firstCol.columnTitle}
              </h2>

              <ul className="leading-10">
                {firstCol.col_links.length > 0 &&
                  firstCol.col_links.map((item, i) => (
                    <li key={i}>
                      <Link href={item.link}>
                        <span className="text-[var(--primary-color)] text-sm hover:text-[var(--text-color)] cursor-pointer font-sans">
                          {item.title}
                        </span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </>
        )}

        {secondCol && (
          <>
            <div className="flex flex-col item-center justify-center py-6  w-2/4 lg:w-1/6">
              <h2 className="text-[var(--primary-color)] font-serif text-sm font-semibold">
                {secondCol.columnTitle}
              </h2>

              <ul className="leading-10">
                {secondCol.col_links.length > 0 &&
                  secondCol.col_links.map((item, i) => (
                    <li key={i}>
                      <Link href={item.link}>
                        <span className="text-[var(--primary-color)] text-sm hover:text-[var(--text-color)] cursor-pointer font-sans">
                          {item.title}
                        </span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </>
        )}
        {thirdCol && (
          <>
            <div className="flex flex-col item-center justify-center py-6  w-2/4 lg:w-1/6">
              <h2 className="text-[var(--primary-color)] font-serif text-sm font-semibold">
                {thirdCol.columnTitle}
              </h2>

              <ul className="leading-10">
                {thirdCol.col_links.length > 0 &&
                  thirdCol.col_links.map((item, i) => (
                    <li key={i}>
                      <Link href={item.link}>
                        <span className="text-[var(--primary-color)] text-sm hover:text-[var(--text-color)] cursor-pointer font-sans">
                          {item.title}
                        </span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </>
        )}

        <div className="flex flex-col item-center justify-center py-4 w-full lg:w-2/6 ">
          <h2 className="text-[var(--primary-color)] font-serif text-lg font-semibold ">
            {" "}
            Subscribe us
          </h2>
          <p className="font-sans">
            Subscribe to Our Newsletter to get Important News, Amazing Offers &
            Inside Scoops:
          </p>
          <div className="flex justify-center">
            <input className=" w-4/6 border-4 border-[var(--secondary-color)] p-2"></input>
            <button className="bg-[var(--primary-color)] p-4 text-white h-auto w-2/6 hover:bg-[var(--secondary-color)] hover:text-[var(--primary-color)]  ">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="w-full border-1 bg-[var(--secondary-color)] p-6 flex justify-between ">
        <span>© 2023 All Rights Reserved by Canvas Inc.</span>
        <span>Terms of Use / Privacy Policy</span>
      </div>
    </footer>
  );
}
