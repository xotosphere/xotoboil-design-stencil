import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";
import { vueOutputTarget } from "@stencil/vue-output-target";
import { angularOutputTarget } from "@stencil/angular-output-target";
import { reactOutputTarget } from "@stencil/react-output-target";

export const config: Config = {
  namespace: 'xotoboil-storybook-stencil',
  outputTargets: [
    { type: "dist", esmLoaderPath: "../loader" },
    { type: "dist-custom-elements" },
    { type: "docs-readme" },
    { type: "www", serviceWorker: null },
    vueOutputTarget({
      componentCorePackage: "xotoboil-storybook-stencil",
      proxiesFile: "./lib/vue/components.ts",
    }),
    angularOutputTarget({
      componentCorePackage: "xotoboil-storybook-stencil",
      directivesProxyFile: "./lib/angular/components.ts",
      directivesArrayFile: "./lib/angular/directives.ts",
    }),
    reactOutputTarget({
      componentCorePackage: "xotoboil-storybook-stencil",
      proxiesFile: "./lib/react/index.ts",
      includeDefineCustomElements: true,
    }),
  ],
  plugins: [
    sass({
      injectGlobalPaths: ["src/styles/index.scss"],
    }),
  ],
};
