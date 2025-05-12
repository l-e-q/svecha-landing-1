import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/languageContext";

export default function Hero() {
  const { t, isChangingLanguage } = useLanguage();

  return (
    <section className="hero-gradient pt-32 pb-20 md:pt-44 md:pb-32 relative">
      {/* Изображение кладбища на заднем плане - на всю ширину для десктопа */}
      <div className="absolute inset-0 w-full h-full z-0 hidden md:block overflow-hidden">
        <img 
          src="/cemetery.jpg" 
          alt="Ухоженное кладбище с надгробиями" 
          className="w-full h-full object-cover object-center absolute inset-0"
          loading="eager"
          width="1200"
          height="800"
        />
        {/* Затемнение для лучшего контраста контента поверх изображения */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Изображение для мобильных устройств */}
      <div className="absolute inset-0 w-full h-full z-0 md:hidden">
        <img 
          src="/cemetery.jpg" 
          alt="Ухоженное кладбище с надгробиями" 
          className="w-full h-full object-cover object-center absolute inset-0"
          loading="eager"
          width="700"
          height="450"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="relative">

          <div className="flex flex-col md:flex-row items-center relative z-10">
            <motion.div 
              className="w-full md:w-[700px] h-auto mb-8 md:mb-0 backdrop-blur-sm bg-white/75 md:bg-white/75 rounded-sm md:rounded-md overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {/* Содержимое внутри фиксированного контейнера с ограниченной высотой и шириной */}
              <div className="p-8 md:p-16 h-full flex flex-col justify-between">
                <div className="mb-auto">
                  <h1 className="text-4xl md:text-5xl font-light text-primary leading-tight mb-6">
                    <span dangerouslySetInnerHTML={{ __html: t('hero.title') }} />
                  </h1>
                  <p className="text-lg text-gray-600 mb-8 font-light">
                    {t('hero.description')}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-auto">
                  <a href="#services">
                    <Button 
                      className="w-full sm:w-auto px-6 py-5 bg-secondary hover:bg-secondary/90 text-white shadow-md hover:shadow-lg transition-all min-w-[150px] font-light"
                      disabled={isChangingLanguage}
                    >
                      {t('hero.button.explore')}
                    </Button>
                  </a>
                  <a href="#contact">
                    <Button 
                      variant="outline" 
                      className="w-full sm:w-auto px-6 py-5 border-secondary text-secondary hover:bg-secondary/5 min-w-[150px] font-light"
                      disabled={isChangingLanguage}
                    >
                      {t('hero.button.contact')}
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
            {/* Пустой блок для симметрии на десктопе */}
            <div className="md:w-[50%] hidden md:block"></div>

            {/* Блок со статистикой */}
            <div className="absolute -bottom-8 right-4 md:right-16 bg-white/90 backdrop-blur-sm p-4 rounded-md shadow-md z-20 hidden md:block">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-sm flex items-center justify-center bg-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-light">Нам доверяют</p>
                  <p className="font-light text-primary">1000+ семей</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}