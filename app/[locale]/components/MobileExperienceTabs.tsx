"use client";

import { useState } from "react";
import ExperiencesSection from "./ExperiencesSection";
import EventsSection from "./EventsSection";
import GallerySection from "./GallerySection";
import CommunitySection from "./CommunitySection";

const tabs = ["Experiences", "Events", "Community"] as const;

type Tab = (typeof tabs)[number];

export default function MobileExperienceTabs() {
  const [activeTab, setActiveTab] = useState<Tab>("Experiences");

  return (
    <section className="md:hidden px-4 py-10">
      <div className="sticky top-16 z-40 mb-6 rounded-full border border-white/10 bg-black/80 p-1 backdrop-blur-xl">
        <div className="grid grid-cols-3 gap-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-3 py-2 text-xs font-bold uppercase tracking-wide transition ${
                activeTab === tab
                  ? "bg-orange-500 text-black"
                  : "text-white/60"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {activeTab === "Experiences" && <ExperiencesSection />}
      {activeTab === "Events" && <EventsSection />}
      {activeTab === "Community" && (
        <>
          <CommunitySection />
          <GallerySection />
        </>
      )}
    </section>
  );
}