import { Link } from "wouter";
import { MapPin, Phone, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/lib/languageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="bg-gray-700 w-9 h-9 rounded-sm flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="8" width="6" height="13" rx="1" fill="currentColor" stroke="none" />
                  <circle cx="12" cy="4.5" r="2.5" fill="currentColor" stroke="none" />
                  <circle cx="12" cy="21" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </div>
              <span className="text-xl font-extralight text-white tracking-wide">Свеча</span>
            </Link>
            <p className="text-gray-400 mb-6">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-light mb-6">{t('footer.services.title')}</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">{t('footer.services.basic')}</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">{t('footer.services.complete')}</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">{t('footer.services.restoration')}</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">{t('footer.services.digital')}</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">{t('footer.services.annual')}</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">{t('footer.services.seasonal')}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-light mb-6">{t('footer.company.title')}</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.company.about')}</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">{t('footer.company.howItWorks')}</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">{t('footer.company.testimonials')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.company.careers')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.company.privacy')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.company.terms')}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-light mb-6">{t('footer.contact.title')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                <span className="text-gray-400 font-light">{t('footer.contact.address')}</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                <span className="text-gray-400 font-light">{t('footer.contact.phone')}</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                <span className="text-gray-400 font-light">{t('footer.contact.email')}</span>
              </li>
            </ul>
            
            <div className="mt-8">
              <h4 className="text-lg font-extralight mb-4">{t('footer.newsletter.title')}</h4>
              <form className="flex">
                <Input 
                  type="email" 
                  placeholder={t('footer.newsletter.placeholder')} 
                  className="rounded-r-none focus:ring-accent text-gray-800" 
                />
                <Button type="submit" className="bg-gray-700 hover:bg-gray-600 rounded-l-none">
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Свеча. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}
