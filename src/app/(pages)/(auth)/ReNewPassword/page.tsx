"use client";
import React from "react";
import { Inputs } from "@/app/(pages)/(auth)/components/inputs";
import InfoPanel from "../components/InfoPanel";
import Link from "next/link";
import Image from "next/image";

const ReNewPassword = () => {
  return (
    <div className="xl:bg-[url('/bg-imges/ds.png')] h-screen flex justify-center bg-cover">
      <div className="flex xl:w-[1440px]">
        {/* Left container */}
        <div>
          <div className="bg-[url('/bg-imges/bg.png')] xl:bg-none bg-cover">
            <div className="flex flex-col justify-evenly w-full xl:w-[619px] h-screen">
              <div className="w-full flex flex-col items-center justify-center">
                {/* Logo + Headings */}
                <div className="flex flex-col justify-center items-center w-full gap-6">
                  <div>
                    <Image
                      src="/formimges/login-imges/logo-71.png"
                      alt="Rythm Capital Logo"
                      width={160}
                      height={80}
                      priority
                    />
                  </div>
                  <div className="mb-8">
                    <h1 className="text-[#2D3035] font-semibold text-center font-urbanist leading-[38px] text-[30px]">
                      Welcome back
                    </h1>
                    <h1 className="text-[#626974] font-normal text-center font-urbanist leading-[24px] text-[16px]">
                      Welcome back! Please enter your details.
                    </h1>
                  </div>
                </div>

                {/* Inputs */}
                <div className="w-full xl:max-w-[360px]">
                  <Inputs
                    type="password"
                    name="Enter_Password"
                    heading="Password"
                    Placeholder="Password"
                    svg={null}
                    svg2={
                      <Image
                        src="/visibility.svg"
                        alt="Show Password"
                        width={20}
                        height={20}
                      />
                    }
                    className="mt-[20px] w-full xl:max-w-[360px]"
                  />

                  <Inputs
                    type="password"
                    name="Confirm_Password"
                    heading="Confirm Password"
                    Placeholder="Confirm Password"
                    svg={null}
                    svg2={
                      <Image
                        src="/visibility.svg"
                        alt="Show Password"
                        width={20}
                        height={20}
                      />
                    }
                    className="mt-[20px] w-full xl:max-w-[360px]"
                  />

                  {/* Remember + Forgot Password */}
                  <div className="mt-5 flex justify-between items-center">
                    <div>
                      <input type="checkbox" id="rememberMe" />
                      <label
                        htmlFor="rememberMe"
                        className="text-[#344054] font-normal font-urbanist leading-[20px] text-[14px] pl-2"
                      >
                        Remember for 30 days
                      </label>
                    </div>
                    <div>
                      <h1 className="font-semibold text-[#2D3035] font-urbanist leading-[20px] text-[14px]">
                        <Link href="/ForgotPassword">Forgot password</Link>
                      </h1>
                    </div>
                  </div>
                </div>

                {/* Confirm button + Sign up */}
                <div className="mt-2">
                  <button className="py-[10px] border border-[#89AD28] bg-[#c1f338] hover:bg-[#9dc72c] transition-all duration-1000 rounded-[8px] px-24 md:px-[160.5px]">
                    Confirm
                  </button>

                  <div className="flex justify-center mt-4">
                    <h1 className="text-[#626974] font-normal font-urbanist leading-[20px] text-[14px]">
                      Don’t have an account?
                    </h1>
                    <h1 className="text-[#2D3035] font-semibold font-urbanist leading-[20px] text-[14px] ml-1">
                      <Link href="/SignUp">Sign up</Link>
                    </h1>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="lg:ml-8 mt-6 text-[#475467] font-urbanist text-[14px] leading-5">
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

export default ReNewPassword;
