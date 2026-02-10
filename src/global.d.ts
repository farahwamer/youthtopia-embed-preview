declare module "react/jsx-runtime" {
  namespace JSX {
    interface IntrinsicElements {
      "lot-widget": JSX.HTMLAttributes<{
        org?: string;
        theme?: string;
        height?: string | number;
        width?: string | number;
        [key: string]: any;
      }>;
    }
  }
}

export {};

