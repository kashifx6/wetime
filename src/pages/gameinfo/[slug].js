import React, { useState } from "react";
import Button from "@/components/common/button";
import { useRouter } from "next/router";
import gameInfo from "../../../gamedata/gamedata";
import Input from "@/components/common/input";
import Chatmodal from "@/components/modals/chatmodal";
import Breadcrumbs from "@/components/common/breadcrumbs";

const slug = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Find the game object from gameInfo based on slug
  const game = gameInfo.find((game) => game.slug === slug);

  const [isOpen, setIsOpen] = useState(false);

  const handleToggleModal = (e) => {
    e.preventDefault;
    setIsOpen(!isOpen);
  };
  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/games", label: "All Games" },
    {
      href: game && game.slug ? game.slug : "",
      label: game && game.title ? game.title : "",
    },
  ];
  return (
    <>
      <div className="bg-[#F7FAFC] dark:bg-[#1c1c1c]">
        <Breadcrumbs items={breadcrumbItems} title={game && game.title} />
        <section className="">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <form
              action="#"
              className="space-y-8 bg-white dark:bg-[#212121] rounded-[12px] p-5 shadow-2xl"
            >
              {game && game.title === "COUPLE'S CHALLENGE" && (
                <>
                  <div className="sm:col-span-2">
                    <Input
                      label="Description"
                      id="message"
                      rows="6"
                      placeholder="Write a description about challenge"
                    />
                  </div>
                  <div className="flex justify-center">
                    <Button
                      onClick={handleToggleModal}
                      value="GENERATE STORY"
                    />
                    <Chatmodal
                      isOpen={isOpen}
                      handleToggleModal={handleToggleModal}
                    />
                  </div>
                </>
              )}
              {game && game.title === "COUPLE'S ROLEPLAY" && (
                <>
                  <div className="sm:col-span-2">
                    <Input
                      label="Description"
                      id="message"
                      rows="6"
                      placeholder="Write a description about scenario"
                    />
                  </div>
                  <div className="flex justify-center">
                    <Button
                      onClick={handleToggleModal}
                      value="GENERATE SCENARIO"
                    />
                    <Chatmodal
                      isOpen={isOpen}
                      handleToggleModal={handleToggleModal}
                    />
                  </div>
                </>
              )}
              {game && game.title === "COUPLE'S ADVENTURE" && (
                <>
                  <div>
                    <label
                      for="first_name"
                      className="block mb-[8px] text-sm font-medium text-[#272D37] dark:text-white"
                    >
                      Type
                    </label>
                    <select
                      id="select"
                      className="bg-transparent border border-gray-100 dark:border-[#333] rounded-lg w-full p-2.5 dark:placeholder-gray-400 placeholder-[#cbc9d6] dark:text-gray-400 text-[#cbc9d6]  focus:outline-none"
                    >
                      <option selected>Select adventure type</option>
                      <option value="Ghosts">About Ghosts</option>
                      <option value="Travel">About Travel</option>
                      <option value="Kingdom">About Kingdom</option>
                      <option value="Joy">About Joy & Happiness</option>
                      <option value="Religion">About</option>
                    </select>
                  </div>
                  <div>
                    <label
                      for="first_name"
                      className="block mb-[8px] text-sm font-medium text-[#272D37] dark:text-white"
                    >
                      Location
                    </label>
                    <select
                      id="select"
                      className="bg-transparent border border-gray-100 dark:border-[#333] rounded-lg w-full p-2.5 dark:placeholder-gray-400 placeholder-[#cbc9d6] dark:text-gray-400 text-[#cbc9d6]  focus:outline-none"
                    >
                      <option selected>Select Country</option>
                      <option value="Ghosts">USA</option>
                      <option value="Travel">About Travel</option>
                      <option value="Kingdom">About Kingdom</option>
                      <option value="Joy">About Joy & Happiness</option>
                      <option value="Religion">About</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <Input
                      label="Description"
                      id="message"
                      rows="6"
                      placeholder="Write a description about challenge"
                    />
                  </div>
                  <div className="flex justify-center">
                    <Button
                      onClick={handleToggleModal}
                      value="GENERATE ADVENTURE"
                    />
                    <Chatmodal
                      isOpen={isOpen}
                      handleToggleModal={handleToggleModal}
                    />
                  </div>
                </>
              )}
              {game && game.title === "COUPLE'S CREATE A STORY" && (
                <>
                  <div>
                    <label
                      for="first_name"
                      className="block mb-[8px] text-sm font-medium text-[#272D37] dark:text-white"
                    >
                      Type
                    </label>
                    <select
                      id="select"
                      className="bg-transparent border border-gray-100 dark:border-[#333] rounded-lg w-full p-2.5 dark:placeholder-gray-400 placeholder-[#cbc9d6] dark:text-gray-400 text-[#cbc9d6]  focus:outline-none"
                    >
                      <option selected>Select story type</option>
                      <option value="Ghosts">About Ghosts</option>
                      <option value="Travel">About Travel</option>
                      <option value="Kingdom">About Kingdom</option>
                      <option value="Joy">About Joy & Happiness</option>
                      <option value="Religion">About</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <Input
                      label="Description"
                      id="message"
                      rows="6"
                      placeholder="Write a description about story"
                    />
                  </div>
                  <div className="flex justify-center">
                    <Button
                      onClick={handleToggleModal}
                      value="GENERATE STORY"
                    />
                    <Chatmodal
                      isOpen={isOpen}
                      handleToggleModal={handleToggleModal}
                    />
                  </div>
                </>
              )}

              {game && game.title === "COUPLE'S CHARADAS" && (
                <>
                  <div className="sm:col-span-2">
                    <Input
                      label="Description"
                      id="message"
                      rows="6"
                      placeholder="SEARCH FOR ANY KIND OF WORD"
                    />
                  </div>
                  <div className="flex justify-center">
                    <Button onClick={handleToggleModal} value="GENERATE WORD" />
                    <Chatmodal
                      isOpen={isOpen}
                      handleToggleModal={handleToggleModal}
                    />
                  </div>
                </>
              )}
              {game && game.title === "COUPLE'S MOVIE NIGHT" && (
                <>
                  <div>
                    <label
                      for="first_name"
                      className="block mb-[8px] text-sm font-medium text-[#272D37] dark:text-white"
                    >
                      Type
                    </label>
                    <select
                      id="select"
                      className="bg-transparent border border-gray-100 dark:border-[#333] rounded-lg w-full p-2.5 dark:placeholder-gray-400 placeholder-[#cbc9d6] dark:text-gray-400 text-[#cbc9d6]  focus:outline-none"
                    >
                      <option selected>Select movie type</option>
                      <option value="Ghosts">About Ghosts</option>
                      <option value="Travel">About Travel</option>
                      <option value="Kingdom">About Kingdom</option>
                      <option value="Joy">About Joy & Happiness</option>
                      <option value="Religion">About</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <Input
                      label="Description"
                      id="message"
                      rows="6"
                      placeholder="Write a description about movie"
                    />
                  </div>
                  <div className="flex justify-center">
                    <Button
                      onClick={handleToggleModal}
                      value="GENERATE MOVIE"
                    />
                    <Chatmodal
                      isOpen={isOpen}
                      handleToggleModal={handleToggleModal}
                    />
                  </div>
                </>
              )}
              {game && game.title === "COUPLE'S CONFLICT RESOLUTION" && (
                <>
                  <div className="sm:col-span-2">
                    <Input
                      label="Description"
                      id="message"
                      rows="6"
                      placeholder="Discuss the reason of conflict"
                    />
                  </div>
                  <div className="flex justify-center">
                    <Button
                      onClick={handleToggleModal}
                      value="RESOLVE CONFLICT"
                    />
                    <Chatmodal
                      isOpen={isOpen}
                      handleToggleModal={handleToggleModal}
                    />
                  </div>
                </>
              )}
              {game && game.title === "COUPLE'S EMPATHY BUILDER" && (
                <>
                  <div className="sm:col-span-2">
                    <Input
                      label="Description"
                      id="message"
                      rows="6"
                      placeholder="Discuss how much your partner cares about you"
                    />
                  </div>
                  <div className="flex justify-center">
                    <Button onClick={handleToggleModal} value="BUILD EMPATHY" />
                    <Chatmodal
                      isOpen={isOpen}
                      handleToggleModal={handleToggleModal}
                    />
                  </div>
                </>
              )}
              {game && game.title === "COUPLE'S APOLOGY GENERATOR" && (
                <>
                  <div className="sm:col-span-2">
                    <Input
                      label="Description"
                      id="message"
                      rows="6"
                      placeholder="Discuss what kind of appology you want ?"
                    />
                  </div>
                  <div className="flex justify-center">
                    <Button
                      onClick={handleToggleModal}
                      value="GENERATE APOLOGY"
                    />
                    <Chatmodal
                      isOpen={isOpen}
                      handleToggleModal={handleToggleModal}
                      message="Discuss what kind of appology you want ?"
                    />
                  </div>
                </>
              )}
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default slug;
