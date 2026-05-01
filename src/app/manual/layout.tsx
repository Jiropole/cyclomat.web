import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cyclonaut Manual",
  description:
    "Learn about how everything works.",
};

export default function ManualLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
