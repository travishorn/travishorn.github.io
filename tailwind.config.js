const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      colors: {
        "stellar-red": "#DE7784",
        "stellar-blue": "#625296"
      },
      fontFamily: {
        sans: ["Quicksand", ...defaultTheme.fontFamily.sans]
      }
    }
  }
};
