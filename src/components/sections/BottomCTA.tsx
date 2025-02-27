
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from "react";

const logoImages = [
  "/lovable-uploads/ac351c4a-1998-410f-b459-7000031fc568.png", // Learnerbly
  "/lovable-uploads/6dedccce-f350-4626-87e7-0fdacb83b18b.png", // Anthropologie
  "/lovable-uploads/fb33121b-3ddb-4866-b0f5-5f6dbbefdcbf.png", // Punkt
  "/lovable-uploads/b5b646f6-ef6f-4675-9e14-99d36e4d7b84.png", // DICE
  "/lovable-uploads/5d049496-23f8-40a1-ad60-a3502c8625fe.png", // BLOOM & WILD
  "/lovable-uploads/710d0894-444f-4c58-bfb1-5727dab1b5bb.png", // URBAN OUTFITTERS
  "/lovable-uploads/b6c78906-c711-4072-9d1a-d2d8d1ca250b.png", // NordicTrack
  "/lovable-uploads/7f08cf46-feea-4821-a3b7-60755226e117.png", // OnBuy.com
];

const BottomCTA = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    // Auto-scroll every 3 seconds
    const autoplay = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 3000);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
      clearInterval(autoplay);
    };
  }, [emblaApi, onSelect]);

  return (
    <>
      {/* Client Logo Carousel - Now placed above the gradient background */}
      <div className="bg-white py-12 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="w-full my-8">
            <p className="text-navy font-semibold mb-6 text-center">Trusted by industry leaders</p>
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {logoImages.map((src, index) => (
                  <div 
                    key={index} 
                    className="flex-[0_0_25%] min-w-0 px-4 flex items-center justify-center"
                  >
                    <img 
                      src={src} 
                      alt={`Client logo ${index + 1}`} 
                      className="h-12 md:h-16 object-contain transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main CTA section with gradient background */}
      <div className="bg-gradient-to-r from-blue-50 to-pink-50 py-20 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center gap-8 max-w-3xl mx-auto text-center">
            <div className="flex items-center gap-1 text-yellow-500">
              <Star className="fill-yellow-500" size={20} />
              <Star className="fill-yellow-500" size={20} />
              <Star className="fill-yellow-500" size={20} />
              <Star className="fill-yellow-500" size={20} />
              <Star className="fill-yellow-500" size={20} />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-navy animate-fade-up">Ready to Elevate Your Customer Service?</h2>
            
            <p className="text-gray-600 text-lg md:text-xl">
              Join hundreds of businesses that have transformed their customer support with our UK-based solutions.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center text-left text-gray-700 my-2">
              <div className="flex items-start gap-2">
                <div className="text-coral mt-1">✓</div>
                <div>96% customer satisfaction</div>
              </div>
              <div className="flex items-start gap-2">
                <div className="text-coral mt-1">✓</div>
                <div>UK-based support team</div>
              </div>
              <div className="flex items-start gap-2">
                <div className="text-coral mt-1">✓</div>
                <div>24/7 availability</div>
              </div>
            </div>
            
            <div className="mt-4">
              <Button
                className="bg-coral hover:bg-coral-dark text-white px-8 py-6 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center"
                onClick={() => {
                  const form = document.querySelector('form');
                  form?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Transform Your Support Today <ArrowRight className="ml-2" size={18} />
              </Button>
            </div>
            
            <div className="text-sm text-gray-500 italic mt-2">
              "Our customer response times improved by 45% within the first month." — Sarah J., Operations Director
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomCTA;
