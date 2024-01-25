import Nav from "./_components/Nav";
import Content from "./_components/Content";
import AnimatedClouds from "./_components/AnimatedClouds";

export default function Home() {
  return (
    <main className="mx-auto h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 overflow-hidden">
      <div className="flex h-full z-0 relative ">
        <Nav />
        <Content />
      </div>
      <AnimatedClouds />
    </main>
  );
}
