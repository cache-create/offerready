import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  image: string;
  alt: string;
  label: string;
}

const slides: Slide[] = [
  {
    image: "/src/assets/step-1-manage-rates.png",
    alt: "Step 1: Manage loan approval rates and set rules",
    label: "Step 1: You set the rules"
  },
  {
    image: "/src/assets/step-2-approval-letter.png",
    alt: "Step 2: Instantly generated approval letter",
    label: "Step 2: Letters are generated instantly"
  },
  {
    image: "/src/assets/step-3-organized.png",
    alt: "Step 3: Organized loan approval details",
    label: "Step 3: Everything stays organized"
  }
];

export const ScreenshotCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-advance carousel
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered, currentSlide]);

  return (
    <div
      className="relative mx-auto mt-12 mb-8 max-w-4xl overflow-hidden rounded-xl bg-card shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Carousel Wrapper */}
      <div className="relative w-full" style={{ paddingBottom: "40%" }}>
        {/* Carousel Track */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="flex h-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="flex h-full min-w-full items-center justify-center bg-gray-50"
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-lg transition-all hover:bg-white hover:shadow-xl"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5 text-primary" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-lg transition-all hover:bg-white hover:shadow-xl"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5 text-primary" />
        </button>
      </div>

      {/* Step Label */}
      <div className="border-t border-border bg-secondary px-4 py-3 text-center font-medium text-foreground">
        {slides[currentSlide].label}
      </div>

      {/* Navigation Dots */}
      <div className="flex items-center justify-center gap-3 bg-card px-4 py-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full border-2 transition-all duration-300 ${
              index === currentSlide
                ? "scale-125 border-primary bg-primary"
                : "border-border bg-muted hover:bg-primary/50"
            }`}
            aria-label={`Go to step ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
