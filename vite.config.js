import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
import EnvironmentPlugin from 'vite-plugin-environment'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        EnvironmentPlugin(['API_KEY']),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        }
    }
})