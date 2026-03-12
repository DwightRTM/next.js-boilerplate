import Footer from "./footer";
import Header from "./header";
import Helloworld from "./helloworld";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col items-center gap-6 py-32 px-16">
        <Header></Header>
        <h1 className="text-3xl font-semibold text-black dark:text-zinc-50">
          Hello, World!
          <Helloworld />
        </h1>
        <Footer />
      </main>
    </div>
  );
}
