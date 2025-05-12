import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useLanguage } from "@/lib/languageContext";

export default function Pricing() {
  const { t } = useLanguage();
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const pricingPackages = [
    {
      title: "Базовый визит",
      price: "75",
      frequency: "Разовое обслуживание",
      features: [
        "Уборка мусора и сорняков",
        "Мойка памятника и территории",
        "Отчет о состоянии",
        "Подробная фотодокументация"
      ]
    },
    {
      title: "Полный уход",
      price: "120",
      frequency: "Разовое обслуживание",
      features: [
        "Всё включено в Базовый пакет",
        "Посадка и полив цветов",
        "Зажжение памятной свечи",
        "Премиальный фотоотчет"
      ]
    },
    {
      title: "Годовой уход",
      price: "290",
      frequency: "Годовой пакет (4 визита)",
      popular: true,
      features: [
        "Ежеквартальное обслуживание",
        "Сезонные цветы и декорации",
        "Регулярное зажжение свечей",
        "Один дополнительный визит по запросу",
        "Цифровой фотожурнал"
      ]
    },
    {
      title: "Трехлетний план",
      price: "1299",
      frequency: "Долгосрочный уход (3 года)",
      features: [
        "Все преимущества Годового ухода",
        "Приоритетное планирование",
        "Два дополнительных визита в год",
        "Включена мелкая реставрация",
        "Премиальный цифровой мемориал"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible" 
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t('pricing.title')}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('pricing.description')}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPackages.map((pkg, index) => (
            <motion.div 
              key={index} 
              className={`bg-white rounded-lg overflow-hidden border border-gray-100 flex flex-col relative pricing-card ${pkg.popular ? 'border-secondary' : ''}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.15 + index * 0.05 }}
              variants={fadeInUp}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-secondary text-white px-3 py-1 text-xs font-medium rounded-bl-lg">
                  {t('pricing.popular')}
                </div>
              )}
              <div className={`p-6 border-b ${pkg.popular ? 'bg-gray-50' : ''}`}>
                <h3 className="text-xl font-semibold text-primary mb-2">{pkg.title}</h3>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-secondary">{pkg.price}</span>
                  <span className="text-lg text-gray-500 ml-1">BYN</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">{pkg.frequency}</p>
              </div>
              
              <div className="p-6 flex-grow">
                <ul className="space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-6 border-t">
                <a href="#contact">
                  <Button 
                    className={`w-full ${pkg.popular ? 'bg-secondary hover:bg-secondary/90 text-white' : 'bg-white hover:bg-secondary hover:text-white text-secondary border border-secondary'}`}
                  >
                    {t('pricing.button')}
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-12 bg-gray-100 rounded-lg p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          variants={fadeInUp}
        >
          <h3 className="text-xl font-semibold text-primary mb-4">{t('pricing.cta.title')}</h3>
          <p className="text-gray-600 mb-4">
            {t('pricing.cta.description')}
          </p>
          <a href="#contact">
            <Button className="bg-primary hover:bg-primary/90 text-white">
              {t('pricing.cta.button')}
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
