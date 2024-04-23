import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import FontAwesomeCom from "../../Helpers/icons/FontAwesomeCom";
import ServeLangItem from "../../Helpers/ServeLangItem";
import Arrow from "../../Helpers/icons/Arrow";

function CategorySection({ sectionTitle, categories }) {
  const { websiteSetup } = useSelector((state) => state.websiteSetup);
  const categoryList = websiteSetup && websiteSetup.payload.productCategories;
  const mageMenuList = websiteSetup && websiteSetup.payload.megaMenuCategories;
  const megaMenuBanner = websiteSetup && websiteSetup.payload.megaMenuBanner;
  const customPages = websiteSetup && websiteSetup.payload.customPages;

  return (
    <div className="category-section-wrapper container-x mx-auto flex px-10 py-10">
      <div className="min-h-[576px] h-auto w-[350px] border border-black-800 relative hidden lg:block sm:block bg-white">
        <div className="hidden h-[41px] px-5 rounded-[5px] bg-[var(--primary-color)] lg:block sm:block">
          <button
            type="button"
            className="w-full h-full flex justify-between items-center cursor-default"
          >
            <div className="flex rtl:space-x-reverse space-x-3 text-[var(--text-color)] items-center">
              <span>
                <svg
                  width="14"
                  height="9"
                  color="#ffff"
                  viewBox="0 0 14 9"
                  className="fill-current text-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="14" height="1" />
                  <rect y="8" width="14" height="1" />
                  <rect y="4" width="10" height="1" />
                </svg>
              </span>
              <span className="text-sm font-600 text-white">
                {ServeLangItem()?.All_Categories}
              </span>
            </div>
          </button>
        </div>
        <ul className="all-categories-item bg-white">
          {categoryList &&
            categoryList.map((item) => (
              <li
                className="hover:bg-[var(--primary-color)] text-[var(--text-color)] hover:text-white group/parent"
                key={item.id}
              >
                <Link
                  href={{
                    pathname: "/products",
                    query: { category: item.slug },
                  }}
                  passHref
                >
                  <a rel="noopener noreferrer">
                    <div className=" flex justify-between items-center px-5 h-10 transition-all duration-300 ease-in-out cursor-pointer">
                      <div className="flex items-center rtl:space-x-reverse space-x-6">
                        <span>
                          <FontAwesomeCom
                            className="w-4 h-4 "
                            icon={item.icon}
                          />
                        </span>
                        <span className="text-xs font-400">{item.name}</span>
                      </div>
                      {item.active_sub_categories.length > 0 && (
                        <div>
                          <span>
                            <svg
                              className={`transform rtl:rotate-180 fill-current`}
                              width="6"
                              height="9"
                              viewBox="0 0 6 9"
                              fill="text-[var(--text-color)]"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                x="1.49805"
                                y="0.818359"
                                width="5.78538"
                                height="1.28564"
                                transform="rotate(45 1.49805 0.818359)"
                              />
                              <rect
                                x="5.58984"
                                y="4.90918"
                                width="5.78538"
                                height="1.28564"
                                transform="rotate(135 5.58984 4.90918)"
                              />
                            </svg>
                          </span>
                        </div>
                      )}
                    </div>
                  </a>
                </Link>

                {item.active_sub_categories.length > 0 && (
                  <ul className="hidden group-hover/parent:block border border-black-800 z-10 absolute ltr:left-[260px] lg:ltr:left-[260px] sm:ltr:left-[200px] w-[270px] bg-slate-100 top-0 h-[612px] overflow-auto">
                    {item.active_sub_categories.map((subItems) => (
                      <li
                        key={subItems.id}
                        className="group/child text-[var(--text-color)] hover:bg-[var(--primary-color)] hover:text-white"
                      >
                        <Link
                          href={{
                            pathname: "/products",
                            query: { category: item.slug },
                          }}
                          passHref
                        >
                          <a rel="noopener noreferrer">
                            <div className=" flex justify-between items-center px-5 h-10 transition-all duration-300 ease-in-out cursor-pointer">
                              <div className="flex items-center rtl:space-x-reverse space-x-6">
                                <span className="text-xs font-400">
                                  {subItems.name}
                                </span>
                              </div>
                              {subItems.active_child_categories.length > 0 && (
                                <div>
                                  <span>
                                    <svg
                                      className={`transform rtl:rotate-180 fill-current`}
                                      width="6"
                                      height="9"
                                      viewBox="0 0 6 9"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <rect
                                        x="1.49805"
                                        y="0.818359"
                                        width="5.78538"
                                        height="1.28564"
                                        transform="rotate(45 1.49805 0.818359)"
                                      />
                                      <rect
                                        x="5.58984"
                                        y="4.90918"
                                        width="5.78538"
                                        height="1.28564"
                                        transform="rotate(135 5.58984 4.90918)"
                                      />
                                    </svg>
                                  </span>
                                </div>
                              )}
                            </div>
                          </a>
                        </Link>
                        {subItems.active_child_categories.length > 0 && (
                          <ul className="hidden group-hover/child:block border border-black-800 z-10 absolute ltr:left-[270px] lg:ltr:left-[270px] sm:ltr:left-[255px] w-[270px] bg-slate-100 top-0 h-[576px]">
                            {subItems.active_child_categories.map(
                              (subItemChild) => (
                                <li
                                  key={subItemChild.id}
                                  className="hover:bg-[var(--primary-color)] text-[var(--text-color)] hover:text-white"
                                >
                                  <Link
                                    href={{
                                      pathname: "/products",
                                      query: { category: item.slug },
                                    }}
                                    passHref
                                  >
                                    <a rel="noopener noreferrer">
                                      <div className=" flex justify-between items-center px-5 h-10 transition-all duration-300 ease-in-out cursor-pointer">
                                        <div className="flex items-center rtl:space-x-reverse space-x-6">
                                          <span className="text-xs font-400 ">
                                            {subItemChild.name}
                                          </span>
                                        </div>
                                      </div>
                                    </a>
                                  </Link>
                                </li>
                              )
                            )}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
        </ul>
      </div>
      <div className="container-x mx-auto pb-[60px] w-1/2">
        <div>
          {/*<div className="section-title flex justify-between items-center mb-5">*/}
          {/*    <div>*/}
          {/*        <h1 className="sm:text-3xl text-xl font-600 text-[var(--text-color)]text">*/}
          {/*            {sectionTitle}*/}
          {/*        </h1>*/}
          {/*    </div>*/}
          {/*</div>*/}
          <div className="w-full grid xl:grid-cols-3 md:grid-cols-4 grid-cols-2 gap-[30px]">
            {categories &&
              categories.length > 0 &&
              categories
                .slice(0, categories.length > 8 ? 8 : categories.length)
                .map((item, i) => (
                  <div
                    data-aos="fade-left"
                    data-aos-delay={i + "00"}
                    key={i}
                    className="item w-full cursor-pointer group"
                  >
                    <Link
                      href={{
                        pathname: "/products",
                        query: { category: item.slug },
                      }}
                      passhref
                    >
                      <a rel="noopener noreferrer">
                        <div className="w-full h-[120px] relative rounded flex justify-center items-center">
                          <div className="w-full h-full relative transform scale-100 group-hover:scale-110 transition duration-300 ease-in-out">
                            <Image
                              layout="fill"
                              objectFit="scale-down"
                              src={
                                process.env.NEXT_PUBLIC_BASE_URL + item.image
                              }
                              alt=""
                            />
                          </div>
                        </div>
                        <p className="text-base text-[var(--text-color)] text-center mt-5 group-hover:text-qgreen transition duration-300 ease-in-out">
                          {item.name}
                        </p>
                      </a>
                    </Link>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategorySection;
