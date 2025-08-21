"use client";
import React from "react";
import { Inputs } from "@/app/(pages)/(auth)/components/inputs";
import Link from "next/link";
import Image from "next/image";
import InfoPanel from "../components/InfoPanel";

const ForgotPassword = () => {
  return (
    <div className="xl:bg-[url('/bg-imges/ds.png')] h-screen flex justify-center bg-cover">
      <div className="flex xl:w-[1440px]">
        {/* Left container */}
        <div>
          <div className="bg-[url('/bg-imges/bg.png')] xl:bg-none bg-cover">
            <div className="flex flex-col justify-evenly w-full xl:w-[619px] h-screen">
              {/* Logo & Headings */}
              <div className="w-full flex flex-col items-center justify-center">
                <div className="flex flex-col justify-center items-center w-full gap-6">
                  {/* Logo with Next Image */}
                  <div>
                    <Image
                      src="/formimges/login-imges/logo-71.png"
                      alt="Rythm Capital Logo"
                      width={160}
                      height={80}
                      priority
                    />
                  </div>
                  {/* Headings */}
                  <div className="mb-8 w-[360px]">
                    <h1 className="text-[#2D3035] font-semibold text-center font-urbanist leading-[38px] text-[30px]">
                      Account Recovery
                    </h1>
                    <h1 className="text-[#626974] font-normal text-center font-urbanist tracking-[0%] leading-[24px] text-[16px]">
                      Reset your password to regain access to your Venue account. 
                      Enter your email for further instructions.
                    </h1>
                  </div>
                </div>

                {/* Email Input */}
                <div className="w-full xl:max-w-[360px]">
                  <Inputs
                    type="email"
                    name="Email"
                    heading="Email"
                    Placeholder="olivia@untitledui.com"
                    svg={
                      <Image
                        src="/mail.svg"
                        alt="Email Icon"
                        width={20}
                        height={20}
                      />
                    }
                    svg2
                    className="w-full xl:max-w-[360px]"
                  />
                </div>

                {/* Button + Links */}
                <div className="mt-8">
                  <Link href="/OtpRecovery">
                    <button className="py-[10px] border-[1px] border-[#89AD28] bg-[#c1f338] hover:bg-[#9dc72c] transition-all duration-1000 transform rounded-[8px] px-24 md:px-[160.5px]">
                      Confirm
                    </button>
                  </Link>

                  <div className="flex justify-center mt-4">
                    <h1 className="text-[#626974] font-normal text-center font-urbanist leading-[20px] text-[14px]">
                      Don’t have an account?
                    </h1>
                    <h1 className="text-[#2D3035] font-semibold text-center font-urbanist leading-[20px] text-[14px] ml-1">
                      <Link href="/SignUp">Sign up</Link>
                    </h1>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="ml-[32px] text-[#475467] font-urbanist text-[14px] leading-5">
                <h1>© Rythm Capital 2027</h1>
              </div>
            </div>
          </div>
        </div>

        {/* Right container */}
        <div className="scrollbar-hide overflow-y-auto">
          <InfoPanel />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
