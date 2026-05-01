import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get the App",
  description:
    "Start by downloading Cyclomat from the App Store.",
};

export default function DownloadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
