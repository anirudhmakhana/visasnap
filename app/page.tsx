import Image from "next/image";
import Link from "next/link";
import { Camera, Globe, Clock } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#home">
          <Camera className="h-6 w-6 mr-2 text-black" />
          <span className="font-bold text-black">VisaSnap AI</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium text-black hover:underline underline-offset-4"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium text-black hover:underline underline-offset-4"
            href="#pricing"
          >
            Pricing
          </Link>
          <Link
            className="text-sm font-medium text-black hover:underline underline-offset-4"
            href="#contact"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1" id="home">
        <section
          className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-200 via-pink-200 to-red-200"
          id="features"
        >
          {" "}
          {/* Gradient background */}
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                    AI-Powered Visa Photos in Seconds
                  </h1>
                  <p className="max-w-[600px] text-black md:text-xl">
                    Generate perfect visa photos that meet country-specific
                    requirements instantly. Save time and hassle with our
                    cutting-edge AI technology.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 px-8 text-sm font-medium text-white shadow-sm transition-colors hover:from-pink-500 hover:to-purple-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-500 disabled:pointer-events-none disabled:opacity-50"
                    href="#learn-more"
                  >
                    Apply Now!
                  </Link>
                </div>
              </div>
              <Image
                alt="Visa Photo Generator"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="550"
                src="/images/landing.png"
                width="550"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="how-it-works">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
              How It Works
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <Globe className="h-10 w-10 text-gradient" />
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  Select Country
                </h3>
                <p className="text-black">
                  Choose your destination country from our extensive list.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Camera className="h-10 w-10 text-gradient" />
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  Upload Photo
                </h3>
                <p className="text-black">
                  Upload your photo or take one with your device camera.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Clock className="h-10 w-10 text-gradient" />
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  Instant Results
                </h3>
                <p className="text-black">
                  Receive your perfectly formatted visa photo in seconds.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-200 via-pink-200 to-red-200"
          id="pricing"
        >
          {" "}
          {/* Gradient background */}
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Affordable Pricing
            </h2>
            <p className="text-black md:text-xl mb-6">
              No more wasting time and money at the photographer's shop. Get
              perfectly formatted visa photos at the convenience of your home
              for only <span className="font-bold">$2</span> per render!
            </p>
            <div className="shadow-md rounded-lg p-6 inline-block border border-black bg-white">
              <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                Only $2 per Photo
              </h3>
              <p className="text-black mb-4">
                Each AI-generated visa photo costs just $2. Quick, easy, and
                incredibly affordable.
              </p>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 px-8 text-sm font-medium text-white shadow transition-colors hover:from-pink-500 hover:to-purple-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-500 disabled:pointer-events-none disabled:opacity-50"
                href="#get-started"
              >
                Get Your Visa Photo
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="contact">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Contact Us
            </h2>
            <p className="text-black md:text-xl">
              Have questions or need support? Get in touch with us!
            </p>
            {/* Add your contact form or details here */}
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-12 w-full shrink-0 items-center px-4 md:px-6">
        <p className="text-xs text-black">
          © 2024 VisaSnap AI. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs text-black hover:underline underline-offset-4"
            href="#terms"
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs text-black hover:underline underline-offset-4"
            href="#privacy"
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
