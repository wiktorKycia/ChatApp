import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/checkIn': 'https://chatappserver-wk.azurewebsites.net/',
            '/message': 'https://chatappserver-wk.azurewebsites.net/',
            '/getMessages': 'https://chatappserver-wk.azurewebsites.net/'
        }
    },
    build: {          
        outDir: 'dist'
    }
})
