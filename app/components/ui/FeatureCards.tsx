import Image from "next/image";

const features = [
  {
    icon: "/images/ui_icons/magenta_navigation.svg",
    title: "Mail to millions (but make it personal)",
    description:
      "Automate hyper-targeted and personalized mail at any scale and watch conversion soar. Lob brings the data and ease of digital to your direct mail campaigns.",
  },
  {
    icon: "/images/ui_icons/yellow_puzzle.svg",
    title: "Integrate with ease + boost digital",
    description:
      "Lob integrates smoothly with your existing tech stack, making it easy to add direct mail to your digital campaigns. Choose from turnkey solutions or our award-winning API.",
  },
  {
    icon: "/images/ui_icons/cyan_barchart.svg",
    title: "Mail smarter with advanced analytics",
    description:
      "Track your direct mail's success with Lob Analytics. Get clear insights and adapt strategies in real time to make every send better than the last.",
  },
  {
    icon: "/images/ui_icons/magenta_expand.svg",
    title: "Deliver fast + put security first",
    description:
      "Automate your campaigns to take the grunt work out of direct mail, then use our print network to smooth logistics and keep your mail compliant.",
  },
];

interface FeaturesSectionProps {
  className?: string;
}

export default function FeaturesSection({ className = "" }: FeaturesSectionProps) {
  return (
    <section className={`container  bg-gray-50 py-16 sm:py-20 md:py-24 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col">
              <div className="relative mb-6">
                <Image
                  src={feature.icon}
                  alt=""
                  width={64}
                  height={64}
                  className="w-16 h-16"
                />
              </div>
              
              <h3 className="text-xl font-bold mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-700">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}