import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/languageContext";

export default function HowItWorks() {
  const { t } = useLanguage();
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const steps = [
    {
      number: 1,
      title: t('how.step1.title'),
      description: t('how.step1.description')
    },
    {
      number: 2,
      title: t('how.step2.title'),
      description: t('how.step2.description')
    },
    {
      number: 3,
      title: t('how.step3.title'),
      description: t('how.step3.description')
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1585437184578-f77f07dfe32b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Фон" 
          className="w-full h-full object-cover grayscale" 
        />
      </div>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-light text-primary mb-4">{t('how.title')}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            {t('how.description')}
          </p>
        </motion.div>
        
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[1px] bg-gray-400 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className="flex flex-col items-center text-center h-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: 0.15 + index * 0.05 }}
                variants={fadeInUp}
              >
                <div className="w-16 h-16 rounded-sm bg-white flex items-center justify-center border border-gray-300 mb-6 shadow-md">
                  <span className="text-xl font-extralight text-gray-600">{step.number}</span>
                </div>
                <h3 className="text-xl font-light text-primary mb-3">{step.title}</h3>
                <p className="text-gray-600 font-light">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div 
          className="mt-16 bg-white rounded-sm shadow-md p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          variants={fadeInUp}
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-light text-primary mb-4">{t('how.cta.title')}</h3>
              <p className="text-gray-600 mb-6 font-light">
                {t('how.cta.description')}
              </p>
              <a href="#contact">
                <Button className="bg-gray-800 hover:bg-gray-700 text-white font-light px-6 rounded-sm">
                  {t('how.cta.button')}
                </Button>
              </a>
            </div>
            <div className="md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1603280273171-c73149698e4a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Уход за могилами" 
                className="w-full h-auto rounded-sm shadow grayscale" 
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}