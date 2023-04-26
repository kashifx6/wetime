import Image from "next/image";
import { Inter } from "next/font/google";
import Card from "@/components/common/card";
import Link from "next/link";
import gameInfo from "../../gamedata/gamedata";
import Testimonial from "@/components/testimonials/testimonial";
import Faq from "@/components/faq/faq";
import Chatmodal from "@/components/modals/chatmodal";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  return (
    <>
      <div className="dark:bg-[#1c1c1c]">
        <div className="flex ">
          <div className="content w-full lg:w-550px lg:mr-[100px] lg:ml-[100px] p-5 md:text-sm font-normal lg:mt-[150px] ">
            <div className="text-[#120F49] lg:text-left font-semibold text-2xl mb-[15px] dark:text-[#A2A0B5]">
              Welcome to wetime, <br />
              Ultimate destination for couples to enjoy quality time together
            </div>
            <div className="text-[#A2A0B5] text-left font-normal text-lg mb-[48px] dark:text-[#D9D9D9]">
              Our platform offers a wide range of AI-based games that are
              designed to enhance your gaming experience with your partner.
            </div>
            <Link
              href="#"
              className="py-2 pl-3 pr-4 text-white bg-[#120F49] font-medium rounded-3xl md:w-[138px] text-center text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-[#1E1E1E] shadow-lg focus:outline-none dark:text-[#F5F5F5]  dark:border-t-2 dark:border-gray-700"
            >
              JOIN NOW
            </Link>
          </div>
          <div className="display">
            <div className=" relative hidden lg:block">
              {!props.darkMode && (
                <Image
                  className="rounded-t-lg mb-[23px]"
                  src="/assets/images/Vector_light.png"
                  alt=""
                  width={2350}
                  height={1302}
                />
              )}
              {props.darkMode && (
                <Image
                  className="rounded-t-lg mb-[23px]"
                  src="/assets/images/Vector_dark.png"
                  alt=""
                  width={3050}
                  height={1700}
                />
              )}

              <Image
                className=" absolute top-[70px] left-[120px] dark:left-[170px]"
                src="/assets/images/dance.png"
                alt="dance"
                width={550}
                height={550}
              />
            </div>
          </div>
        </div>

        <div className="w-full p-5  lg:flex lg:w-[991px] lg:ml-[182px] lg:mt-[15px] lg:mb-[206px] md:ml-[200px] ">
          <div className="hidden lg:block flex-auto  w-1/2 ">
            <Image
              className="ml-[15px]"
              src="/assets/images/couple2.png"
              alt="dance"
              width={400}
              height={400}
            />
          </div>
          <div className="w-full lg:flex-auto lg:w-1/2 lg:ml-[82px] ">
            <div className="text-2xl font-bold mb-[35px] text-[#120F49] dark:text-[#A2A0B5]">
              What is <b className="text-4xl">WETIME?</b>
            </div>
            <div className="text-[#A2A0B5] font-light sm:text-xl lg:text-2xl mb-[34px] dark:text-[#D9D9D9]">
              Strengthen your bond with WeTime AI,where couples come together to
              play.Enjoy fun and challenging games designed for two, and watch
              your relationship bloom anew.
            </div>
            <Link
              href="#"
              className="py-2 pl-3 pr-4 bg-[#D9F4FD] text-[#120F49] font-medium rounded-3xl md:w-[138px] text-center text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-[#1E1E1E] shadow-lg focus:outline-none dark:text-[#F5F5F5]  dark:border-t-2 dark:border-gray-700"
            >
              READ MORE
            </Link>
          </div>
        </div>

        <div className="bg-[#120F49] dark:bg-black text-white p-5">
          <div className="text-4xl font-bold mb-[35px] mt-[26px] text-center dark:text-[#A2A0B5]">
            WHY WETIME ?
          </div>
          <div className="flex">
            <div className="lg:m-[50px] lg:ml-[114px] flex-auto  w-1/2">
              <div className="font-light sm:text-xl mb-[15px] lg:mb-[34px] ">
                Lorem ipsum dolor sit amet consectetur. Sed dolor neque morbi
                sit pretium vitae aliquam enim. Leo diam mauris ipsum neque
                faucibus a eget. Magna vitae in dictum nibh augue. Ultrices nisl
                elit vestibulum in. Tristique blandit massa tellus lectus
                phasellus enim quam. Donec nunc non varius a in maecenas. Magna
                tellus pellentesque eget vitae cras. Imperdiet viverra natoque
                senectus fermentum egestas adipiscing.
                <br /> Donec nunc non varius a in maecenas. Magna tellus
                pellentesque eget vitae cras. Imperdiet viverra natoque senectus
                fermentum egestas adipiscing. tellus pellentesque eget vitae
                cras. Imperdiet viverra natoque senectus fermentum egestas
                adipiscing Donec nunc non varius a in maecenas.
                <br /> Magna tellus pellentesque eget vitae cras. Imperdiet
                viverra natoque senectus fermentum egestas adipiscing.
              </div>
              <Link
                href="#"
                className=" py-2 pl-3 pr-4 text-120F49 bg-[#D9F4FD] text-[#120F49] font-medium rounded-3xl md:w-[138px] text-center text-sm px-5 py-2.5 mr-2 mb-[95px] dark:bg-[#1E1E1E] shadow-lg focus:outline-none dark:text-[#F5F5F5]  dark:border-t-2 dark:border-gray-700"
              >
                TRY WETIME NOW
              </Link>
            </div>
            <div className="hidden lg:block ">
              <Image
                className="ml-[35px]"
                src="/assets/images/vector3.png"
                alt="dance"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
        <div className="p-[10px] bg-[#FDCF7A] dark:bg-[#1c1c1c]">
          <div className="text-4xl font-bold  text-center mb-[70px] text-[#120F49] dark:text-[#A2A0B5]">
            COUPLE GAMES
          </div>
          <div className="md:flex md:flex-wrap md:justify-center">
            {" "}
            {/* Wrap the Card components in a container with flex and justify-center */}
            {gameInfo.slice(0, 4).map((game, index) => (
              <Card
                key={index}
                title={game.title}
                description={game.description}
                slug={game.slug}
              />
            ))}
          </div>
          <div className="flex justify-center items-center mt-[70px] ">
            <Link
              href="games"
              className="inline-flex items-center py-2 pl-3 pr-4 text-120F49 bg-[#120F49] text-white font-medium rounded-3xl md:w-[150px] text-center text-sm px-5 py-2.5 mr-2 mb-[95px] dark:bg-[#1E1E1E] shadow-lg focus:outline-none dark:text-[#F5F5F5] dark:border-t-2 dark:border-gray-700"
            >
              <Image
                className="w-4 h-4 ml-2 mr-2"
                src="assets/images/svg/dropdown.svg"
                alt="playbtn"
                width={4}
                height={4}
              />
              Discover all
            </Link>
          </div>
        </div>
        <div>
          <Testimonial />
        </div>
        <div className="lg:p-[50px] p-5 bg-[#FDCF7A] dark:bg-[#1c1c1c]">
          <Faq />
        </div>
      </div>
      <Chatmodal />
    </>
  );
}
