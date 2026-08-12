export const locales = ["en", "fr", "nl"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const translations = {
  en: {
    navigation: {
      about: "About",
      experiences: "Experiences",
      events: "Events",
      community: "Community",
      gallery: "Gallery",
      collaborate: "Collaborate",
    },

    hero: {
      eyebrow: "TRAIN • CONNECT • ELEVATE",
      title: "More than training.",
      titleAccent: "A community experience.",
      description:
        "GIANTS brings people together through basketball, movement, experiences and community.",
      primaryCta: "Join a Session",
      secondaryCta: "Explore Experiences",
      collaborateCta: "Collaborate With GIANTS",
      imageAlt:
        "GIANTS community basketball and training experience",
    },

    whatsapp: {
      button: "Connect on WhatsApp",
      bookingButton: "Book via WhatsApp",
      message:
        "Hi GIANTS 👋 I discovered you through the website and I'd like to know more about your sessions and upcoming experiences.",
      eventMessage:
        "Hi GIANTS 👋 I'd like to register for the GIANTS Birthday Experience. Could you send me the details?",
    },

    testimonials: {
      eyebrow: "THE COMMUNITY",
      title: "More than sport.",
      titleAccent: "People make GIANTS.",
      description:
        "GIANTS is built around connection, energy and shared experiences.",

      items: [
        {
          quote:
            "You come for the activity, but you stay for the energy and the people.",
          name: "GIANTS Community",
          role: "Participant",
        },
        {
          quote:
            "It feels welcoming and motivating. Everyone can find their place.",
          name: "GIANTS Community",
          role: "Participant",
        },
        {
          quote:
            "More than training. It's movement, connection and good energy.",
          name: "GIANTS Community",
          role: "Participant",
        },
      ],
    },

    event: {
      eyebrow: "GIANTS EXPERIENCE",
      title: "Birthday Experience",
      subtitle: "Basketball • Games • Community",
      locationLabel: "Location",
      location: "Merksem",
      description:
        "A special GIANTS experience bringing people together through basketball, games, challenges and community energy.",

      expectTitle: "What to expect",
      expect: [
        "Basketball activities",
        "Team games and challenges",
        "Movement and competition",
        "Music and community energy",
        "A welcoming GIANTS atmosphere",
      ],

      detailsTitle: "Event details",
      dateLabel: "Date",
      date: "14 June",
      placeLabel: "Place",
      place: "Merksem",
      registrationLabel: "Registration",
      registration: "Contact GIANTS to reserve your place",

      cta: "Register via WhatsApp",
      back: "Back to GIANTS",
      posterAlt: "GIANTS Birthday Experience event poster",
    },

    seo: {
      siteTitle:
        "GIANTS | Basketball, Movement & Community Experiences",
      description:
        "GIANTS creates basketball, movement, wellness and community experiences in Belgium.",
      eventTitle: "GIANTS Birthday Experience | Merksem",
      eventDescription:
        "Join the GIANTS Birthday Experience in Merksem for basketball, games, movement and community.",
    },
  },

  fr: {
    navigation: {
      about: "À propos",
      experiences: "Expériences",
      events: "Événements",
      community: "Communauté",
      gallery: "Galerie",
      collaborate: "Collaborer",
    },

    hero: {
      eyebrow: "S'ENTRAÎNER • SE CONNECTER • S'ÉLEVER",
      title: "Plus qu'un entraînement.",
      titleAccent: "Une expérience communautaire.",
      description:
        "GIANTS rassemble les gens à travers le basketball, le mouvement, les expériences et la communauté.",
      primaryCta: "Rejoindre une session",
      secondaryCta: "Découvrir les expériences",
      collaborateCta: "Collaborer avec GIANTS",
      imageAlt:
        "Expérience communautaire de basketball et d'entraînement GIANTS",
    },

    whatsapp: {
      button: "Nous contacter sur WhatsApp",
      bookingButton: "Réserver via WhatsApp",
      message:
        "Bonjour GIANTS 👋 J'ai découvert votre univers via le site et j'aimerais en savoir plus sur vos sessions et vos prochaines expériences.",
      eventMessage:
        "Bonjour GIANTS 👋 J'aimerais m'inscrire à la GIANTS Birthday Experience. Pouvez-vous m'envoyer les informations ?",
    },

    testimonials: {
      eyebrow: "LA COMMUNAUTÉ",
      title: "Plus que du sport.",
      titleAccent: "Les gens font GIANTS.",
      description:
        "GIANTS se construit autour de la connexion, de l'énergie et des expériences partagées.",

      items: [
        {
          quote:
            "On vient pour l'activité, mais on reste pour l'énergie et les rencontres.",
          name: "Communauté GIANTS",
          role: "Participant",
        },
        {
          quote:
            "L'ambiance est accueillante et motivante. Chacun peut trouver sa place.",
          name: "Communauté GIANTS",
          role: "Participant",
        },
        {
          quote:
            "Plus qu'un entraînement. Du mouvement, des connexions et une belle énergie.",
          name: "Communauté GIANTS",
          role: "Participant",
        },
      ],
    },

    event: {
      eyebrow: "EXPÉRIENCE GIANTS",
      title: "Birthday Experience",
      subtitle: "Basketball • Jeux • Communauté",
      locationLabel: "Lieu",
      location: "Merksem",

      description:
        "Une expérience spéciale GIANTS qui rassemble autour du basketball, des jeux, des challenges et de l'énergie communautaire.",

      expectTitle: "Au programme",
      expect: [
        "Activités basketball",
        "Jeux et challenges en équipe",
        "Mouvement et compétition",
        "Musique et énergie communautaire",
        "L'atmosphère accueillante de GIANTS",
      ],

      detailsTitle: "Informations",
      dateLabel: "Date",
      date: "14 juin",
      placeLabel: "Lieu",
      place: "Merksem",
      registrationLabel: "Inscription",
      registration: "Contactez GIANTS pour réserver votre place",

      cta: "S'inscrire via WhatsApp",
      back: "Retour à GIANTS",
      posterAlt: "Affiche de la GIANTS Birthday Experience",
    },

    seo: {
      siteTitle:
        "GIANTS | Basketball, mouvement & expériences communautaires",
      description:
        "GIANTS crée des expériences autour du basketball, du mouvement, du bien-être et de la communauté en Belgique.",
      eventTitle: "GIANTS Birthday Experience | Merksem",
      eventDescription:
        "Rejoignez la GIANTS Birthday Experience à Merksem pour du basketball, des jeux, du mouvement et de la communauté.",
    },
  },

  nl: {
    navigation: {
      about: "Over ons",
      experiences: "Ervaringen",
      events: "Evenementen",
      community: "Community",
      gallery: "Galerij",
      collaborate: "Samenwerken",
    },

    hero: {
      eyebrow: "TRAIN • VERBIND • GROEI",
      title: "Meer dan training.",
      titleAccent: "Een community-ervaring.",
      description:
        "GIANTS brengt mensen samen via basketbal, beweging, ervaringen en community.",
      primaryCta: "Doe mee met een sessie",
      secondaryCta: "Ontdek ervaringen",
      collaborateCta: "Werk samen met GIANTS",
      imageAlt:
        "GIANTS community basketbal- en trainingservaring",
    },

    whatsapp: {
      button: "Contact via WhatsApp",
      bookingButton: "Boek via WhatsApp",
      message:
        "Hallo GIANTS 👋 Ik heb jullie via de website ontdekt en wil graag meer weten over jullie sessies en komende ervaringen.",
      eventMessage:
        "Hallo GIANTS 👋 Ik wil me graag inschrijven voor de GIANTS Birthday Experience. Kunnen jullie mij de details sturen?",
    },

    testimonials: {
      eyebrow: "DE COMMUNITY",
      title: "Meer dan sport.",
      titleAccent: "Mensen maken GIANTS.",
      description:
        "GIANTS draait om verbinding, energie en gedeelde ervaringen.",

      items: [
        {
          quote:
            "Je komt voor de activiteit, maar je blijft voor de energie en de mensen.",
          name: "GIANTS Community",
          role: "Deelnemer",
        },
        {
          quote:
            "De sfeer is gastvrij en motiverend. Iedereen kan hier zijn plaats vinden.",
          name: "GIANTS Community",
          role: "Deelnemer",
        },
        {
          quote:
            "Meer dan training. Beweging, verbinding en positieve energie.",
          name: "GIANTS Community",
          role: "Deelnemer",
        },
      ],
    },

    event: {
      eyebrow: "GIANTS EXPERIENCE",
      title: "Birthday Experience",
      subtitle: "Basketbal • Games • Community",
      locationLabel: "Locatie",
      location: "Merksem",

      description:
        "Een speciale GIANTS-ervaring die mensen samenbrengt via basketbal, games, uitdagingen en community-energie.",

      expectTitle: "Wat kun je verwachten?",
      expect: [
        "Basketbalactiviteiten",
        "Teamgames en uitdagingen",
        "Beweging en competitie",
        "Muziek en community-energie",
        "Een gastvrije GIANTS-sfeer",
      ],

      detailsTitle: "Eventinformatie",
      dateLabel: "Datum",
      date: "14 juni",
      placeLabel: "Plaats",
      place: "Merksem",
      registrationLabel: "Inschrijving",
      registration: "Neem contact op met GIANTS om je plaats te reserveren",

      cta: "Inschrijven via WhatsApp",
      back: "Terug naar GIANTS",
      posterAlt: "GIANTS Birthday Experience eventposter",
    },

    seo: {
      siteTitle:
        "GIANTS | Basketbal, beweging & community experiences",
      description:
        "GIANTS creëert basketbal-, bewegings-, wellness- en community-ervaringen in België.",
      eventTitle: "GIANTS Birthday Experience | Merksem",
      eventDescription:
        "Doe mee met de GIANTS Birthday Experience in Merksem voor basketbal, games, beweging en community.",
    },
  },
} as const;

export function getTranslations(locale: string) {
  if (isLocale(locale)) {
    return translations[locale];
  }

  return translations[defaultLocale];
}