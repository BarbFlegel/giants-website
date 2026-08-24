export type ImpactPillar = {
  label: string;
  title: string;
  description: string;
  evidence: string[];
};

/** Impact describes change; offers belong in Experiences and dates in Events. */
export const impactPillars: ImpactPillar[] = [
  {
    label: "ACCESS",
    title: "More people included",
    description:
      "Selected activities can be offered with community partners to people who face financial, social or mobility barriers.",
    evidence: ["Reduced-barrier participation", "Adapted formats", "Partner-led access"],
  },
  {
    label: "CONNECTION",
    title: "Stronger local relationships",
    description:
      "Movement, games and conversation create shared experiences where participants can meet, contribute and feel part of a group.",
    evidence: ["Shared activity", "Social interaction", "Community belonging"],
  },
  {
    label: "WELLBEING",
    title: "Confidence through movement",
    description:
      "Accessible challenges support confidence, coordination and positive routines without making performance the only measure of success.",
    evidence: ["Confidence", "Everyday movement", "Positive participation"],
  },
  {
    label: "ACCOUNTABILITY",
    title: "Impact we can demonstrate",
    description:
      "GIANTS can document attendance, partner feedback and participant stories so future impact claims are based on evidence.",
    evidence: ["Participation records", "Partner feedback", "Consent-based stories"],
  },
];
