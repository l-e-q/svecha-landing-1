import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react";
import { useLanguage } from "@/lib/languageContext";

export default function ContactForm() {
  const { t } = useLanguage();
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const { toast } = useToast();
  
  const { register, handleSubmit, control, reset, formState: { errors } } = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      service: "",
      message: ""
    }
  });

  const mutation = useMutation({
    mutationFn: (data: any) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: async (response) => {
      const data = await response.json();
      toast({
        title: t('contact.toast.success.title'),
        description: data.message,
        variant: "default",
      });
      reset();
    },
    onError: (error) => {
      toast({
        title: t('contact.toast.error.title'),
        description: error instanceof Error ? error.message : t('contact.toast.error.message'),
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: any) => {
    mutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t('contact.title')}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-12">
          <motion.div 
            className="md:w-2/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            variants={fadeInUp}
          >
            <div className="bg-white rounded-lg shadow-md p-8 h-full">
              <h3 className="text-2xl font-semibold text-primary mb-6">{t('contact.info.title')}</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center mr-4 mt-1">
                    <MapPin className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary mb-1">{t('contact.info.address.title')}</h4>
                    <p className="text-gray-600">{t('contact.info.address.content')}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center mr-4 mt-1">
                    <Phone className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary mb-1">{t('contact.info.phone.title')}</h4>
                    <p className="text-gray-600">{t('contact.info.phone.content')}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center mr-4 mt-1">
                    <Mail className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary mb-1">{t('contact.info.email.title')}</h4>
                    <p className="text-gray-600">{t('contact.info.email.content')}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center mr-4 mt-1">
                    <Clock className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary mb-1">{t('contact.info.hours.title')}</h4>
                    <p className="text-gray-600">{t('contact.info.hours.weekdays')}</p>
                    <p className="text-gray-600">{t('contact.info.hours.weekend')}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium text-primary mb-4">{t('contact.info.social')}</h4>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeInUp}
          >
            <div className="bg-white rounded-lg shadow-md p-8 h-full">
              <h3 className="text-2xl font-semibold text-primary mb-6">{t('contact.form.title')}</h3>
              
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-light">{t('contact.form.name.label')}</Label>
                    <Input 
                      id="name" 
                      placeholder={t('contact.form.name.placeholder')} 
                      {...register("name")} 
                      className={`font-light ${errors.name ? "border-red-500" : ""}`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm font-light">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-light">{t('contact.form.email.label')}</Label>
                    <Input 
                      id="email" 
                      placeholder={t('contact.form.email.placeholder')} 
                      {...register("email")} 
                      className={`font-light ${errors.email ? "border-red-500" : ""}`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm font-light">{errors.email.message}</p>
                    )}
                  </div>
                </div>
                
                <div className="mb-6 space-y-2">
                  <Label htmlFor="service" className="font-light">{t('contact.form.service.label')}</Label>
                  <Controller
                    name="service"
                    control={control}
                    render={({ field }) => (
                      <Select
                        defaultValue={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger id="service" className="w-full font-light">
                          <SelectValue placeholder={t('contact.form.service.placeholder')} />
                        </SelectTrigger>
                        <SelectContent className="font-light">
                          <SelectItem value="basic">{t('contact.form.service.options.basic')}</SelectItem>
                          <SelectItem value="complete">{t('contact.form.service.options.complete')}</SelectItem>
                          <SelectItem value="annual">{t('contact.form.service.options.annual')}</SelectItem>
                          <SelectItem value="three-year">{t('contact.form.service.options.three_year')}</SelectItem>
                          <SelectItem value="custom">{t('contact.form.service.options.custom')}</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.service && (
                    <p className="text-red-500 text-sm font-light">{errors.service.message}</p>
                  )}
                </div>
                
                <div className="mb-6 space-y-2">
                  <Label htmlFor="message">{t('contact.form.message.label')}</Label>
                  <Textarea 
                    id="message" 
                    rows={5} 
                    placeholder={t('contact.form.message.placeholder')} 
                    {...register("message")} 
                    className={errors.message ? "border-red-500" : ""}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm">{errors.message.message}</p>
                  )}
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-secondary hover:bg-secondary/90 text-white"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? t('contact.form.sending') : t('contact.form.submit')}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
