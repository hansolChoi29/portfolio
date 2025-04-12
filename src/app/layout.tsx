import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hansol_Portfolio",
  description: "강한 추진력과 피드백이 유연한 프론트엔드 개발자입니다.",
  icons: {
    icon: "/favicon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css"
          rel="stylesheet"
        />
      </head>
      <body className="font-pretendard ">{children}</body>
    </html>
  );
}
