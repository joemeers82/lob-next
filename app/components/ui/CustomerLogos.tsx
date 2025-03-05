import Image from "next/image";

const logos = [
  {
    src: "/images/customer-logos/cedar_logo.svg",
    alt: "Cedar Logo",
    width: 120,
    height: 40,
  },
  {
    src: "/images/customer-logos/thredup_logo.svg",
    alt: "ThredUp Logo",
    width: 120,
    height: 40,
  },
  {
    src: "/images/customer-logos/lemonade_logo.svg",
    alt: "Lemonade Logo",
    width: 120,
    height: 40,
  },
  {
    src: "/images/customer-logos/newyorktimes_logo.svg",
    alt: "New York Times Logo",
    width: 120,
    height: 40,
  },
  {
    src: "/images/customer-logos/included_health.svg",
    alt: "Included Health Logo",
    width: 120,
    height: 40,
  },
  {
    src: "/images/customer-logos/mabel_logo.svg",
    alt: "Mabel Logo",
    width: 120,
    height: 40,
  },
];

const awards = [
  {
    src: "/images/awards/postman.png",
    alt: "Best API",
    width: 70,
    height: 70,
    title: "Best API",
    description: "Postman Award Winner"
  },
  {
    src: "/images/awards/2024bestplace.svg",
    alt: "2024 Best Places to Work",
    width: 70,
    height: 70,
    title: "2024 Best Places to Work",
    description: "BuiltIn"
  },
  {
    src: "/images/awards/npf-logo.png",
    alt: "Mail Service Provider of the Year",
    width: 70,
    height: 70,
    title: "Mail Service Provider of the Year",
    description: "National Postal Forum 2024"
  },
];

interface HomePageSectionsProps {
  className?: string;
}

export default function HomePageSections({ className = "" }: HomePageSectionsProps) {
  return (
    <>
      {/* Customer Logos Section */}
      <div className={`w-full ${className}`}>
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-center text-xl font-medium mb-8">
            Reinvent the mail. Join 12,000+ companies leading the charge with Lob.
          </h2>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
            {logos.map((logo) => (
              <div
                key={logo.alt}
                className="flex items-center justify-center p-2"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="max-w-full h-auto opacity-80 hover:opacity-100 transition-opacity duration-200"
                />
              </div>
            ))}
          </div>
          
          <div className="mt-12 border-b border-gray-200"></div>
        </div>
      </div>

      {/* Awards Section */}
      <div className="w-full">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-center items-start">
            {awards.map((award, index) => (
              <div key={award.alt} className="flex flex-row md:flex-row items-center gap-4 px-4 py-6 md:py-2 md:w-1/3 relative">
                <div className="">
                  <Image
                    src={award.src}
                    alt={award.alt}
                    width={award.width}
                    height={award.height}
                    className=""
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-bold text-lg">{award.title}</h3>
                  <p className="text-gray-700">{award.description}</p>
                </div>
                
                {/* Vertical divider for desktop */}
                {index < awards.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-4 bottom-4 w-px bg-gray-200"></div>
                )}
                
                {/* Horizontal divider for mobile */}
                {index < awards.length - 1 && (
                  <div className="block md:hidden w-full h-px bg-gray-200 absolute bottom-0 left-0 right-0"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}