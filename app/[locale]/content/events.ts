export type EventItem = {
  title: string;
  image: string;
  status: string;
  date?: string;
  location?: string;
};

export const eventItems: EventItem[] = [
  {
    title: "Luke Othello’s 9th Birthday",
    image: "/images/luke-birthday-experience.jpg",
    status: "Upcoming",
  },
  {
    title: "GIANTS Community Session",
    image: "/images/giants-community-session.png",
    status: "Past event",
    date: "9 May 2026",
    location: "Sporthal Parkloods — Basketball Court 1",
  },
  {
    title: "Afro Beats & Bounce",
    image: "/images/afro-bounce.png",
    status: "Coming soon",
  },
  {
    title: "Workout & BBQ Party",
    image: "/images/bbq-party.png",
    status: "Coming soon",
  },
  {
    title: "Community Workout",
    image: "/images/workout-session.png",
    status: "Coming soon",
  },
];