import { cn } from "@/lib/utils";
import { SVGProps } from "react";
import { useId } from "react";

type IconProps = {
  className?: string;
  width?: string;
  height?: string;
};

const Play = ({ className, width = "65", height = "65" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      className={cn("shrink-0", className)}
    >
      <circle cx={34} cy={34} r={32.5} stroke="#fff" strokeWidth={3} />
      <path fill="#fff" d="M29 25v20l17.778-10L29 25Z" />
    </svg>
  );
};

const Phone = ({ className, width = "24", height = "24" }: IconProps) => {
  const patternId = useId();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      className={cn("h-6 w-6 shrink-0", className)}
    >
      <path
        fill={`url(#${patternId})`}
        d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"
      ></path>
      <linearGradient id={patternId} x2="1" y2="1">
        <stop offset="0%" stopColor="#112E74" />
        <stop offset="100%" stopColor="#112E74" />
      </linearGradient>
    </svg>
  );
};

const Email = ({ className, width = "24", height = "24" }: IconProps) => {
  const patternId = useId();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      className={cn("h-6 w-6 shrink-0", className)}
    >
      <path
        fill={`url(#${patternId})`}
        d="M21 3C21.5523 3 22 3.44772 22 4V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V19H20V7.3L12 14.5L2 5.5V4C2 3.44772 2.44772 3 3 3H21ZM8 15V17H0V15H8ZM5 10V12H0V10H5ZM19.5659 5H4.43414L12 11.8093L19.5659 5Z"
      ></path>
      <linearGradient id={patternId} x2="1" y2="1">
        <stop offset="0%" stopColor="#112E74" />
        <stop offset="100%" stopColor="#112E74" />
      </linearGradient>
    </svg>
  );
};

const WhatsApp = ({ className, width = "24", height = "24" }: IconProps) => {
  const patternId = useId();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      className={className}
    >
      <path
        fill={`url(#${patternId})`}
        d="M17.472 14.382c-.297-.149-1.758-.867-2.029-.966-.272-.099-.47-.148-.668.15-.197.297-.767.965-.941 1.163-.174.198-.347.223-.644.075-.297-.149-1.254-.463-2.39-1.475-.883-.788-1.48-1.762-1.654-2.059-.174-.297-.019-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.297.297-.495.099-.198.05-.371-.025-.52-.075-.149-.668-1.612-.916-2.21-.242-.581-.486-.502-.668-.511-.174-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.039 1.015-1.039 2.48 0 1.465 1.064 2.882 1.213 3.08.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.692.625.711.226 1.36.194 1.872.118.571-.085 1.758-.719 2.007-1.412.248-.694.248-1.29.173-1.412-.075-.124-.272-.198-.57-.347zM12 2C6.486 2 2 6.486 2 12c0 1.614.388 3.134 1.07 4.47L2 22l5.634-1.126C8.864 21.615 10.404 22 12 22c5.514 0 10-4.486 10-10S17.514 2 12 2z"
      ></path>
      <linearGradient id={patternId} x2="1" y2="1">
        <stop offset="0%" stopColor="#112E74" />
        <stop offset="100%" stopColor="#112E74" />
      </linearGradient>
    </svg>
  );
};

const Address = ({ className, width = "24", height = "24" }: IconProps) => {
  const patternId = useId();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      className={cn("h-6 w-6 shrink-0", className)}
    >
      <path
        fill={`url(#${patternId})`}
        d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"
      ></path>
      <linearGradient id={patternId} x2="1" y2="1">
        <stop offset="0%" stopColor="#112E74" />
        <stop offset="100%" stopColor="#112E74" />
      </linearGradient>
    </svg>
  );
};

const Spinner = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
      viewBox="0 0 24 24"
      {...props}
    >
      <circle
        cx={12}
        cy={12}
        r={10}
        stroke="currentColor"
        strokeWidth={4}
        className="opacity-25"
      />
      <path
        fill="currentColor"
        d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        className="opacity-75"
      />
    </svg>
  );
};

export { Spinner, Phone, Email, Address, Play, WhatsApp };
