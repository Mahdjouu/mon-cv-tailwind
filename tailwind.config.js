module.exports = {
  content: [
    "./cv.html",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3182ce', // Remplacez par votre couleur principale
        'secondary': '#e5e7eb', // Remplacez par votre couleur secondaire
        'accent': '#f472b6', // Remplacez par votre couleur d'accent
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'sans': ['Noto Sans', 'sans-serif'],
      },
    },
  },
  plugins: [
  "prettier-plugin-tailwindcss",
  ],
};