/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        surfacegray: "#0e1012",
        "surfaces-default-surfacetertiary": "#fab300",
        "texts-textprimary": "#fff",
        "texts-textaccentsubtle": "#c8d2d8",
        "surfaces-default-surfaceprimary": "#181f4e",
        "texts-textaccentsubtle1": "#7e84b5",
        "texts-textdisabledsubtle": "#e9edef",
        "laws-light-green-200": "#00f481",
      },
      spacing: {
        "spacing-128": "128px",
        "spacing-200": "200px",
        "spacing-16": "16px",
        "spacing-32": "32px",
        "spacing-24": "24px",
        "spacing-64": "64px",
        "spacing-48": "48px",
        "spacing-12": "12px",
        "spacing-8": "8px",
        "spacing-256": "256px",
        "spacing-40": "40px",
        "button-padding-row-gap": "16px",
        "button-padding-left-right": "32px",
        "button-padding-top-bottom": "16px",
        "spacing-400": "400px",
        "section-hero-column-gap": "128px",
      },
      fontFamily: {
        "text-regular-headline": "Inter",
        roag: "Roag",
      },
      borderRadius: {
        "29xl": "48px",
        "13xl": "32px",
        "45xl": "64px",
        "10xs": "3px",
        "spacing-16": "16px",
        "spacing-32": "32px",
        "spacing-64": "64px",
        "spacing-48": "48px",
        "spacing-8": "8px",
      },
    },
    fontSize: {
      base: "1rem",
      "13xl": "2rem",
      "61xl": "5rem",
      "5xl": "1.5rem",
      "77xl": "6rem",
      "21xl": "2.5rem",
      xl: "1.25rem",
      "45xl": "4rem",
      sm: "0.88rem",
      "29xl": "3rem",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
      mq350small: {
        raw: "screen and (max-width: 350px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
