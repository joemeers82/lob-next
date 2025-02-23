import Image from "next/image";
import Carousel from "./components/ui/Carousel";
import Button from "./components/ui/Button";
import CustomerLogos from "./components/ui/CustomerLogos";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen">
      <main className="flex flex-col gap-8 row-start-2 sm:items-start">
        <div className="max-w-[600px] mx-auto text-center">
          <h1>
            Skip the scroll.{" "}
            <span className="font-serif italic">Seize the mailbox</span>
          </h1>
          <p>
            Experience direct mail like never before, with unmatched
            personalization and scalability — all in one intuitive platform.
          </p>
        </div>
        <div className="max-w-[1348px] gap-10 justify-center items-center flex mx-auto">
          <Button variant="primary">Book a demo</Button>
          <Button variant="text-only">Get started for free</Button>
        </div>
        <Carousel />
        <CustomerLogos />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
