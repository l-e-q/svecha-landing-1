import { useState, useEffect } from "react";
import { Menu, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useLanguage } from "@/lib/languageContext";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage, t, isChangingLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`fixed w-full bg-white bg-opacity-95 z-50 transition-all duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="container mx-auto px-6 md:px-12 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-gray-100 w-12 h-12 rounded-sm flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-gray-800" viewBox="0 0 50 50" fill="none">
                {/* Основание свечи */}
                <ellipse cx="25" cy="43" rx="10" ry="3" fill="#808080" opacity="0.15" />
                
                {/* Тело свечи */}
                <rect x="20" y="15" width="10" height="28" rx="2" fill="#333333" />
                <rect x="21" y="15" width="8" height="28" rx="1" fill="#5A5A5A" />
                
                {/* Фитиль */}
                <line x1="25" y1="5" x2="25" y2="15" stroke="#333333" strokeWidth="1.5" />
                
                {/* Пламя */}
                <path d="M25 5C25 5 22 9 22 11C22 13 23.5 15 25 15C26.5 15 28 13 28 11C28 9 25 5 25 5Z" fill="#6E6E6E" />
                
                {/* Блик на свече */}
                <rect x="23" y="18" width="1" height="22" rx="0.5" fill="#CCCCCC" opacity="0.3" />
                
                {/* Круг вокруг */}
                <circle cx="25" cy="25" r="19" stroke="#444444" strokeWidth="0.7" fill="none" strokeDasharray="1 2" />
              </svg>
            </div>
            <span className="text-xl font-extralight text-gray-800 tracking-widest">СВЕЧА</span>
          </Link>
          
          <div className="hidden md:flex items-center justify-end flex-1 ml-16">
            <nav className="flex-1 flex justify-center">
              <ul className="flex items-center space-x-12">
                <li><a href="#services" className="text-primary hover:text-secondary transition-colors font-light text-sm uppercase tracking-wider">
                  {t('menu.services')}
                </a></li>
                <li><a href="#how-it-works" className="text-primary hover:text-secondary transition-colors font-light text-sm uppercase tracking-wider">
                  {t('menu.how_it_works')}
                </a></li>
                <li><a href="#pricing" className="text-primary hover:text-secondary transition-colors font-light text-sm uppercase tracking-wider">
                  {t('menu.pricing')}
                </a></li>
                <li><a href="#testimonials" className="text-primary hover:text-secondary transition-colors font-light text-sm uppercase tracking-wider">
                  {t('menu.testimonials')}
                </a></li>
                <li>
                  <button 
                    onClick={toggleLanguage} 
                    className="text-primary hover:text-secondary transition-colors font-light text-sm uppercase tracking-wider"
                    disabled={isChangingLanguage}
                  >
                    {t('menu.language')}
                  </button>
                </li>
              </ul>
            </nav>
            <div className="ml-12">
              <a href="#contact">
                <Button 
                  className="bg-primary hover:bg-primary/90 text-white min-w-[136px] font-light text-sm"
                  disabled={isChangingLanguage}
                >
                  {t('menu.contact')}
                </Button>
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleLanguage}
              className="relative"
              aria-label="Изменить язык"
              disabled={isChangingLanguage}
            >
              <Globe className="h-5 w-5 text-primary" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMobileMenu}
              aria-label="Открыть меню"
              disabled={isChangingLanguage}
            >
              <Menu className="h-6 w-6 text-primary" />
            </Button>
          </div>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-2">
            <nav>
              <ul className="flex flex-col space-y-4">
                <li><a href="#services" className="text-primary hover:text-secondary transition-colors font-light" onClick={() => setMobileMenuOpen(false)}>
                  {t('menu.services')}
                </a></li>
                <li><a href="#how-it-works" className="text-primary hover:text-secondary transition-colors font-light" onClick={() => setMobileMenuOpen(false)}>
                  {t('menu.how_it_works')}
                </a></li>
                <li><a href="#pricing" className="text-primary hover:text-secondary transition-colors font-light" onClick={() => setMobileMenuOpen(false)}>
                  {t('menu.pricing')}
                </a></li>
                <li><a href="#testimonials" className="text-primary hover:text-secondary transition-colors font-light" onClick={() => setMobileMenuOpen(false)}>
                  {t('menu.testimonials')}
                </a></li>
                <li className="pt-2">
                  <a 
                    href="#contact" 
                    className="inline-block px-5 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors font-light w-full text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t('menu.contact')}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
