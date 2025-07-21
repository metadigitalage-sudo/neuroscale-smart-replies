import { Button } from "@/components/ui/button";
import { MessageCircle, Clock, Zap } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
  return (
    <section className="bg-gradient-hero min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Você está <span className="text-primary">perdendo clientes</span> enquanto lê isso.
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground leading-relaxed">
            IA no seu WhatsApp que responde, qualifica e agenda sozinha — enquanto você dorme, opera ou está em audiência.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg">
              <Clock className="w-5 h-5 text-primary" />
              <span className="font-medium">Funciona 24h por dia</span>
            </div>
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg">
              <Zap className="w-5 h-5 text-accent" />
              <span className="font-medium">Instalação em 1 dia</span>
            </div>
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg">
              <MessageCircle className="w-5 h-5 text-primary" />
              <span className="font-medium">Zero complicação técnica</span>
            </div>
          </div>
          
          <Button variant="cta" size="xl" className="w-full lg:w-auto">
            QUERO ATIVAR A IA AGORA
          </Button>
        </div>
        
        <div className="hidden lg:block animate-slide-up">
          <img 
            src={heroImage} 
            alt="IA no WhatsApp" 
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-accent/10 rounded-full blur-3xl"></div>
    </section>
  );
};