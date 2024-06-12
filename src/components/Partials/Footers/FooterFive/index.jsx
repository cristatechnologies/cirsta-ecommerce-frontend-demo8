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
            <div className="flex flex-col item-center justify-center py-6  w-2/4 lg:w-1/6">
              <h2 className="text-cnvsThemeColor font-serif text-sm ">
                {firstCol.columnTitle}
              </h2>
            </div>

            <ul className="leading-10">
              {firstCol.col_links.length > 0 &&
                firstCol.col_links.map((item, i) => (
                  <li key={i}>
                    <Link href={item.link}>
                      <span className="text-[#9A9A9A] text-[15px] hover:text-[var(--text-color)] border-b border-transparent hover:border-qblack cursor-pointer">
                        {item.title}
                      </span>
                    </Link>
                  </li>
                ))}
            </ul>
          </>
        )}

        {secondCol && (
          <>
            <div className="flex flex-col item-center justify-center py-6  w-2/4 lg:w-1/6">
              <h2 className="text-cnvsThemeColor font-serif text-sm ">
                {secondCol.columnTitle}
              </h2>
            </div>

            <ul className="leading-10">
              {secondCol.col_links.length > 0 &&
                secondCol.col_links.map((item, i) => (
                  <li key={i}>
                    <Link href={item.link}>
                      <span className="text-[#9A9A9A] text-[15px] hover:text-[var(--text-color)] border-b border-transparent hover:border-qblack cursor-pointer">
                        {item.title}
                      </span>
                    </Link>
                  </li>
                ))}
            </ul>
          </>
        )}
        {thirdCol && (
          <>
            <div className="flex flex-col item-center justify-center py-6  w-2/4 lg:w-1/6">
              <h2 className="text-cnvsThemeColor font-serif text-sm ">
                {thirdCol.columnTitle}
              </h2>
            </div>

            <ul className="leading-10">
              {thirdCol.col_links.length > 0 &&
                thirdCol.col_links.map((item, i) => (
                  <li key={i}>
                    <Link href={item.link}>
                      <span className="text-[#9A9A9A] text-[15px] hover:text-[var(--text-color)] border-b border-transparent hover:border-qblack cursor-pointer">
                        {item.title}
                      </span>
                    </Link>
                  </li>
                ))}
            </ul>
          </>
        )}

        <div className="flex flex-col item-center justify-center py-4 w-full lg:w-2/6 ">
          <h2 className="text-cnvsThemeColor font-serif text-lg ">
            {" "}
            Subscribe us
          </h2>
          <p>
            Subscribe to Our Newsletter to get Important News, Amazing Offers &
            Inside Scoops:
          </p>
          <div className="flex justify-center">
            <input className=" w-4/6 border-4 border-cnvsThemecolorLight p-4"></input>
            <button className="bg-cnvsThemeColor p-4 text-white h-full w-2/6 hover:bg-cnvsThemecolorLight hover:text-cnvsThemeColor  ">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="w-full border-1 bg-cnvsThemecolorLight p-6 flex justify-between ">
        <span>© 2023 All Rights Reserved by Canvas Inc.</span>
        <span>Terms of Use / Privacy Policy</span>
      </div>
    </footer>
  );
}
