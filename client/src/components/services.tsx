import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Droplets, Leaf, Hammer, Clock, Calendar, ImagePlus } from "lucide-react";
import { useLanguage } from "@/lib/languageContext";

export default function Services() {
  const { t } = useLanguage();

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const services = [
    {
      title: "Базовая уборка",
      description: "Регулярная уборка территории, удаление мусора, сорняков и промывка памятника.",
      price: "От 75 BYN",
      image: "/images/basic-cleaning.png",
      icon: <Droplets className="h-6 w-6" />
    },
    {
      title: "Комплексный уход",
      description: "Полный сервис, включающий уборку, посадку цветов, полив и сезонное оформление.",
      price: "От 120 BYN",
      image: "/images/complex-care.png",
      icon: <Leaf className="h-6 w-6" />
    },
    {
      title: "Реставрация памятников",
      description: "Профессиональная реставрация памятников, надгробий и прилегающих элементов.",
      price: "Индивидуальная стоимость",
      image: "/images/monument-restoration.png",
      icon: <Hammer className="h-6 w-6" />
    },
    {
      title: "Фото-отчёт",
      description: "Профессиональная фотосъёмка до и после выполнения работ с детальным отчётом о проведённых мероприятиях на могиле.",
      price: "Индивидуальные пакеты",
      image: "/images/digital-memorial.png",
      icon: <ImagePlus className="h-6 w-6" />
    },
    {
      title: "Годовой уход",
      description: "Комплексное обслуживание в течение всего года с регулярными визитами, обслуживанием и сезонным уходом.",
      price: "От 290 BYN",
      image: "/images/annual-care.png",
      icon: <Calendar className="h-6 w-6" />
    },
    {
      title: "Сезонные услуги",
      description: "Специальные сезонные услуги, включая уборку снега, праздничное оформление и обслуживание к особым датам.",
      price: "От 40 BYN",
      image: "/images/seasonal-services.png",
      icon: <Clock className="h-6 w-6" />
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t('services.title')}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('services.description')}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className={`rounded-lg border border-muted overflow-hidden motion-component min-h-[380px] service-card ${service.title === "Фото-отчёт" ? "relative" : "bg-white"}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.15 + index * 0.05 }}
              variants={fadeInUp}
            >
              {service.title === "Фото-отчёт" ? (
                <>
                  <div className="absolute inset-0 w-full h-full">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80"></div>
                  <div className="relative h-full p-6 flex flex-col">
                    <div className="mt-auto">
                      <div className="icon-box bg-white/95">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-semibold text-white mb-3 drop-shadow-md tracking-wide">{service.title}</h3>
                      <div className="bg-black/60 backdrop-blur-sm p-4 rounded mb-4 shadow-md">
                        <p className="text-white text-base">
                          {service.description}
                        </p>
                      </div>
                      <div className="flex items-center text-sm text-white bg-gray-800/90 inline-block px-4 py-2 rounded backdrop-blur-sm shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                        </svg>
                        <span>{service.price}</span>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="h-44 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex-grow bg-white">
                    <div className="icon-box">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-secondary" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                      </svg>
                      <span>{service.price}</span>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#pricing">
            <Button className="bg-secondary hover:bg-secondary/90 text-white inline-flex items-center justify-center px-8 py-3 shadow-md hover:shadow-lg">
              <span>{t('services.button')}</span>
              <ChevronRight className="h-5 w-5 ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
