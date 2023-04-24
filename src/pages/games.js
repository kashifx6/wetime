import Card from "@/components/common/card";
import React from "react";
import gameInfo from "../../gamedata/gamedata";
import Image from "next/image";
import Breadcrumbs from "@/components/common/breadcrumbs";

const Games = () => {
  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/games", label: "All Games" },
  ];
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} title="COUPLE GAMES" />
      <div className="bg-[#120F49] dark:bg-black md:flex md:flex-wrap md:justify-center">
        <div className="md:mt-[80px] md:mb-[80px]">
          <div className="md:flex md:flex-wrap md:justify-center">
            {" "}
            {/* Wrap the Card components in a container with flex and justify-center */}
            {gameInfo.map((game, index) => (
              <Card
                key={index}
                title={game.title}
                description={game.description}
                slug={game.slug}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#5A589C] dark:bg-[#2c2c2c]">
        <div class="md:flex md:justify-center md:items-center p-5 ">
          <div className="hidden lg:block ">
            <Image
              className="rounded-t-lg mb-[23px] ml-[98px] "
              src="/assets/images/svg/waterScooter.svg"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div className="content w-full md:w-[742px] md:ml-[30px] md:mr-[97px]">
            <div className="md:ml-[60px] md:mr-[90px]">
              <div className="flex items-center mb-[15px]">
                <div>
                  <Image
                    className="rounded-t-lg mr-[7px]"
                    src="/assets/images/svg/heart.svg"
                    alt=""
                    width={18}
                    height={18}
                  />
                </div>
                <div className="text-white dark:text-[#F5F5F5] text-xl font-normal">
                  by <b className="text-[#FDCF7A] dark:text-[#a2a0b5]">2M+</b>{" "}
                  subscribers
                </div>
              </div>

              <div className="mb-[20px] text-6xl text-white dark:text-[#a2a0b5] font-bold">
                Wanna try our future games ?
              </div>
              <div className="mb-[37px] text-xl text-white font-normal">
                Join WETIME and get daily dose of the latest, most important
                technical developments delivered in simple, plain English.
              </div>
              <form>
                <div class="relative w-full">
                  <input
                    type="text"
                    class="block p-4 w-full z-20 bg-[#272727]  dark:bg-[#272727] text-sm text-white dark:text-black rounded-2xl focus:outline-none"
                    placeholder="Enter your email address"
                    required
                  />
                  <button
                    type="submit"
                    class=" absolute top-0 bottom-0 right-0 p-4 text-center dark:text-white rounded-r-2xl text-[#120F49] bg-[#d9f4fd] dark:bg-[#373737]"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Games;
