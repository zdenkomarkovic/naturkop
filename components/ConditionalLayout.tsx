"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import ButtonToTop from "./ButtonToTop";

export default function ConditionalLayout({
  showBlog,
  children,
}: {
  showBlog: boolean;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith("/studio");

  if (isStudio) {
    return <>{children}</>;
  }

  return (
    <>
      <Header showBlog={showBlog} />
      {children}
      <ButtonToTop />
      <Footer showBlog={showBlog} />
    </>
  );
}
