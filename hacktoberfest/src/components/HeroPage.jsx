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
  Award,
  Zap,
  Terminal,
  GitBranch,
  ArrowDown,
  Cpu,
  Database,
  Shield,
  Hexagon,
  Globe,
  Sparkles,
  Trophy,
  BookOpen,
  Target,
  Layers,
  Activity,
} from "lucide-react";
import LocationPanel from "./LocationPannel";
import logo from "../images/hf-logo.png";

const HeroPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [timeLeft, setTimeLeft] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    college: "",
    role: "",
    interestArea: "",
    disclaimer: false,
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
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
      role: "GDG Lead, Galgotias University",
      quote:
        "Leading GDG Galgotias has been transformative. This Hacktoberfest represents our commitment to fostering open-source innovation across Indian universities.",
      image: "🎯"
    },
    {
      name: "Dr. Priya Singh",
      role: "Faculty Advisor, Computer Science",
      quote:
        "The impact of GDG events on our students' technical growth has been remarkable. This initiative bridges academic learning with industry practices.",
      image: "👩‍🏫"
    },
    {
      name: "Vikram Gupta",
      role: "Senior Developer, Tech Startup",
      quote:
        "GDG Galgotias events consistently produce quality contributors. The structured approach to open-source mentorship is commendable.",
      image: "👨‍💻"
    },
    {
      name: "Anisha Patel",
      role: "Previous Participant",
      quote:
        "My first meaningful open-source contribution happened here. The supportive environment and expert mentorship made all the difference.",
      image: "🚀"
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.disclaimer) {
      alert("Please accept the disclaimer to continue.");
      return;
    }

    console.log("Registration data:", formData);
    setShowRegistrationModal(false);
    setShowSuccessModal(true);
    setTimeout(() => setShowSuccessModal(false), 4000);

    setFormData({
      name: "",
      email: "",
      college: "",
      role: "",
      interestArea: "",
      disclaimer: false,
    });
  };

  const LoadingScreen = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="grid-background opacity-20"></div>
      </div>

      <div className="text-center relative z-10">
        <div className="relative mb-12">
          <div className="w-32 h-32 mx-auto relative">
            {/* Rotating rings */}
            <div className="absolute inset-0 border-2 border-purple-400 rounded-full animate-spin border-t-transparent opacity-80">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-2 h-2 bg-purple-400 rounded-full"></div>
            </div>
            <div
              className="absolute inset-3 border-2 border-pink-400 rounded-full animate-spin border-b-transparent opacity-60"
              style={{
                animationDirection: "reverse",
                animationDuration: "2s",
              }}
            >
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 bg-pink-400 rounded-full"></div>
            </div>

            {/* Center logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img src={logo} alt="GDG Logo" className="w-16 h-16 object-contain" />
            </div>
          </div>
        </div>

        <div className="font-mono text-xl text-purple-300 mb-8 tracking-wide">
          Initializing GDG Systems...
        </div>

        <div className="flex justify-center space-x-2">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-2 h-6 bg-gradient-to-t from-purple-500 to-pink-400 rounded-full"
              style={{
                animation: `pulse 1.2s ease-in-out infinite`,
                animationDelay: `${i * 0.15}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="mt-6 text-sm text-purple-200 font-mono opacity-80">
          Loading Open Source Community...
        </div>
      </div>
    </div>
  );

  if (isLoading) return <LoadingScreen />;

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        isDarkMode 
          ? "bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-white" 
          : "bg-gradient-to-br from-slate-50 via-purple-50 to-slate-50 text-slate-900"
      }`}
    >
      {/* Subtle background pattern */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute inset-0 ${isDarkMode ? 'opacity-5' : 'opacity-3'}`}>
          <div className="tech-grid"></div>
        </div>
        
        {/* Floating elements */}
        <div className="floating-elements">
          <div className="floating-dot dot-1"></div>
          <div className="floating-dot dot-2"></div>
          <div className="floating-dot dot-3"></div>
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
        </div>
      </div>

      {/* Theme Toggle */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className={`fixed top-6 right-6 z-50 p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
          isDarkMode 
            ? "bg-slate-800/80 hover:bg-slate-700/80 text-purple-300 border border-purple-500/30" 
            : "bg-white/80 hover:bg-white/90 text-purple-600 border border-purple-200 shadow-lg"
        } backdrop-blur-md`}
      >
        {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>

      {/* Enhanced Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-40 ${
        isDarkMode ? "bg-slate-900/90" : "bg-white/90"
      } backdrop-blur-lg border-b ${
        isDarkMode ? "border-purple-500/20" : "border-purple-200/50"
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src={logo} alt="GDG Logo" className="w-10 h-10 object-contain" />
              </div>

              <div>
                <div className="font-bold text-xl tracking-tight">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    GDG Galgotias
                  </span>
                </div>
                <div className={`text-xs font-medium ${
                  isDarkMode ? "text-slate-400" : "text-slate-600"
                }`}>
                  Hacktoberfest 2025
                </div>
              </div>
            </div>

            <nav className="hidden md:flex space-x-8 text-sm font-medium">
              {["Home", "About", "Timeline", "Register"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`${
                    isDarkMode
                      ? "text-slate-300 hover:text-purple-400"
                      : "text-slate-600 hover:text-purple-600"
                  } transition-colors duration-200 hover:underline underline-offset-4`}
                >
                  {item}
                </a>
              ))}
            </nav>

            <button
              onClick={() => setShowRegistrationModal(true)}
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Register Now
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Google Developer Groups Badge */}
          <div className="mb-8">
            <div className={`inline-flex items-center px-6 py-3 ${
              isDarkMode ? "bg-slate-800/60" : "bg-white/60"
            } backdrop-blur-sm rounded-full border ${
              isDarkMode ? "border-purple-500/30" : "border-purple-200"
            } text-sm font-medium shadow-lg`}>
              <Globe className="w-4 h-4 mr-2 text-purple-600" />
              Google Developer Groups • Galgotias University
            </div>
          </div>

          {/* Main Title */}
          <div className="mb-12">
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 flex items-center justify-center">
                <img src={logo} alt="GDG Logo" className="w-16 h-16 object-contain" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-6">
              <span className={`block ${
                isDarkMode ? "text-purple-400" : "text-purple-600"
              }`}>
                HACKTOBERFEST
              </span>
              <span className={`block text-4xl md:text-5xl lg:text-6xl ${
                isDarkMode ? "text-pink-400" : "text-pink-600"
              } font-light`}>
                2025
              </span>
            </h1>
            
            <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8 ${
              isDarkMode ? "text-slate-300" : "text-slate-600"
            }`}>
              Join India's largest university-driven open source celebration. 
              Connect, contribute, and create meaningful impact in the developer community.
            </p>
          </div>

          {/* Countdown */}
          <div className="mb-16">
            <div className={`text-sm font-medium ${
              isDarkMode ? "text-slate-400" : "text-slate-600"
            } mb-6 tracking-wide uppercase`}>
              Event Starts In
            </div>
            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Min", value: timeLeft.minutes },
                { label: "Sec", value: timeLeft.seconds },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl ${
                    isDarkMode ? "bg-slate-800/60" : "bg-white/60"
                  } backdrop-blur-sm shadow-lg border ${
                    isDarkMode ? "border-purple-500/20" : "border-purple-200"
                  } hover:scale-105 transition-transform duration-200`}
                >
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {String(item.value || "00").padStart(2, "0")}
                  </div>
                  <div className={`text-xs font-medium ${
                    isDarkMode ? "text-slate-400" : "text-slate-600"
                  } uppercase tracking-wider`}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => setShowRegistrationModal(true)}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center space-x-2"
            >
              <Sparkles className="w-5 h-5" />
              <span>Register Now</span>
            </button>
            
            <a
              href="#about"
              className={`px-8 py-4 border-2 ${
                isDarkMode
                  ? "border-purple-400 text-purple-400 hover:bg-purple-400/10"
                  : "border-purple-600 text-purple-600 hover:bg-purple-50"
              } rounded-xl font-semibold text-lg transition-all duration-200 flex items-center space-x-2`}
            >
              <ArrowDown className="w-5 h-5" />
              <span>Learn More</span>
            </a>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Users, label: "Expected Participants", value: "500+" },
              { icon: Globe, label: "Participating Colleges", value: "20+" },
              { icon: GitBranch, label: "Open Source Projects", value: "50+" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`inline-flex p-4 rounded-full ${
                  isDarkMode ? "bg-slate-800/60" : "bg-white/60"
                } backdrop-blur-sm shadow-lg mb-4`}>
                  <stat.icon className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className={`text-sm ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className={`py-20 px-6 ${
        isDarkMode ? "bg-slate-800/20" : "bg-white/40"
      } backdrop-blur-sm relative`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className={`inline-flex items-center px-6 py-3 ${
              isDarkMode ? "bg-slate-800/60" : "bg-white/60"
            } backdrop-blur-sm rounded-full text-sm font-medium mb-8 shadow-lg`}>
              <Target className="w-4 h-4 mr-2 text-purple-600" />
              Why Join GDG Hacktoberfest
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Empowering Developers Across India
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${
              isDarkMode ? "text-slate-300" : "text-slate-600"
            }`}>
              Experience a professionally organized hackathon that bridges academic learning 
              with industry standards, creating lasting impact in the open-source community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Structured Learning",
                description: "Expert-guided workshops on Git, GitHub workflows, and open-source best practices with hands-on mentorship.",
                gradient: "from-blue-500 to-purple-600"
              },
              {
                icon: Users,
                title: "Professional Network",
                description: "Connect with industry professionals, experienced maintainers, and fellow developers from top universities.",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: Trophy,
                title: "Recognition & Growth",
                description: "Earn certificates, win exclusive merchandise, and gain recognition that enhances your developer profile.",
                gradient: "from-pink-500 to-red-500"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className={`group p-8 rounded-2xl ${
                  isDarkMode ? "bg-slate-800/60" : "bg-white/80"
                } backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border ${
                  isDarkMode ? "border-slate-700/50" : "border-slate-200"
                }`}
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-purple-600 transition-colors">
                  {feature.title}
                </h3>
                <p className={`${isDarkMode ? "text-slate-300" : "text-slate-600"} leading-relaxed`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Additional Features */}
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, label: "Mentorship Support", desc: "24/7 expert guidance" },
              { icon: Activity, label: "Live Leaderboards", desc: "Real-time progress tracking" },
              { icon: Award, label: "Digital Certificates", desc: "Industry-recognized credentials" },
              { icon: Layers, label: "Multi-Tech Stack", desc: "Diverse project domains" },
            ].map((item, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-xl ${
                  isDarkMode ? "bg-slate-800/40" : "bg-white/60"
                } backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-200 border ${
                  isDarkMode ? "border-slate-700/30" : "border-slate-200/50"
                }`}
              >
                <div className={`inline-flex p-3 rounded-lg ${
                  isDarkMode ? "bg-slate-700/50" : "bg-slate-100"
                } mb-4`}>
                  <item.icon className="w-5 h-5 text-purple-600" />
                </div>
                <div className="font-semibold mb-2">{item.label}</div>
                <div className={`text-sm ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className={`py-20 px-6 ${isDarkMode ? "bg-slate-900/30" : "bg-slate-50/50"} backdrop-blur-sm`}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className={`inline-flex items-center px-6 py-3 ${
              isDarkMode ? "bg-slate-800/60" : "bg-white/60"
            } backdrop-blur-sm rounded-full text-sm font-medium mb-8 shadow-lg`}>
              <Calendar className="w-4 h-4 mr-2 text-purple-600" />
              Event Timeline
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              October 2025 Schedule
            </h2>
          </div>

          <div className="space-y-8">
            {[
              {
                date: "October 15",
                title: "Project Submissions by Admins",
                description: "Repository setup, contribution guidelines establishment, and mentor assignment preparation."
              },
              {
                date: "October 20",
                title: "Mentor Assignments & Repository Setup",
                description: "Final mentor allocations, repository testing, issue labeling, and documentation updates."
              },
              {
                date: "October 25–27",
                title: "Hackathon Weekend",
                description: "72-hour contribution sprint with live mentorship, real-time leaderboards, and collaborative coding sessions."
              },
              {
                date: "October 30",
                title: "Results & Recognition Ceremony",
                description: "Winner announcements, certificate distribution, networking session, and closing remarks."
              }
            ].map((event, index) => (
              <div key={index} className="flex items-start space-x-6 group">
                <div className="flex-shrink-0">
                  <div className="w-4 h-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full group-hover:scale-125 transition-transform duration-300 shadow-lg"></div>
                  {index < 3 && (
                    <div className={`w-px h-16 ${
                      isDarkMode ? "bg-slate-700" : "bg-slate-300"
                    } mx-auto mt-2`}></div>
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-lg font-bold group-hover:text-purple-600 transition-colors">
                      {event.title}
                    </h3>
                    <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                      isDarkMode ? "bg-slate-800 text-slate-300" : "bg-slate-100 text-slate-600"
                    }`}>
                      {event.date}
                    </span>
                  </div>
                  <p className={`${isDarkMode ? "text-slate-400" : "text-slate-600"} leading-relaxed`}>
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`py-20 px-6 ${
        isDarkMode ? "bg-slate-800/20" : "bg-white/40"
      } backdrop-blur-sm`}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className={`inline-flex items-center px-6 py-3 ${
              isDarkMode ? "bg-slate-800/60" : "bg-white/60"
            } backdrop-blur-sm rounded-full text-sm font-medium mb-8 shadow-lg`}>
              <Star className="w-4 h-4 mr-2 text-purple-600" />
              Community Testimonials
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              What Our Community Says
            </h2>
          </div>

          <div className={`p-12 rounded-2xl ${
            isDarkMode ? "bg-slate-800/60" : "bg-white/80"
          } backdrop-blur-sm shadow-xl border ${
            isDarkMode ? "border-slate-700/50" : "border-slate-200"
          }`}>
            <div className="text-center">
              <div className="text-6xl mb-6">
                {testimonials[currentTestimonial].image}
              </div>
              
              <div className="flex justify-center mb-6">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className={`text-lg md:text-xl leading-relaxed mb-8 ${
                isDarkMode ? "text-slate-300" : "text-slate-600"
              } max-w-3xl mx-auto`}>
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              
              <div>
                <div className="font-bold text-lg mb-1">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className={`text-sm ${
                  isDarkMode ? "text-slate-400" : "text-slate-600"
                }`}>
                  {testimonials[currentTestimonial].role}
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentTestimonial
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 scale-110"
                      : isDarkMode
                      ? "bg-slate-600 hover:bg-slate-500"
                      : "bg-slate-300 hover:bg-slate-400"
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className={`py-20 px-6 ${isDarkMode ? "bg-slate-900/30" : "bg-slate-50/50"} backdrop-blur-sm`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className={`inline-flex items-center px-6 py-3 ${
              isDarkMode ? "bg-slate-800/60" : "bg-white/60"
            } backdrop-blur-sm rounded-full text-sm font-medium mb-8 shadow-lg`}>
              <MapPin className="w-4 h-4 mr-2 text-purple-600" />
              Event Location
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Galgotias University Campus
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className={`p-8 rounded-2xl ${
                isDarkMode ? "bg-slate-800/60" : "bg-white/80"
              } backdrop-blur-sm shadow-lg border ${
                isDarkMode ? "border-slate-700/50" : "border-slate-200"
              }`}>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Address</h3>
                    <p className={`${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                      Plot No. 2, Yamuna Expressway<br />
                      Sector 17A, Greater Noida<br />
                      Uttar Pradesh 203201, India
                    </p>
                  </div>
                </div>
              </div>

              <div className={`p-8 rounded-2xl ${
                isDarkMode ? "bg-slate-800/60" : "bg-white/80"
              } backdrop-blur-sm shadow-lg border ${
                isDarkMode ? "border-slate-700/50" : "border-slate-200"
              }`}>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Event Dates</h3>
                    <p className={`${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                      October 25-27, 2025<br />
                      72-hour hackathon experience<br />
                      Multiple session timings available
                    </p>
                  </div>
                </div>
              </div>

              <div className={`p-8 rounded-2xl ${
                isDarkMode ? "bg-slate-800/60" : "bg-white/80"
              } backdrop-blur-sm shadow-lg border ${
                isDarkMode ? "border-slate-700/50" : "border-slate-200"
              }`}>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Support Hours</h3>
                    <p className={`${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                      24/7 mentor support available<br />
                      Live assistance throughout<br />
                      Dedicated help desk setup
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="sticky top-28">
              <LocationPanel isDarkMode={isDarkMode} />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="register" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="particles-background"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 px-6">
          <div className="mb-12">
            <div className="w-24 h-24 mx-auto mb-8 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30 shadow-2xl">
              <img src={logo} alt="GDG Logo" className="w-12 h-12 object-contain" />
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black leading-tight mb-8">
              Ready to Make
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                History?
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl leading-relaxed mb-12 max-w-3xl mx-auto opacity-90">
              Join 500+ developers from across India in the most impactful 
              open-source celebration of 2025. Your contribution starts here.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button
              onClick={() => setShowRegistrationModal(true)}
              className="group px-10 py-5 bg-white text-purple-700 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-3 hover:bg-yellow-50"
            >
              <Sparkles className="w-6 h-6 group-hover:animate-spin" />
              <span>Register Now - It's Free!</span>
            </button>
            
            <div className="flex items-center space-x-4 text-white/80">
              <div className="text-center">
                <div className="text-2xl font-bold">Free</div>
                <div className="text-sm">Registration</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold">72hrs</div>
                <div className="text-sm">Of Coding</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm">Developers</div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {[
              { icon: Github, label: "GitHub", href: "#" },
              { icon: Twitter, label: "Twitter", href: "#" },
              { icon: Linkedin, label: "LinkedIn", href: "#" },
              { icon: Instagram, label: "Instagram", href: "#" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-200 transform hover:scale-110 border border-white/20"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6 text-white" />
              </a>
            ))}
          </div>

          <div className="text-sm text-white/60">
            © 2025 Google Developer Groups Galgotias University. All rights reserved.
          </div>
        </div>
      </section>

      {/* Registration Modal */}
      {showRegistrationModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className={`max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl p-8 ${
            isDarkMode ? "bg-slate-800" : "bg-white"
          } shadow-2xl border ${
            isDarkMode ? "border-slate-700" : "border-slate-200"
          }`}>
            
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Join GDG Hacktoberfest 2025
                </h3>
                <p className={`${isDarkMode ? "text-slate-400" : "text-slate-600"} mt-2`}>
                  Register for the most exciting open-source event of the year
                </p>
              </div>
              <button
                onClick={() => setShowRegistrationModal(false)}
                className={`p-2 ${
                  isDarkMode ? "hover:bg-slate-700" : "hover:bg-slate-100"
                } rounded-lg transition-colors duration-200`}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className={`text-sm font-medium ${
                    isDarkMode ? "text-slate-300" : "text-slate-700"
                  } block mb-2`}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className={`w-full p-4 rounded-lg border-2 ${
                      isDarkMode
                        ? "bg-slate-700 border-slate-600 text-white focus:border-purple-500"
                        : "bg-white border-slate-300 focus:border-purple-500"
                    } focus:ring-2 focus:ring-purple-500/20 outline-none transition-all duration-200`}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className={`text-sm font-medium ${
                    isDarkMode ? "text-slate-300" : "text-slate-700"
                  } block mb-2`}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your.email@domain.com"
                    className={`w-full p-4 rounded-lg border-2 ${
                      isDarkMode
                        ? "bg-slate-700 border-slate-600 text-white focus:border-purple-500"
                        : "bg-white border-slate-300 focus:border-purple-500"
                    } focus:ring-2 focus:ring-purple-500/20 outline-none transition-all duration-200`}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <label className={`text-sm font-medium ${
                  isDarkMode ? "text-slate-300" : "text-slate-700"
                } block mb-2`}>
                  College/University *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Galgotias University"
                  className={`w-full p-4 rounded-lg border-2 ${
                    isDarkMode
                      ? "bg-slate-700 border-slate-600 text-white focus:border-purple-500"
                      : "bg-white border-slate-300 focus:border-purple-500"
                  } focus:ring-2 focus:ring-purple-500/20 outline-none transition-all duration-200`}
                  value={formData.college}
                  onChange={(e) =>
                    setFormData({ ...formData, college: e.target.value })
                  }
                />
              </div>

              <div>
                <label className={`text-sm font-medium ${
                  isDarkMode ? "text-slate-300" : "text-slate-700"
                } block mb-2`}>
                  Primary Interest Area *
                </label>
                <select
                  required
                  className={`w-full p-4 rounded-lg border-2 ${
                    isDarkMode
                      ? "bg-slate-700 border-slate-600 text-white focus:border-purple-500"
                      : "bg-white border-slate-300 focus:border-purple-500"
                  } focus:ring-2 focus:ring-purple-500/20 outline-none transition-all duration-200`}
                  value={formData.interestArea}
                  onChange={(e) =>
                    setFormData({ ...formData, interestArea: e.target.value })
                  }
                >
                  <option value="">Select your primary interest</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-development">Mobile App Development</option>
                  <option value="data-science">Data Science & Machine Learning</option>
                  <option value="devops">DevOps & Cloud Computing</option>
                  <option value="open-source">Open Source Contribution</option>
                  <option value="ui-ux">UI/UX Design</option>
                  <option value="cybersecurity">Cybersecurity</option>
                  <option value="blockchain">Blockchain & Web3</option>
                </select>
              </div>

              <div className={`flex items-start space-x-3 p-6 border-2 ${
                isDarkMode
                  ? "border-slate-600 bg-slate-700/50"
                  : "border-slate-200 bg-slate-50"
              } rounded-lg`}>
                <input
                  type="checkbox"
                  id="disclaimer"
                  className="mt-1 w-4 h-4 text-purple-600 border-slate-300 rounded focus:ring-purple-500"
                  checked={formData.disclaimer}
                  onChange={(e) =>
                    setFormData({ ...formData, disclaimer: e.target.checked })
                  }
                />
                <label htmlFor="disclaimer" className={`text-sm leading-relaxed ${
                  isDarkMode ? "text-slate-300" : "text-slate-600"
                }`}>
                  I agree to participate in the GDG Hacktoberfest 2025 event at Galgotias University 
                  (October 25-27, 2025). I understand this is an in-person event and I commit to 
                  attending and contributing meaningfully to open-source projects.
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
                className={`w-full py-4 rounded-lg text-lg font-bold transition-all duration-300 ${
                  formData.disclaimer &&
                  formData.name &&
                  formData.email &&
                  formData.college &&
                  formData.interestArea
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                    : isDarkMode
                    ? "bg-slate-600 text-slate-400 cursor-not-allowed"
                    : "bg-slate-300 text-slate-500 cursor-not-allowed"
                }`}
              >
                {formData.disclaimer &&
                formData.name &&
                formData.email &&
                formData.college &&
                formData.interestArea
                  ? "Complete Registration"
                  : "Please Fill All Required Fields"}
              </button>
            </form>

            <div className="mt-6 text-xs text-center">
              <p className={isDarkMode ? "text-slate-400" : "text-slate-600"}>
                Your data is securely stored and will only be used for event communication.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className={`max-w-md w-full rounded-2xl p-8 text-center ${
            isDarkMode ? "bg-slate-800" : "bg-white"
          } shadow-2xl border ${
            isDarkMode ? "border-slate-700" : "border-slate-200"
          }`}>
            
            <div className="mb-6">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                <Check className="w-10 h-10 text-white" />
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Registration Successful!
            </h3>

            <p className={`text-lg mb-8 ${
              isDarkMode ? "text-slate-300" : "text-slate-600"
            } leading-relaxed`}>
              Welcome to GDG Hacktoberfest 2025! Check your email for confirmation 
              and event details.
            </p>

            <div className={`text-sm ${
              isDarkMode ? "text-slate-400" : "text-slate-600"
            } space-y-2 mb-6`}>
              <div className="flex items-center justify-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>October 25-27, 2025</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Galgotias University Campus</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Users className="w-4 h-4" />
                <span>72-Hour Hackathon Experience</span>
              </div>
            </div>

            <div className="text-xs text-center">
              <p className={isDarkMode ? "text-slate-500" : "text-slate-400"}>
                Event details and updates will be sent to your registered email.
              </p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .tech-grid {
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
          animation: gridFloat 20s linear infinite;
        }

        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .floating-dot {
          position: absolute;
          width: 8px;
          height: 8px;
          background: linear-gradient(45deg, #8b5cf6, #ec4899);
          border-radius: 50%;
          animation: floatDot 15s ease-in-out infinite;
        }

        .dot-1 { top: 20%; left: 10%; animation-delay: 0s; }
        .dot-2 { top: 60%; right: 15%; animation-delay: -5s; }
        .dot-3 { bottom: 30%; left: 20%; animation-delay: -10s; }

        .floating-shape {
          position: absolute;
          width: 12px;
          height: 12px;
          background: linear-gradient(45deg, #06b6d4, #8b5cf6);
          transform: rotate(45deg);
          animation: floatShape 20s linear infinite;
        }

        .shape-1 { top: 40%; right: 25%; animation-delay: 0s; }
        .shape-2 { bottom: 40%; right: 30%; animation-delay: -10s; }

        .particles-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(2px 2px at 20px 30px, rgba(255, 255, 255, 0.2), transparent),
            radial-gradient(2px 2px at 40px 70px, rgba(255, 255, 255, 0.15), transparent),
            radial-gradient(1px 1px at 90px 40px, rgba(255, 255, 255, 0.1), transparent),
            radial-gradient(1px 1px at 130px 80px, rgba(255, 255, 255, 0.25), transparent);
          background-size: 200px 100px;
          animation: particleMove 25s ease-in-out infinite;
        }

        @keyframes gridFloat {
          0% { transform: translate(0, 0); }
          100% { transform: translate(40px, 40px); }
        }

        @keyframes floatDot {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(10px) translateX(-10px); }
          75% { transform: translateY(-15px) translateX(15px); }
        }

        @keyframes floatShape {
          0% { transform: translateY(0px) rotate(45deg); }
          25% { transform: translateY(-30px) rotate(135deg); }
          50% { transform: translateY(20px) rotate(225deg); }
          75% { transform: translateY(-25px) rotate(315deg); }
          100% { transform: translateY(0px) rotate(405deg); }
        }

        @keyframes particleMove {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(30px, -30px); }
          66% { transform: translate(-20px, 20px); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .floating-dot,
          .floating-shape {
            display: none;
          }
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(51, 65, 85, 0.1);
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #8b5cf6, #ec4899);
          border-radius: 3px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #7c3aed, #db2777);
        }
      `}</style>
    </div>
  );
};

export default HeroPage;