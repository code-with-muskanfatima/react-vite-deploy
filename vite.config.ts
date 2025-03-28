import { resolve } from "path";

const config: UserConfig = {
  resolve: {
    alias: {
      $fonts: resolve("./static/fonts"),
    },
  },
};

export default config;
