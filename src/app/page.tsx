import {Icon} from "@iconify/react";

import CommandGuide from "@/components/command-guide";
import SearchBar from "@/components/search-bar";
import {Tag} from "@/components/tag";

export default function Home() {
  return (
    <div>
      <main className="max-w-8xl row-start-2 flex h-max w-full flex-col items-center justify-center gap-[32px] pt-10 text-center">
        <Tag
          icon={
            <Icon
              className="!text-white dark:text-[#171717]"
              height="48"
              icon="icon-park:code-laptop"
              width="48"
            />
          }
          text="Decode the Web, One Status at a Time"
          textColor="#171717"
        />

        <h1 className="text-4xl font-extrabold">
          Explore HTTP status codes with clarity and speed
        </h1>
        <h1 className="mt-[-20px] text-4xl font-extrabold">no fluff, just the facts you need.</h1>

        <p className="">
          Whether you&apos;re debugging APIs or just curious, StatusKit makes HTTP codes easy to
          understand.
        </p>
        <p className="mt-[-30px]">
          Perfect for devs, learners, and curious minds — learn when, why, and how each code is
          used.
        </p>

        <div className="flex h-24 w-[60%] items-center justify-center">
          <SearchBar />
        </div>

        <CommandGuide />
      </main>
    </div>
  );
}
