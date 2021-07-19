module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        core: "#F8CC14",
        grayText: "#333333",
        grayText2: "#4F4F4F",
        graySection: "#FAFAFA"
      },
      spacing:{
        "16.1": '70px',
        "16.5": '88.5px',
        "17": '89px'
      },
      backgroundImage: {
        "feature-card": "linear-gradient(355.86deg, #F9C810 -107.44%, rgba(255, 255, 255, 0) 70.96%)",
        "footer-feature-card": "linear-gradient(180deg, #F8CC14 0%, #FFB800 100%)",
        "footer": "linear-gradient(270.19deg, #333333 -35.91%, #333333 110.27%)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
