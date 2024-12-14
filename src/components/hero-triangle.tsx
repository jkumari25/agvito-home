import { SVGProps } from "react";
import Image from "next/image";
import { useId } from "react";
import React from "react";

const HeroTriangle: React.FC<SVGProps<SVGSVGElement> & { imagea: string }> = (
  props,
) => {
  const { imagea } = props;
  const patternId = useId();
  const gradientId = useId();

  // Function to convert an image to a Base64-encoded data URL
  const getImageAsDataUrl = async (src: string): Promise<string> => {
    const response = await fetch(src);
    const blob = await response.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result as string);
      };
      reader.readAsDataURL(blob);
    });
  };

  // Use the data URL in the pattern
  const [imageDataUrl, setImageDataUrl] = React.useState<string | null>(null);
  React.useEffect(() => {
    getImageAsDataUrl(imagea).then((dataUrl) => {
      setImageDataUrl(dataUrl);
    });
  }, [imagea]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      className="absolute -right-[1300px] -top-[1180px] sm:-top-[1170px] md:-top-[1140px] lg:-top-[950px] xl:-top-[938px] -z-[1]  w-[1920px] -rotate-[16deg] xl:-right-[850px] md:-right-[1050px] lg:-right-[950px] sm:-right-[1100px]"
      viewBox="0 0 600 480"
      {...props}
    >
      <path
        fill={`url(#${patternId})`}
        d="M232.16 108.54 76.5 357.6c-33.3 53.28 5 122.4 67.84 122.4h311.32c62.83 0 101.14-69.12 67.84-122.4L367.84 108.54c-31.33-50.13-104.35-50.13-135.68 0Z"
        className="st0"
      />
      <path
        fill={`url(#${gradientId})`}
        fillOpacity={0.2}
        d="M232.16 108.54 76.5 357.6c-33.3 53.28 5 122.4 67.84 122.4h311.32c62.83 0 101.14-69.12 67.84-122.4L367.84 108.54c-31.33-50.13-104.35-50.13-135.68 0Z"
        className="st0"
      />
      <defs>
        {/* <linearGradient
          id={gradientId}
          x2={0}
          y1="50%"
          y2="100%"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#4C86E7" />
          <stop offset={1} stopColor="#B939E5" />
        </linearGradient> */}
        <pattern
          id={patternId}
          width={500}
          height={500}
          patternUnits="userSpaceOnUse"
        >
          {imageDataUrl && (
            <image
              x={0}
              y={70}
              width={500}
              height={500}
              xlinkHref={imageDataUrl}
            />
          )}
        </pattern>
      </defs>
    </svg>
  );
};

export default HeroTriangle;
