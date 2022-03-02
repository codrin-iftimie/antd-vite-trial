import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer';
import vitePluginImp from "vite-plugin-imp"

export default defineConfig({
  plugins: [react(), visualizer(),  
    vitePluginImp({
    libList: [
      {
        libName: 'antd',
        libDirectory: "lib"
      },
      // add this if you use _.<method> in your code
      {
        libName: 'lodash',
        replaceOldImport: false
      },
    ],
    transpileDependencies: [/react-js-cron/]
  })],
  build: {
    sourcemap: true,
    target: "es2015"
  }
})
