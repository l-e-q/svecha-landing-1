import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useLanguage } from "@/lib/languageContext";

export default function Testimonials() {
  const { t } = useLanguage();
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const testimonials = [
    {
      text: t('testimonials.items.0.text'),
      name: t('testimonials.items.0.name'),
      position: t('testimonials.items.0.position'),
      initials: t('testimonials.items.0.initials')
    },
    {
      text: t('testimonials.items.1.text'),
      name: t('testimonials.items.1.name'),
      position: t('testimonials.items.1.position'),
      initials: t('testimonials.items.1.initials')
    },
    {
      text: t('testimonials.items.2.text'),
      name: t('testimonials.items.2.name'),
      position: t('testimonials.items.2.position'),
      initials: t('testimonials.items.2.initials')
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t('testimonials.title')}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('testimonials.description')}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-8 h-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.15 + index * 0.05 }}
              variants={fadeInUp}
            >
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-primary font-medium">{testimonial.initials}</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
