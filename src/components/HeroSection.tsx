import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import creditCardImage from "@/assets/credit-card.png";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-bank-primary via-bank-primary-light to-purple-600 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Cartão sem tarifas e conta digital 
                <span className="text-white/90"> grátis</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
                Abra sua conta em 5 minutos, direto do celular.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-4 max-w-md">
              <Input
                type="text"
                placeholder="Nome completo"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30"
                required
              />
              <Input
                type="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30"
                required
              />
              <Button 
                type="submit" 
                variant="outline-light" 
                size="lg" 
                className="w-full font-semibold"
              >
                Quero meu cartão
              </Button>
            </form>
          </div>

          {/* Right Column - Card Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-3xl blur-xl transform rotate-6"></div>
              <img 
                src={creditCardImage} 
                alt="Cartão de crédito Banco 8"
                className="relative z-10 w-80 lg:w-96 h-auto transform hover:scale-105 transition-transform duration-300 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;