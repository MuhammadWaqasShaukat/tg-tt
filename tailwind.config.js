/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "pineapple-days": ['"Pineapple Days"', "sans-serif"],
    },
    extend: {
      spacing: {
        1.25: "0.3125rem",
      },
      borderWidth: {
        3: "3px",
      },
      fontSize :{
    //    clamp: "clamp(1rem, 2.5vw, 3rem)",
      },

      colors: {
        green: "#C9E773",
        yellow: "#FEC94A",
        red: "#F88B7C",
        blue: "#BDE1E5",
        "blue-dark": "#9DC2C9",
        brown: "#5A1319",
        biege: "#F7E3DA",
        "light-brown": "#8B5556",
        skin: "#FFEEE4",
        "dark-green": "#19A97B",
      },

      backgroundImage: {
        "home-screen": 'url("./images/home-screen.png")',

        "onboarding-screen-step-3": 'url("./images/onboarding-step3.png")',
        "onboarding-screen-step-4": 'url("./images/onboarding-step4.png")',

        "img-alarm": 'url("./images/alarm.svg")',
        "img-snack": 'url("./images/snack.svg")',
        "img-huge-bag": 'url("./images/huge-bag.svg")',
        "img-fake-id": 'url("./images/fake-id.svg")',
        "img-gaurd-dog": 'url("./images/gaurd-dog.svg")',
        "img-crowbar": 'url("./images/crowbar.svg")',
        "img-decoy": 'url("./images/decoy.svg")',
        "img-vault": 'url("./images/vault-2.svg")',
        "img-star": 'url("./images/star.svg")',
        "img-star-bordered": 'url("./images/star-borderd.svg")',

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

        "icon-spy": 'url("./icons/spy.svg")',
        "icon-attack": 'url("./icons/attack.svg")',
        "icon-binoc": 'url("./icons/binoc.svg")',
        "icon-hat": 'url("./icons/hat.svg")',
        "icon-info": 'url("./icons/info.svg")',
        "icon-target": 'url("./icons/target.svg")',
        "icon-checked": 'url("./icons/check-mark.svg")',
        "icon-cross": 'url("./icons/cross.svg")',
        "icon-achievement": 'url("./icons/trophy.svg")',
        "icon-star": 'url("./icons/star.svg")',
        "icon-star-filled": 'url("./icons/star-filled.svg")',
        "icon-arrow": 'url("./icons/arrow.svg")',
        "icon-search": 'url("./icons/search.svg")',
        "icon-users": 'url("./icons/users.svg")',
        "icon-arrow-right": 'url("./icons/arrow-right.svg")',
        "icon-lock": 'url("./icons/lock.svg")',
      },

      // Custom Fonts
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
        mono: ["Fira Code", "monospace"],
        josefin: ["'Josefin Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
