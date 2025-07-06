import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: 'ShreeVision',  // 👈 repo name here
  plugins: [react()],
});
