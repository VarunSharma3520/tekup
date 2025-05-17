"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

// import ServiceCard from "@/components/ui/ServiceCard";
import {
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Send,
  MoveUpRight,
  List,
  MessageCircle,
  ArrowRight,
  Check,
  Star,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Code,
  MapPin,
  ShieldCheck,
  Code2,
  Monitor,
  Layout,
  MessageSquare,
  // Award,
  X,
  Menu,
} from "lucide-react";

function TekupHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
    null
  );

  const toggleDropdown = (menu: string) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  const toggleMobileDropdown = (menu: string): void => {
    setOpenMobileDropdown((prev: string | null) =>
      prev === menu ? null : menu
    );
  };

  return (
    <div className="bg-white w-full">
      <div className="border-b border-gray-200 hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center py-2 text-sm text-gray-600">
            <div className="flex flex-col sm:flex-row items-center sm:space-x-6 space-y-2 sm:space-y-0">
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-blue-600" />
                <span className="text-xs sm:text-sm">
                  2774 Oak Drive, Plattsburgh, NY
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-blue-600" />
                <span className="text-xs sm:text-sm">518-564-3200</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 mt-2 sm:mt-0">
              <Clock size={16} className="text-blue-600" />
              <span className="text-xs sm:text-sm">
                Office Hours: 6:00 AM - 10:00 PM
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
              </div>
              <span className="text-xl sm:text-2xl font-bold text-black">
                Tekup
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8 relative">
            <div className="relative">
              <div
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 cursor-pointer"
                onClick={() => toggleDropdown("demo")}
              >
                <span>Demo</span>
                <ChevronDown size={16} />
              </div>
              {openDropdown === "demo" && (
                <div className="absolute top-full mt-2 bg-white border rounded shadow z-20 w-40 p-2 space-y-1 text-sm text-left">
                  <a
                    href="#"
                    className="block px-3 py-1 hover:bg-gray-100 rounded"
                  >
                    Demo 1
                  </a>
                  <a
                    href="#"
                    className="block px-3 py-1 hover:bg-gray-100 rounded"
                  >
                    Demo 2
                  </a>
                </div>
              )}
            </div>

            <a href="#" className="text-gray-700 hover:text-blue-600">
              About Us
            </a>

            <div className="relative">
              <div
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 cursor-pointer"
                onClick={() => toggleDropdown("pages")}
              >
                <span>Pages</span>
                <ChevronDown size={16} />
              </div>
              {openDropdown === "pages" && (
                <div className="absolute top-full mt-2 bg-white border rounded shadow z-20 w-40 p-2 space-y-1 text-sm text-left">
                  <a
                    href="#"
                    className="block px-3 py-1 hover:bg-gray-100 rounded"
                  >
                    Page 1
                  </a>
                  <a
                    href="#"
                    className="block px-3 py-1 hover:bg-gray-100 rounded"
                  >
                    Page 2
                  </a>
                </div>
              )}
            </div>

            <div className="relative">
              <div
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 cursor-pointer"
                onClick={() => toggleDropdown("blog")}
              >
                <span>Blog</span>
                <ChevronDown size={16} />
              </div>
              {openDropdown === "blog" && (
                <div className="absolute top-full mt-2 bg-white border rounded shadow z-20 w-40 p-2 space-y-1 text-sm text-left">
                  <a
                    href="#"
                    className="block px-3 py-1 hover:bg-gray-100 rounded"
                  >
                    Blog 1
                  </a>
                  <a
                    href="#"
                    className="block px-3 py-1 hover:bg-gray-100 rounded"
                  >
                    Blog 2
                  </a>
                </div>
              )}
            </div>

            <a href="#" className="text-gray-700 hover:text-blue-600">
              Contact Us
            </a>
          </nav>

          <button className="hidden sm:flex bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 items-center space-x-2">
            <span className="text-sm sm:text-base">Get in Touch</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transform rotate-45"
            >
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-1">
            <div className="py-2 border-b border-gray-100">
              <div className="flex items-center space-x-2 py-1">
                <MapPin size={16} className="text-blue-600" />
                <span className="text-xs">2774 Oak Drive, Plattsburgh, NY</span>
              </div>
              <div className="flex items-center space-x-2 py-1">
                <Phone size={16} className="text-blue-600" />
                <span className="text-xs">518-564-3200</span>
              </div>
              <div className="flex items-center space-x-2 py-1">
                <Clock size={16} className="text-blue-600" />
                <span className="text-xs">
                  Office Hours: 6:00 AM - 10:00 PM
                </span>
              </div>
            </div>

            <div className="py-2 flex flex-col">
              <div
                className="flex justify-between items-center py-2 border-b border-gray-100"
                onClick={() => toggleMobileDropdown("demo")}
              >
                <span className="text-gray-700">Demo</span>
                <ChevronDown size={16} />
              </div>
              {openMobileDropdown === "demo" && (
                <div className="pl-4 space-y-1 text-sm">
                  <a href="#" className="block py-1 text-gray-600">
                    Demo 1
                  </a>
                  <a href="#" className="block py-1 text-gray-600">
                    Demo 2
                  </a>
                </div>
              )}

              <a
                href="#"
                className="py-2 text-gray-700 border-b border-gray-100"
              >
                About Us
              </a>

              <div
                className="flex justify-between items-center py-2 border-b border-gray-100"
                onClick={() => toggleMobileDropdown("pages")}
              >
                <span className="text-gray-700">Pages</span>
                <ChevronDown size={16} />
              </div>
              {openMobileDropdown === "pages" && (
                <div className="pl-4 space-y-1 text-sm">
                  <a href="#" className="block py-1 text-gray-600">
                    Page 1
                  </a>
                  <a href="#" className="block py-1 text-gray-600">
                    Page 2
                  </a>
                </div>
              )}

              <div
                className="flex justify-between items-center py-2 border-b border-gray-100"
                onClick={() => toggleMobileDropdown("blog")}
              >
                <span className="text-gray-700">Blog</span>
                <ChevronDown size={16} />
              </div>
              {openMobileDropdown === "blog" && (
                <div className="pl-4 space-y-1 text-sm">
                  <a href="#" className="block py-1 text-gray-600">
                    Blog 1
                  </a>
                  <a href="#" className="block py-1 text-gray-600">
                    Blog 2
                  </a>
                </div>
              )}

              <a
                href="#"
                className="py-2 text-gray-700 border-b border-gray-100"
              >
                Contact Us
              </a>
            </div>

            <div className="py-2">
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2">
                <span>Get in Touch</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transform rotate-45"
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function TekupHeroSection() {
  return (
    <div className="py-10 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto md:mx-8 lg:mx-16 xl:mx-24">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            <div className="space-y-4 md:space-y-6">
              <p className="text-blue-600 font-medium text-base sm:text-lg">
                We provide professional IT services
              </p>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Best IT services
                <br />
                for your success
              </h1>
              <p className="text-gray-600 text-sm sm:text-md leading-relaxed">
                We are architects of innovation, trailblazers technological
                advancement, and partners in your success. As a dynamic and
                forward
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center sm:justify-start space-x-2 font-medium rounded-lg sm:rounded-none">
                <span>Start a Project</span>
                <MoveUpRight size={20} />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-6 sm:px-8 py-3 sm:py-4 hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center sm:justify-start space-x-2 font-medium rounded-lg sm:rounded-none">
                <span>Our Works</span>
                <MoveUpRight size={20} />
              </button>
            </div>
          </div>

          {/* Right Content - Image with Cards */}
          <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
            {/* Main Background Shape */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl sm:rounded-3xl transform -rotate-3"></div>

            {/* Professional Person Image */}
            <div className="relative z-10 px-4 py-4 sm:px-6 sm:py-6">
              <div className="relative w-full aspect-[3/4] md:aspect-[4/5]">
                <Image
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  fill
                  src="https://res.cloudinary.com/dlfuvp7oc/image/upload/v1747419021/soi2v02m2ryl6o6d4var.png"
                  alt="Professional person"
                  className="rounded-lg sm:rounded-2xl"
                />
              </div>

              {/* Customer Satisfaction Card - Responsive positioning */}
              {/* <div className="absolute top-2 right-2 sm:top-4 sm:right-4 md:top-8 md:right-0 bg-white rounded-lg p-2 sm:p-4 shadow-lg max-w-[120px] sm:max-w-none">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="bg-blue-100 p-1 sm:p-2 rounded-lg">
                    <Award className="w-4 h-4 sm:w-6 sm:h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs sm:text-sm">100% Customer</p>
                    <p className="text-gray-800 font-semibold text-xs sm:text-sm">Satisfaction</p>
                  </div>
                </div>
              </div> */}

              {/* Rating Card - Responsive positioning */}
              {/* <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 md:bottom-8 md:left-8 bg-white rounded-lg p-2 sm:p-4 shadow-lg max-w-[180px] sm:max-w-none">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="flex -space-x-1 sm:-space-x-2">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gray-300 rounded-full"></div>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gray-400 rounded-full"></div>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs sm:text-sm font-bold">14k</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-800 font-semibold text-xs sm:text-sm">
                      Avg rating 4.8 makes us
                    </p>
                    <p className="text-gray-500 text-xs sm:text-sm">world best agency.</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServicesCarousel() {
  const services = [
    {
      icon: Send,
      title: "Digital Marketing",
      text: "We are architects of innovation in your success.",
    },
    {
      icon: ShieldCheck,
      title: "Cybersecurity",
      text: "Protecting your business with industry-leading security.",
    },
    {
      icon: Code2,
      title: "Custom Development",
      text: "Bespoke software development tailored to your business needs.",
    },
    {
      icon: Monitor,
      title: "Web Development",
      text: "We are architects of innovation trailblazers technological",
    },
    {
      icon: Layout,
      title: "UI/UX Design",
      text: "We are architects of innovation trailblazers technological",
    },
    {
      icon: MessageSquare,
      title: "Digital Marketing",
      text: "We are architects of innovation trailblazers technological",
    },
    {
      icon: Layout,
      title: "UI/UX Design",
      text: "We are architects of innovation trailblazers technological",
    },
    {
      icon: Code,
      title: "Web Development",
      text: "We are architects of innovation trailblazers technological",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? services.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLast = currentIndex === services.length - 1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const currentService = services[currentIndex];

  return (
    <section className="py-16 bg-gray-100">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold leading-snug">
            We deal with the aspects of
            <br className="hidden sm:block" />
            professional IT services
          </h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Navigation buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-900 shadow-md z-10 hover:bg-gray-100 transition-colors"
            aria-label="Previous service"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-900 shadow-md z-10 hover:bg-gray-100 transition-colors"
            aria-label="Next service"
          >
            <ChevronRight size={20} />
          </button>

          {/* Service Card */}
          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
            <currentService.icon className="w-10 h-10 mb-4 text-blue-600" />
            <h3 className="text-lg font-semibold mb-2">
              {currentService.title}
            </h3>
            <p className="text-gray-600">{currentService.text}</p>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-blue-600" : "bg-gray-400"
                }`}
                aria-label={`Go to service ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LogoMarquee() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="px-4 max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-gray-600">
            Empowered professionals to connect with top-tier opportunities
          </p>
        </div>

        <div
          dangerouslySetInnerHTML={{
            __html: `
            <marquee behavior="scroll" direction="left" scrollamount="3">
              <div class="flex items-center space-x-8 sm:space-x-12 md:space-x-20">
                <div class="flex flex-col items-center text-center">
                  <img src="https://res.cloudinary.com/dlfuvp7oc/image/upload/v1747409127/vqsh4dt724sbgnma0994.jpg" alt="Nietzsche logo" class="h-8 sm:h-10 w-auto grayscale opacity-80" />
                  <p class="text-xs sm:text-sm mt-1">Nietzsche</p>
                </div>
                <div class="flex flex-col items-center text-center">
                  <img src="https://res.cloudinary.com/dlfuvp7oc/image/upload/v1747414620/aawlpgqyqb6zpz0ufrl0.png" alt="ift logo" class="h-8 sm:h-10 w-auto grayscale opacity-80" />
                  <p class="text-xs sm:text-sm mt-1">ift</p>
                </div>
                <div class="flex flex-col items-center text-center">
                  <img src="https://res.cloudinary.com/dlfuvp7oc/image/upload/v1747409127/vqsh4dt724sbgnma0994.jpg" alt="FeatherDev logo" class="h-8 sm:h-10 w-auto grayscale opacity-80" />
                  <p class="text-xs sm:text-sm mt-1">FeatherDev</p>
                </div>
                <div class="flex flex-col items-center text-center">
                  <img src="https://res.cloudinary.com/dlfuvp7oc/image/upload/v1747414620/aawlpgqyqb6zpz0ufrl0.png" alt="Interlock logo" class="h-8 sm:h-10 w-auto grayscale opacity-80" />
                  <p class="text-xs sm:text-sm mt-1">Interlock</p>
                </div>
                <div class="flex flex-col items-center text-center">
                  <img src="https://res.cloudinary.com/dlfuvp7oc/image/upload/v1747409127/vqsh4dt724sbgnma0994.jpg" alt="Nietzsche logo" class="h-8 sm:h-10 w-auto grayscale opacity-80" />
                  <p class="text-xs sm:text-sm mt-1">Nietzsche</p>
                </div>
                <div class="flex flex-col items-center text-center">
                  <img src="https://res.cloudinary.com/dlfuvp7oc/image/upload/v1747414620/aawlpgqyqb6zpz0ufrl0.png" alt="Luminc logo" class="h-8 sm:h-10 w-auto grayscale opacity-80" />
                  <p class="text-xs sm:text-sm mt-1">Luminc</p>
                </div>
              </div>
            </marquee>
          `,
          }}
        />
      </div>
    </section>
  );
}

function TestimonialSlider() {
  const testimonials = [
    {
      id: 1,
      quote:
        "If you're looking for a rewarding career and a chance to make an impact, you've come to the right place. We will transform your business through our techniques!",
      author: "Alexander Cameron",
      position: "Lead Developer",
      image:
        "https://res.cloudinary.com/dlfuvp7oc/image/upload/v1747414620/aawlpgqyqb6zpz0ufrl0.png",
      stars: 5,
    },
    {
      id: 2,
      quote:
        "Working with this team has completely transformed our digital strategy. The results speak for themselves - our conversion rate has doubled!",
      author: "Sarah Johnson",
      position: "Marketing Director",
      image:
        "https://res.cloudinary.com/dlfuvp7oc/image/upload/v1747414620/aawlpgqyqb6zpz0ufrl0.png",
      stars: 5,
    },
    {
      id: 3,
      quote:
        "The level of technical expertise and customer service is unmatched. They understood our needs perfectly and delivered beyond our expectations.",
      author: "Michael Chen",
      position: "CTO",
      image:
        "https://res.cloudinary.com/dlfuvp7oc/image/upload/v1747414620/aawlpgqyqb6zpz0ufrl0.png",
      stars: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInteracted, setUserInteracted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!userInteracted) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [userInteracted, testimonials.length]);

  const handleUserInteraction = (index: number) => {
    setCurrentIndex(index);
    setUserInteracted(true);
    setTimeout(() => setUserInteracted(false), 10000);
  };

  const goToPrevious = () => {
    const newIndex =
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    handleUserInteraction(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % testimonials.length;
    handleUserInteraction(newIndex);
  };

  return (
    <section className="py-16 bg-gray-900 text-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 px-2">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 leading-snug">
            Trusted by more than 200+
            <br />
            client around the world
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto overflow-hidden">
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-900 shadow-md z-10 hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-900 shadow-md z-10 hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>

          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((t) => (
              <div key={t.id} className="w-full flex-shrink-0 px-2">
                <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden text-gray-800">
                  <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                    <Image
                      src={t.image}
                      alt={`${t.author} testimonial`}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="w-full md:w-1/2 p-6 md:p-8">
                    <div className="flex text-blue-600 mb-4 justify-center md:justify-start">
                      {[...Array(t.stars)].map((_, i) => (
                        <Star key={i} size={20} fill="currentColor" />
                      ))}
                    </div>

                    <blockquote className="text-base sm:text-lg mb-6 text-center md:text-left leading-relaxed">
                      &quot;{t.quote}&quot;
                    </blockquote>

                    <div className="text-center md:text-left">
                      <h4 className="font-bold text-lg">{t.author}</h4>
                      <p className="text-sm text-gray-600">{t.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleUserInteraction(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-blue-600" : "bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TechSolutionsSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left side - Image with badge */}
          <div className="w-full md:w-1/2 relative">
            <Image
              width={500}
              height={400}
              src="https://res.cloudinary.com/dlfuvp7oc/image/upload/v1747413788/xkwvoshqy0vkokeyvyqh.png"
              alt="Tech team collaborating"
              className="w-full rounded-lg"
            />
            <div className="absolute bottom-6 left-6 bg-white p-4 rounded-lg shadow-md flex flex-col items-center max-w-[150px]">
              <div className="text-blue-600 mb-2">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="12" cy="12" r="8" />
                  <path d="M12 8v4l2 2" />
                </svg>
              </div>
              <p className="text-sm font-bold text-center leading-snug">
                100% Customer
                <br />
                Satisfaction
              </p>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="w-full md:w-1/2 max-w-lg">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Exclusive technology to provide IT solutions
            </h2>

            <p className="text-gray-600 mb-8 text-sm sm:text-base">
              We are architect of innovation, trailblazers of technological
              advancement, and partners in your success. As a dynamic and
              forward-thinking organization
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-2">
                <Check
                  className="text-blue-600 mt-0.5 flex-shrink-0"
                  size={20}
                />
                <span className="text-gray-700 text-sm sm:text-base">
                  Easily Build Custom Reports And Dashboards
                </span>
              </div>

              <div className="flex items-start gap-2">
                <Check
                  className="text-blue-600 mt-0.5 flex-shrink-0"
                  size={20}
                />
                <span className="text-gray-700 text-sm sm:text-base">
                  Legacy Software Modernization
                </span>
              </div>

              <div className="flex items-start gap-2">
                <Check
                  className="text-blue-600 mt-0.5 flex-shrink-0"
                  size={20}
                />
                <span className="text-gray-700 text-sm sm:text-base">
                  Software For The Open Enterprise
                </span>
              </div>
            </div>

            <button className="bg-blue-600 text-white px-6 py-3 flex items-center gap-2 hover:bg-blue-700 transition-colors text-sm sm:text-base">
              More About
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkingProcessSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Our working process on how
          </h2>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            to grow your business
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Process Step 1 */}
          <div className="text-center relative">
            <div className="mb-6 relative mx-auto w-20 h-20">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-xl transform rotate-12">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -top-2 -left-2 text-3xl sm:text-4xl font-bold text-blue-600 opacity-70 select-none">
                01
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Initiation & Planning
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xs mx-auto">
              We are architects of innovation, trailblazers
              <br />
              of technological advancement
            </p>
          </div>

          {/* Dotted lines */}
          <div className="hidden md:block absolute top-20 left-1/3 right-2/3 h-0.5">
            <div className="border-t-2 border-dotted border-gray-300 h-full"></div>
          </div>
          <div className="hidden md:block absolute top-20 left-2/3 right-1/3 h-0.5">
            <div className="border-t-2 border-dotted border-gray-300 h-full"></div>
          </div>

          {/* Process Step 2 */}
          <div className="text-center relative">
            <div className="mb-6 relative mx-auto w-20 h-20">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-xl transform rotate-12">
                <Code className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -top-2 -left-2 text-3xl sm:text-4xl font-bold text-blue-600 opacity-70 select-none">
                02
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Execution & Development
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xs mx-auto">
              We are architects of innovation, trailblazers
              <br />
              of technological advancement
            </p>
          </div>

          {/* Process Step 3 */}
          <div className="text-center relative">
            <div className="mb-6 relative mx-auto w-20 h-20">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-xl transform rotate-12">
                <List className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -top-2 -left-2 text-3xl sm:text-4xl font-bold text-blue-600 opacity-70 select-none">
                03
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Testing & Maintenance
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xs mx-auto">
              We are architects of innovation, trailblazers
              <br />
              of technological advancement
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

type StatCardProps = {
  end: number;
  label: string;
};

function StatCard({ end, label }: StatCardProps) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div
      ref={ref}
      className="flex flex-col items-center transition transform hover:scale-105 hover:bg-blue-500 rounded-lg p-4"
    >
      <span className="text-5xl font-extrabold mb-2">
        {inView && !hasAnimated ? (
          <CountUp
            end={end}
            duration={2}
            suffix="+"
            onEnd={() => setHasAnimated(true)}
          />
        ) : (
          `${end}+`
        )}
      </span>
      <p className="text-sm tracking-wide uppercase">{label}</p>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="bg-blue-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-around items-center gap-10 text-center">
          <StatCard end={26} label="Years of Experience" />
          <div className="hidden md:block h-16 border-l border-white opacity-40" />
          <StatCard end={730} label="Successful Projects" />
          <div className="hidden md:block h-16 border-l border-white opacity-40" />
          <StatCard end={198} label="Happy Clients" />
        </div>
      </div>
    </section>
  );
}

function ExpertiseSection() {
  return (
    <section className="py-16 bg-gray-200 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 leading-snug">
              Proven Expertise in
              <br />
              Complex IT Solutions
            </h2>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              We are architects of innovation, trailblazers of technological
              advancement, and partners in your success dynamics.
            </p>

            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 font-semibold">
                  Quick Research and Solutions
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                <div>
                  <strong className="text-blue-600">
                    Dedicated Support 24/7
                  </strong>
                  <p className="text-gray-600 text-sm mt-1">
                    As one of Salesforce premier partners, we are committed to
                    providing unparalleled support. If you are suffering from
                    any technical difficulties in need assistance with
                    Salesforce solutions, you can count on us to be customer
                    support, enabling you to transform challenges into
                    opportunities.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-auto rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://res.cloudinary.com/dlfuvp7oc/image/upload/v1747409127/vqsh4dt724sbgnma0994.jpg"
              alt="IT Support Team"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function BlogSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
          Our recent blog & articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              src: "https://res.cloudinary.com/dlfuvp7oc/image/upload/v1747409776/iwmkxudz46jtle4inf7w.jpg",
              alt: "Technology support",
              title: "Technology support allows everyone to serve",
              meta: "Technology • 15 June 2023",
              hasShadow: false,
            },
            {
              src: "https://res.cloudinary.com/dlfuvp7oc/image/upload/v1747409776/dm7kxbcpnltcvxw4dz2z.jpg",
              alt: "Knowledge & design thinking",
              title: "The art of knowledge & the act of design thinking",
              meta: "Creation • 12 August 2023",
              hasShadow: true,
            },
            {
              src: "https://res.cloudinary.com/dlfuvp7oc/image/upload/v1747409776/fiyft4rkvonv1v5qdmbm.jpg",
              alt: "Magazine case study",
              title: "Cara dengan multi, a-mac magazine case study",
              meta: "Design • 8 March 2023",
              hasShadow: false,
            },
          ].map(({ src, alt, title, meta, hasShadow }, idx) => (
            <div
              key={idx}
              className={`bg-white overflow-hidden rounded-md ${
                hasShadow ? "shadow-xl" : "border"
              }`}
            >
              <div className="relative w-full h-48 sm:h-56">
                <Image
                  src={src}
                  alt={alt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-md"
                  priority={idx === 0} // prioritize first image for better UX
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-3">{title}</h3>
                <p className="text-gray-500 text-sm">{meta}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors">
            View All News
            <MoveUpRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

function BusinessSuccessSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Container with fixed height */}
          <div className="relative w-full h-80 md:h-96 lg:h-[500px]">
            <Image
              src="https://res.cloudinary.com/dlfuvp7oc/image/upload/v1747410007/eaydq0dxeoitvmysagxd.jpg"
              alt="Business team"
              fill
              className="object-cover rounded shadow-lg"
              priority
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 leading-snug">
              We are increasing business
              <br />
              success with technology
            </h2>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              We are architects of innovation, trailblazers of technological
              advancement, and partners in your success. As a dynamic and
              forward-thinking organization.
            </p>

            <div className="space-y-4">
              {[
                { label: "Business Insight", value: 87 },
                { label: "Career Development", value: 73 },
                { label: "Business Innovation", value: 93 },
              ].map(({ label, value }) => (
                <div key={label}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{label}</span>
                    <span className="text-sm text-gray-500">{value}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ITServicesSection() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              We make awesome IT
              <br className="hidden sm:block" />
              services for your business
            </h2>
            <p className="text-gray-300 mb-8 text-sm sm:text-base">
              We are architects of innovation, trailblazers of technological
              advancement, and partners in your success dynamics.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-600 rounded-sm flex items-center justify-center mr-3">
                  <span className="text-white text-sm">★</span>
                </div>
                <div>
                  <div className="font-semibold">Highly Expert</div>
                  <div className="text-sm text-gray-400">20+ years</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-600 rounded-sm flex items-center justify-center mr-3">
                  <span className="text-white text-sm">24/7</span>
                </div>
                <div>
                  <div className="font-semibold">Instant Support</div>
                  <div className="text-sm text-gray-400">All time</div>
                </div>
              </div>
            </div>

            <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
              More About →
            </button>
          </div>
          <div className="relative">
            <Image
              src="https://res.cloudinary.com/dlfuvp7oc/image/upload/v1747410383/t1bjsqdezigv9pteaqfo.png"
              alt="IT Services Team"
              width={500}
              height={400}
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 w-48 text-black text-sm">
              <div className="font-semibold">Top ranking IT company</div>
              <div className="text-gray-600 text-xs">world-class agency</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Let us work together
        </h2>
        <p className="mb-8 text-sm sm:text-base leading-relaxed">
          We are architects of innovation, trailblazers of technological
          advancement, and partners in your success dynamics.
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded hover:bg-gray-100 transition">
          Start a Project →
        </button>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="py-8 bg-gray-100">
      <div className="px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Phone */}
          <div className="bg-white p-6 flex items-start sm:items-center rounded-lg shadow-sm">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-4">
              <Phone className="text-white" />
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-500">Call anytime</p>
              <p className="font-medium">518-564-3200</p>
            </div>
          </div>

          {/* Email */}
          <div className="bg-white p-6 flex items-start sm:items-center rounded-lg shadow-sm">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-4">
              <Mail className="text-white" />
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-500">Email address</p>
              <p className="font-medium">tekup@example.com</p>
            </div>
          </div>

          {/* Office Hours */}
          <div className="bg-white p-6 flex items-start sm:items-center rounded-lg shadow-sm">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-4">
              <Clock className="text-white" />
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-500">Office Hours</p>
              <p className="font-medium">8:00 AM – 10:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-600">
              <li>About Us</li>
              <li>Our Team</li>
              <li>Pricing</li>
              <li>Blogs</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-600">
              <li>UI/UX Design</li>
              <li>App Development</li>
              <li>Digital Marketing</li>
              <li>Web Development</li>
              <li>Cyber Security</li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-semibold mb-4">Information</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Working Process</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>FAQs</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Subscribe Our Newsletter</h3>
            <p className="text-gray-600 text-sm mb-4">
              Get ready to work together for the best online solution for your
              business.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center justify-center">
                <Send size={16} />
              </button>
            </div>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 hover:bg-[#1877F2] hover:text-white transition-colors duration-300"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 hover:bg-[#1DA1F2] hover:text-white transition-colors duration-300"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 hover:bg-[#0077B5] hover:text-white transition-colors duration-300"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Text */}
        <div className="pt-8 mt-8 text-center text-gray-600 text-sm">
          © 2024 Deeptech. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="">
      <TekupHeader />
      <TekupHeroSection />
      <WorkingProcessSection />
      <ServicesCarousel />
      <TechSolutionsSection />
      <LogoMarquee />
      <TestimonialSlider />
      <HeroSection />
      <ExpertiseSection />
      <BlogSection />
      <BusinessSuccessSection />
      <ITServicesSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
}
