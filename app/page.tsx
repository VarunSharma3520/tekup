"use client";
import React, { useState } from "react";
import Image from "next/image";
import ServiceCard from "@/components/ui/ServiceCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
  Award,
} from "lucide-react";

function TekupHeader() {
  return (
    <div className="bg-white">
      {/* Top Contact Bar */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 text-sm text-gray-600">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <MapPin size={16} fill="blue" className="text-blue-600" />
                <span>2774 Oak Drive, Plattsburgh, New York</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} fill="blue" className="text-blue-600" />
                <span>518-564-3200</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={16} fill="blue" className="text-blue-600" />
              <span>Office Hours: 6:00 AM - 10:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
              </div>
              <span className="text-2xl font-bold text-black">Tekup</span>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 cursor-pointer">
              <span>Demo</span>
              <ChevronDown size={16} />
            </div>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              About Us
            </a>
            <div className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 cursor-pointer">
              <span>Pages</span>
              <ChevronDown size={16} />
            </div>
            <div className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 cursor-pointer">
              <span>Blog</span>
              <ChevronDown size={16} />
            </div>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Contact Us
            </a>
          </nav>

          {/* Get In Touch Button */}
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2">
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

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

function TekupHeroSection() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-48">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-blue-600 font-medium text-lg">
                We provide professional IT services
              </p>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Best IT services
                <br />
                for your success
              </h1>
              <p className="text-gray-600 text-md leading-relaxed">
                We are architects of innovation, trailblazers technological
                advancement, and partners in your success. As a dynamic and
                forward
              </p>
            </div>

            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2 font-medium">
                <span>Start a Project</span>
                <MoveUpRight size={20} />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 hover:bg-blue-50 transition-colors duration-200 flex items-center space-x-2 font-medium">
                <span>Our Works</span>
                <MoveUpRight size={20} />
              </button>
            </div>
          </div>

          {/* Right Content - Image with Cards */}
          <div className="relative">
            {/* Main Background Shape */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl transform -rotate-3"></div>

            {/* Professional Person Image */}
            <div className="relative z-10">
              <Image
                width={600}
                height={700}
                src="https://res.cloudinary.com/dlfuvp7oc/image/upload/v1747419021/soi2v02m2ryl6o6d4var.png"
                alt="Professional person"
                className="w-full h-auto rounded-2xl"
              />

              {/* Customer Satisfaction Card */}
              <div className="absolute top-8 right-0 bg-white rounded-lg p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">100% Customer</p>
                    <p className="text-gray-800 font-semibold">Satisfaction</p>
                  </div>
                </div>
              </div>

              {/* Rating Card */}
              <div className="absolute bottom-8 left-8 bg-white rounded-lg p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                    <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">14k</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-800 font-semibold">
                      Avg rating 4.8 makes us
                    </p>
                    <p className="text-gray-500 text-sm">world best agency.</p>
                  </div>
                </div>
              </div>
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
  return (
    <section className="py-24">
      <div className="flex py-16 justify-center bg-gray-100">
        <div className="px-4 w-full max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 leading-snug">
              We deal with the aspects of
              <br />
              professional IT services
            </h2>
          </div>
          <Carousel opts={{ align: "start" }} className="w-full">
            <CarouselContent>
              {services.map((service, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <ServiceCard
                      icon={service.icon}
                      title={service.title}
                      text={service.text}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

function LogoMarquee() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="mx-48 px-4">
        <div className="text-center mb-8">
          <p className="text-gray-600">
            Empowered professionals to connect with top-tier opportunities
          </p>
        </div>

        {/* Using dangerouslySetInnerHTML to create a marquee tag */}
        <div
          dangerouslySetInnerHTML={{
            __html: `
            <marquee behavior="scroll" direction="left" scrollamount="5">
              <div class="flex items-center space-x-20">
              <div><img src="https://res.cloudinary.com/dlfuvp7oc/image/upload/v1747409127/vqsh4dt724sbgnma0994.jpg" alt="Nietzsche logo" class="h-10 w-auto grayscale opacity-80"><p>Nietzsche</p></div>
              <div><img src="https://res.cloudinary.com/dlfuvp7oc/image/upload/v1747414620/aawlpgqyqb6zpz0ufrl0.png" alt="ift logo" class="h-10 w-auto grayscale opacity-80"><p>ift</p></div>
              <div><img src="https://res.cloudinary.com/dlfuvp7oc/image/upload/v1747409127/vqsh4dt724sbgnma0994.jpg" alt="FeatherDev logo" class="h-10 w-auto grayscale opacity-80"><p>FeatherDev</p></div>
              <div><img src="https://res.cloudinary.com/dlfuvp7oc/image/upload/v1747414620/aawlpgqyqb6zpz0ufrl0.png" alt="Interlock logo" class="h-10 w-auto grayscale opacity-80"><p>Interlock</p></div>
              <div><img src="https://res.cloudinary.com/dlfuvp7oc/image/upload/v1747409127/vqsh4dt724sbgnma0994.jpg" alt="Nietzsche logo" class="h-10 w-auto grayscale opacity-80"><p>Nietzsche</p></div>
              <div><img src="https://res.cloudinary.com/dlfuvp7oc/image/upload/v1747414620/aawlpgqyqb6zpz0ufrl0.png" alt="Luminc logo" class="h-10 w-auto grayscale opacity-80"><p>Luminc</p></div>
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

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="mx-48 px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">
            Trusted by more than 200+
            <br />
            client around the world
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-900 shadow-md z-10 hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-900 shadow-md z-10 hover:bg-gray-100 transition-colors"
          >
            <ChevronRight size={20} />
          </button>

          {/* Testimonial card */}
          <div className="flex bg-white items-center overflow-hidden rounded-lg">
            {/* Left side - Image */}
            <div className="w-1/2 h-96">
              <div className="relative w-full h-full">
                <Image
                  src={currentTestimonial.image}
                  alt={`${currentTestimonial.author} testimonial`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="w-1/2 p-8 text-gray-800">
              <div className="flex text-blue-600 mb-4">
                {[...Array(currentTestimonial.stars)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>

              <blockquote className="text-lg mb-6">
                &quot;{currentTestimonial.quote}&quot;
              </blockquote>

              <div>
                <h4 className="font-bold">{currentTestimonial.author}</h4>
                <p className="text-sm text-gray-600">
                  {currentTestimonial.position}
                </p>
              </div>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full ${
                  index === currentIndex ? "bg-blue-600" : "bg-gray-400"
                }`}
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
    <section className="py-16">
      <div className="mx-48 px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 ">
          {/* Left side - Image with badge */}
          <div className="w-full md:w-1/2 relative">
            <Image
              width={500}
              height={400}
              src="https://res.cloudinary.com/dlfuvp7oc/image/upload/v1747413788/xkwvoshqy0vkokeyvyqh.png"
              alt="Tech team collaborating"
              className="w-full"
            />
            <div className="absolute bottom-6 left-6 bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
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
              <p className="text-sm font-bold text-center">
                100% Customer
                <br />
                Satisfaction
              </p>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="w-full md:w-1/2 max-w-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Exclusive technology to provide IT solutions
            </h2>

            <p className="text-gray-600 mb-8">
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
                <span className="text-gray-700">
                  Easily Build Custom Reports And Dashboards
                </span>
              </div>

              <div className="flex items-start gap-2">
                <Check
                  className="text-blue-600 mt-0.5 flex-shrink-0"
                  size={20}
                />
                <span className="text-gray-700">
                  Legacy Software Modernization
                </span>
              </div>

              <div className="flex items-start gap-2">
                <Check
                  className="text-blue-600 mt-0.5 flex-shrink-0"
                  size={20}
                />
                <span className="text-gray-700">
                  Software For The Open Enterprise
                </span>
              </div>
            </div>

            <button className="bg-blue-600 text-white px-6 py-3 flex items-center gap-2 hover:bg-blue-700 transition-colors">
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
    <section className="py-20">
      <div className="mx-48 px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our working process on how
          </h2>
          <h2 className="text-4xl font-bold text-gray-900">
            to grow your business
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Process Step 1 */}
            <div className="text-center relative">
              <div className="mb-6 relative">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-xl transform rotate-12">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -left-2 text-4xl font-bold text-blue-600 opacity-70">
                  01
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Initiation & Planning
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We are architects of innovation, trailblazers
                <br />
                of technological advancement
              </p>
            </div>

            {/* Dotted line between steps */}
            <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-0.5">
              <div className="border-t-2 border-dotted border-gray-300 h-full"></div>
            </div>

            <div className="hidden md:block absolute top-10 left-2/3 right-0 h-0.5">
              <div className="border-t-2 border-dotted border-gray-300 h-full"></div>
            </div>

            {/* Process Step 2 */}
            <div className="text-center relative">
              <div className="mb-6 relative">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-xl transform rotate-12">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -left-2 text-4xl font-bold text-blue-600 opacity-70">
                  02
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Execution & Development
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We are architects of innovation, trailblazers
                <br />
                of technological advancement
              </p>
            </div>

            {/* Process Step 3 */}
            <div className="text-center relative">
              <div className="mb-6 relative">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-xl transform rotate-12">
                  <List className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -left-2 text-4xl font-bold text-blue-600 opacity-70">
                  03
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Testing & Maintenance
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We are architects of innovation, trailblazers
                <br />
                of technological advancement
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroSection() {
  return (
    <div className="bg-blue-600 text-white py-12">
      <div className="mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">26+</div>
            <div className="text-sm">Years of</div>
            <div className="text-sm">Experience</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">730+</div>
            <div className="text-sm">Successful</div>
            <div className="text-sm">Projects</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">198+</div>
            <div className="text-sm">Happy</div>
            <div className="text-sm">Clients</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExpertiseSection() {
  return (
    <section className="py-16 bg-gray-200">
      <div className="mx-42 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="">
            <h2 className="text-3xl font-bold mb-4">
              Proven Expertise in
              <br />
              Complex IT Solutions
            </h2>
            <p className="text-gray-600 mb-6">
              We are architects of innovation, trailblazers of technological
              advancement, and partners in your success dynamics.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">
                  <strong>Quick Research and Solutions</strong>
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
          <div className="relative">
            <Image
              src="https://res.cloudinary.com/dlfuvp7oc/image/upload/v1747409127/vqsh4dt724sbgnma0994.jpg"
              alt="IT Support Team"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function BlogSection() {
  return (
    <section className="py-16">
      <div className="mx-42 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our recent blog & articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dlfuvp7oc/image/upload/v1747409776/iwmkxudz46jtle4inf7w.jpg"
              alt="Technology support"
              width={500}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-3">
                Technology support allows everyone to serve
              </h3>
              <p className="text-gray-500 text-sm">Technology • 15 June 2023</p>
            </div>
          </div>
          <div className="bg-white shadow-xl overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dlfuvp7oc/image/upload/v1747409776/dm7kxbcpnltcvxw4dz2z.jpg"
              alt="Knowledge & design thinking"
              width={500}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-3">
                The art of knowledge & the act of design thinking
              </h3>
              <p className="text-gray-500 text-sm">Creation • 12 August 2023</p>
            </div>
          </div>
          <div className="bg-white border overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dlfuvp7oc/image/upload/v1747409776/fiyft4rkvonv1v5qdmbm.jpg"
              alt="Magazine case study"
              width={500}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-3">
                Cara dengan multi, a-mac magazine case study
              </h3>
              <p className="text-gray-500 text-sm">Design • 8 March 2023</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 flex justify-center">
          <button className="flex bg-blue-600 text-white px-6 py-3 hover:bg-blue-700">
            View All News
            <MoveUpRight />
          </button>
        </div>
      </div>
    </section>
  );
}

function BusinessSuccessSection() {
  return (
    <section className="py-16">
      <div className="mx-48 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="https://res.cloudinary.com/dlfuvp7oc/image/upload/v1747410007/eaydq0dxeoitvmysagxd.jpg"
              alt="Business team"
              width={500}
              height={400}
              className="shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">
              We are increasing business
              <br />
              success with technology
            </h2>
            <p className="text-gray-600 mb-6">
              We are architects of innovation, trailblazers of technological
              advancement, and partners in your success. As a dynamic and
              forward-thinking organization.
            </p>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Business Insight</span>
                  <span className="text-sm text-gray-500">87%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: "87%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">
                    Career Development
                  </span>
                  <span className="text-sm text-gray-500">73%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: "73%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">
                    Business Innovation
                  </span>
                  <span className="text-sm text-gray-500">93%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: "93%" }}
                  ></div>
                </div>
              </div>
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
      <div className="mx-48 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              We make awesome IT
              <br />
              services for your business
            </h2>
            <p className="text-gray-300 mb-8">
              We are architects of innovation, trailblazers of technological
              advancement, and partners in your success dynamics.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-sm p-5 flex items-center justify-center mr-3">
                  <span className="text-white text-xs">★</span>
                </div>
                <div>
                  <div className="font-semibold">Highly Expert</div>
                  <div className="text-sm text-gray-400">20+ years</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-sm p-5 flex items-center justify-center mr-3">
                  <span className="text-white text-xs">24/7</span>
                </div>
                <div>
                  <div className="font-semibold">Instant Support</div>
                  <div className="text-sm text-gray-400">All time</div>
                </div>
              </div>
            </div>

            <button className="bg-blue-600 text-white px-6 py-3 hover:bg-blue-700">
              More About →
            </button>
          </div>
          <div className="relative">
            <Image
              src="https://res.cloudinary.com/dlfuvp7oc/image/upload/v1747410383/t1bjsqdezigv9pteaqfo.png"
              alt="IT Services Team"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 w-48 text-black">
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
      <div className="mx-48 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Let us work together</h2>
        <p className="mb-8">
          We are architects of innovation, trailblazers of technological
          <br />
          advancement, and partners in your success dynamics.
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 hover:bg-gray-100">
          Start a Project →
        </button>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="py-8 bg-gray-100">
      <div className="mx-48 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 flex items-center">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-4">
              <Phone className="text-white" />
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-500">Call anytime</p>
              <p className="font-medium">518-564-3200</p>
            </div>
          </div>

          <div className="bg-white p-6 flex items-center">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-4">
              <Mail className="text-white" />
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-500">Email address</p>
              <p className="font-medium">tekup@example.com</p>
            </div>
          </div>

          <div className="bg-white p-6 flex items-center">
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
      <div className="mx-48 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
          <div>
            <h3 className="font-semibold mb-4">Information</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Working Process</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Subscribe Our Newsletter</h3>
            <p className="text-gray-600 text-sm mb-4">
              Get ready to work together for the best online solution for your
              business.
            </p>
            <div className="flex mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:border-blue-500"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700">
                <Send size={16} />
              </button>
            </div>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 hover:bg-[#1877F2] hover:text-gray-100 transition-colors duration-300"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 hover:bg-[#0077B5] hover:text-gray-100 transition-colors duration-300"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 hover:bg-[#0077B5] hover:text-gray-100 transition-colors duration-300"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

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
