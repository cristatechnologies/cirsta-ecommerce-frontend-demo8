import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Arrow from "../../../Helpers/icons/Arrow";
import Selectbox from "../../../Helpers/Selectbox";
// import ThinPeople from "../../../Helpers/icons/ThinPeople";
import auth from "../../../../../utils/auth";
import { useContext, useEffect, useState } from "react";
// import ServeLangItem from "../../../Helpers/ServeLangItem";
import Multivendor from "../../../Shared/Multivendor";
// import ThinPeople from "../../../Helpers/icons/ThinPeople";

import Cart from "../../../Cart";
import Compair from "../../../Helpers/icons/Compair";
import ThinBag from "../../../Helpers/icons/ThinBag";
import ThinLove from "../../../Helpers/icons/ThinLove";
import ThinPeople from "../../../Helpers/icons/ThinPeople";
import SearchBox from "../../../Helpers/SearchBox";
import ServeLangItem from "../../../Helpers/ServeLangItem";
import LoginContext from "../../../Contexts/LoginContext";

import IcoLogout from "../../../Auth/Profile/icons/IcoLogout";
import { fetchWishlist } from "../../../../store/wishlistData";
import Login from "../../../Helpers/icons/Login";
import apiRequest from "../../../../../utils/apiRequest";
// import FontAwesomeCom from "../../../Helpers/icons/FontAwesomeCom";

