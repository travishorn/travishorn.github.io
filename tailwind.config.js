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
      },
      boxShadow: {
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.12)',
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.33), 0 4px 6px -2px rgba(0, 0, 0, 0.167)"
      },
    }
  }
};
