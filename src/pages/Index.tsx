import ThreeScene from "@/components/ThreeScene";
import HeroSection from "@/components/HeroSection";
import TechStack from "@/components/TechStack";
import SupabaseSection from "@/components/SupabaseSection";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import { FloatingDock, FloatingDockDesktop } from "@/components/ui/floating-doc";
import { ContactIcon } from "lucide-react";
import { MdOutlinePhoneEnabled } from "react-icons/md";
import { HiCode, HiOutlineBriefcase, HiOutlineFolderOpen } from "react-icons/hi";
import { supabase } from "@/lib/supabase/client";
import { DownloadFile } from "@/lib/supabase/services";

const Index = () => {
  
  const [instruments, setInstruments] = useState([]);
  const [downloeded, setDownloaded] = useState([])
  useEffect(() => {
    getInstruments();
  }, []);
  async function getInstruments() {
    const { data } = await supabase.from("profiles").select();
    setInstruments(data);
  }

  const DownloadCv = async () => {
    const fileName = "resume.pdf";
    const {data: fileData} = await DownloadFile({fileName}) 
    console.log(fileData);
  };

  const heroContent = {
    fName: 'Achraf', 
    lName: 'Fril', 
    description: "Built with React, Three.js, Framer Motion, and Tailwind CSS. Experience the future of web development with stunning 3D animations."
  }
  return (
    <div className="min-h-screen flex flex-col">
      <header className="">
        {/* <FloatingDockDesktop items={links} /> */}
      </header>
      {/* <ThreeScene /> */}
      <HeroSection onClick={DownloadCv} content={heroContent}/>
      {/* <TechStack /> */}
      <SupabaseSection />
      <div className="fixed bottom-6 right-6 z-10">
        <FloatingDock
          mobileClassName="" // only for demo, remove for production
          items={links}
        />
      </div>
    </div>
  );
};

export default Index;

const links = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },

  {
    title: "Projects",
    icon: (
      <HiOutlineFolderOpen className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Experience",
    icon: (
      <HiOutlineBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Tech Stack",
    icon: <HiCode className="h-full w-full text-neutral-500 dark:text-neutral-300"/>,
    href: "#",
  },
  {
    title: "Contact",
    icon: (
      <MdOutlinePhoneEnabled className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },

  // {
  //   title: "Twitter",
  //   icon: (
  //     <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
  //   ),
  //   href: "#",
  // },
  // {
  //   title: "GitHub",
  //   icon: (
  //     <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
  //   ),
  //   href: "#",
  // },
];
