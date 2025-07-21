import { Button } from "@/components/ui/button";
import { Quote, Star } from "lucide-react";

export const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "A gente não conseguia dar conta do WhatsApp. Depois da IA da NeuroScale, minha agenda lotou e a secretária tem paz.",
      author: "Dra. Fernanda",
      profession: "Clínica da Coluna",
      rating: 5
    },
    {
      quote: "Uso no meu escritório previdenciário. Responde o cliente, explica os serviços e já agenda. E o melhor: funciona enquanto estou no INSS.",
      author: "Dr. Lucas",
      profession: "Advogado especialista em aposentadoria",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Quem já usa, <span className="text-primary">não vive sem</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-background p-8 rounded-xl border border-border relative animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Quote className="w-8 h-8 text-primary mb-4" />
              
              <p className="text-lg mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-primary">{testimonial.author}</p>
                  <p className="text-muted-foreground">{testimonial.profession}</p>
                </div>
                
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-current" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="cta" size="xl">
            QUERO A IA NO MEU WHATSAPP
          </Button>
        </div>
      </div>
    </section>
  );
};