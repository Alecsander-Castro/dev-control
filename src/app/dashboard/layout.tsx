import { ReactNode } from "react";
import { DashboardHeader } from "./components/Header/Header";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <DashboardHeader />
      {children}
    </>
  );
}
