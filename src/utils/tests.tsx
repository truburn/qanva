import React, { ReactElement } from "react";
import { ThemeProvider } from "react-jss";
import { theme, GlobalStyles } from "utils/theme";
import { render, RenderOptions } from "@testing-library/react";

const CustomWrapper = ({ children }: { children: ReactElement }) => (
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  </React.StrictMode>
);

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) =>
  render(ui, { wrapper: CustomWrapper, ...options });

export * from "@testing-library/react";
export { customRender as render };

export const getByTag = (name: string) => {
  return (role: string, el: Element | null) => el?.tagName.toLowerCase() === name;
};

export const getById = (id: string) => {
  return (role: string, el: Element | null) => el?.id === id;
};
