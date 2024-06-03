// import { defineConfig } from "vite"
// import react from "@vitejs/plugin-react"

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       "/api": {
//         target: "http://localhost:3003",
//         changeOrigin: true,
//       },
//     },
//   },
// })


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/paga-ginita/', // Reemplaza <repositorio> con el nombre de tu repositorio
});