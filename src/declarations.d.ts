import { JSXBase } from "@stencil/core/internal";
import { ReactElement } from 'jsx-dom';
import { JSX as LocalJSX } from "./components";

interface JsxElement { children?: ReactElement | ReactElement[] }

declare module "jsx-dom" {
  export namespace JSX {
    interface IntrinsicElements {
      "ui-button": JsxElement & LocalJSX.UiButton & JSXBase.HTMLAttributes<HTMLUiButtonElement>;
      "ui-card": JsxElement & LocalJSX.UiCard & JSXBase.HTMLAttributes<HTMLUiCardElement>;
      "ui-home": JsxElement & LocalJSX.UiHome & JSXBase.HTMLAttributes<HTMLUiHomeElement>;
    }
  }
}
