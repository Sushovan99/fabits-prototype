/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primaryBg: "#D3DBEC",
                primaryTextDark: "#2D2D2D",
                primaryTextLight: "#575757",
                secondaryTextDark: "#1D3B7A",
                secondaryTextLight: "#2E529E",
                btnPrimary: "#83A720",
                backBtnBg: "rgba(131, 167, 32, 0.1)",
                btnPrimaryLight: "#F5F8CC",
                linkBg: "#E7EDFC",
                linText: "#41558D",
                successGreen: "#299D7C",
            },

            fontFamily: {
                sans: ["DM Sans", "sans-serif"],
            },

            dropShadow: {
                card: "0 4px rgba(36, 47, 78, 0.12)",
            },
        },
    },
    plugins: [],
};
