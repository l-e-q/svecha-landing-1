import { motion } from "framer-motion";
import { Clock, MapPin, HelpCircle } from "lucide-react";
import { useLanguage } from "@/lib/languageContext";

export default function Problems() {
  const { t } = useLanguage();
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t('problems.title')}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('problems.description')}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Problem Card 1 */}
          <motion.div 
            className="bg-white rounded-lg p-8 motion-component min-h-[320px] feature-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            variants={fadeInUp}
          >
            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-6">
              <Clock className="h-7 w-7 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-3">{t('problems.card1.title')}</h3>
            <p className="text-gray-600">
              {t('problems.card1.text')}
            </p>
          </motion.div>
          
          {/* Problem Card 2 */}
          <motion.div 
            className="bg-white rounded-lg p-8 motion-component min-h-[320px] feature-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            variants={fadeInUp}
          >
            <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center mb-6">
              <MapPin className="h-7 w-7 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-3">{t('problems.card2.title')}</h3>
            <p className="text-gray-600">
              {t('problems.card2.text')}
            </p>
          </motion.div>
          
          {/* Problem Card 3 */}
          <motion.div 
            className="bg-white rounded-lg p-8 motion-component min-h-[320px] feature-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            variants={fadeInUp}
          >
            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-6">
              <HelpCircle className="h-7 w-7 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-3">{t('problems.card3.title')}</h3>
            <p className="text-gray-600">
              {t('problems.card3.text')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
