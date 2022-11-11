/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

/**
 * import.meta.env的声明
 */
interface ImportMetaEnv {
  VITE_APP_NAME: string;
  VITE_APP_TITLE: string;
}
