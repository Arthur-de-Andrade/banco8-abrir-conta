import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-bank-primary">Banco 8</h1>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-gray-600 hover:text-bank-primary">
            Login
          </Button>
          <Button variant="hero" size="lg">
            Abra sua conta
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;