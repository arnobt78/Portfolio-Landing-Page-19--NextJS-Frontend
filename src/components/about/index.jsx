/* eslint-disable @next/next/no-img-element */
import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

// Optional env override; defaults point to public GitHub stats APIs
const githubStatsBaseUrl =
  process.env.NEXT_PUBLIC_GITHUB_STATS_URL ||
  "https://github-readme-stats.vercel.app";

const githubStreakBaseUrl =
  process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL ||
  "https://github-readme-streak-stats.herokuapp.com";

// GitHub profile used for readme-stats and streak-stats (https://github.com/arnobt78)
const GITHUB_USERNAME = "arnobt78";
// Pinned repo for the pin card; use a repo that exists on your profile
const GITHUB_PINNED_REPO = "portfolio-ui-19";

// Fallback when external stats APIs (e.g. github-readme-stats) return 503 or fail; no API key needed
const PLACEHOLDER_STATS_URL = "/placeholder-stats.svg";

// About section: bio, stats, GitHub cards (top langs, main stats, streak), skill icons, pinned repo
const AboutDetails = () => {
  const onImgError = (e) => {
    e.target.onerror = null;
    e.target.src = PLACEHOLDER_STATS_URL;
  };
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            My journey in web development is powered by an array of mystical
            tools and languages, with JavaScript casting the core of my
            enchantments. I wield frameworks like React.js and Next.js with
            precision, crafting seamless portals (websites) that connect realms
            (users) across the digital universe. The ancient arts of the
            Jamstack empower me to create fast, secure, and dynamic experiences,
            while my design skills ensure every creation is not only functional
            but visually captivating. Join me as I continue to explore new
            spells and technologies to shape the future of the web.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            25+ <sub className="font-semibold text-base">clients</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            4+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src={`${githubStatsBaseUrl}/api/top-langs?username=${GITHUB_USERNAME}&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="GitHub top languages"
            loading="lazy"
            onError={onImgError}
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${githubStatsBaseUrl}/api?username=${GITHUB_USERNAME}&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="GitHub stats"
            loading="lazy"
            onError={onImgError}
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=appwrite,aws,babel,bootstrap,cloudflare,css,d3,docker,figma,firebase,gatsby,git,github,graphql,html,ipfs,js,jquery,kubernetes,linux,mongodb,mysql,netlify,nextjs,nodejs,npm,postgres,react,redux,replit,sass,supabase,tailwind,threejs,vercel,vite,vscode,yarn`}
            alt="Skills"
            loading="lazy"
            onError={onImgError}
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${githubStreakBaseUrl}?user=${GITHUB_USERNAME}&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
            alt="GitHub streak"
            loading="lazy"
            onError={onImgError}
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href={`https://github.com/${GITHUB_USERNAME}/${GITHUB_PINNED_REPO}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src={`${githubStatsBaseUrl}/api/pin/?username=${GITHUB_USERNAME}&repo=${GITHUB_PINNED_REPO}&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
              alt="Pinned repo"
              loading="lazy"
              onError={onImgError}
            />
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
