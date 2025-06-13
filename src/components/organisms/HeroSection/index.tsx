import React, { useRef } from "react";
import { BodyText, Display, Heading } from "../../atoms/Typography";
import heroImage from "./../../../assets/images/image.png";
import { Button } from "../../atoms/Button";
import { Icon } from "./../../Icon";

const HeroSection: React.FC = () => {
  const imgRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const container = e.currentTarget;
    const img = imgRef.current;

    if (!img) return;

    const { left, top, width, height } = container.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const moveX = ((x - width / 2) / width) * -20;
    const moveY = ((y - height / 2) / height) * -20;

    img.style.transform = `translate(${moveX}px, ${moveY}px)`;
  };

  const handleMouseLeave = () => {
    if (imgRef.current) {
      imgRef.current.style.transform = 'translate(0, 0)';
    }
  };

  return (<>
    <section className="relative -mt-16 py-24 bg-contain bg-right bg-no-repeat -z-10"  ref={imgRef} style={{ backgroundImage: `url(${heroImage})`,     backgroundPositionX: `calc(100% + 10rem)` }}>
      <div className="container mx-auto flex justify-between grid grid-cols-12" onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}>
        <div className="col-span-5 flex-wrap h-full pt-5 mt-4">
          <div className="flex items-center w-full px-4 lg:w-5/12 lg:px-0">
            <div className="flex-1">
              <Display variant="d4" className="mb-8 pt-5">
                Task Management Assistant You Gonna Love
              </Display>

              <BodyText variant="body-l" className="mb-12 text-gray-700">
                We offer you a new generation of task management system. Plan,
                manage & track all your tasks in one flexible tool.
              </BodyText>

              <Button
                size="medium"
                shape="rounded"
                color="blue"
                className="mb-[112px] shadow-button"
              >
                Get started for free
              </Button>

              <Heading variant="h6" className="mb-10">
                Largest companies use our tool to work efficiently
              </Heading>

              <div className="flex gap-6">
                <Icon name="LogoIpsum" className="w-[30] h-auto text-gray-500" />
                <Icon name="LogoIpsum" className="w-[30] h-auto text-gray-500" />
                <Icon name="LogoIpsum" className="w-[30] h-auto text-gray-500" />
                <Icon name="LogoIpsum" className="w-[30] h-auto text-gray-500" />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="col-span flex h-full -mt-8"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}>
          <div className="absolute inset-0  w-full h-full -z-10">
            <div ref={imgRef}
              className="w-full h-full bg-no-repeat bg-right bg-auto transition-transform duration-300 ease-out will-change-transform"
               
            ></div>
          </div>
        </div> */}
      </div>
    </section>
  </>);
};
// absolute top-0 right-0 w-1/2 h-full z-0
export default HeroSection;
