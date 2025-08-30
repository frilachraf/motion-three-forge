"use client";
import React, { useEffect, useState } from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { getProjects } from "@/lib/supabase/services";

export default function ProjectsSection() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const { data } = await getProjects();
    setData(data);
  };
  useEffect(() => {
    fetchData();
  });
  return (
    <div className="w-full py-4">
      <div className="grid grid-cols-12 p-12">
        {/* <StickyScroll content={content} /> */}
        {data &&
          data.length > 0 &&
          data.map((project) => {
            return (
              <div className="flex flex-col p-6 gap-8 col-span-6 ">
                <h1 className="text-3xl font-bold line-climp-1">{project.name}</h1>
                <div className="">
                  <img
                    className=""
                    src="https://knowledge.hubspot.com/hubfs/types-of-websites-22-20250226-7292105.webp"
                    alt=""
                  />
                </div>
                <div className="">
                  <p>{project.description}</p>
                </div>
              </div>
            );
          })}
      </div>
      <div className="">
        <h1></h1>
      </div>
    </div>
  );
}

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Running out of content
      </div>
    ),
  },
];
