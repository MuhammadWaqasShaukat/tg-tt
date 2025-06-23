import { table } from "console";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "pineapple-days": ['"Pineapple Days"', "sans-serif"],
    },
    extend: {
      keyframes: {
        infoAnimate: {
          "0%": {
            transform: "translateY(-50%)",
            opacity: "0",
            background: "#000",
          },
          "50%": { opacity: "1" },
          "100%": {
            transform: "translateY(-350%)",
            opacity: "1",
            background: "#4e4",
          },
        },
      },

      keyframes: {
        bgColorChange: {
          "0%": { backgroundColor: "#FEC94A" },
          "100%": { backgroundColor: "#ffeee4" },
        },
        bgColorChangeGreen: {
          "0%": { backgroundColor: "#C9E773" },
          "100%": { backgroundColor: "#ffeee4" },
        },
        bgColorChangeYellow:{
          "0%": { backgroundColor: "#FEC94A" },
          "100%": { backgroundColor: "#ffeee4" },
        }
      },

      animation: {
        slideUp: "infoAnimate 1.5s ease-in-out forwards",
        bgColorChange: "0.2s ease-in-out 5s forwards bgColorChange",
        bgColorChangeGreen: "0.2s ease-in-out 5s forwards bgColorChangeGreen",
        bgColorChangeYellow: "0.2s ease-in-out 5s forwards bgColorChangeYellow",
      },
      transitionDelay: {
        5000: "5000ms",
      },
      spacing: {
        1.25: "0.3125rem",
      },
      borderWidth: {
        3: "3px",
      },

      screens: {
        xxs: "360px",
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },

      fontSize: {
        // sm: "clamp(0.875rem, 2vw, 1rem)", // Small text
        // base: "clamp(1rem, 2.5vw, 1.25rem)", // Base text
        // lg: "clamp(1.125rem, 3vw, 1.5rem)", // Large text
        // xl: "clamp(1.25rem, 4vw, 2rem)", // Extra Large
      },

      colors: {
        green: "#C9E773",
        yellow: "#FEC94A",
        red: "#F88B7C",
        "red-dark": "#FF5757",
        blue: "#BDE1E5",
        "blue-dark": "#9DC2C9",
        brown: "#5A1319",
        biege: "#F7E3DA",
        "light-brown": "#8B5556",
        skin: "#F0DAD2",
        "dark-green": "#19A97B",
      },

      backgroundImage: {
        "home-screen": 'url("./images/home-screen.png")',
        "home-screen-jail": 'url("./images/home-screen-jail.png")',

        congrats: 'url("./images/congrats.gif")',
        "onboarding-screen-step-3": 'url("./images/onboarding-step3.png")',
        "onboarding-screen-step-4": 'url("./images/onboarding-step4.png")',

        "img-alarm": 'url("./images/alarm.svg")',
        "img-alarm": 'url("./images/alarm.svg")',
        "img-snack": 'url("./images/snack.svg")',
        "img-huge-bag": 'url("./images/huge-bag.svg")',
        "img-fake-id": 'url("./images/fake-id.svg")',
        "img-gaurd-dog": 'url("./images/gaurd-dog.svg")',
        "img-crowbar": 'url("./images/crowbar.svg")',
        "img-decoy": 'url("./images/decoy.svg")',
        "img-vault": 'url("./images/home-icon-vault.svg")',
        "img-vault-activated": 'url("./images/home-icon-vault-2.svg")',
        "img-vault-3": 'url("./images/vault-3.png")',
        "img-star": 'url("./images/star.svg")',
        "img-star-bordered": 'url("./images/star-borderd.svg")',
        "img-carousel-lock": 'url("./images/carousel-lock.svg")',
        "img-tutorial-arrow": 'url("./images/tutorial-arrow.svg")',
        "img-withdraw-chip": 'url("./images/withdraw-chip.svg")',

        "img-cta-1": 'url("./images/cta-1.svg")',
        "img-cta-2": 'url("./images/cta-2.svg")',
        "img-cta-3": 'url("./images/cta-3.svg")',

        "chip-coin": 'url("./images/chip-coin.svg")',
        "chip-loot": 'url("./images/chip-loot.svg")',
        "chip-loot-pocket": 'url("./images/chip-loot-pocket.svg")',
        "chip-alarm": 'url("./images/chip-alarm.svg")',
        "chip-vault": 'url("./images/chip-vault.svg")',
        "chip-stamina": 'url("./images/chip-stamina.svg")',

        "achievement-sneaky": 'url("./images/sneaky-achievement.svg")',
        "achievement-crafty": 'url("./images/crafty-achievement.svg")',
        "achievement-sloppy": 'url("./images/sloppy-achievement.svg")',
        "achievement-wanted": 'url("./images/wanted-achievement.svg")',
        "achievement-cautions": 'url("./images/cautions-achievement.svg")',
        "achievement-sleepy": 'url("./images/sleepy-achievement.svg")',
        "achievement-vigilant": 'url("./images/vigilant-achievement.svg")',
        "achievement-rich": 'url("./images/rich-achievement.svg")',

        "falling-star": 'url("./images/stars.gif")',

        "icon-spy": 'url("./icons/spy.svg")',
        "icon-attack": 'url("./icons/attack.svg")',
        "icon-binoc": 'url("./icons/binoc.svg")',
        "icon-hat": 'url("./icons/hat.svg")',
        "icon-info": 'url("./icons/info.svg")',
        "icon-target": 'url("./icons/target.svg")',
        "icon-checked": 'url("./icons/check-mark.svg")',
        "icon-checked-white": 'url("./icons/white-check-mark.svg")',
        "icon-cross": 'url("./icons/cross.svg")',
        "icon-cross-white": 'url("./icons/cross-white.svg")',
        "icon-achievement": 'url("./icons/trophy.svg")',
        "icon-achievement-leaderboard": 'url("./icons/leaderboard-trophy.svg")',
        "icon-star": 'url("./icons/star.svg")',
        "icon-star-filled": 'url("./icons/star-filled.svg")',
        "icon-arrow": 'url("./icons/arrow.svg")',
        "icon-search": 'url("./icons/search.svg")',
        "icon-search-bold": 'url("./icons/search-icon-bold.svg")',
        "icon-users": 'url("./icons/users.svg")',
        "icon-arrow-right": 'url("./icons/arrow-right.svg")',
        "icon-lock": 'url("./icons/lock.svg")',
        "icon-lock-outline": 'url("./icons/lock-outline.svg")',
        "icon-gear": 'url("./icons/gear.svg")',
        "icon-clock": 'url("./icons/clock.svg")',

        "vault-home-icon": 'url("./images/home-icon-vault.svg")',
        "vault-2-home-icon": 'url("./images/home-icon-vault-2.svg")',

        room: 'url("./images/room-bg.svg")',
        "room-grey": 'url("./images/room-grey.svg")',
        sofa: 'url("./images/sofa.svg")',
        "sofa-grey": 'url("./images/sofa-grey.svg")',
        shelf: 'url("./images/shelf.svg")',
        "shelf-grey": 'url("./images/shelf-grey.svg")',
        table: 'url("./images/table.svg")',
        "table-grey": 'url("./images/table-grey.svg")',

        "thief-shadow": 'url("./images/thief-shadow.svg")',
      },

      // Custom Fonts
      fontFamily: {
        josefin: ["'Josefin Sans'", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
