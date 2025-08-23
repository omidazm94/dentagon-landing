import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";

export const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      onClick={toggleLanguage}
      variant="ghost"
      size="sm"
      className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
    >
      <Languages size={16} />
      <span className="font-medium">{language === "en" ? "EN" : "FR"}</span>
    </Button>
  );
};
