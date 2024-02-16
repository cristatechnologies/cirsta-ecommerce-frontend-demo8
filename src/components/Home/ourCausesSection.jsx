import Image from "next/image";
import React from "react";

const OurCausesSection = () => {
  return (
    <div className="w-full bg-[#023020] mt-10 mb-16">
      <h1 className="text-orange-600 font-bold text-3xl lg:text-5xl max-w-5xl mx-auto text-center">
        Our Causes
      </h1>
      <div className="flex justify-center lg:justify-evenly gap-5 lg:gap-10 w-full lg:max-w-6xl mx-auto lg:flex-nowrap sm:flex-nowrap md:flex-nowrap p-10 flex-wrap">
        <div className="flex flex-col rounded-xl bg-white  w-10/12 sm:w-1/2 lg:w-1/3">
          <div >
            <Image
              src={
                "/assets/images/group-african-kids-paying-attention-class.jpg"
              }
              alt="our causes image"
              width={500}
              height={250}
              className="rounded-xl"
            />
          </div>
          <div className="p-5">
            <p className="text-orange-600 lg:text-[23px] font-bold">
              Artisan-Centric Technology
            </p>
            <p className="mt-5 text-xs lg:text-base font-light">
              Our technology is designed with artisans in mind, making it
              user-friendly and accessible even for those with limited digital
              skills with a try of local language presentation.
            </p>
          </div>
          <div className="p-2 lg:p-5 bg-orange-600 text-center text-white text-lg font-semibold rounded-b-xl">
            Know more
          </div>
        </div>
        <div className="flex flex-col rounded-xl bg-white w-10/12 lg:w-1/3 sm:w-1/2 justify-between">
          <div className="w-full">
            <Image
              src={
                "/assets/images/poor-child-landfill-looks-forward-with-hope.jpg"
              }
              alt="our causes image"
              width={500}
              height={250}
              className="rounded-xl"
            />
          </div>
          <div className="p-5">
            <p className="text-orange-600 lg:text-[23px] font-bold">
              Empowerment
            </p>
            <p className="mt-5 font-light text-xs lg:text-base">
              Our platform provides them with a global stage to showcase their
              work, help them gain the recognition and the economic
              opportunities they deserve
            </p>
          </div>
          <div className="p-2 lg:p-5 bg-orange-600 text-center text-white text-lg font-semibold rounded-b-xl">
            Know more
          </div>
        </div>
        <div className="flex flex-col rounded-xl bg-white w-10/12 lg:w-1/3 sm:w-1/2 justify-between ">
          <div>
            <Image
              src={
                "/assets/images/african-woman-pouring-water-recipient-outdoors.jpg"
              }
              alt="our causes image"
              width={500}
              height={250}
              className="rounded-xl"
            />
          </div>
          <div className="p-5">
            <p className="text-orange-600 lg:text-[23px] font-bold">Thought</p>
            <p className="mt-5 font-light text-xs lg:text-base">
              Every decision we make is guided by our unwavering belief in the
              potential of skilled artisans and the positive ripple effect they
              can create in their communities.
            </p>
          </div>
          <div className="p-2 lg:p-5 bg-orange-600 text-center text-white text-lg font-semibold rounded-b-xl">
            Know more
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCausesSection;
