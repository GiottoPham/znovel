import type { PropsWithChildren } from "react";
import { Header } from "../components/Header";

export const ZLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="container mx-auto">
      <Header />
      {children}
    </div>
  );
};
