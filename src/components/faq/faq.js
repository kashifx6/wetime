import React, { useState } from "react";
import Image from "next/image";

const Faq = () => {
  const [faqs, setFaqs] = useState([
    { id: 1, show: true },
    { id: 2, show: false },
    { id: 3, show: false },
    { id: 4, show: false },
    { id: 5, show: false },
    { id: 6, show: false },
  ]);

  const toggleFaq = (id) => {
    setFaqs(
      faqs.map((faq) => (faq.id === id ? { ...faq, show: !faq.show } : faq))
    );
  };

  return (
    <>
      <div className="text-4xl font-bold  text-center mb-[70px] text-[#120F49] dark:text-[#A2A0B5]">
        Frequently ask questions?
      </div>
      <div className="flex items-center">
        <div className="w-full lg:w-3/4 mr-[10px]">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="m-[15px] p-5 bg-white dark:bg-black w-full"
            >
              <div className="flex justify-between">
                <h3 className="text-[#120F49] dark:text-[#A2A0B5] text-xl font-semibold mb-3">
                  Lorem ipsum dolor sit amet
                </h3>
                <div className="pt-1">
                  <span>
                    {faq.show && (
                      <Image
                        className="rounded-t-lg mb-[23px]"
                        src="/assets/images/svg/xmark.svg"
                        alt=""
                        width={17}
                        height={13}
                        onClick={() => toggleFaq(faq.id)}
                      />
                    )}
                    {!faq.show && (
                      <Image
                        className="rounded-t-lg mb-[23px]"
                        src="/assets/images/svg/plus.svg"
                        alt=""
                        width={17}
                        onClick={() => toggleFaq(faq.id)}
                        height={13}
                      />
                    )}
                  </span>
                </div>
              </div>
              <hr className="dark:border-gray-500" />

              {faq.show && (
                <p className="text-lg text-[#A2A0B5] dark:text-white my-[16px] mx-[48px]">
                  Lorem ipsum dolor sit amet consectetur. Mauris at eu dui
                  semper vel tortor. Augue egestas adipiscing nec commodo arcu
                  sed lorem odio vulputate. Posuere ipsum a ullamcorper bibendum
                  orci. Nulla nascetur curabitur odio justo ante fermentum sed
                  sagittis. Gravida ac volutpat pulvinar dictum sagittis.
                  Integer morbi tristique.
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="hidden lg:block w-1/4">
          <Image
            className="rounded-t-lg mb-[23px] mr-[10px]"
            src="/assets/images/faq.png"
            alt=""
            width={700}
            height={800}
          />
        </div>
      </div>
    </>
  );
};

export default Faq;
