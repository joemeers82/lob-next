import Image from "next/image";

const logos = [
  {
    src: "/images/customer-logos/cedar_logo.svg",
    alt: "Cedar Logo",
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
    src: "/images/customer-logos/lemonade_logo.svg",
    alt: "Lemonade Logo",
    width: 120,
    height: 40,
  },
  {
    src: "/images/customer-logos/mabel_logo.svg",
    alt: "Mabel Logo",
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
    src: "/images/customer-logos/thredup_logo.svg",
    alt: "ThredUp Logo",
    width: 120,
    height: 40,
  },
];

interface CustomerLogosProps {
  className?: string;
}

export default function CustomerLogos({ className = "" }: CustomerLogosProps) {
  return (
    <div className={`w-full ${className}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {logos.map((logo) => (
            <div
              key={logo.alt}
              className="w-full flex items-center justify-center p-4"
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
      </div>
    </div>
  );
}
