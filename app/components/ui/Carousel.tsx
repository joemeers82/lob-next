import Image from "next/image";

interface Slide {
  id: number;
  imagePath: string;
  alt: string;
  content: string;
  color: string;
}

const Carousel = () => {
  const SLIDES: Slide[] = [
    {
      id: 1,
      imagePath: "/images/slide1.svg",
      alt: "Slide 1",
      content: "Slide 1",
      color: "bg-blue-200",
    },
    {
      id: 2,
      imagePath: "/images/slide2.svg",
      alt: "Slide 2",
      content: "Slide 2",
      color: "bg-green-200",
    },
    {
      id: 3,
      imagePath: "/images/slide3.svg",
      alt: "Slide 3",
      content: "Slide 3",
      color: "bg-red-200",
    },
  ];

  // Create duplicate slides with unique keys
  const duplicatedSlides = [
    ...SLIDES.map((slide) => ({ ...slide, id: `${slide.id}-a` })),
    ...SLIDES.map((slide) => ({ ...slide, id: `${slide.id}-b` })),
    ...SLIDES.map((slide) => ({ ...slide, id: `${slide.id}-c` })),
  ];

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex animate-infinite-scroll">
        <div className="flex">
          {duplicatedSlides.map((slide) => (
            <div key={slide.id} className="flex-shrink-0 w-[33%]">
              <Image
                src={slide.imagePath}
                alt={slide.alt}
                width={400}
                height={400}
                className="w-full min-w-[160px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
