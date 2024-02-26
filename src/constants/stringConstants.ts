import footerEmail from "../assets/email.svg";
import footerTwitter from "../assets/twitter.svg";
import footerInstagram from "../assets/InstagramLogo.svg";
import footerYoutube from "../assets/youtube.svg";
import footerLinkedin from "../assets/linkedinLogo.svg";

export const constants = {
  uploadMedia: {
    heading: " a file or Drag and drop here",
    subHeading: " 1-5 images, please! Formats: JPG, PNG, SVG or JPEG.",
  },
  clubpageDetails: {
    location: "Location",
    clublevel: "Club Level",
    category: "Category",
    primarycontact: "Primary Contact Name",
    email: "Email-id",
    contact: "Contact Number",
  },
  videoMedia: {
    rightText: "TODAY, TOMORROW & ALWAYS",
    leftText: "UNVEIL THE REALM OF INDIAN SOCCER",
  },
  footer: {
    newsletter: {
      heading: "Stay Updated",
      link: "Subscribe to our newsletters ",
    },
    socialMedia: {
      heading: "Follow us on social media",
      types: [
        {
          id: 1,
          name: "Twitter",
          link: "https://www.twitter.com/",
          icon: footerTwitter,
        },
        {
          id: 2,
          name: "Instagram",
          link: "https://www.instagram.com/",
          icon: footerInstagram,
        },
        {
          id: 3,
          name: "Youtube",
          link: "https://www.youtube.com/",
          icon: footerYoutube,
        },
        {
          id: 4,
          name: "LinkedIn",
          link: "https://www.linkedin.com/",
          icon: footerLinkedin,
        },
      ],
    },
    allRights: "© 2024 All rights reserved",
    emailData: {
      email: "Contact@SoccerScoutIndia.in",
      icon: footerEmail,
    },
  },
};
