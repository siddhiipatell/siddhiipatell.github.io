"use client";

import Link from "./components/Link";
import NextLink from "next/link";
import Signature from "@/app/components/Signature";
import TntraLogo from "@/app/components/icon/Tntra.png";
import BITSPilaniLogo from "@/app/components/icon/BITSPilani.png";
import SystemSolutionLogo from "@/app/components/icon/SystemSolution.png";
import AgevoleLogo from "@/app/components/icon/Agevole.png";
import BarodawebLogo from "@/app/components/icon/Barodaweb.png";
import GDSCLogo from "@/app/components/icon/GDSC.png";
import CoffeeLogo from "@/app/components/icon/Coffee.png";
import SpotifyLogo from "@/app/components/icon/Spotify.png";
import Image from "next/image";
import { useState } from "react";
import { GalleryHorizontalEnd } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col max-w-2xl mx-auto font-extralight">
      <ul className="grid gap-1 text-base">
        <li className="group flex items-start gap-4 pl-4 relative hover:translate-x-1 transition-transform duration-200">
          <div className="absolute left-0 top-[10px] w-[6px] h-[6px] bg-stone-800 dark:bg-stone-200 rotate-45 transform transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" />
          <span className="text-stone-600 dark:text-stone-400">
            AI/ML engineer
            <span className="inline-flex items-baseline gap-1 ml-2">
              <Image
                src={TntraLogo}
                alt="Tntra Logo"
                width={14}
                height={14}
                className="object-contain relative top-[2px]"
              />
              <Link href="https://www.tntra.io/" className="font-medium">
                Tntra
              </Link>
            </span>
            {" "}-{" "}building scalable AI systems and intelligent solutions
          </span>
        </li>
        <li className="group flex items-start gap-4 pl-4 relative hover:translate-x-1 transition-transform duration-200">
          <div className="absolute left-0 top-[10px] w-[6px] h-[6px] bg-stone-800 dark:bg-stone-200 rotate-45 transform transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" />
          <span className="text-stone-600 dark:text-stone-400">
            MTech AI/ML
            <span className="inline-flex items-baseline gap-1 ml-2">
              <Image
                src={BITSPilaniLogo}
                alt="BITS Pilani Logo"
                width={14}
                height={14}
                className="object-contain relative top-[2px]"
              />
              <Link href="https://www.bits-pilani.ac.in/" className="font-medium">
                BITS Pilani
              </Link>
            </span>
          </span>
        </li>
        <li className="group flex flex-col gap-3 pl-4 relative hover:translate-x-1 transition-transform duration-200">
          <div className="absolute left-0 top-[10px] w-[6px] h-[6px] bg-stone-800 dark:bg-stone-200 rotate-45 transform transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" />
          <span className="text-stone-600 dark:text-stone-400 italic font-medium">
            what i&apos;ve been up to:
          </span>
          <ul className="grid gap-1 pl-4">
            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                ↳
              </span>
              <span className="text-stone-600 dark:text-stone-400">
                designing{" "}
                <Link href="https://github.com/siddhiipatell?tab=repositories" className="font-medium">
                  AI agents
                </Link>{" "}
                for automation + real-world workflows
              </span>
            </li>
            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                ↳
              </span>
              <span className="text-stone-600 dark:text-stone-400">
                levelling up in{" "}
                <Link href="https://www.credly.com/users/siddhi-patel.accfd98a" className="font-medium">
                  cloud
                </Link>
                {" "}technologies
              </span>
            </li>
            {/* <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                ↳
              </span>
              <span className="text-stone-600 dark:text-stone-400">
                building my own{" "}
                <Link href="https://github.com/siddhiipatell/Shopify-MCP" className="font-medium">
                  MCP
                </Link>{" "}
                knnowledge hub
              </span>
            </li> */}
            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                ↳
              </span>
              <span className="text-stone-600 dark:text-stone-400">
                researching and experimenting to{" "}
                <Link
                  href="https://github.com/siddhiipatell/quantized-model-workbench"
                  className="font-medium"
                >
                  optimize LLMs
                </Link>{" "}
                for faster, leaner inference systems
              </span>
            </li>
          </ul>
        </li>
        <li className="group flex flex-col gap-3 pl-4 relative hover:translate-x-1 transition-transform duration-200">
          <div className="absolute left-0 top-[10px] w-[6px] h-[6px] bg-stone-800 dark:bg-stone-200 rotate-45 transform transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" />
          <span className="text-stone-600 dark:text-stone-400 italic font-medium">
            previously:
          </span>
          <ul className="grid gap-1 pl-4">
            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                ↳
              </span>
              <span className="text-stone-600 dark:text-stone-400">
                SWE intern 
                <span className="inline-flex items-baseline gap-1 ml-2">
                  <Image
                    src={SystemSolutionLogo}
                    alt="System Solution Logo"
                    width={14}
                    height={14}
                    className="object-contain relative top-[2px]"
                  />
                  <Link href="https://ssindia.co.in/" className="font-medium">
                    System Solution
                  </Link>
                </span>
              </span>
            </li>
            {/* <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                ↳
              </span>
              <span className="text-stone-600 dark:text-stone-400">
                DevOps intern 
                <span className="inline-flex items-baseline gap-1 ml-2">
                  <Image
                    src={AgevoleLogo}
                    alt="Agevole Logo"
                    width={14}
                    height={14}
                    className="object-contain relative top-[2px]"
                  />
                  <Link href="https://agevole.in/" className="font-medium">
                    Agevole
                  </Link>
                </span>
              </span>
            </li> */}
            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                ↳
              </span>
              <span className="text-stone-600 dark:text-stone-400">
                SWE intern
                <span className="inline-flex items-baseline gap-1 ml-2">
                  <Image
                    src={BarodawebLogo}
                    alt="Barodaweb Logo"
                    width={14}
                    height={14}
                    className="object-contain relative top-[2px]"
                  />
                  <Link href="https://www.barodaweb.com/" className="font-medium">
                    Barodaweb
                  </Link>
                </span>
              </span>
            </li>
            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                ↳
              </span>
              <span className="text-stone-600 dark:text-stone-400">
                UI/UX core 
                <span className="inline-flex items-baseline gap-1 ml-2">
                  <Image
                    src={GDSCLogo}
                    alt="GDSC Logo"
                    width={14}
                    height={14}
                    className="object-contain relative top-[2px]"
                  />
                  <Link
                    href="https://www.charusat.ac.in/"
                    className="font-medium"
                  >
                    Google Developer Student Clubs, CHARUSAT
                  </Link>
                </span>
              </span>
            </li>
          </ul>
        </li>
        <li className="group flex flex-col gap-3 pl-4 relative hover:translate-x-1 transition-transform duration-200">
          <div className="absolute left-0 top-[10px] w-[6px] h-[6px] bg-stone-800 dark:bg-stone-200 rotate-45 transform transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" />
          <span className="text-stone-600 dark:text-stone-400 italic font-medium">
            more about me:
          </span>
          <ul className="grid gap-1 pl-4">
            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                ↳
              </span>
              <span className="text-stone-600 dark:text-stone-400">
                living on caffeine
                <span className="inline-flex items-baseline gap-1 ml-1">
                  <Image
                    src={CoffeeLogo}
                    alt="Coffee Logo"
                    width={14}
                    height={14}
                    className="object-contain relative top-[2px]"
                  />
                </span>
              </span>
            </li>
            {/* <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                ↳
              </span>
              <span className="text-stone-600 dark:text-stone-400">
                most creative after 11pm
              </span>
            </li> */}
            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                ↳
              </span>
              <span className="text-stone-600 dark:text-stone-400">
                the music behind the{" "}
                <Link
                    href="https://open.spotify.com/user/315wyjkp5i7p5vqled4nmurmwoeq"
                    className="font-medium"
                  >
                    momentum{" "}
                  </Link>
                <span className="inline-flex items-baseline gap-1 ml-1">
                  <Image
                    src={SpotifyLogo}
                    alt="Spotify Logo"
                    width={14}
                    height={14}
                    className="object-contain relative top-[2px]"
                  />
                </span>
              </span>
            </li>
          </ul>
        </li>
      </ul>

      <NextLink
        href="/projects"
        className="text-center mt-4 py-4 px-6 rounded-lg border border-stone-400 dark:border-stone-600 bg-stone-50 dark:bg-stone-900 text-stone-600 dark:text-stone-400 transform transition-all duration-300 font-extralight hover:scale-[1.02] active:scale-[0.98] shadow-sm"
      >
        see what i&apos;ve built{" "}
        <GalleryHorizontalEnd className="size-5 inline align-top ml-1 transition-transform group-hover:rotate-3" />
      </NextLink>

      <div className="flex flex-col sm:flex-row items-center justify-end mt-8">
        <Signature />
      </div>
    </div>
  );
}
