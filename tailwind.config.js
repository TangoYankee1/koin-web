/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#002147',   // Oxford Blue [cite: 239]
          light: '#56C1E8',  // Koin Blue [cite: 239]
        },
        accent: {
          gold: '#FFC72C',   // Knowledge Gold [cite: 243]
          hover: '#E6B327',  // Gold Dark [cite: 243]
        },
        ui: {
          success: '#28A745', // Success Green [cite: 246]
          error: '#DC3545',   // Error Red [cite: 246]
          warning: '#FFC107', // Warning Yellow [cite: 246]
          info: '#0D6EFD',    // Info Blue [cite: 246]
        }
      }
    },
  },
  plugins: [],
}