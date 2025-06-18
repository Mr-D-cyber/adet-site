export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: true,
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            lineHeight: "1.6",
            p: {
              marginBottom: "1.25rem",
              marginTop: "1.25rem",
            },
          },
        },
      },
    },
  },
};
