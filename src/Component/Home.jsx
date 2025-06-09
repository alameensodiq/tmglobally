import { useState } from "react";
// import "./App.css";
import tmglobal from "../../src/assets/tmglobal.png";
import imageglobal from "../../src/assets/imageglobal.png";
import desktop from "../../src/assets/desktop.png";
import comingsoon from "../../src/assets/comingsoon.png";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        backgroundImage: `url(${tmglobal})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
      className="w-full min-h-screen"
    >
      <div className="h-[40h]  flex flex-row justify-between items-center px-24">
        <img alt="imageglobal" src={imageglobal} />
        <div className="lg:flex flex-row hidden  w-[25%] lg:w-[25%] md:w-[25%] gap-10 items-center">
          <span className="font-geist text-[10px] lg:text-[16px] md:text-[14px] text-white">
            About us
          </span>
          <span className="font-geist text-[10px] lg:text-[16px] md:text-[14px] text-white">
            Features
          </span>
          <span className="font-geist text-[10px] lg:text-[16px] md:text-[14px] text-white">
            Contact
          </span>
        </div>
        <button
          style={{ boxShadow: "0px 12px 20px -1px #FFFFFF24" }}
          className="text-[#2B4A9D] hidden lg:flex font-geist-bold text-[14px] bg-white w-[129px] h-[44px] rounded-[8px] flex-row justify-center items-center"
        >
          Contact us
        </button>
      </div>
      <div className="flex flex-col pt-7 gap-2 items-center">
        <div className="flex flex-col items-center leading-[42px] lg:leading-[72px] md:leading-[62px]">
          <span className="text-[30px] lg:text-[58px] md:text-[40px] text-white font-clash-bold">
            Trade Globally.
          </span>
          <span className="text-[30px] lg:text-[58px] md:text-[40px] text-white font-clash-bold">
            Pay Locally.
          </span>
        </div>
        <div className="flex flex-col items-center justify-center leading-[30px]">
          <span className="text-[14px] lg:text-[19px] md:text-[17px] font-geist text-center text-white">
            Seamless payments from Africa to China—no middlemen, no hassle.
            Trade faster,
          </span>
          <span className="text-[14px] lg:text-[19px] md:text-[17px] font-geist text-center text-white">
            smarter, and directly—on your terms. Pay vendors in Yuan, fund
            Alipay wallets, and
          </span>
          <span className="text-[14px] lg:text-[19px] md:text-[17px] font-geist text-center text-white">
            unlock global opportunities
          </span>
        </div>
        <div className="flex flex-row items-center gap-4 pt-8">
          <button
            style={{ boxShadow: "0px 12px 20px -1px #FFFFFF24" }}
            className="text-[#141414] font-geist-bold text-[14px] bg-[#FEF404] w-[177px] h-[44px] rounded-[8px]"
          >
            Create account
          </button>
          <button
            style={{ boxShadow: "0px 12px 20px -1px #FFFFFF24" }}
            className="text-[#FFFFFF] border-[#FFFFFF] border-[1px] bg-transparent font-geist-bold text-[14px] bg-[#FEF404] w-[102px] h-[44px] rounded-[8px]"
          >
            Sign in
          </button>
        </div>
      </div>
      <div className="lg:mb-0 md:mb-0 pt-24 lg:pt-10 md:pt-10 flex flex-row justify-center relative">
        <div className="flex flex-row  w-[95%] lg:w-[65%] md:w-[65%] ">
          <img alt="desktop" src={desktop} />
          <img
            alt="comingsoon"
            src={comingsoon}
            className="absolute top-[20px] right-[0px] lg:top-[-50px] lg:right-[170px] md:top-[-50px] md:right-[70px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