export default function TopBar({ className, contact, settings }) {
  const getLoginContexts = useContext(LoginContext);
  const dispatch = useDispatch();
  const location = useRouter();
  const [auth, setAuth] = useState(null);
  const cartItem = useSelector(
    (state) => state.cart?.cart?.cartProducts?.length
  );
  const { wishlistData } = useSelector((state) => state.wishlistData);
  const wishlists = wishlistData && wishlistData.wishlists;
  const [profile, setProfile] = useState(false);
  const [searchKey, setSearchkey] = useState("");

  useEffect(() => {
    if (getLoginContexts.loginPopup === false) {
      setAuth(() => JSON.parse(localStorage.getItem("auth")));
    }
  }, [getLoginContexts.loginPopup]);

  const profilehandler = () => {
    setProfile(!profile);
  };

  useEffect(() => {
    setAuth(JSON.parse(localStorage.getItem("auth")));
    dispatch(fetchWishlist()); 
  }, []);

  const logout = () => {
    if (auth) {
      apiRequest.logout(auth.access_token);
      localStorage.removeItem("auth");
      dispatch(fetchWishlist());
      location.push("/login");
    }
  };

  const searchHandler = () => {
    if (searchKey !== "") {
      router.push({
        pathname: "/search",
        query: { search: searchKey },
      });
    } else {
      return false;
    }
  };

  const RouterMapper = [
    '/become-seller',
    '/',
    '/who-we-are',
    '/why-kalalay',
    '/why-are-we-different',
    '/buyer-benefits',
    '/cancellation-policy',
    '/intellectual-property',
    '/privacy-policy',
    '/return-refund-policy',
    '/terms-conditions',
    '/shipping-delivery-policy'
  ];
  const { asPath } = location;
  const isRouteInMapper = RouterMapper.includes(asPath);

  return (
    <>
      <div
        className={`w-full bg-white text-slate-800 h-16 border-b border-qgray-border  hidden lg:block  ${
          className || ''
        }`}
      >
        <div className="container-x mx-auto h-full">
          <div className="flex justify-between items-center h-full">
            {isRouteInMapper ? (
              <>
                <div className="topbar-nav">
                  <ul className="flex items-center">
                    <li className="rtl:ml-6 ltr:ml-0 ">
                      <Link href="/" passHref>
                        <a rel="noopener noreferrer">
                          {settings && (
                            <Image
                              width="180"
                              height="45"
                              objectFit="scale-down"
                              // src={`https://i.imgur.com/4LPB1nc.png`}
                              src={`${
                                process.env.NEXT_PUBLIC_BASE_URL + settings.logo
                              }`}
                              alt="logo"
                            />
                          )}
                        </a>
                      </Link>
                    </li>
                    <li className={`ml-10`}>
                      <Link href="/" passHref>
                        <a rel="noopener noreferrer">
                          <span className="text-xs sm:text-base lg:text-sm leading-6 text-gray-500 font-regular cursor-pointer hover:text-orange-500">
                            Home
                          </span>
                        </a>
                      </Link>
                    </li>
                    <li className={`ml-5`}>
                      <Link href="/who-we-are" passHref>
                        <a rel="noopener noreferrer">
                          <span className="text-xs sm:text-base lg:text-sm leading-6 text-gray-500 font-regular cursor-pointer hover:text-orange-500">
                            Who We Are
                          </span>
                        </a>
                      </Link>
                    </li>
                    <li className={`ml-5`}>
                      <Link href="/why-kalalay" passHref>
                        <a rel="noopener noreferrer">
                          <span className="text-xs sm:text-base lg:text-sm leading-6 text-gray-500 font-regular cursor-pointer hover:text-orange-500">
                            Why Kalalay
                          </span>
                        </a>
                      </Link>
                    </li>
                    <li className={`ml-5`}>
                      <Link href="/why-are-we-different" passHref>
                        <a rel="noopener noreferrer">
                          <span className="text-xs sm:text-base lg:text-sm leading-6 text-gray-500 font-regular cursor-pointer hover:text-orange-500">
                            We Are Different
                          </span>
                        </a>
                      </Link>
                    </li>
                    <li className={`ml-5`}>
                      <Link href="/become-seller" passHref>
                        <a rel="noopener noreferrer">
                          <span className="text-xs sm:text-base lg:text-sm leading-6 text-gray-500 font-regular cursor-pointer hover:text-orange-500">
                            Artist Registration
                          </span>
                        </a>
                      </Link>
                    </li>
                    <li className={`ml-5 group relative`}>
                      <span className="text-xs sm:text-base lg:text-sm leading-6 text-gray-500 font-regular cursor-pointer hover:text-orange-500 flex h-14 items-center mt-1">
                        More
                      </span>
                      <span className="flex-col hidden group-hover:flex gap-2 absolute bg-white w-40 p-5 shadow-xl rounded-md -left-5 top-14 z-10">
                        <li>
                          <Link href="/buyer-benefits" passHref>
                            <a rel="noopener noreferrer">
                              <span className="text-xs sm:text-base lg:text-sm leading-6 text-gray-500 font-regular cursor-pointer hover:text-orange-500">
                                Buyer Benefits
                              </span>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/" passHref>
                            <a rel="noopener noreferrer">
                              <span className="text-xs sm:text-base lg:text-sm leading-6 text-gray-500 font-regular cursor-pointer hover:text-orange-500 ">
                                How We Work
                              </span>
                            </a>
                          </Link>
                        </li>
                      </span>
                    </li>
                    <li className={`ml-5`}>
                      <Link href="/blogs" passHref>
                        <a rel="noopener noreferrer">
                          <span className="text-xs sm:text-base lg:text-sm leading-6 text-gray-500 font-regular cursor-pointer hover:text-orange-500">
                            Blog
                          </span>
                        </a>
                      </Link>
                    </li>
                    <li className={`ml-5`}>
                      <Link href="/store" passHref>
                        <a rel="noopener noreferrer">
                          <span className="text-xs sm:text-base lg:text-sm leading-6 text-gray-500 font-regular cursor-pointer border-2 border-gray-500 pt-2 pl-5 pr-5 pb-2 rounded-full">
                            Store
                          </span>
                        </a>
                      </Link>
                    </li>
                    <li className={`ml-5`}>
                      <div className="ml-8">
                        {auth ? (
                         <span onClick={logout} className="flex items-center gap-3 border border-[var(--primary-color)] rounded-xl p-2 w-28 cursor-pointer">
                         <IcoLogout
                           className={"fill-[var(--primary-color)]"}
                           pathClassName={"fill-[var(--primary-color)]"}
                         />
                         <span className="text-[14px] text-[var(--primary-color)]">Logout</span>
                       </span>
                        ) : (
                          <div onClick={() => location.push("/login")} className="flex items-center gap-3 border border-[var(--primary-color)] rounded-xl p-2 w-28 cursor-pointer">
                          <Login
                               className={"fill-[var(--primary-color)]"}
                               pathClassName={"fill-[var(--primary-color)]"}
                          />
                          <span className="text-[14px] text-[var(--primary-color)]">Login</span>
                        </div>
                        )}
                      </div>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <div className="topbar-nav">
                  <ul className="flex space-x-6 items-center">
                    <li className="rtl:ml-6 ltr:ml-0">
                      <Link href="/" passHref>
                        <a rel="noopener noreferrer">
                          {settings && (
                            <Image
                              width="180"
                              height="45"
                              objectFit="scale-down"
                              // src={`https://i.imgur.com/4LPB1nc.png`}
                              src={`${
                                process.env.NEXT_PUBLIC_BASE_URL + settings.logo
                              }`}
                              alt="logo"
                            />
                          )}
                        </a>
                      </Link>
                    </li>

                    <li className="rtl:ml-6 ltr:ml-0">
                      <div className="w-[517px] h-[30px]">
                        <SearchBox className="search-com" />
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="topbar-dropdowns lg:block hidden">
                  <div className="flex ltr:space-x-6 rtl:-space-x-0 items-center">
                    {/* <div className="flex ltr:space-x-2 rtl:space-x-0 items-center rtl:ml-2 ltr:ml-0">
                  <span className={`rtl:ml-2 ltr:ml-0`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                      />
                    </svg>
                  </span>
                  <span className="text-xs text-white font-500 leading-none rtl:ml-2 ltr:ml-0 ">
                    {contact && contact.phone}
                  </span>
                </div> */}

                    {/* <div className="search-bar w-full h-[34px]  flex ">
                  <div className="flex-1 bg-white h-full border border-r-0 border-[#E9E9E9]">
                    <input
                      value={searchKey}
                      onChange={(e) => setSearchkey(e.target.value)}
                      type="text"
                      className="w-full text-xs h-full focus:outline-none foucus:ring-0 placeholder:text-qgraytwo pl-2.5 text-black font-semibold"
                      placeholder="Search Product..."
                    />
                  </div>
                  <div
                    onClick={searchHandler}
                    className="cursor-pointer w-[40px] h-full primary-bg flex justify-center items-center"
                  >
                    <span>
                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 8.83158C0.0484783 8.43809 0.0969566 8.04461 0.169674 7.67571C0.484783 5.92962 1.2362 4.42946 2.39968 3.12604C3.75707 1.60128 5.45381 0.592971 7.44142 0.199486C9.76838 -0.267779 11.9741 0.0765214 14.0345 1.33076C16.3614 2.75714 17.84 4.82294 18.3975 7.50356C18.8823 9.7907 18.5187 11.9795 17.4037 14.0453C17.1856 14.4388 17.1856 14.4388 17.5007 14.7585C19.1247 16.4062 20.7487 18.0539 22.3727 19.7016C22.906 20.2427 23.1242 20.8575 22.9302 21.5953C22.5667 22.9971 20.8457 23.5135 19.7549 22.3822C18.8338 21.4231 17.9127 20.5132 16.9674 19.5541C16.216 18.7917 15.4888 18.0539 14.7374 17.2915C14.6889 17.2423 14.6404 17.1932 14.6162 17.1686C14.0345 17.4637 13.5012 17.808 12.9195 18.0539C10.4228 19.1114 7.90196 19.0868 5.42957 17.9555C3.56316 17.0948 2.15728 15.7422 1.16348 13.9469C0.533261 12.791 0.145435 11.5614 0.0484783 10.2334C0.0484783 10.1596 0.0242392 10.0858 0 10.012C0 9.64314 0 9.22507 0 8.83158ZM3.00566 9.4464C3.00566 12.9632 5.84164 15.816 9.30784 15.816C12.774 15.7914 15.5615 12.9632 15.5858 9.4464C15.5858 5.95422 12.7498 3.07685 9.30784 3.07685C5.8174 3.07685 3.00566 5.92962 3.00566 9.4464Z"
                          fill="#1D1D1D"
                        />
                      </svg>
                    </span>
                  </div>
                </div> */}

                    <div className="flex space-x-6 rtl:space-x-reverse items-center relative">
                      <div id="google_translate_element"></div>
                      {auth && (
                        <Link href="/profile#dashboard" passHref>
                          <a rel="noopener noreferrer">
                            <span className="text-xs leading-6 text-slate-800 font-500 cursor-pointer">
                              {ServeLangItem()?.Account}
                            </span>
                          </a>
                        </Link>
                      )}

                      <div className="favorite relative ">
                        <Link href="/wishlist" passHref>
                          <a rel="noopener noreferrer">
                            <span className="cursor-pointer ">
                              <ThinLove className="fill-current font-bold" />
                            </span>
                          </a>
                        </Link>
                        <span className="w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px]">
                          {wishlists ? wishlists.data.length : 0}
                        </span>
                      </div>
                      <div className="cart-wrapper group relative py-4">
                        <div className="cart relative cursor-pointer">
                          <Link href="/cart" passHref>
                            <a rel="noopener noreferrer">
                              <span className="cursor-pointer">
                                <ThinBag
                                  pathClassName={'fill-black'}
                                  className={'fill-black'}
                                />
                              </span>
                            </a>
                          </Link>
                          <span className="w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px]">
                            {cartItem ? cartItem : 0}
                          </span>
                        </div>

                        <Cart className="absolute text-white ltr:-right-[45px] rtl:-left-[45px] top-11 z-50 hidden group-hover:block" />
                      </div>
                      {auth ? (
                       <span onClick={logout} className="flex items-center gap-3 border border-[var(--primary-color)] rounded-xl p-2 w-28 cursor-pointer">
                       <IcoLogout
                         className={"fill-[var(--primary-color)]"}
                         pathClassName={"fill-[var(--primary-color)]"}
                       />
                       <span className="text-[14px] text-[var(--text-color)]">Logout</span>
                       </span>
                      ) : (
                        <div onClick={() => location.push("/login")} className="flex items-center gap-3 border border-[var(--primary-color)] rounded-xl p-2 w-28 cursor-pointer">
                            <Login
                              className={"fill-[var(--primary-color)]"}
                              pathClassName={"fill-[var(--primary-color)]"}
                            />
                            <span className="text-[14px] text-[var(--text-color)]">Login</span>
                        </div>
                      )}
                      {/* <div>
                {auth ? (
                  <button onClick={profilehandler} type="button">
                    <span className="text-qblack font-bold text-sm block">
                      {auth && auth.user.name}
                    </span>
                    <span className="text-qgray font-medium text-sm block">
                      {auth && auth.user.phone}
                    </span>
                  </button>
                ) : (
                  <Link href="/login" passHref>
                    <a rel="noopener noreferrer">
                      <span className="cursor-pointer">
                        <ThinPeople />
                      </span>
                    </a>
                  </Link>
                )}
              </div> */}

                      {profile && (
                        <>
                          <div
                            onClick={() => setProfile(false)}
                            className="w-full h-full fixed top-0 left-0 z-30"
                            style={{ zIndex: '35', margin: '0' }}
                          ></div>
                          <div
                            className="w-[208px] h-[267px] bg-white absolute right-0 top-11 z-40 border-t-[3px] primary-border flex flex-col justify-between"
                            style={{
                              boxShadow:
                                ' 0px 15px 50px 0px rgba(0, 0, 0, 0.14)',
                            }}
                          >
                            <div className="menu-item-area w-full  p-5">
                              <ul className="w-full  flex flex-col space-y-7">
                                <li className="text-base text-qgraytwo">
                                  <span>
                                    {ServeLangItem()?.Hi},{' '}
                                    {auth && auth.user.name}{' '}
                                  </span>
                                </li>
                                <li className="text-base text-qgraytwo cursor-pointer hover:text-qblack hover:font-semibold">
                                  <Link href="/profile#dashboard" passHref>
                                    <a rel="noopener noreferrer">
                                      <span className="capitalize">
                                        {ServeLangItem()?.profile}
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li className="text-base text-qgraytwo cursor-pointer hover:text-qblack hover:font-semibold">
                                  <Link href="/contact" passHref>
                                    <a rel="noopener noreferrer">
                                      <span className="capitalize">
                                        {ServeLangItem()?.Support}
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li className="text-base text-qgraytwo cursor-pointer hover:text-qblack hover:font-semibold">
                                  <Link href="/faq" passHref>
                                    <a rel="noopener noreferrer">
                                      <span className="capitalize">
                                        {ServeLangItem()?.FAQ}
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="w-full h-10 flex justify-center items-center border-t border-qgray-border">
                              <button
                                onClick={logout}
                                type="button"
                                className="text-qblack text-base font-semibold"
                              >
                                {ServeLangItem()?.Sign_Out}
                              </button>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                    <div className="flex ltr:space-x-2 rtl:space-x-0 items-center ">
                      {/* cart and heart */}
                    </div>
                  </div>
                </div>
              </>
            )}
            {Multivendor() === 1 && (
              <div className="block lg:hidden">
                <Link href="/become-seller" passHref>
                  <a rel="noopener noreferrer">
                    <span className="text-xs leading-6 text-white px-3 py-1 primary-bg font-medium font-500 cursor-pointer">
                      {ServeLangItem()?.Become_seller}
                    </span>
                  </a>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
