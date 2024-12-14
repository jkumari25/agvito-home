"use client";
// import { useRouter } from "next/router";

export default function BannerPage() {
  //   const router = useRouter();

  return (
    <div className="relative h-screen">
      {/* Navbar */}
      <nav className="absolute top-0 z-10 w-full">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <div className="text-xl font-bold text-white">MyLogo</div>
          <ul className="flex space-x-4">
            <li className="text-white">Home</li>
            <li className="text-white">About</li>
            <li className="text-white">Contact</li>
          </ul>
        </div>
      </nav>

      {/* Banner Image */}
      <div
        className="h-full w-full bg-cover bg-center"
        style={{
          backgroundImage: `url('/your-image-url.jpg')`, // Replace with your banner image URL
        }}
      >
        <div className="flex h-full items-center justify-center bg-black bg-opacity-50">
          {/* Center Content */}
          <div className="text-center text-white">
            <h1 className="mb-4 text-4xl font-bold">Welcome to Our Website</h1>
            <button
              //   onClick={handleVisitNow}
              className="mt-4 rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600"
            >
              Visit Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
