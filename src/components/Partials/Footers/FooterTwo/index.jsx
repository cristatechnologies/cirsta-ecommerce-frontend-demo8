import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Facebook from "../../../Helpers/icons/Facebook";
import Instagram from "../../../Helpers/icons/Instagram";
import Youtube from "../../../Helpers/icons/Youtube";
import FontAwesomeCom from "../../../Helpers/icons/FontAwesomeCom";

export default function Footer({ settings }) {
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
    <footer className="footer-section-wrapper bg-white">
      <div className="container-x block mx-auto pt-[83px] lg:pb-0 md:pb-0 sm:pb-[100px]">
        <div className="mb-14 text-center border-b border-gray-200">
          <Link href="/" passHref>
            <a>
              {settings && (
                <Image
                  width="250"
                  height="70"
                  src={`${process.env.NEXT_PUBLIC_BASE_URL + settings.logo}`}
                  alt="logo"
                />
              )}
            </a>
          </Link>
        </div>
        <div className="lg:flex justify-between mb-[95px]">
          <div className="lg:w-4/10 w-full mb-10 lg:mb-0">
            {/* logo area */}
            <div>
              <ul className="flex flex-col space-y-5 ">
                <li>
                  <Link href="/tracking-order">
                    <span className="text-[#9A9A9A] text-[15px] hover:text-[var(--text-color)] border-b border-transparent hover:border-qblack cursor-pointer">
                      Track Order
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/faq">
                    <span className="text-[#9A9A9A] text-[15px] hover:text-[var(--text-color)] border-b border-transparent hover:border-qblack cursor-pointer">
                      Support
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:w-2/10 w-full mb-10 lg:mb-0">
            {firstCol && (
              <>
                <div className="mb-5">
                  <h6 className="text-[18] font-500 text-[#2F2F2F]">
                    {firstCol.columnTitle}
                  </h6>
                </div>
                <div>
                  <ul className="flex flex-col space-y-5 ">
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
                </div>
              </>
            )}
          </div>
          <div className="lg:w-2/10 w-full mb-10 lg:mb-0 ">
            {secondCol && (
              <>
                <div className="mb-5">
                  <h6 className="text-[18] font-500 text-[#2F2F2F]">
                    {secondCol.columnTitle}
                  </h6>
                </div>
                <div>
                  <ul className="flex flex-col space-y-5 ">
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
                </div>
              </>
            )}
          </div>
          <div className="lg:w-2/10 w-full mb-10 lg:mb-0">
            {thirdCol && (
              <>
                <div className="mb-5">
                  <h6 className="text-[18] font-500 text-[#2F2F2F]">
                    {thirdCol.columnTitle}
                  </h6>
                </div>
                <div>
                  <ul className="flex flex-col space-y-5 ">
                    {thirdCol.col_links.length > 0 &&
                      thirdCol.col_links.map((item, i) => (
                        <li key={i}>
                          <li key={i} className="flex items-center gap-2">
                            <FontAwesomeCom
                              className={"w-4 h-4 text-[var(--text-color)]"}
                              icon={item.link}
                            />
                            <span className="text-[var(--text-color)] text-[15px] hover:text-[var(--primary-color)] border-b border-transparent hover:border-qblack">
                              {item.title}
                            </span>
                          </li>
                        </li>
                      ))}
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="bottom-bar border-t border-qgray-border lg:h-[82px] lg:flex justify-center items-center">
          <div className="flex lg:space-x-5 justify-between items-center mb-3">
            <div className="flex space-x-5 items-center">
              <a href="#">
                <Instagram className="fill-current text-qgray hover:text-[var(--text-color)]" />
              </a>
              <a href="#">
                <Facebook className="fill-current text-qgray hover:text-[var(--text-color)]" />
              </a>
              {/* <a href="#">
                <Youtube className="fill-current text-qgray hover:text-[var(--text-color)]" />
              </a> */}
            </div>
            <span className="sm:text-base text-[10px] text-qgray font-300">
              ©2024
              <Link
                href="https://cristatech-ecommerce-frontend.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="font-500 text-[var(--text-color)] mx-1"
              >
                Frenzy Mart
              </Link>
              All rights reserved
            </span>
          </div>
          {/* <div className="">
            <Link href="#" passHref>
              <a>
                <Image
                  width="318"
                  height="28"
                  src={`/assets/images/payment-getways.png`}
                  alt="payment-getways"
                />
              </a>
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
