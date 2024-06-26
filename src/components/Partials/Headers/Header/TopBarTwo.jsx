import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useContext, useEffect, useState } from "react";
import { fetchWishlist } from "../../../../store/wishlistData";
import LoginContext from "../../../Contexts/LoginContext";
import ThinPeople from "../../../Helpers/icons/ThinPeople";
import ServeLangItem from "../../../Helpers/ServeLangItem";
import Cart from "../../../Cart";
import apiRequest from "../../../../../utils/apiRequest";
import ThinBag from "../../../Helpers/icons/ThinBag";
import ThinLove from "../../../Helpers/icons/ThinLove";
import SearchBoxTwo from "../../../Helpers/SearchBoxTwo";

export default function TopBarTwo({ className, contact, settings }) {
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

    return (
        <>
            <div
                className={`w-full  text-[var(--text-color)] h-28 hidden lg:block  ${className || ""
                    }`}
            >
                <div className="container-x !pl-0 h-full mx-auto">
                    <div className="flex justify-between items-center h-full w-full">
                        <>

                            <ul>
                                <li className="rtl:ml-6 ltr:ml-0 mt-4">
                                    <Link href="/" passHref>
                                        <a rel="noopener noreferrer">
                                            {settings && (
                                                <Image
                                                    width="180"
                                                    height="45"
                                                    objectFit="scale-down"
                                                    src={`${process.env.NEXT_PUBLIC_BASE_URL + settings.logo
                                                        }`}
                                                    alt="logo"
                                                />
                                            )}
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                            <div className="topbar-nav">
                                <ul className="flex space-x-6 items-center w-full">
                                    <li className="rtl:ml-6 ltr:ml-0">
                                        <div className="w-[470px]">
                                            <SearchBoxTwo className="search-com" />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="topbar-dropdowns lg:block hidden">
                                <div className="flex ltr:space-x-6 rtl:-space-x-0 items-center">
                                    <div className="flex space-x-6 rtl:space-x-reverse items-center relative">

                                        <div className="favorite relative ">
                                            <Link href="/wishlist" passHref>
                                                <a rel="noopener noreferrer">
                                                    <span className="cursor-pointer ">
                                                        <ThinLove className="fill-current font-bold  w-6 h-6" />
                                                    </span>
                                                </a>
                                            </Link>
                                            <span className="w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] bg-[var(--primary-color)]">
                                                {wishlists ? wishlists.data.length : 0}
                                            </span>
                                        </div>
                                        <div className="cart-wrapper group relative py-4">
                                            <div className="cart relative cursor-pointer">
                                                <Link href="/cart" passHref>
                                                    <a rel="noopener noreferrer">
                                                        <span className="cursor-pointer">
                                                            <ThinBag
                                                                pathClassName={"fill-black"}
                                                                className={"fill-black w-6 h-6"}
                                                            />
                                                        </span>
                                                    </a>
                                                </Link>
                                                <span className="w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px]  bg-[var(--primary-color)]">
                                                    {cartItem ? cartItem : 0}
                                                </span>
                                            </div>

                                            <Cart className="absolute text-white ltr:-right-[45px] rtl:-left-[45px] top-11 z-50 hidden group-hover:block" />
                                        </div>



                                        <button onClick={profilehandler} type="button">
                                            <span className="cursor-pointer">
                                                <ThinPeople className={"w-6 h-6"} />
                                            </span>
                                        </button>



                                        {profile && (
                                            <>
                                                <div
                                                    onClick={() => setProfile(false)}
                                                    className="w-full h-full fixed top-0 left-0 z-30"
                                                    style={{ zIndex: "35", margin: "0" }}
                                                ></div>
                                                <div
                                                    className="w-[208px] h-[267px] bg-white absolute right-0 top-11 z-40 border-t-[3px] primary-border flex flex-col justify-between"
                                                    style={{
                                                        boxShadow: " 0px 15px 50px 0px rgba(0, 0, 0, 0.14)",
                                                    }}
                                                >
                                                    <div className="menu-item-area w-full  p-5">
                                                        <ul className="w-full  flex flex-col space-y-7">
                                                            {auth && <li className="text-base text-qgraytwo">
                                                                <span>
                                                                    {ServeLangItem()?.Hi},{" "}
                                                                    {auth && auth.user.name}{" "}
                                                                </span>
                                                            </li>}
                                                            <li className="text-base text-qgraytwo cursor-pointer hover:text-[var(--text-color)] hover:font-semibold">
                                                                <Link href="/profile#dashboard" passHref>
                                                                    <a rel="noopener noreferrer">
                                                                        <span className="capitalize">
                                                                            {ServeLangItem()?.profile}
                                                                        </span>
                                                                    </a>
                                                                </Link>
                                                            </li>
                                                            <li className="text-base text-qgraytwo cursor-pointer hover:text-[var(--text-color)] hover:font-semibold">
                                                                <Link href="/contact" passHref>
                                                                    <a rel="noopener noreferrer">
                                                                        <span className="capitalize">
                                                                            {ServeLangItem()?.Support}
                                                                        </span>
                                                                    </a>
                                                                </Link>
                                                            </li>
                                                            <li className="text-base text-qgraytwo cursor-pointer hover:text-[var(--text-color)] hover:font-semibold">
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
                                                            onClick={() => { auth ? logout() : location.push('/login') }}
                                                            type="button"
                                                            className="text-[var(--text-color)] text-base font-semibold"
                                                        >
                                                            {auth ? ServeLangItem()?.Sign_Out : ServeLangItem()?.Login}
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
                    </div>
                </div>
            </div >
        </>
    );
}
