"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";

export type Language = "en" | "fr";

export interface Translations {
  // Header
  home: string;
  features: string;
  products: string;
  team: string;
  contact: string;
  downloadApp: string;

  // Hero Section
  heroTitle1: string;
  heroTitle2: string;
  heroDescription: string;
  downloadForFree: string;
  learnMore: string;
  freeToUse: string;
  noAds: string;
  easyToUse: string;

  // Features Section
  featuresTitle: string;
  featuresDescription: string;
  gamifiedExperience: string;
  gamifiedDescription: string;
  smartReminders: string;
  smartRemindersDescription: string;
  progressTracking: string;
  progressTrackingDescription: string;
  familySharing: string;
  familySharingDescription: string;
  healthInsights: string;
  healthInsightsDescription: string;
  quickSessions: string;
  quickSessionsDescription: string;

  // Products Section
  productsTitle: string;
  productsDescription: string;
  mobileApp: string;
  mobileAppDescription: string;
  bluetoothDevice: string;
  bluetoothDeviceDescription: string;
  aiAssistant: string;
  aiAssistantDescription: string;
  learnMore: string;
  viewScreenshots: string;
  technicalSpecs: string;
  tryDemo: string;

  // Team Section
  teamTitle: string;
  teamDescription: string;
  ahmadrezaQuote: string;
  ahmadrezaDescription: string;
  alirezaQuote: string;
  alirezaDescription: string;
  shamimQuote: string;
  shamimDescription: string;

  // FAQ Section
  faqTitle: string;
  faqDescription: string;
  faq1Question: string;
  faq1Answer: string;
  faq2Question: string;
  faq2Answer: string;
  faq3Question: string;
  faq3Answer: string;

  // Footer
  footerDescription: string;
  product: string;
  mobileAppFooter: string;
  bluetoothDeviceFooter: string;
  aiAssistantFooter: string;
  familyPlans: string;
  company: string;
  aboutUs: string;
  careers: string;
  press: string;
  support: string;
  helpCenter: string;
  privacyPolicy: string;
  termsOfService: string;
  cookiePolicy: string;
  copyright: string;
}

