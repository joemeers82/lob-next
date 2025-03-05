import Image from "next/image";
import Carousel from "./components/ui/Carousel";
import Button from "./components/ui/Button";
import CustomerLogos from "./components/ui/CustomerLogos";
import FeaturesSection from "./components/ui/FeatureCards";
import TestimonialsSection from "./components/ui/TestimonialSection";
export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="flex flex-col gap-8 row-start-2 sm:items-start">
        <div className="container text-center">
          <h1>
            Skip the scroll.{" "}
            <span className="font-serif italic">Seize the mailbox</span>
          </h1>
          <p>
            Experience direct mail like never before, with unmatched
            personalization and scalability — all in one intuitive platform.
          </p>
        </div>
        <div className=" container gap-10 justify-center items-center flex">
          <Button variant="primary">Book a demo</Button>
          <Button variant="text-only">Get started for free</Button>
        </div>
        <Carousel />
        <CustomerLogos />
         {/* How It Works Section */}
      <div className="container bg-indigo-key rounded-xl text-white p-24">
        <div className="container mx-auto px-4">
          <div className="uppercase text-sm tracking-wider mb-4">HOW IT WORKS</div>
          
          <h2 className="text-4xl font-light mb-12">Create, send, measure</h2>
          
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 pr-0 lg:pr-12">
              <ol className="space-y-12">
                <li>
                  <h3 className="text-xl font-semibold mb-2">1. Create</h3>
                  <p className="">
                    Connect Lob with the digital tools you already use to
                    create personalized, automated direct mail that fits
                    seamlessly with your omnichannel marketing strategy.
                  </p>
                </li>
                <li>
                  <h3 className="text-xl font-semibold mb-2">2. Send</h3>
                  <p className="">
                    Take paper shortages, campaign delays, and logistical
                    hiccups off your plate. Lob manages the printing and
                    sending process from end to end so you can focus on
                    growth.
                  </p>
                </li>
                <li>
                  <h3 className="text-xl font-semibold mb-2">3. Measure</h3>
                  <p className="">
                    Demonstrate the value of every send and find winning
                    strategies for future campaigns with advanced
                    analytics in your Lob dashboard.
                  </p>
                </li>
              </ol>
              
              <a 
                href="#" 
                className="inline-block mt-12 bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 px-6 rounded-md transition-colors duration-200"
              >
                Take a closer look at Lob's platform
              </a>
            </div>
            
            <div className="lg:w-1/2 mt-12 lg:mt-0">
              <Image
                src="/images/analytics.svg"
                alt="Lob analytics dashboard"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Features Section*/}
      <FeaturesSection />
      <TestimonialsSection />

      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
