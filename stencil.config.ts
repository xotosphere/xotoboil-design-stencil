import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";
import { vueOutputTarget } from "@stencil/vue-output-target";
import { angularOutputTarget } from "@stencil/angular-output-target";
import { reactOutputTarget } from "@stencil/react-output-target";

export const config: Config = {
  namespace: 'xotoboil-design-stencil',
  outputTargets: [
    { type: "dist", esmLoaderPath: "../loader" },
    { type: "dist-custom-elements" },
    { type: "docs-readme" },
    { type: "www", serviceWorker: null },
    vueOutputTarget({
      componentCorePackage: "xotoboil-design-stencil",
      proxiesFile: "./lib/vue/components.ts",
    }),
    angularOutputTarget({
      componentCorePackage: "xotoboil-design-stencil",
      directivesProxyFile: "./lib/angular/components.ts",
      directivesArrayFile: "./lib/angular/directives.ts",
    }),
    reactOutputTarget({
      componentCorePackage: "xotoboil-design-stencil",
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
