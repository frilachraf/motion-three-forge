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
import { FloatingDock } from "@/components/ui/floating-doc";

const Index = () => {
  const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
  );
  const [instruments, setInstruments] = useState([]);
  useEffect(() => {
    getInstruments();
  }, []);
  async function getInstruments() {
    const { data } = await supabase.from("profiles").select();
    setInstruments(data);
  }

  const DownloadCv = async () => {
    const fileName = "resume.pdf";
    const filePath = "documents";
    const { data } = await supabase.storage.from(filePath).download(fileName);

    // Create a download link
    const url = URL.createObjectURL(data);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName || filePath.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Clean up
    URL.revokeObjectURL(url);

    console.log(data);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="border m-6 p-6 ">
        <h1 className="text-5xl font-bold uppercase">First Name</h1>
        <h1 className="text-5xl font-bold uppercase">Last Name</h1>
        <div className="text-muted ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            voluptatum.
          </p>
        </div>
      </div>
      <div className=""></div>
      <div className=""></div>
      <ThreeScene />
      <HeroSection onClick={DownloadCv} />
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
    title: "Products",
    icon: (
      <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Components",
    icon: (
      <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Aceternity UI",
    icon: (
      <img
        src="https://assets.aceternity.com/logo-dark.png"
        width={20}
        height={20}
        alt="Aceternity Logo"
      />
    ),
    href: "#",
  },
  {
    title: "Changelog",
    icon: (
      <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },

  {
    title: "Twitter",
    icon: (
      <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
];
