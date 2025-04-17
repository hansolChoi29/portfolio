"use client";

type Props = {
  text: string;
};

export default function IntroSection({ text }: Props) {
  return (
    <section className="h-screen bg-black flex items-center justify-center">
      <h1 className="text-white text-3xl md:text-5xl font-bold transition-opacity duration-500">
        {text}
      </h1>
    </section>
  );
}
