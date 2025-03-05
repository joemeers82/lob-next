import Image from "next/image";

interface Testimonial {
  logo: string;
  quote: string;
  author: string;
  title?: string;
  borderColor: string;
}

interface TestimonialsProps {
  className?: string;
  testimonials?: Testimonial[];
}

export default function TestimonialsSection({ className = "", testimonials }: TestimonialsProps) {
  // Default testimonials if none provided
  const defaultTestimonials: Testimonial[] = [
    {
      logo: "/images/customer-logos/marleyspoon_logo.svg",
      quote: "Lob automated direct mail has increased our productivity and saved us money. It's a huge help to get our direct mail campaigns out quickly and easily.",
      author: "Malin Dettmann-Levin",
      borderColor: "border-magenta-100"
    },
    {
      logo: "/images/customer-logos/oscar_logo.svg",
      quote: "Lob makes us much more efficient across the board.",
      author: "Brenton Caldwell",
      borderColor: "border-cyan-100"
    },
    {
      logo: "/images/customer-logos/encamp_logo.png",
      quote: "It would be impossible for us to do our job without Lob.",
      author: "Ben Jacobs",
      title: "Chief Technology Officer",
      borderColor: "border-yellow-100"
    }
  ];

  const displayTestimonials = testimonials || defaultTestimonials;

  return (
    <section className={`w-full bg-cyan-key py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-white text-3xl md:text-4xl font-light text-center mb-4">
          Increase the impact of your direct mail — while decreasing your workload
        </h2>
        
        <p className="text-white text-center text-lg md:text-xl mx-auto max-w-3xl mb-16">
          Hear from brands who are using Lob to connect with customers like 
          never before, without breaking a sweat (or the bank).
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayTestimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`bg-white rounded-lg p-8 flex flex-col border-t-8 ${testimonial.borderColor}`}
            >
              <div className="h-10 mb-10">
                <Image
                  src={testimonial.logo}
                  alt={`${testimonial.author}'s company logo`}
                  width={140}
                  height={40}
                  className="h-full w-auto object-contain object-left"
                />
              </div>
              
              <blockquote className="text-xl mb-8 flex-grow">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="text-sm">
                <p className="font-semibold">— {testimonial.author}</p>
                {testimonial.title && (
                  <p className="text-gray-600">{testimonial.title}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}