const translations: Record<Language, Translations> = {
  en: {
    // Header
    home: "Home",
    features: "Features",
    products: "Products",
    team: "Team",
    contact: "Contact",
    downloadApp: "Download App",

    // Hero Section
    heroTitle1: "A Brighter Smile Starts",
    heroTitle2: "with One Small Habit",
    heroDescription:
      "We're here to enhance your brushing habit in a fun and consistent manner. With our gamified approach, you'll develop healthy dental habits that last a lifetime. Transform your daily routine into an engaging experience that promotes long-term oral health.",
    downloadForFree: "Download for Free",
    learnMore: "Learn More",
    freeToUse: "Free to use",
    noAds: "No ads",
    easyToUse: "Easy to use",

    // Features Section
    featuresTitle: "Explore our Dentagon solutions",
    featuresDescription:
      "Our innovative features are designed to make dental care fun, engaging, and effective for users of all ages.",
    gamifiedExperience: "Gamified Experience",
    gamifiedDescription:
      "Turn brushing into a fun game with rewards, achievements, and progress tracking. Earn points, unlock badges, and compete with friends to maintain consistent oral hygiene habits.",
    smartReminders: "Smart Reminders",
    smartRemindersDescription:
      "Never forget to brush with intelligent notifications and personalized schedules. Our AI learns your routine and sends timely reminders to keep you on track.",
    progressTracking: "Progress Tracking",
    progressTrackingDescription:
      "Monitor your dental health journey with detailed analytics and insights. Track streaks, view improvement trends, and celebrate your achievements.",
    familySharing: "Family Sharing",
    familySharingDescription:
      "Create family profiles and track everyone's progress together. Perfect for parents who want to encourage good dental habits in their children.",
    healthInsights: "Health Insights",
    healthInsightsDescription:
      "Get personalized recommendations based on your brushing patterns and oral health goals. Receive tips from dental professionals.",
    quickSessions: "Quick Sessions",
    quickSessionsDescription:
      "Optimized 2 minute brushing sessions with guided instructions and tips.",

    // Products Section
    productsTitle: "Our Product Ecosystem",
    productsDescription:
      "A complete suite of tools and technologies designed to revolutionize your dental care routine.",
    mobileApp: "Dentagon Mobile App",
    mobileAppDescription:
      "The complete dental care companion for your smartphone with AI-powered recommendations, habit tracking, and gamified experiences. Available for both iOS and Android devices.",
    bluetoothDevice: "Bluetooth Device & NFC Reader",
    bluetoothDeviceDescription:
      "Connect your smart toothbrush and track brushing sessions automatically. Our advanced sensors provide real-time feedback on brushing technique, pressure, and covered areas.",
    aiAssistant: "AI-Powered Brushing Assistant",
    aiAssistantDescription:
      "Our advanced AI dental assistant provides personalized guidance on your oral health. It answers your questions and analyzes dental radiographs to detect potential issues, offers dietary tips for better oral health, and analyzes your brushing habits to provide real-time feedback.",
    learnMore: "Learn More",
    viewScreenshots: "View Screenshots",
    technicalSpecs: "Technical Specs",
    tryDemo: "Try Demo",

    // Team Section
    teamTitle: "Say hello to our team members",
    teamDescription:
      "We're Dentagon — a small, dedicated team working to make brushing smarter, easier, and part of your everyday life.",
    ahmadrezaQuote: "Revolutionizing Dental Care Through Innovation",
    ahmadrezaDescription:
      "As CEO and Co-Founder, Ahmadreza leads Dentagon's mission to transform dental care through cutting-edge technology and user-centered design.",
    alirezaQuote: "Building the Future of Dental Technology",
    alirezaDescription:
      "As CTO and Co-Founder, Alireza drives the technical vision and development of Dentagon's innovative dental care solutions.",
    shamimQuote: "Advancing Dental Science and Care",
    shamimDescription:
      "Shamim brings deep dental expertise and research insights to ensure Dentagon's solutions are grounded in the latest dental science and best practices.",

    // FAQ Section
    faqTitle: "Frequently asked questions",
    faqDescription:
      "Got questions? We've got answers. Here are some of the most common questions about Dentagon and how it can help improve your oral health.",
    faq1Question: "How does Dentagon track my brushing?",
    faq1Answer:
      "Dentagon uses a combination of manual logging and optional smart device integration to track your brushing habits and provide personalized insights.",
    faq2Question: "Is the app suitable for children?",
    faq2Answer:
      "Yes! Dentagon is designed for all ages with special kid-friendly features, parental controls, and age-appropriate gamification elements.",
    faq3Question: "Do I need special equipment?",
    faq3Answer:
      "No special equipment is required. While we offer optional Bluetooth-enabled devices for enhanced tracking, the core app works with any toothbrush.",

    // Footer
    footerDescription:
      "Making dental care fun, engaging, and effective for everyone through innovative technology.",
    product: "Product",
    mobileAppFooter: "Mobile App",
    bluetoothDeviceFooter: "Bluetooth Device",
    aiAssistantFooter: "AI Assistant",
    familyPlans: "Family Plans",
    company: "Company",
    aboutUs: "About Us",
    careers: "Careers",
    press: "Press",
    support: "Support",
    helpCenter: "Help Center",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    cookiePolicy: "Cookie Policy",
    copyright: "© 2024 Dentagon. All rights reserved.",
  },
  fr: {
    // Header
    home: "Accueil",
    features: "Fonctionnalités",
    products: "Produits",
    team: "Équipe",
    contact: "Contact",
    downloadApp: "Télécharger l'App",

    // Hero Section
    heroTitle1: "Un Sourire Plus Lumineux Commence",
    heroTitle2: "par Une Petite Habitude",
    heroDescription:
      "Nous sommes là pour améliorer votre habitude de brossage de manière amusante et constante. Avec notre approche gamifiée, vous développerez des habitudes dentaires saines qui dureront toute une vie. Transformez votre routine quotidienne en une expérience engageante qui favorise la santé bucco-dentaire à long terme.",
    downloadForFree: "Télécharger Gratuitement",
    learnMore: "En Savoir Plus",
    freeToUse: "Gratuit à utiliser",
    noAds: "Sans publicité",
    easyToUse: "Facile à utiliser",

    // Features Section
    featuresTitle: "Découvrez nos solutions Dentagon",
    featuresDescription:
      "Nos fonctionnalités innovantes sont conçues pour rendre les soins dentaires amusants, engageants et efficaces pour les utilisateurs de tous âges.",
    gamifiedExperience: "Expérience Gamifiée",
    gamifiedDescription:
      "Transformez le brossage en un jeu amusant avec des récompenses, des réalisations et le suivi des progrès. Gagnez des points, débloquez des badges et rivalisez avec vos amis pour maintenir des habitudes d'hygiène bucco-dentaire constantes.",
    smartReminders: "Rappels Intelligents",
    smartRemindersDescription:
      "N'oubliez jamais de vous brosser les dents avec des notifications intelligentes et des horaires personnalisés. Notre IA apprend votre routine et envoie des rappels opportuns pour vous maintenir sur la bonne voie.",
    progressTracking: "Suivi des Progrès",
    progressTrackingDescription:
      "Surveillez votre parcours de santé dentaire avec des analyses détaillées et des insights. Suivez vos séries, visualisez les tendances d'amélioration et célébrez vos réalisations.",
    familySharing: "Partage Familial",
    familySharingDescription:
      "Créez des profils familiaux et suivez les progrès de chacun ensemble. Parfait pour les parents qui veulent encourager de bonnes habitudes dentaires chez leurs enfants.",
    healthInsights: "Insights de Santé",
    healthInsightsDescription:
      "Obtenez des recommandations personnalisées basées sur vos habitudes de brossage et vos objectifs de santé bucco-dentaire. Recevez des conseils de professionnels dentaires.",
    quickSessions: "Sessions Rapides",
    quickSessionsDescription:
      "Sessions de brossage optimisées de 2 minutes avec des instructions guidées et des conseils.",

    // Products Section
    productsTitle: "Notre Écosystème de Produits",
    productsDescription:
      "Une suite complète d'outils et de technologies conçus pour révolutionner votre routine de soins dentaires.",
    mobileApp: "Application Mobile Dentagon",
    mobileAppDescription:
      "Le compagnon complet de soins dentaires pour votre smartphone avec des recommandations alimentées par l'IA, le suivi des habitudes et des expériences gamifiées. Disponible pour les appareils iOS et Android.",
    bluetoothDevice: "Appareil Bluetooth et Lecteur NFC",
    bluetoothDeviceDescription:
      "Connectez votre brosse à dents intelligente et suivez automatiquement les sessions de brossage. Nos capteurs avancés fournissent un retour en temps réel sur la technique de brossage, la pression et les zones couvertes.",
    aiAssistant: "Assistant de Brossage Alimenté par l'IA",
    aiAssistantDescription:
      "Notre assistant dentaire IA avancé fournit des conseils personnalisés sur votre santé bucco-dentaire. Il répond à vos questions et analyse les radiographies dentaires pour détecter les problèmes potentiels, offre des conseils diététiques pour une meilleure santé bucco-dentaire, et analyse vos habitudes de brossage pour fournir un retour en temps réel.",
    learnMore: "En Savoir Plus",
    viewScreenshots: "Voir les Captures d'Écran",
    technicalSpecs: "Spécifications Techniques",
    tryDemo: "Essayer la Démo",

    // Team Section
    teamTitle: "Faites connaissance avec nos membres d'équipe",
    teamDescription:
      "Nous sommes Dentagon — une petite équipe dévouée qui travaille à rendre le brossage plus intelligent, plus facile et partie intégrante de votre vie quotidienne.",
    ahmadrezaQuote: "Révolutionner les Soins Dentaires par l'Innovation",
    ahmadrezaDescription:
      "En tant que PDG et Co-fondateur, Ahmadreza dirige la mission de Dentagon de transformer les soins dentaires grâce à une technologie de pointe et un design centré sur l'utilisateur.",
    alirezaQuote: "Construire l'Avenir de la Technologie Dentaire",
    alirezaDescription:
      "En tant que CTO et Co-fondateur, Alireza dirige la vision technique et le développement des solutions de soins dentaires innovantes de Dentagon.",
    shamimQuote: "Faire Progresser la Science et les Soins Dentaires",
    shamimDescription:
      "Shamim apporte une expertise dentaire approfondie et des insights de recherche pour s'assurer que les solutions de Dentagon sont fondées sur la dernière science dentaire et les meilleures pratiques.",

    // FAQ Section
    faqTitle: "Questions fréquemment posées",
    faqDescription:
      "Des questions ? Nous avons des réponses. Voici quelques-unes des questions les plus courantes sur Dentagon et comment cela peut vous aider à améliorer votre santé bucco-dentaire.",
    faq1Question: "Comment Dentagon suit-il mon brossage ?",
    faq1Answer:
      "Dentagon utilise une combinaison de journalisation manuelle et d'intégration optionnelle d'appareils intelligents pour suivre vos habitudes de brossage et fournir des insights personnalisés.",
    faq2Question: "L'application est-elle adaptée aux enfants ?",
    faq2Answer:
      "Oui ! Dentagon est conçu pour tous les âges avec des fonctionnalités adaptées aux enfants, des contrôles parentaux et des éléments de gamification appropriés à l'âge.",
    faq3Question: "Ai-je besoin d'équipement spécial ?",
    faq3Answer:
      "Aucun équipement spécial n'est requis. Bien que nous offrions des appareils compatibles Bluetooth optionnels pour un suivi amélioré, l'application principale fonctionne avec n'importe quelle brosse à dents.",

    // Footer
    footerDescription:
      "Rendre les soins dentaires amusants, engageants et efficaces pour tous grâce à une technologie innovante.",
    product: "Produit",
    mobileAppFooter: "Application Mobile",
    bluetoothDeviceFooter: "Appareil Bluetooth",
    aiAssistantFooter: "Assistant IA",
    familyPlans: "Plans Familiaux",
    company: "Entreprise",
    aboutUs: "À Propos",
    careers: "Carrières",
    press: "Presse",
    support: "Support",
    helpCenter: "Centre d'Aide",
    privacyPolicy: "Politique de Confidentialité",
    termsOfService: "Conditions d'Utilisation",
    cookiePolicy: "Politique des Cookies",
    copyright: "© 2024 Dentagon. Tous droits réservés.",
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  t: (key: keyof Translations) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === "en" ? "fr" : "en"));
  }, []);

  const t = useCallback(
    (key: keyof Translations) => {
      return translations[language][key];
    },
    [language]
  );

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, toggleLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
