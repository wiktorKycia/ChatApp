import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/checkIn': 'http://localhost:5000',
            '/message': 'http://localhost:5000',
            '/getMessages': 'http://localhost:5000'
        }
    },
    build: {          
        outDir: 'dist'
    }
})
