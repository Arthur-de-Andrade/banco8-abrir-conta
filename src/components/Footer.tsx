import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and links */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <h3 className="text-2xl font-bold text-bank-primary-light">Banco 8</h3>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Termos de uso
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacidade
              </a>
            </div>
          </div>

          {/* CTA Secondary */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 mb-4">Já é cliente?</p>
            <Button variant="outline" className="border-bank-primary-light text-bank-primary-light hover:bg-bank-primary-light hover:text-gray-900">
              Faça login
            </Button>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Banco 8. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;