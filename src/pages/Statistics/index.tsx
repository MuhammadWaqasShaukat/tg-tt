import React from "react";
import { PageProps } from "@/types/Page.t";
import RatingsInline from "@/components/UI/Ratings/RatingsInline";
import { View } from "@/components/UI/View";
import Pill2 from "@/components/UI/Pills/Pill2";
import { Button } from "@/components/UI/Buttons";

const Statistics: React.FC<PageProps> = ({ onClose }) => {
  return (
    <div className=" relative h-full">
      <View
        viewTitle="Statistics"
        allowSearch={false}
        backBtnClkHandler={onClose}
        className=" gap-6"
      >
        <div className="w-full space-y-9">
          <div className="  w-full h-[30.13vh] min-h-[270px] flex flex-col p-4  relative items-center bg-white rounded-3xl modal-radial-gradient mx-auto">
            <RatingsInline className="bg-blue" />
            <div className="w-[45vw] blur-3xl aspect-square bg-blue/55 absolute top-[50%] -translate-y-[50%] rounded-full"></div>
            <img
              src="./images/burgler.png"
              alt=""
              className="z-10 my-auto object-contain"
            />
          </div>
          <h2 className="text-4xl text-center mx-4">Simeonichki vs. You</h2>
        </div>

        <div className="h-[1px] bg-[#CEACA7] w-full"></div>

        <div className=" w-full space-y-4">
          <div className="flex flex-row items-center justify-between w-full ">
            <p className="text-base text-light-brown">Lost</p>

            <Pill2
              accent="red"
              count={"-55,000"}
              className="text-[1.2em] text-white -ml-2 pl-1 z-[9] !rounded-lg"
            >
              <div className=" h-[2.68vh] w-[5.80vw] mx-auto flex flex-col justify-center items-center z-10 relative">
                <div className="bg bg-chip-loot bg-center h-[100%] w-[100%] "></div>
              </div>
            </Pill2>
          </div>
          <div className="flex flex-row items-center justify-between w-full ">
            <p className="text-base text-light-brown">Stolen</p>
            <Pill2
              accent="blue"
              count={"100,000"}
              className="text-[1.2em] text-white -ml-2 pl-1 z-[9] !rounded-lg"
            >
              <div className=" h-[2.68vh] w-[5.80vw] mx-auto flex flex-col justify-center items-center z-10 relative">
                <div className="bg bg-chip-loot bg-center h-[100%] w-[100%] "></div>
              </div>
            </Pill2>
          </div>
          <div className="flex flex-row items-center justify-between w-full ">
            <p className="text-base text-light-brown">Get Robbed</p>
            <p className="text-base text-red">14 times</p>
          </div>
          <div className="flex flex-row items-center justify-between w-full ">
            <p className="text-base text-light-brown">You Robbed</p>
            <p className="text-base text-dark-green">29 times</p>
          </div>
          <div className="flex flex-row items-center justify-between w-full ">
            <p className="text-base text-light-brown">Their Time</p>
            <p className="text-base text-red">0d 0h 48m</p>
          </div>
          <div className="flex flex-row items-center justify-between w-full ">
            <p className="text-base text-light-brown">Your Time</p>
            <p className="text-base text-dark-green">0d 0h 48m</p>
          </div>
        </div>
      </View>
      <div className=" bg-[#FFFBF9] w-screen px-6 py-9 rounded-[32px] flex flex-col justify-center items-center gap-6 mt-auto  absolute bottom-0 -m-6">
        <Button
          acent="yellow"
          className="shadow-custom flex flex-row justify-center items-center gap-2"
        >
          <span>Spread the News :)</span>
        </Button>
      </div>
    </div>
  );
};

export default Statistics;
