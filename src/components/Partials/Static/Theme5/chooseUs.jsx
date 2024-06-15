export default function ChooseUs({className}){
    return (
      <section
        className={`bg-[var(--secondary-color)] h-auto text-center px-10 pb-10 ${
          className || ""
        }`}
      >
        <h2 className="text-6xl font-normal relative font-serif text-[var(--primary-color)]">
          Why{" "}
          <span className="svg-underline inline-block relative z-1 before:absolute before:bottom-[-2px] before:left-0 before:right-0 before:h-3 before:bg-underline-svg before:bg-100% before:bg-bottom before:opacity-70">
            <span className="">
              Choose
              <div data-aos="fade-right" data-aos-delay={63} className="">
                 <svg
                  className="inline-block"
                  height="13"
                  width="100%"
                  viewBox="0 0 260.026 10.311"
                  xmlns="http://www.w3.org/2000/svg"
                > 
                  <g fill="#193532">
                    <path d="M206.826 3.911l-.1.3c.1-.2.2-.3.1-.3zm27.9 2.7h-.1c-.2.4-.1.3.1 0zm-179.9-5.8l-.6-.4c.2.4.4.5.6.4zm-20.3 5.4l.1.3c0-.2 0-.3-.1-.3zm-12.1 1.2a3.4 3.4 0 00-1-.1 3.083 3.083 0 001 .1zm-4.9-5.8c-.1.1-.2.1-.4.2.2-.1.3-.2.4-.2zm35.2 4.8l.5.9a4.053 4.053 0 00-.5-.9zm-33.2 1.8c-.2-.2-.4-.2-.6-.3 0 .2.3.3.6.3zm101.4-.2c-.1.1-.2.2-.2.3.3-.1.3-.2.2-.3zm-40-1h-.1a.349.349 0 00.2.1zm11.7 0l-.2.2c.2-.1.2-.1.2-.2zm-20.5.9c-.1.1-.3.2-.4.3z" />
                    <path d="M206.826 3.911l-.1.3c.1-.2.2-.3.1-.3zm27.9 2.7h-.1c-.2.4-.1.3.1 0zm-179.9-5.8l-.6-.4c.2.4.4.5.6.4zm-20.3 5.4l.1.3c0-.2 0-.3-.1-.3zm-12.1 1.2a3.4 3.4 0 00-1-.1 3.083 3.083 0 001 .1zm-4.9-5.8c-.1.1-.2.1-.4.2.2-.1.3-.2.4-.2zm35.2 4.8l.5.9a4.053 4.053 0 00-.5-.9zm-33.2 1.8c-.2-.2-.4-.2-.6-.3 0 .2.3.3.6.3zm101.4-.2c-.1.1-.2.2-.2.3.3-.1.3-.2.2-.3zm-40-1h-.1a.349.349 0 00.2.1zm11.7 0l-.2.2c.2-.1.2-.1.2-.2zm-20.5.9c-.1.1-.3.2-.4.3z" />
                    <path d="M260.026 2.611c-1-.6-4.7-1.2-5.8.3-.2-.1.1-.3.2-.4a14.3 14.3 0 01-3.6 0 19.65 19.65 0 00-4.2 0c-1 1.5-3.9-.6-4.8 1.4l.5-.4c.9.5-1.2 1.4-1.5 1.9-.8-1.2-.1-1-1-2l1.1.4-.3-1c-3.1 2.8-6.2-.9-8.2 1.1.1-.1.1-.3.2-.4-1.4-.5-2.3.8-3.3 1.2-.1-.5.6-.9 1.1-1.3-2.4-.3-6.4 1.2-9 .4-.9.7.4.9-.6 1.5-.8-.2-1.4-.7-.4-1.1-2.3-1.2-7.6 1-11.1-.2-1.8.8-.7 1.1-3.5 1.6.7-.5-.7-1.7 1-1.7l.2-.5c-2.8-.1-6.6-.3-8.1 1.2-.1-1.1-.5-.2-1.6-.8-.4.1 0 .2.2.2-1 .9-1.6-.1-2.3.1l.3-.2-2 .7c-.3-.2-.8-.4-.9-.7v.8c-1.1 0-.5-1-1.9-.8l.3.6c-.9-.4-2.2.4-2.4-.5 0-.2.1-.1.4-.1-1.3-1.2-3.5.3-5.1-.3l.4 1.3c-1.6.4-1-.3-.9-.7-1.1 0-1.3-.4-2.7-.6-.7.3-.4.5-.6.8l-1.5-.4 1-.7c-2.3 1.8-5.6-.4-7.2 1.2-.8-.4.8-.7.3-1-2.6-.9-6 1-8.2 0-3.6-1-7.8-.4-11.8-1.1l.1.3-2.9-.4c-.8.7-2.7.3-4 1.1.1-.3-.1-.7.2-.9-1.2.1-2.6.4-3.3-.1l.4-.3c-2.7-.3-6.4-.5-7.9.1-.9 0-.9-.6-1.1-1a8.242 8.242 0 00-3.9.7 5.3 5.3 0 01-1-.6l-.6.8c-.6-.1-.1-.7-.6-.9-2.5.9-5.3-.1-7-.1l.2.4c-.7.3-2.1-.3-1.2-.7-3.4-.6-5.1 1.2-9.6.8-.6-1.5-4.1.3-4.8-1.4-1.9.4-3.2-.3-4.5.6 0-.2-.2-.2.1-.3-.8-.6-3.3-.2-5.3.2l-.1-.5c-.9 1.2-4.2.9-4.9 2-.2-.2.4-.5.7-.7-1-1.1-1.8.5-3.1.2.1-.3-.3-.6 0-.8-4.4-1.2-10.6.7-16.3-.1-1.6 0 .6 1.2-1.5 1.1-.6-.6 1-1.1-.3-1.4-.9.7-1.3.5-2.6.5.2-.4 0-.6.9-.9-.7-.5-3.1.9-4.5 0 .1.3-.2.5-.5.7-2.1 1-4.9-.9-5.1-.4 0 0-.7.2-.1.3-.8 0-1.9-.2-1.7-.7-.4.3-.8.8-1.4.8l.3-.6c-.4.1-.8.5-1.1.6l.6.4c-.9-.5-2.6.8-2.6-.4h.3l-1.7-.5a3.328 3.328 0 01-2.5.9c-.5-1.3-2.9-.2-4.3-.3l.1-.4c-1.1.6-4 .4-3.5.6-1.1 0-2.6-.2-2-.6-.8.1-2.7.1-3.2.9l-1.8-1c-1 1.6-3.6-.5-3.6 1.2-1-.2-.8-.6-1.5-.9a6.307 6.307 0 01-4.2.7v-.2c-1.4-.1-3.1.8-5.1 1l-.5-1.2c-1 .2-1.3 1.2-2.3 1-.2-.2 0-.3.2-.3a5.366 5.366 0 01-3.1-.2c-1.5 1-2.7.7-3.9 1.8-1.3-1 1.7-.6.6-1.6-2.2-.4-4.4.4-6.7 1.1-.2-.2 0-.4.1-.7 0 0-1.2.9-2.2 1.8-1 1-1.9 2.1-1.4 2.7-.5.9-1.2 1.4.9 2 .6-.5 2.5-1.3 2.9-.4l.1-.9c2.6-.6.4 1.8 3.6 1.6l-.7-.3c.6-.1 1.1-.7 1.8-.5.2.2-.2.4-.5.6.9-.5 1.7-.9 2.6-1.4a1 1 0 01-.4 1.2c2.5-.2-.6-1.6 2.4-1.4.6.4-.2.6-.5.9 1.4.7 2.3-.1 3.8-.6.1.8-.9.7.3 1.2-.3-.4-.5-1.1.5-1.2-.4.8.7.4 1.6.5a.54.54 0 01.2-.8 7.6 7.6 0 011.4.1l-1.1-.7c1.5-.8 2.4.3 3.6.6a.85.85 0 01-.5.3c1.2.3 2.5.9 4.1.1l-.3.1c2.9-.9-1-1.3 2.4-2.2 1.1.1-.4 2.6 2.1 1.6-1.3-.6 1.6-1.7 3.1-2l-1.5 1.6c.6 0 1.6-.5 2-.3l-.1-.3c-.2-1.3 1.9.1 3-.7-1.3 1.8-1.4 1.5-1.6 3.2a5.121 5.121 0 014.1-1.8l-1.5 1.4c2.5.2 5.5-1.9 7.6-3-.5 1 .3 1.4-.6 2.2l2.4-.3-.7 1.1c1-1.2 2.1-.4 1.9-1.9-.3.2-.2.4-.7.3a1.59 1.59 0 011.7-1.3c.9.3-.5.6-.2 1 .8-.6.9.3 1.7-.1l-.8-.6c.6-.9 1.4-.1 2.2-.5-1 .4-.7.9-.3 1.4l-.1-.1c.8-.1 1.6-.7 2-.2l-.5 1.2.9-.9c.3.1.6.6 0 .8 2.8.7-.1-2.5 3.6-1.5 0 .5-.4.8-1.4.5-.2.7.1 1.1 1.1 1.4v.1c1.9 0 4.4 0 5.6-.8.4.3 0 .6-.4.9 2.1.4 2.8-.7 5 .1l-1-.4c1.4-.6 4-.8 5.3.1l-.4.3c1.3-.7 3.5.6 4 0-.6-.4 0-.6-.8-1l3.4-.7.2 1.2 1.8-.4c-.4-.5 2.4.4 2.5-.7 1 .4-.4.9-.8 1.4 1-.3 1.1.2 2.1-.5l1 1.1 2.6-.7c-.1.1 0 .2-.1.3 1.2-.9 3.1.6 4.6-.9-.1.1-.1.1-.1.2.9-.8 2.9-.2 3.7 0 1.4-.2.6-1 .6-1.4 3.9.4 2.7.3 6-.9 2 1.4-2.4 2.1.1 3 .4-.6 2.1-1.1 4.1-1.3 1.8.5 4.8.9 6.5 1.9l-.2-.9 2.6-.4-1.5 1.2a22.655 22.655 0 012.6-1.2c2.7-.7 1.4 1.9 3.5.7.1.1.1.2.2.3.7-.6 2.4-.3 4.4-.5l-.7 1.1-1.3-.3c.7 1.1 2.1-.1 3.4 0 1.3-.3.7-1.3 1.4-1.6.5.1 1.2-.2 1.6.1 1.1.4.1 1.3-.3 1.8 1-1.1 1.4-.9 3.6-1.3.1.5-.1.8-.4.9a1.644 1.644 0 001.2-.8l.7.7c2.5 1 2.6-2 5.6-1.5-.8.6 2.6 0 3.5.7-1.1.1.4 1.6-.2 2.3 2.4.5 1-1.3 3-1.4l-.9 1.3c1.9-.5.5-.7 2.4-1.1-.5.4.8.4-.3.8 2.5.2 1.9.1 4.1.3l.2-1.3c.7-.1 1 .5 1.2.7-.3 0-.8-.1-.7.1.8 1.2 1.4-.6 2.4.5-.2-.4-.5-1 .4-1.1-.3.8 1.4.8 1.4 1.2-.6-.6 2-.2 2.1-1 1 .7-.4.6-.4 1.1.9-1 3.7 0 4.6-.6 0 .1.1.1.1.2 1.2-.6 3-.7 5.3-1.5l-.8.7c2.2.4 1.4-1.5 3.3-1.5-.4 1.1 3.1 0 2.2 1.2 1.1-.6 2.3-.8 3.1-1.7 1 .6-2.1 1.4-.6 1.8l1.6-.5.3.6c.1-.4 1.5-.4 1.4-.8.2.7.9 1.2.8 1.8 1-.2 2.4.5 3.3-.1l.1.3c1-1.3 3.1-.2 3.6-1.5l.6.7c1.5-.1 1.3-1.5 2-1.8a6.7 6.7 0 012 0c-2 .8 1 1.1 1.4 1.6.8 0 3.1 0 3.7-.7-1 .7-.4 1.2-2.1 1.3.9 1.3 2.6-.2 4.5-.1v.6c2.7-.4 2.8-1.5 4-2.5.3.8.1 1-.7 1.7 1.8.5 4.7-.1 6.7 0 .6.5.2.9-.5 1.1 2.1-.6 4.7.1 6-1.2-.5.5.9.3 1.6.6 0-.3.1-.6.2-.6a10.628 10.628 0 015.6-.7l-.5.4a11.34 11.34 0 004.3-.9 8.1 8.1 0 014.5-.4c.7.3-.7 1.1.7 1 .7-.5.4-1.5 2.2-1.3l-.1.9 1.2-.9c-.7-.7-2.6-.4-1.3-1.2 1.6.8 1.3-.9 3.3 0-.4.1-1 .8-1.3 1.2a12.558 12.558 0 004.8-.1 11.036 11.036 0 014.9-.2c2-.8 4.6-1.2 5.9-1.9a2.748 2.748 0 01-.8 2.4c1.8 0 2.4-2.1 3.7-.9.7-1.3 4.7-1.2 5-3l2-.8z" />
                    <path d="M58.126 7.711a6.871 6.871 0 00-2.3.2c.2.2 2.3.6 2.3-.2zm150.1 2.2c-.1 0-.3.1-.4.1a.6.6 0 00.4-.1zm8.1-.4a1.381 1.381 0 00-.4-.3c0 .3.1.5.4.3zm-37.8.8c.7-.4 1-.7 1-1-.4.1-.7.3-1 1zm-15.5-1.1c-.1.1-.2.1-.3.2.3-.1.3-.2.3-.2zm-32.8-.6a9.3 9.3 0 012.4-.5c-.7.2-1.9-.3-2.4.5zm95.9-.6l-.7.6.8-.4zm-7.5.6c-.3-.1-1.7.3-1.3.6a3.79 3.79 0 011.3-.6zm-29-.6l-.3.6.7-.5z" />
                  </g>
                </svg> 
              </div>
            </span>
          </span>{" "}
          Us?
        </h2>

        <div className="grid md:grid-cols-3 md:grid-rows-1 sm:grid-cols-1 sm:grid-rows-3  gap-4 lg:py-16">
          <div className="flex justify-center w-full flex-col px-4">
            <div className="flex justify-center py-4">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                fill={cnvThemeColor}
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <path
                  d="M130.24636,223.97423a96.01036,96.01036,0,0,0,83.92-53.60107l-.00178-.00094-54.28632-33.38846a7.99993,7.99993,0,0,0-3.12236-1.114l-22.81867-3.07595a8,8,0,0,0-8.37592,4.67178l-13.69878,30.73831a8,8,0,0,0,1.433,8.68736l18.79995,20.33464a8,8,0,0,1,1.98022,6.9502l-3.8294,19.79638Z"
                  opacity="0.2"
                ></path>
                <path
                  d="M64.95216,55.60635,56.00794,76.75607a8,8,0,0,0-.12321,5.92293l11.49086,30.66819a8,8,0,0,0,5.81037,5.01448l5.423,1.16555,8.32721-19.76833a8,8,0,0,1,7.37259-4.89437h21.34538a8,8,0,0,0,3.86737-.9969l12.24176-6.76034a8.00033,8.00033,0,0,0,1.49868-1.06968l26.91087-24.33754a8,8,0,0,0,1.6191-9.83314l-9.33366-16.7184.00122-.00463A96.18805,96.18805,0,0,0,64.95081,55.60478Z"
                  opacity="0.2"
                ></path>
                <circle
                  cx="128"
                  cy="128"
                  r="96"
                  fill="none"
                  stroke={cnvThemeColor}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="10"
                ></circle>
                <path
                  d="M214.16458,170.37222l-54.28632-33.38846a7.99993,7.99993,0,0,0-3.12236-1.114l-22.81867-3.07595a8,8,0,0,0-8.37592,4.67178l-13.69878,30.73831a8,8,0,0,0,1.433,8.68736l18.79995,20.33464a8,8,0,0,1,1.98022,6.9502l-3.8294,19.79638"
                  fill="none"
                  stroke={cnvThemeColor}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="10"
                ></path>
                <path
                  d="M64.95216,55.60635,56.00794,76.75607a8,8,0,0,0-.12321,5.92293l11.49086,30.66819a8,8,0,0,0,5.81037,5.01448l21.42993,4.60592a8,8,0,0,1,5.5197,4.3358l3.80564,7.862a8,8,0,0,0,7.20075,4.51442h13.43256"
                  fill="none"
                  stroke={cnvThemeColor}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="10"
                ></path>
                <path
                  d="M152.45823,35.14852l9.33366,16.7184a8,8,0,0,1-1.6191,9.83314L133.26192,86.0376a8.00033,8.00033,0,0,1-1.49868,1.06968l-12.24176,6.76034a8,8,0,0,1-3.86737.9969H94.30873a8,8,0,0,0-7.37259,4.89437l-8.32721,19.76833"
                  fill="none"
                  stroke={cnvThemeColor}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="10"
                ></path> 
              </svg>*/}
            </div>
            <div className="">
              <h2 className="transform-none font-normal h4 mb-4 font-serif text-lg">
                Woldwide Brand
              </h2>
              <p className="leading-tight text-cnvsThemeColor text-md px-6  ">
                Powerful Layout with Responsive functionality that can be
                adapted to any screen size. Resize browser to view.
              </p>
            </div>
          </div>

          <div className="flex justify-center w-full flex-col px-4">
            <div className="flex justify-center py-4">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                fill={cnvThemeColor}
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <path
                  d="M56,56v55.09613c0,39.70052,31.75464,72.60753,71.45407,72.90185A72.00008,72.00008,0,0,0,200,112V56a8,8,0,0,0-8-8H64A8,8,0,0,0,56,56Z"
                  opacity="0.2"
                ></path>
                <path
                  d="M56,56v55.09613c0,39.70052,31.75464,72.60753,71.45407,72.90185A72.00008,72.00008,0,0,0,200,112V56a8,8,0,0,0-8-8H64A8,8,0,0,0,56,56Z"
                  fill="none"
                  stroke={cnvThemeColor}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="10"
                ></path>
                <line
                  x1="96"
                  y1="224"
                  x2="160"
                  y2="224"
                  fill="none"
                  stroke={cnvThemeColor}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="10"
                ></line>
                <line
                  x1="128"
                  y1="184"
                  x2="128"
                  y2="224"
                  fill="none"
                  stroke={cnvThemeColor}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="10"
                ></line>
                <path
                  d="M198.21561,128H208a32,32,0,0,0,32-32V80a8,8,0,0,0-8-8H200"
                  fill="none"
                  stroke={cnvThemeColor}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="10"
                ></path>
                <path
                  d="M57.964,128H47.87289a32,32,0,0,1-32-32V80a8,8,0,0,1,8-8h32"
                  fill="none"
                  stroke={cnvThemeColor}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="10"
                ></path>
              </svg> */}
            </div>
            <div className="">
              <h2 className="transform-none font-medium h4 mb-4 font-serif text-lg">
                Award Winner
              </h2>
              <p className="leading-tight text-[var(--text-color)] text-md px-6 ">
                Looks beautiful & ultra-sharp on Retina Screen Displays. Retina
                Icons, Fonts & all others graphics are optimized
              </p>
            </div>
          </div>

          <div className="flex justify-center w-full flex-col px-4">
            <div className="flex justify-center py-4">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                fill={cnvThemeColor}
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <circle cx="128" cy="128" r="96" opacity="0.2"></circle>
                <circle
                  cx="128"
                  cy="128"
                  r="96"
                  fill="none"
                  stroke={cnvThemeColor}
                  stroke-miterlimit="10"
                  stroke-width="10"
                ></circle>
                <path
                  d="M169.57812,151.99627a48.02731,48.02731,0,0,1-83.15624.00073"
                  fill="none"
                  stroke={cnvThemeColor}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="10"
                ></path>
                <circle cx="92" cy="108" r="12"></circle>
                <circle cx="164" cy="108" r="12"></circle>
              </svg> */}
            </div>
            <div className="">
              <h2 className="transform-none font-medium h4 mb-4 font-serif text-lg">
                Happily Service
              </h2>
              <p className="leading-tight text-cnvsTextColor text-md px-6 ">
                Canvas includes tons of optimized code that are completely
                customizable and deliver unmatched fast performance.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
};