import type { EventItem } from "./types";
export const eventsData: EventItem[] = [
  { titleKey: "birthday", image: "/images/luke-birthday-experience.jpg", dateKey: "birthdayDate", timeKey: "birthdayTime", locationKey: "birthdayLocation", statusKey: "upcoming", type: "birthday" },
  { titleKey: "session", image: "/images/giants-community-session.png", dateKey: "past", statusKey: "pastLabel", type: "standard" },
  { titleKey: "afro", image: "/images/afro-bounce.png", statusKey: "comingSoon", type: "standard" },
  { titleKey: "bbq", image: "/images/bbq-party.png", statusKey: "comingSoon", type: "standard" },
  { titleKey: "workout", image: "/images/workout-session.png", statusKey: "comingSoon", type: "standard" },
];
