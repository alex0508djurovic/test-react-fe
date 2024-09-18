import { render, RenderOptions } from "@testing-library/react";
import React from "react";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return <>{children}</>;
};

const customRender = (ui: React.ReactElement, options: Omit<RenderOptions, "wrapper">) => {
    return {
        ...render(ui, { wrapper: Wrapper, ...options }),
    };
};

export * from "@testing-library/react";
export * from "@testing-library/user-event";
export { customRender as render };