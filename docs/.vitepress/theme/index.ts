import DefaultTheme from 'vitepress/theme'
import MyLayout from './MyLayout.vue';
import './styles/vars.css';
import './styles/custom.css';
import axios from 'axios';
import api from './api/index';
import { onMounted, watch, nextTick } from 'vue';
import { useRoute } from 'vitepress';
import mediumZoom from 'medium-zoom';

import './index.css';

import { useLive2d, useWaline } from 'vitepress-theme-website'

export default {
  ...DefaultTheme,
  Layout: MyLayout,
  enhanceApp(ctx) {
    // extend default theme custom behaviour.
    DefaultTheme.enhanceApp(ctx);

    // 全局挂载 API 接口
    ctx.app.config.globalProperties.$http = axios
    if (typeof window !== 'undefined') {
      window.$api = api;
    }

    // register your custom global components
    // ctx.app.component('MyGlobalComponent' /* ... */)
  },
  // 
  setup() {
    const route = useRoute();
    const initZoom = () => {
      //   mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); 

      // If you want to enable this for all images without explicitly adding , please enable the follow line
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' });
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );

    // waline comment
    useWaline({
      serverURL: 'https://waline-5erf0stju-sujit168s-projects.vercel.app'
    });

    // live 2D 
    useLive2d({
      enable: true,
      model: {
        url: 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/hibiki/hibiki.model.json'
      },
      display: {
        position: 'right',
        width: '135px',
        height: '300px',
        xOffset: '35px',
        yOffset: '5px'
      },
      mobile: {
        show: true
      },
      react: {
        opacity: 0.8
      }
    })
  },
}
