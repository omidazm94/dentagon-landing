"use client";

import { useState } from "react";
import {
  Menu,
  X,
  Download,
  Star,
  Users,
  Shield,
  Zap,
  Smartphone,
  Bluetooth,
  Brain,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  CheckCircle,
  Clock,
  Award,
  FileText,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import { LanguageSwitcher } from "@/components/language-switcher";
import GLBViewer from "@/components/glb-viewer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMenuOpen(false);
  };

  const handleDownload = () => {
    const downloadUrl = "/dentagon.apk";
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "dentagon.apk";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src="/dentagon.jpg"
              alt="Dentagon Logo"
              className="w-8 h-8 rounded-lg object-cover"
            />
            <span className="font-bold text-xl text-gray-900">Dentagon</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              {t("home")}
            </button>

            <button
              onClick={() => scrollToSection("products")}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              {t("products")}
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              {t("features")}
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              {t("team")}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              {t("contact")}
            </button>
            <LanguageSwitcher />
            <Button
              onClick={handleDownload}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium"
            >
              {t("downloadApp")}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors md:hidden"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg md:hidden">
            <nav className="container mx-auto px-4 py-4">
              <ul className="space-y-4">
                <li>
                  <button
                    onClick={() => scrollToSection("hero")}
                    className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                  >
                    {t("home")}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("features")}
                    className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                  >
                    {t("features")}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("products")}
                    className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                  >
                    {t("products")}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("team")}
                    className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                  >
                    {t("team")}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                  >
                    {t("contact")}
                  </button>
                </li>
                <li className="pt-2">
                  <LanguageSwitcher />
                </li>
              </ul>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="pt-24 pb-16 px-4 bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {t("heroTitle1")}
                <br />
                <span className="text-blue-600">{t("heroTitle2")}</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
                {t("heroDescription")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  onClick={handleDownload}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-4 rounded-full text-lg font-semibold inline-flex items-center justify-center"
                >
                  <Download size={20} className="ml-2" />
                  <span className="mr-2">{t("downloadForFree")}</span>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => scrollToSection("features")}
                  className="px-8 py-4 rounded-full text-lg font-semibold border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  {t("learnMore")}
                </Button>
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-6 mt-8 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>{t("freeToUse")}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>{t("noAds")}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>{t("easyToUse")}</span>
                </div>
              </div>
            </div>

            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="w-100 h-100 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-full flex items-center justify-center shadow-2xl overflow-hidden">
                  <div className="w-full h-full">
                    <GLBViewer
                      modelPath="/animations/dentagon_toothbrush.glb"
                      className="w-full h-full"
                      autoRotate={true}
                      enableZoom={true}
                      enablePan={false}
                      enableRotate={true}
                      fov={5}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("productsTitle")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("productsDescription")}
            </p>
          </div>

          <div className="space-y-12">
            {/* Dentagon Mobile App */}
            <div className="bg-gradient-to-r from-purple-50 via-pink-50 to-red-50 p-8 lg:p-12 rounded-3xl">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-1 flex gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center flex-shrink-0">
                    <Smartphone className="text-white" size={36} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {t("mobileApp")}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {t("mobileAppDescription")}
                    </p>
                  </div>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="relative">
                    <div className="w-64 h-80 bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-2 shadow-2xl">
                      <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                        <img
                          src="/app_image.jpg"
                          alt="Dentagon Mobile App"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bluetooth Device */}
            <div className="bg-gradient-to-r from-blue-50 via-cyan-50 to-teal-50 p-8 lg:p-12 rounded-3xl">
              <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
                <div className="flex-1 flex gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl flex items-center justify-center flex-shrink-0">
                    <Bluetooth className="text-white" size={36} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {t("bluetoothDevice")}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      {t("bluetoothDeviceDescription")}
                    </p>
                    <a
                      href="/Dentagon_Prototype_Design_Report.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-colors"
                    >
                      <FileText size={20} />
                      <span>View Prototype Design Report</span>
                    </a>
                  </div>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="w-80 h-96 bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-2 shadow-2xl">
                    <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                      <GLBViewer
                        modelPath="/animations/dentagon.glb"
                        className="w-full h-full"
                        autoRotate={true}
                        enableZoom={true}
                        enablePan={false}
                        enableRotate={true}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Assistant */}
            <div className="bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 p-8 lg:p-12 rounded-3xl">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-1 flex gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center flex-shrink-0">
                    <Brain className="text-white" size={36} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {t("aiAssistant")}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {t("aiAssistantDescription")}
                    </p>
                  </div>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="relative">
                    <div className="w-full max-w-2xl bg-gradient-to-br from-green-200 to-emerald-300 rounded-2xl overflow-hidden shadow-2xl p-2">
                      <video
                        src="/dentagon_bot.mp4"
                        controls
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-auto rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("featuresTitle")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("featuresDescription")}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            {/* Features Grid */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-fr">
              <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-lg transition-shadow flex gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-red-400 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Star className="text-white" size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-gray-900 mb-1">
                    {t("gamifiedExperience")}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Turn brushing into a fun game with rewards and achievements.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-lg transition-shadow flex gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="text-white" size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-gray-900 mb-1">
                    {t("smartReminders")}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Never forget to brush with intelligent notifications.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-lg transition-shadow flex gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="text-white" size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-gray-900 mb-1">
                    {t("progressTracking")}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Monitor your dental health journey with detailed analytics.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-lg transition-shadow flex gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="text-white" size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-gray-900 mb-1">
                    {t("familySharing")}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Create family profiles and track everyone's progress
                    together.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-lg transition-shadow flex gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="text-white" size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-gray-900 mb-1">
                    {t("healthInsights")}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Get personalized recommendations based on your patterns.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-lg transition-shadow flex gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="text-white" size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-gray-900 mb-1">
                    {t("quickSessions")}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Optimized 2 minute sessions with guided instructions.
                  </p>
                </div>
              </div>
            </div>

            {/* Video */}
            <div className="flex-1 lg:sticky lg:top-24 self-start">
              <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-2xl overflow-hidden shadow-2xl p-2">
                <video
                  src="/dentagon_introduction.mp4"
                  controls
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* France Value Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t("franceValueTitle")}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-2 prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="mb-6">{t("franceValueParagraph1")}</p>

                <p className="mb-6">{t("franceValueParagraph2")}</p>

                <p className="mb-6">{t("franceValueParagraph3")}</p>

                <p className="text-lg font-semibold text-gray-900">
                  {t("franceValueParagraph4")}
                </p>
              </div>

              <div className="flex-1 flex justify-center">
                <div className="relative">
                  <div className="w-60 h-60 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center shadow-2xl">
                    <img
                      src="/tooth.png"
                      alt="Friendly tooth character with toothbrush and toothpaste"
                      className="w-64 h-64 object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("teamTitle")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("teamDescription")}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {/* Ahmadreza Moradi - CEO & Co-Founder */}
            <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="w-48 h-48 bg-gradient-to-br from-blue-200 to-purple-300 rounded-lg mx-auto mb-6 overflow-hidden shadow-lg">
                  <img
                    src="/members/Ahmadreza Moradi.png"
                    alt="Ahmadreza Moradi"
                    className="w-full object-cover object-center"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Ahmadreza Moradi
                </h3>
                <p className="text-blue-600 font-semibold text-lg mb-4">
                  CEO & Co-Founder
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  "{t("ahmadrezaQuote")}"
                </p>
                {/* <p className="text-sm text-gray-500 leading-relaxed">
                  {t("ahmadrezaDescription")}
                </p> */}
              </div>
            </div>

            {/* Alireza Ravan - CTO & Co-Founder */}
            <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="w-48 h-48 bg-gradient-to-br from-green-200 to-emerald-300 rounded-lg mx-auto mb-6 overflow-hidden shadow-lg">
                  <img
                    src="/members/Alireza Ravan.png"
                    alt="Alireza Ravan"
                    className="w-full object-cover object-center"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Alireza Ravan
                </h3>
                <p className="text-blue-600 font-semibold text-lg mb-4">
                  CTO & Co-Founder
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  "{t("alirezaQuote")}"
                </p>
                {/* <p className="text-sm text-gray-500 leading-relaxed">
                  {t("alirezaDescription")}
                </p> */}
              </div>
            </div>

            {/* Shamim Chinian - Researcher and Dental Expert */}
            <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="w-48 h-48 bg-gradient-to-br from-purple-200 to-pink-300 rounded-lg mx-auto mb-6 overflow-hidden shadow-lg">
                  <img
                    src="/members/Shamim Chinian.png"
                    alt="Shamim Chinian"
                    className="w-full object-cover object-center"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Shamim Chinian
                </h3>
                <p className="text-blue-600 font-semibold text-lg mb-4">
                  Researcher and Dental Expert
                </p>
                <p className="text-gray-500 leading-relaxed mb-6">
                  "{t("shamimQuote")}"
                </p>
              </div>
            </div>
          </div>

          {/* Working Images Carousel */}
          <div className="mt-16 max-w-6xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {[1, 2, 3, 4, 5].map((index) => (
                  <CarouselItem
                    key={index}
                    className="pl-4 md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                      <img
                        src={`/working-${index}.jpg`}
                        alt={`Working ${index}`}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Working together with leading organizations to drive innovation in
              dental health
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {/* Schoolab */}
            <a
              href="https://www.theschoolab.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col items-center justify-center group"
            >
              <div className="w-full h-32 flex items-center justify-center mb-4">
                <div className="text-3xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                  Schoolab
                </div>
              </div>
              <p className="text-sm text-gray-600 text-center">
                Innovation Studio
              </p>
            </a>

            {/* La French Tech */}
            <a
              href="https://lafrenchtech.gouv.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col items-center justify-center group"
            >
              <div className="w-full h-32 flex items-center justify-center mb-4">
                <div className="text-3xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                  La French Tech
                </div>
              </div>
              <p className="text-sm text-gray-600 text-center">
                French Tech Ecosystem
              </p>
            </a>

            {/* Remolab */}
            <a
              href="https://remolab.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col items-center justify-center group"
            >
              <div className="w-full h-32 flex items-center justify-center mb-4">
                <div className="text-3xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                  Remolab
                </div>
              </div>
              <p className="text-sm text-gray-600 text-center">
                AI Startup Studio
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("faqTitle")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("faqDescription")}
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {t("faq1Question")}
              </h3>
              <p className="text-gray-600">{t("faq1Answer")}</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {t("faq2Question")}
              </h3>
              <p className="text-gray-600">{t("faq2Answer")}</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {t("faq3Question")}
              </h3>
              <p className="text-gray-600">{t("faq3Answer")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      {/* <section
        id="contact"
        className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-700"
      >
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <Mail className="text-white" size={36} />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join our community
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Be part of a growing movement towards better dental health. Get
              tips, updates, and exclusive content delivered to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 border-0 rounded-full focus:outline-none focus:ring-4 focus:ring-white/30 text-gray-900"
              />
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold whitespace-nowrap">
                Subscribe to our newsletter
              </Button>
            </div>

            <p className="text-sm text-blue-200 mt-4">
              Join 10,000+ users who are already improving their dental health
              with Dentagon
            </p>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            {/* Dentagon Info */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <img
                  src="/dentagon.jpg"
                  alt="Dentagon Logo"
                  className="w-10 h-10 rounded-lg object-cover"
                />
                <span className="font-bold text-2xl">Dentagon</span>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
                {t("footerDescription")}
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center space-x-6 mb-8">
              <a
                href="https://www.linkedin.com/company/dentagonco/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/dentagonco"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://youtube.com/@dentagonco"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={24} />
              </a>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-800 pt-6 text-center">
              <p className="text-gray-400 text-sm">{t("copyright")}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
