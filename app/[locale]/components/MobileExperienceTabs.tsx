"use client";

import { useState } from "react";
import type { Locale, Translation } from "../content/types";
import ExperiencesSection from "./ExperiencesSection";
import BirthdayEventSection from "./BirthdayEventSection";
import CommunitySection from "./CommunitySection";

export default function MobileExperienceTabs({
  locale,
  t,
}: {
  locale: Locale;
  t: Translation;
}) {
  const [activeTab, setActiveTab] = useState<"Experiences" | "Events" | "Community">(
    "Experiences"
  );

  const tabs = ["Experiences", "Events", "Community"] as const;

  return (
    <section className="md:hidden">
      <div className="sticky top-[150px] z-30 border-y border-zinc-800 bg-black/95 px-4 py-3 backdrop-blur-md">
        <div className="grid grid-cols-3 gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={
                activeTab === tab
                  ? "rounded-full bg-orange-500 px-3 py-2 text-xs font-black text-black"
                  : "rounded-full border border-orange-500/40 px-3 py-2 text-xs font-black text-orange-300"
              }
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {activeTab === "Experiences" && (
        <ExperiencesSection locale={locale} t={t} />
      )}

      {activeTab === "Events" && (
        <BirthdayEventSection locale={locale} t={t} />
      )}

      {activeTab === "Community" && (
        <CommunitySection locale={locale} t={t} />
      )}
    </section>
  );
}