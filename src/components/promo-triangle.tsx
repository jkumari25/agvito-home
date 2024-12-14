import { motion } from "framer-motion";
import React from "react";
import { useId } from "react";
import { SVGProps } from "react";

const PromoTriangle: React.FC<SVGProps<SVGSVGElement> & { imageb: string }> = (
  props,
) => {
  const { imageb } = props;
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
    getImageAsDataUrl(imageb).then((dataUrl) => {
      setImageDataUrl(dataUrl);
    });
  }, [imageb]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.5,
        duration: 0.5,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlSpace="preserve"
        className="absolute -left-[1600px] w-[1920px] -rotate-[16deg] xl:-left-[1200px] lg:-left-[1200px] md:-left-[1400px] sm:-left-[1500px] bottom-[-8%] sm:bottom-[-6%] md:bottom-[-7%] lg:bottom-[-2.4%] "
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
            width={600}
            height={600}
            patternUnits="userSpaceOnUse"
          >
            {imageDataUrl && (
              <image
                x={0}
                y={0}
                width={600}
                height={600}
                xlinkHref={imageDataUrl}
              />
            )}
          </pattern>
        </defs>
      </svg>
    </motion.div>
  );
};

export default PromoTriangle;
