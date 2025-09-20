import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Calendar,
  Clock,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Sun,
  Moon,
  X,
  Check,
  Star,
  Users,
  Code,
  Award,
  Zap,
  Terminal,
  GitBranch,
  ArrowDown,
  Cpu,
  Database,
  Shield,
  Hexagon,
} from "lucide-react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../backend/firebase";
import HfLogo from "../images/hf-logo.png";
import LocationPanel from "./LocationPannel";

const HeroPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [timeLeft, setTimeLeft] = useState({});
  const [glitchText, setGlitchText] = useState("HACKTOBERFEST");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    college: "",
    interestArea: "",
    disclaimer: false,
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const glitchChars = "!<>-_\\/[]{}—=+*^?#________";
    const originalText = "HACKTOBERFEST";

    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.85) {
        let glitchedText = "";
        for (let i = 0; i < originalText.length; i++) {
          if (Math.random() > 0.8) {
            glitchedText +=
              glitchChars[Math.floor(Math.random() * glitchChars.length)];
          } else {
            glitchedText += originalText[i];
          }
        }
        setGlitchText(glitchedText);
        setTimeout(() => setGlitchText(originalText), 100);
      }
    }, 2000);

    return () => clearInterval(glitchInterval);
  }, []);

  useEffect(() => {
    const targetDate = new Date("2025-10-25T10:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const testimonials = [
    {
      name: "Arjun Sharma",
      role: "Core Team Lead GDG Galgotias",
      quote:
        "Leading GDG Galgotias has been an incredible journey. This Hacktoberfest will be our biggest event yet! Join us for an unforgettable experience in open source contribution.",
    },
    {
      name: "Priya Singh",
      role: "Past Participant",
      quote:
        "Last year's GDG Hacktoberfest completely transformed how I approach open source. The mentorship and community support were exceptional. Can't wait for 2025!",
    },
    {
      name: "Dr. Rahul Kumar",
      role: "Faculty Mentor",
      quote:
        "Watching students grow through these GDG events is what drives our passion for teaching. The collaboration and innovation that happens here is remarkable.",
    },
    {
      name: "Vikram Gupta",
      role: "Project Maintainer",
      quote:
        "The quality of contributions from GDG Galgotias participants has been outstanding. The projects we'll showcase this year will showcase real innovation!",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.disclaimer) {
      alert("Please accept the disclaimer to continue.");
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "registrations"), {
        ...formData,
        registeredAt: new Date(),
      });

      console.log("Registration saved with ID: ", docRef.id);
      setShowRegistrationModal(false);
      setShowSuccessModal(true);
      setTimeout(() => setShowSuccessModal(false), 3000);

      setFormData({
        name: "",
        email: "",
        college: "",
        interestArea: "",
        disclaimer: false,
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Registration failed. Please try again.");
    }
  };

  const LoadingScreen = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900 opacity-20"></div>

      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid-background"></div>
      </div>

      <div className="text-center relative z-10">
        <div className="relative mb-8">
          <div className="w-40 h-40 mx-auto relative">
            <div className="absolute inset-0 border-4 border-purple-500 rounded-full animate-spin border-t-transparent">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-4 h-4 bg-purple-500 rounded-full"></div>
            </div>
            <div
              className="absolute inset-4 border-4 border-pink-500 rounded-full animate-spin border-b-transparent"
              style={{
                animationDirection: "reverse",
                animationDuration: "1.5s",
              }}
            >
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 w-3 h-3 bg-pink-500 rounded-full"></div>
            </div>

            {/* Logo */}
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2">
              <img
                src={HfLogo}
                alt="GU Hacktoberfest Logo"
                className="w-16 h-auto"
              />
            </div>
          </div>
        </div>

        <div className="font-mono text-2xl text-purple-400 mb-6 tracking-widest glitch-text">
          INITIALIZING_GDG_SYSTEM...
        </div>

        <div className="flex justify-center space-x-3">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-2 h-8 bg-gradient-to-t from-purple-600 to-pink-500 rounded-full opacity-40"
              style={{
                animation: `pulse 1.5s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="mt-6 text-sm text-purple-300 font-mono">
          LOADING QUANTUM CONTRIBUTORS...
        </div>
      </div>
    </div>
  );

  if (isLoading) return <LoadingScreen />;

  return (
    <div
      className={`min-h-screen transition-all duration-500 overflow-x-hidden ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      } cyber-grid`}
    >
      {/* Background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="cyber-grid-pattern"></div>
        </div>

        {/* Shapes */}
        <div className="floating-shapes">
          <div className="floating-hex hex-1"></div>
          <div className="floating-hex hex-2"></div>
          <div className="floating-hex hex-3"></div>
          <div className="floating-square square-1"></div>
          <div className="floating-square square-2"></div>
        </div>
      </div>

      {/* Theme Toggle */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="fixed top-4 right-4 z-50 p-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-[0_0_15px_rgba(236,72,153,0.7)] hover:shadow-[0_0_25px_rgba(236,72,153,1)] transform hover:scale-110 border-2 border-purple-400/50 backdrop-blur-md"
        style={{ zIndex: 9999 }}
      >
        {isDarkMode ? (
          <Sun className="w-6 h-6 text-white" />
        ) : (
          <Moon className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Navigation Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 ${
          isDarkMode ? "bg-gray-900/95" : "bg-white/95"
        } backdrop-blur-md border-b ${
          isDarkMode ? "border-purple-500/30" : "border-purple-200"
        } cyber-border`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-black text-2xl tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              GDG GALGOTIAS
            </span>
            <span
              className={`block text-sm font-mono tracking-wider ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              HACKTOBERFEST_2025.exe
            </span>
          </div>

          <nav className="hidden md:flex space-x-8 text-sm font-mono">
            <a
              href="#home"
              className={`${
                isDarkMode
                  ? "text-purple-400 hover:text-pink-400"
                  : "text-purple-600 hover:text-pink-600"
              } transition-colors cyber-link`}
            >
              HOME
            </a>
            <a
              href="#about"
              className={`${
                isDarkMode
                  ? "text-purple-400 hover:text-pink-400"
                  : "text-purple-600 hover:text-pink-600"
              } transition-colors cyber-link`}
            >
              ABOUT
            </a>
            <a
              href="#timeline"
              className={`${
                isDarkMode
                  ? "text-purple-400 hover:text-pink-400"
                  : "text-purple-600 hover:text-pink-600"
              } transition-colors cyber-link`}
            >
              TIMELINE
            </a>
            <a
              href="#register"
              className={`${
                isDarkMode
                  ? "text-purple-400 hover:text-pink-400"
                  : "text-purple-600 hover:text-pink-600"
              } transition-colors cyber-link`}
            >
              REGISTER
            </a>
          </nav>
          <div className="flex items-center space-x-4 text-sm font-mono">
            <button
              onClick={() => setShowRegistrationModal(true)}
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors cyber-button font-bold"
            >
              REGISTER
            </button>
          </div>
        </div>
      </header>

      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative pt-20 px-6"
      >
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-12 pt-6">
            <div
              className={`inline-flex items-center px-6 py-3 ${
                isDarkMode ? "bg-purple-900/50" : "bg-purple-100"
              } rounded-full border-2 ${
                isDarkMode ? "border-purple-500/50" : "border-purple-300"
              } text-sm font-mono mb-12 cyber-badge`}
            >
              <Cpu className="w-4 h-4 mr-2 text-purple-500" />
              GOOGLE DEVELOPER GROUPS • GALGOTIAS UNIVERSITY
            </div>
          </div>

          {/* Proframe Tites */}
          <div className="relative mb-16 flex flex-col items-center">
            <img
              src={HfLogo}
              alt="GU Hacktoberfest Logo"
              className="w-32 md:w-48 lg:w-64 h-auto mb-8"
            />
            <h1
              className={`text-[4rem] md:text-[8rem] lg:text-[12rem] font-black leading-none ${
                isDarkMode ? "text-purple-400" : "text-purple-900"
              } mb-4 pixel-font`}
            >
              GDG
            </h1>
            <div className="relative">
              <h2
                className={`text-[2.5rem] md:text-[4rem] lg:text-[6rem] font-black leading-none ${
                  isDarkMode ? "text-pink-400" : "text-pink-600"
                } pixel-font glitch-text`}
                data-text={glitchText}
              >
                {glitchText}
              </h2>
            </div>
            <h3
              className={`text-[3rem] md:text-[6rem] lg:text-[8rem] font-black leading-none ${
                isDarkMode ? "text-blue-400" : "text-blue-600"
              } mt-4 pixel-font`}
            >
              2025
            </h3>
            <div className="absolute inset-0 pointer-events-none">
              <div className="scan-line"></div>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="mb-12">
            <div
              className={`text-lg font-mono ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              } mb-6 tracking-wider`}
            >
              SYSTEM_LAUNCH_COUNTDOWN:
            </div>
            <div className="grid grid-cols-4 gap-4 max-w-lg mx-auto">
              {[
                { label: "DAYS", value: timeLeft.days },
                { label: "HRS", value: timeLeft.hours },
                { label: "MIN", value: timeLeft.minutes },
                { label: "SEC", value: timeLeft.seconds },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`relative p-6 rounded-lg ${
                    isDarkMode ? "bg-gray-800/80" : "bg-white/80"
                  } shadow-lg backdrop-blur-sm cyber-panel`}
                >
                  <div
                    className={`text-3xl font-bold font-mono ${
                      isDarkMode ? "text-pink-400" : "text-purple-600"
                    }`}
                  >
                    {String(item.value || "00").padStart(2, "0")}
                  </div>
                  <div
                    className={`text-xs font-mono ${
                      isDarkMode ? "text-gray-400" : "text-gray-500"
                    } tracking-wider`}
                  >
                    {item.label}
                  </div>
                  <div className="absolute inset-0 border border-purple-500/20 rounded-lg pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-2xl mx-auto mb-12">
            <p
              className={`text-lg ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              } leading-relaxed mb-8 font-mono`}
            >
              {"> INITIALIZING_OPEN_SOURCE_REVOLUTION.exe"}
              <br />
              {"> LOADING_COMMUNITY_PROTOCOLS..."}
              <br />
              {"> SYSTEM_READY_FOR_CONTRIBUTORS"}
            </p>
          </div>

          <div className="text-center">
            <button
              className={`group inline-flex items-center space-x-3 ${
                isDarkMode
                  ? "text-purple-400 hover:text-pink-400"
                  : "text-purple-900 hover:text-pink-600"
              } transition-colors font-mono`}
            >
              <span className="text-sm font-medium tracking-wider">
                [SCROLL_DOWN_TO_EXPLORE]
              </span>
              <ArrowDown className="w-4 h-4 group-hover:animate-bounce" />
            </button>
          </div>
        </div>
      </section>

      {/* Event Highlights Section */}
      <section
        id="about"
        className={`min-h-screen flex items-center justify-center px-6 ${
          isDarkMode ? "bg-gray-800/50" : "bg-white/50"
        } backdrop-blur-sm relative`}
      >
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div
              className={`inline-flex items-center px-6 py-3 ${
                isDarkMode ? "bg-purple-600/20" : "bg-purple-100"
              } rounded-full text-sm font-mono ${
                isDarkMode ? "text-purple-300" : "text-purple-700"
              } mb-8 cyber-badge`}
            >
              <Database className="w-4 h-4 mr-2" />
              SYSTEM_FEATURES.json
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div
              className={`p-8 ${
                isDarkMode ? "bg-gray-900/80" : "bg-gray-50/80"
              } rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm group hover:scale-105`}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h4
                className={`text-xl font-bold ${
                  isDarkMode ? "text-purple-400" : "text-purple-900"
                } mb-2 font-mono`}
              >
                Quantum Workshops
              </h4>
              <p
                className={`${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                } leading-relaxed font-mono text-sm`}
              >
                • Git mastery techniques <br />
                • GitHub collaboration best practices <br />• Open-source
                contribution made simple
              </p>
            </div>

            <div
              className={`p-8 ${
                isDarkMode ? "bg-gray-900/80" : "bg-gray-50/80"
              } rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm group hover:scale-105`}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4
                className={`text-xl font-bold ${
                  isDarkMode ? "text-pink-400" : "text-pink-900"
                } mb-2 font-mono`}
              >
                Networking Hub
              </h4>
              <p
                className={`${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                } leading-relaxed font-mono text-sm`}
              >
                • Connect with developers and peers <br />
                • Share experiences and success stories <br />• Explore
                mentorship and guidance opportunities
              </p>
            </div>

            <div
              className={`p-8 ${
                isDarkMode ? "bg-gray-900/80" : "bg-gray-50/80"
              } rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm group hover:scale-105`}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4
                className={`text-xl font-bold ${
                  isDarkMode ? "text-blue-400" : "text-blue-900"
                } mb-2 font-mono`}
              >
                Rewards & Recognition
              </h4>
              <p
                className={`${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                } leading-relaxed font-mono text-sm`}
              >
                • Exclusive GDG merchandise <br />
                • Digital certificates for all participants <br />• Internship
                and career opportunities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Timeline */}
      <section
        id="timeline"
        className={`py-20 px-6 ${
          isDarkMode ? "bg-gray-900" : "bg-white"
        } relative`}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div
              className={`inline-flex items-center px-6 py-3 ${
                isDarkMode ? "bg-purple-600/20" : "bg-purple-100"
              } rounded-full text-sm font-mono ${
                isDarkMode ? "text-purple-300" : "text-purple-700"
              } mb-8 cyber-badge`}
            >
              <Terminal className="w-4 h-4 mr-2" />
              EXECUTION_TIMELINE.log
            </div>
            <h3
              className={`text-4xl font-bold mb-4 ${
                isDarkMode ? "text-purple-400" : "text-purple-900"
              } font-mono`}
            >
              SYSTEM_SCHEDULE
            </h3>
            <p
              className={`text-lg ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              } font-mono`}
            >
              October 2025 - Galgotias University Campus
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                time: "October 15",
                title: "Project Submissions by Admins",
                desc: "Admins submit their repositories, set clear contribution guidelines, and begin mentor allocations.",
              },
              {
                time: "October 20",
                title: "Mentor Assignments & Repo Setup",
                desc: "Mentors are assigned, repositories are tested, and issues are labeled beginner-friendly with updated documentation.",
              },
              {
                time: "October 25–27",
                title: "Hackathon Days",
                desc: "The hackathon kicks off! Participants contribute to projects, raise PRs, and collaborate with mentors. Expect live leaderboards and real-time shoutouts.",
              },
              {
                time: "October 30",
                title: "Results & Closing Ceremony",
                desc: "Winners announced, top contributors recognized, swag distributed, followed by closing remarks and networking.",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-6 group">
                <div
                  className={`flex-shrink-0 w-24 text-right font-mono font-bold ${
                    isDarkMode ? "text-pink-400" : "text-pink-600"
                  } pt-2`}
                >
                  {item.time}
                </div>
                <div className="flex-shrink-0 relative">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mt-1 cyber-node group-hover:scale-125 transition-transform duration-300"></div>
                  {index < 3 && (
                    <div
                      className={`w-0.5 h-16 ${
                        isDarkMode ? "bg-purple-500/30" : "bg-purple-300"
                      } mx-auto mt-2`}
                    ></div>
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h4
                    className={`font-bold text-lg ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    } mb-2 font-mono group-hover:text-purple-400 transition-colors`}
                  >
                    {item.title}
                  </h4>
                  <p
                    className={`${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    } font-mono text-sm leading-relaxed`}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className={`py-20 px-6 ${
          isDarkMode ? "bg-gray-800/50" : "bg-gray-50/50"
        } backdrop-blur-sm`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <div
              className={`inline-flex items-center px-6 py-3 ${
                isDarkMode ? "bg-purple-600/20" : "bg-purple-100"
              } rounded-full text-sm font-mono ${
                isDarkMode ? "text-purple-300" : "text-purple-700"
              } mb-8 cyber-badge`}
            >
              <Shield className="w-4 h-4 mr-2" />
              USER_TESTIMONIALS.json
            </div>
            <h3
              className={`text-4xl font-bold mb-4 ${
                isDarkMode ? "text-purple-400" : "text-purple-900"
              } font-mono`}
            >
              COMMUNITY_FEEDBACK
            </h3>
          </div>

          <div
            className={`p-12 ${
              isDarkMode ? "bg-gray-900/80" : "bg-white/80"
            } rounded-2xl shadow-lg backdrop-blur-sm cyber-panel`}
          >
            <div className="mb-8">
              <div className="flex justify-center mb-4">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <blockquote
                className={`text-xl leading-relaxed ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                } mb-6 font-mono`}
              >
                <span className="text-purple-400">"</span>
                {testimonials[currentTestimonial].quote}
                <span className="text-purple-400">"</span>
              </blockquote>
              <div>
                <div
                  className={`font-bold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  } font-mono`}
                >
                  {testimonials[currentTestimonial].name}
                </div>
                <div
                  className={`text-sm ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  } font-mono`}
                >
                  {testimonials[currentTestimonial].role}
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentTestimonial
                      ? "bg-gradient-to-r from-purple-600 to-pink-600"
                      : isDarkMode
                      ? "bg-gray-600"
                      : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section
        className={`py-20 px-6 ${isDarkMode ? "bg-gray-900" : "bg-white"}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div
              className={`inline-flex items-center px-6 py-3 ${
                isDarkMode ? "bg-purple-600/20" : "bg-purple-100"
              } rounded-full text-sm font-mono ${
                isDarkMode ? "text-purple-300" : "text-purple-700"
              } mb-8 cyber-badge`}
            >
              <MapPin className="w-4 h-4 mr-2" />
              LOCATION_COORDINATES.gps
            </div>
            <h3
              className={`text-4xl font-bold mb-4 ${
                isDarkMode ? "text-purple-400" : "text-purple-900"
              } font-mono`}
            >
              EVENT_LOCATION
            </h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="mb-8">
                <h4
                  className={`text-2xl font-bold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  } mb-6 font-mono`}
                >
                  GALGOTIAS_UNIVERSITY.campus
                </h4>

                <div className="space-y-6">
                  <div
                    className={`p-6 ${
                      isDarkMode ? "bg-gray-800" : "bg-gray-100"
                    } rounded-lg cyber-panel`}
                  >
                    <div className="flex items-start space-x-3">
                      <MapPin
                        className={`w-5 h-5 ${
                          isDarkMode ? "text-pink-400" : "text-pink-600"
                        } mt-1`}
                      />
                      <div>
                        <p
                          className={`font-medium ${
                            isDarkMode ? "text-white" : "text-gray-900"
                          } font-mono mb-1`}
                        >
                          GPS_COORDINATES:
                        </p>
                        <p
                          className={`${
                            isDarkMode ? "text-gray-300" : "text-gray-600"
                          } font-mono text-sm`}
                        >
                          Plot No. 2, Yamuna Expressway
                          <br />
                          Sector 17A, Greater Noida
                          <br />
                          Uttar Pradesh 203201
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`p-6 ${
                      isDarkMode ? "bg-gray-800" : "bg-gray-100"
                    } rounded-lg cyber-panel`}
                  >
                    <div className="flex items-start space-x-3">
                      <Calendar
                        className={`w-5 h-5 ${
                          isDarkMode ? "text-purple-400" : "text-purple-600"
                        } mt-1`}
                      />
                      <div>
                        <p
                          className={`font-medium ${
                            isDarkMode ? "text-white" : "text-gray-900"
                          } font-mono mb-1`}
                        >
                          DATE_RANGE:
                        </p>
                        <p
                          className={`${
                            isDarkMode ? "text-gray-300" : "text-gray-600"
                          } font-mono text-sm`}
                        >
                          October 25-27, 2025
                          <br />
                          72-hour coding marathon
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`p-6 ${
                      isDarkMode ? "bg-gray-800" : "bg-gray-100"
                    } rounded-lg cyber-panel`}
                  >
                    <div className="flex items-start space-x-3">
                      <Clock
                        className={`w-5 h-5 ${
                          isDarkMode ? "text-blue-400" : "text-blue-600"
                        } mt-1`}
                      />
                      <div>
                        <p
                          className={`font-medium ${
                            isDarkMode ? "text-white" : "text-gray-900"
                          } font-mono mb-1`}
                        >
                          DURATION:
                        </p>
                        <p
                          className={`${
                            isDarkMode ? "text-gray-300" : "text-gray-600"
                          } font-mono text-sm`}
                        >
                          Multi-day hackathon event
                          <br />
                          24/7 support available
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Location */}
            <LocationPanel isDarkMode={isDarkMode} />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section
        id="register"
        className={`min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900 text-white relative overflow-hidden`}
      >
        <div className="absolute inset-0">
          <div className="particles-bg"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 px-6">
          <div className="mb-12">
            <div className="mt-12 mb-12 flex justify-center">
              <img
                src={HfLogo}
                alt="GU Hacktoberfest Logo"
                className="w-40 h-auto"
              />
            </div>

            <div className="text-6xl md:text-[8rem] font-black leading-none mb-8 font-mono">
              <span className="bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent glitch-text">
                READY
              </span>
              <div className="text-xl md:text-3xl italic font-light text-pink-200 block mt-4">
                {">> to_join_the_revolution?"}
              </div>
            </div>

            <div className="flex items-center justify-center mb-12">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center cyber-icon">
                <GitBranch className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          <div className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-mono">
            {"> SYSTEM_MESSAGE: Join the largest open source celebration"}
            <br />
            {"> at Galgotias University campus. Register now and"}
            <br />
            {"> become part of the Hacktoberfest 2025 community."}
          </div>

          <button
            onClick={() => setShowRegistrationModal(true)}
            className="group relative px-12 py-6 bg-white text-purple-900 rounded-xl font-bold text-xl transition-all duration-300 hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 mb-16 cyber-button font-mono"
          >
            <span className="flex items-center space-x-3">
              <span>[REGISTER_NOW]</span>
              <Zap className="w-6 h-6 group-hover:animate-bounce" />
            </span>
          </button>

          <div className="flex justify-center space-x-8 text-sm mb-8 font-mono">
            <a
              href="#"
              className="flex items-center space-x-2 text-pink-200 hover:text-white transition-colors cyber-link"
            >
              <Github className="w-5 h-5" />
              <span>/gdggu</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 text-pink-200 hover:text-white transition-colors cyber-link"
            >
              <Twitter className="w-5 h-5" />
              <span>@gdggu</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 text-pink-200 hover:text-white transition-colors cyber-link"
            >
              <Linkedin className="w-5 h-5" />
              <span>gdg-gu</span>
            </a>
          </div>

          <div className="text-xs text-purple-200 font-mono">
            © 2025 Google Developer Groups Galgotias University
          </div>
        </div>
      </section>

      {/* Registration Modal */}
      {showRegistrationModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          <div
            className={`max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl p-8 ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            } shadow-2xl cyber-panel`}
          >
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3
                  className={`text-2xl font-bold ${
                    isDarkMode ? "text-purple-400" : "text-purple-900"
                  } font-mono`}
                >
                  REGISTRATION_PROTOCOL
                </h3>
                <p
                  className={`${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  } mt-2 font-mono text-sm`}
                >
                  {"> Connecting to GDG Hacktoberfest 2025..."}
                </p>
              </div>
              <button
                onClick={() => setShowRegistrationModal(false)}
                className={`p-2 ${
                  isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                } rounded-full transition-colors duration-200 cyber-button`}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    className={`text-sm font-medium ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    } block mb-2 font-mono`}
                  >
                    FULL_NAME *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className={`w-full p-3 rounded-lg border-2 ${
                      isDarkMode
                        ? "bg-gray-700 border-purple-500/30 text-white"
                        : "bg-white border-purple-300"
                    } focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all duration-200 font-mono cyber-input`}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label
                    className={`text-sm font-medium ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    } block mb-2 font-mono`}
                  >
                    EMAIL_ADDRESS *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="user@domain.com"
                    className={`w-full p-3 rounded-lg border-2 ${
                      isDarkMode
                        ? "bg-gray-700 border-purple-500/30 text-white"
                        : "bg-white border-purple-300"
                    } focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all duration-200 font-mono cyber-input`}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <label
                  className={`text-sm font-medium ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  } block mb-2 font-mono`}
                >
                  COLLEGE/ORGANIZATION *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Galgotias University"
                  className={`w-full p-3 rounded-lg border-2 ${
                    isDarkMode
                      ? "bg-gray-700 border-purple-500/30 text-white"
                      : "bg-white border-purple-300"
                  } focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all duration-200 font-mono cyber-input`}
                  value={formData.college}
                  onChange={(e) =>
                    setFormData({ ...formData, college: e.target.value })
                  }
                />
              </div>

              <div>
                <label
                  className={`text-sm font-medium ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  } block mb-2 font-mono`}
                >
                  ROLE *
                </label>
                <select
                  required
                  className={`w-full p-3 rounded-lg border-2 ${
                    isDarkMode
                      ? "bg-gray-700 border-purple-500/30 text-white"
                      : "bg-white border-purple-300"
                  } focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all duration-200 font-mono cyber-input`}
                  value={formData.role}
                  onChange={(e) =>
                    setFormData({ ...formData, role: e.target.value })
                  }
                >
                  <option value="">Select your role</option>
                  <option value="project-admin">Project Admin</option>
                  <option value="repository-mentor">Repository Mentor</option>
                  <option value="contributor">Contributor</option>
                </select>
              </div>

              <div>
                <label
                  className={`text-sm font-medium ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  } block mb-2 font-mono`}
                >
                  INTEREST_AREA *
                </label>
                <select
                  required
                  className={`w-full p-3 rounded-lg border-2 ${
                    isDarkMode
                      ? "bg-gray-700 border-purple-500/30 text-white"
                      : "bg-white border-purple-300"
                  } focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all duration-200 font-mono cyber-input`}
                  value={formData.interestArea}
                  onChange={(e) =>
                    setFormData({ ...formData, interestArea: e.target.value })
                  }
                >
                  <option value="">Select your domain</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-development">Mobile Development</option>
                  <option value="data-science">Data Science & AI</option>
                  <option value="devops">DevOps & Cloud</option>
                  <option value="open-source">Open Source Contribution</option>
                  <option value="ui-ux">UI/UX Design</option>
                  <option value="cybersecurity">Cybersecurity</option>
                  <option value="blockchain">Blockchain</option>
                </select>
              </div>

              <div
                className={`flex items-start space-x-3 p-4 border-2 ${
                  isDarkMode
                    ? "border-purple-500/30 bg-gray-700/50"
                    : "border-purple-200 bg-purple-50"
                } rounded-lg cyber-panel`}
              >
                <input
                  type="checkbox"
                  id="disclaimer"
                  className="mt-1 w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                  checked={formData.disclaimer}
                  onChange={(e) =>
                    setFormData({ ...formData, disclaimer: e.target.checked })
                  }
                />
                <label
                  htmlFor="disclaimer"
                  className={`text-sm leading-relaxed ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  } font-mono`}
                >
                  I agree to the terms and conditions. I will attend the offline
                  hackathon at Galgotias University (Oct 25-27, 2025) and
                  participate in the open source contribution sprint.
                </label>
              </div>

              <button
                type="submit"
                disabled={
                  !formData.disclaimer ||
                  !formData.name ||
                  !formData.email ||
                  !formData.college ||
                  !formData.interestArea
                }
                className={`w-full py-4 rounded-lg text-lg font-bold transition-all duration-300 font-mono ${
                  formData.disclaimer &&
                  formData.name &&
                  formData.email &&
                  formData.college &&
                  formData.interestArea
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 cyber-button"
                    : isDarkMode
                    ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                {formData.disclaimer &&
                formData.name &&
                formData.email &&
                formData.college &&
                formData.interestArea
                  ? "[EXECUTE_REGISTRATION]"
                  : "[MISSING_REQUIRED_FIELDS]"}
              </button>
            </form>

            <div className="mt-6 text-xs text-center font-mono">
              <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                {"> Data will be securely stored in MongoDB Atlas"}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          <div
            className={`max-w-md w-full rounded-2xl p-8 text-center ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            } shadow-2xl cyber-panel`}
          >
            <div className="mb-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center cyber-icon">
                <Check className="w-8 h-8 text-white" />
              </div>
            </div>

            <h3
              className={`text-2xl font-bold mb-4 ${
                isDarkMode ? "text-white" : "text-gray-900"
              } font-mono`}
            >
              REGISTRATION_SUCCESS!
            </h3>

            <p
              className={`text-lg mb-6 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              } leading-relaxed font-mono text-sm`}
            >
              {"> Welcome to GDG Hacktoberfest 2025!"}
              <br />
              {"> Check your email for confirmation"}
              <br />
              {"> and event updates."}
            </p>

            <div
              className={`text-sm ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              } space-y-2 font-mono`}
            >
              <div className="flex items-center justify-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>October 25-27, 2025</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Galgotias University</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>72-hour hackathon</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .hf-logo {
          width: 140px;
          height: 50px;
          background: linear-gradient(45deg, #8b5cf6, #ec4899);
          border-radius: 25px;
          position: relative;
          margin: 0 auto;
          border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .hf-logo::before {
          content: "GU HF";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          font-family: "Courier New", monospace;
          font-weight: bold;
          font-size: 18px;
          letter-spacing: 2px;
          white-space: nowrap;
        }

        .cyber-grid {
          position: relative;
        }

        .cyber-grid::before {
          content: "";
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(
              rgba(147, 51, 234, 0.03) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(147, 51, 234, 0.03) 1px,
              transparent 1px
            );
          background-size: 20px 20px;
          pointer-events: none;
          z-index: -1;
        }

        .grid-background {
          width: 100%;
          height: 100%;
          background-image: linear-gradient(
              rgba(147, 51, 234, 0.1) 2px,
              transparent 2px
            ),
            linear-gradient(90deg, rgba(147, 51, 234, 0.1) 2px, transparent 2px);
          background-size: 40px 40px;
          animation: gridMove 20s linear infinite;
        }

        .cyber-grid-pattern {
          width: 100%;
          height: 100%;
          background-image: linear-gradient(
              rgba(147, 51, 234, 0.15) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(147, 51, 234, 0.15) 1px,
              transparent 1px
            );
          background-size: 60px 60px;
          animation: gridMove 30s linear infinite;
        }

        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(60px, 60px);
          }
        }

        .floating-shapes {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .floating-hex {
          position: absolute;
          width: 30px;
          height: 30px;
          background: linear-gradient(45deg, #8b5cf6, #ec4899);
          clip-path: polygon(
            50% 0%,
            100% 25%,
            100% 75%,
            50% 100%,
            0% 75%,
            0% 25%
          );
          animation: float 15s ease-in-out infinite;
        }

        .hex-1 {
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }
        .hex-2 {
          top: 60%;
          right: 15%;
          animation-delay: -5s;
        }
        .hex-3 {
          bottom: 30%;
          left: 20%;
          animation-delay: -10s;
        }

        .floating-square {
          position: absolute;
          width: 20px;
          height: 20px;
          background: linear-gradient(45deg, #06b6d4, #8b5cf6);
          transform: rotate(45deg);
          animation: floatRotate 20s linear infinite;
        }

        .square-1 {
          top: 40%;
          right: 25%;
          animation-delay: 0s;
        }
        .square-2 {
          bottom: 40%;
          right: 30%;
          animation-delay: -10s;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) rotate(90deg);
          }
          50% {
            transform: translateY(10px) rotate(180deg);
          }
          75% {
            transform: translateY(-15px) rotate(270deg);
          }
        }

        @keyframes floatRotate {
          0% {
            transform: translateY(0px) rotate(45deg);
          }
          25% {
            transform: translateY(-30px) rotate(135deg);
          }
          50% {
            transform: translateY(20px) rotate(225deg);
          }
          75% {
            transform: translateY(-25px) rotate(315deg);
          }
          100% {
            transform: translateY(0px) rotate(405deg);
          }
        }

        .pixel-font {
          font-family: "Courier New", monospace;
          letter-spacing: 0.1em;
        }

        .glitch-text {
          position: relative;
        }

        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .glitch-text::before {
          animation: glitch-1 2s infinite linear alternate-reverse;
          color: #ec4899;
          z-index: -1;
        }

        .glitch-text::after {
          animation: glitch-2 1s infinite linear alternate-reverse;
          color: #8b5cf6;
          z-index: -2;
        }

        @keyframes glitch-1 {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
          100% {
            transform: translate(0);
          }
        }

        @keyframes glitch-2 {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(2px, 2px);
          }
          40% {
            transform: translate(2px, -2px);
          }
          60% {
            transform: translate(-2px, 2px);
          }
          80% {
            transform: translate(-2px, -2px);
          }
          100% {
            transform: translate(0);
          }
        }

        .scan-line {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #ec4899, transparent);
          animation: scan 3s ease-in-out infinite;
        }

        @keyframes scan {
          0% {
            top: 0%;
            opacity: 1;
          }
          50% {
            top: 100%;
            opacity: 0.7;
          }
          100% {
            top: 0%;
            opacity: 1;
          }
        }

        .cyber-panel {
          position: relative;
          border: 1px solid rgba(147, 51, 234, 0.3);
        }

        .cyber-panel::before {
          content: "";
          position: absolute;
          top: -1px;
          left: -1px;
          right: -1px;
          bottom: -1px;
          background: linear-gradient(
            45deg,
            transparent,
            rgba(147, 51, 234, 0.1),
            transparent
          );
          border-radius: inherit;
          z-index: -1;
        }

        .cyber-button {
          position: relative;
          overflow: hidden;
        }

        .cyber-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.5s;
        }

        .cyber-button:hover::before {
          left: 100%;
        }

        .cyber-link {
          position: relative;
        }

        .cyber-link::after {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: linear-gradient(90deg, #8b5cf6, #ec4899);
          transition: width 0.3s;
        }

        .cyber-link:hover::after {
          width: 100%;
        }

        .cyber-badge {
          position: relative;
          overflow: hidden;
        }

        .cyber-badge::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            45deg,
            rgba(147, 51, 234, 0.1),
            rgba(236, 72, 153, 0.1)
          );
          z-index: -1;
        }

        .cyber-node {
          position: relative;
        }

        .cyber-node::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 120%;
          height: 120%;
          border: 1px solid rgba(147, 51, 234, 0.3);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: pulse-ring 2s infinite;
        }

        @keyframes pulse-ring {
          0% {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.4);
            opacity: 0;
          }
        }

        .cyber-icon {
          position: relative;
          overflow: hidden;
        }

        .cyber-icon::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: conic-gradient(
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          animation: rotate 3s linear infinite;
        }

        @keyframes rotate {
          100% {
            transform: rotate(360deg);
          }
        }

        .cyber-input {
          position: relative;
        }

        .cyber-input:focus {
          box-shadow: 0 0 0 1px rgba(147, 51, 234, 0.5),
            0 0 20px rgba(147, 51, 234, 0.2);
        }

        .pixelated-astronaut {
          width: 80px;
          height: 100px;
          margin: 0 auto;
          position: relative;
        }

        .astronaut-helmet {
          width: 60px;
          height: 60px;
          background: linear-gradient(45deg, #8b5cf6, #06b6d4);
          border-radius: 50%;
          margin: 0 auto;
          position: relative;
          border: 3px solid #ec4899;
        }

        .astronaut-helmet::before {
          content: "";
          position: absolute;
          top: 15px;
          left: 15px;
          width: 10px;
          height: 8px;
          background: #fff;
          border-radius: 2px;
        }

        .astronaut-helmet::after {
          content: "";
          position: absolute;
          top: 15px;
          right: 15px;
          width: 10px;
          height: 8px;
          background: #fff;
          border-radius: 2px;
        }

        .astronaut-body {
          width: 50px;
          height: 40px;
          background: linear-gradient(180deg, #6366f1, #8b5cf6);
          margin: 5px auto;
          border-radius: 8px;
        }

        .astronaut-arms {
          width: 80px;
          height: 15px;
          background: linear-gradient(90deg, #6366f1, #8b5cf6);
          margin: -25px auto 0;
          border-radius: 8px;
        }

        .location-grid {
          width: 100%;
          height: 100%;
          background-image: linear-gradient(
              rgba(147, 51, 234, 0.3) 1px,
              transparent 1px
            ),
            linear-gradient(90deg, rgba(147, 51, 234, 0.3) 1px, transparent 1px);
          background-size: 20px 20px;
        }

        .hf-logo-pixel {
          width: 80px;
          height: 40px;
          background: linear-gradient(45deg, #8b5cf6, #ec4899);
          border-radius: 20px;
          position: relative;
          margin: 0 auto;
        }

        .hf-logo-pixel::before {
          content: "HF";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          font-family: "Courier New", monospace;
          font-weight: bold;
          font-size: 16px;
        }

        .particles-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(
              2px 2px at 20px 30px,
              rgba(255, 255, 255, 0.15),
              transparent
            ),
            radial-gradient(
              2px 2px at 40px 70px,
              rgba(147, 51, 234, 0.3),
              transparent
            ),
            radial-gradient(
              1px 1px at 90px 40px,
              rgba(236, 72, 153, 0.3),
              transparent
            ),
            radial-gradient(
              1px 1px at 130px 80px,
              rgba(255, 255, 255, 0.1),
              transparent
            ),
            radial-gradient(
              2px 2px at 160px 30px,
              rgba(147, 51, 234, 0.2),
              transparent
            );
          background-size: 200px 100px;
          animation: particlesFloat 15s ease-in-out infinite;
        }

        @keyframes particlesFloat {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(30px, -30px) rotate(120deg);
          }
          66% {
            transform: translate(-20px, 20px) rotate(240deg);
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .pixel-font {
            letter-spacing: 0.05em;
          }

          .glitch-text::before,
          .glitch-text::after {
            display: none;
          }

          .floating-hex,
          .floating-square {
            display: none;
          }
        }

        /* Custom scrollbar for webkit browsers */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(31, 41, 55, 0.5);
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #8b5cf6, #ec4899);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #7c3aed, #db2777);
        }

        /* Loading screen animations */
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.4;
          }
          50% {
            opacity: 1;
          }
        }

        /* Hover effects for interactive elements */
        .group:hover .cyber-icon::before {
          animation-duration: 1s;
        }

        .group:hover .astronaut-helmet {
          animation: bounce 0.5s ease-in-out;
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        /* Focus styles for accessibility */
        .cyber-input:focus,
        .cyber-button:focus,
        .cyber-link:focus {
          outline: 2px solid rgba(147, 51, 234, 0.6);
          outline-offset: 2px;
        }

        /* Print styles */
        @media print {
          .fixed,
          .floating-shapes,
          .particles-bg,
          .scan-line {
            display: none !important;
          }

          .glitch-text::before,
          .glitch-text::after {
            display: none;
          }

          * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroPage;
