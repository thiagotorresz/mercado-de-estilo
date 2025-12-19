import { Search, ShoppingCart, Heart, Menu, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '@/contexts/CartContext';
import { useState } from 'react';

export function Header() {
  const { cartCount, favorites } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-10 h-10 bg-primary-foreground rounded-lg flex items-center justify-center">
              <span className="text-primary font-extrabold text-xl">M</span>
            </div>
            <span className="hidden sm:block text-primary-foreground font-bold text-xl">
              MercadoTop
            </span>
          </Link>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-2xl">
            <div className="relative">
              <Input
                type="text"
                placeholder="Buscar produtos, marcas e muito mais..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-10 pl-4 pr-12 rounded-md bg-card border-0 text-card-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-accent"
              />
              <Button
                type="submit"
                size="sm"
                className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 p-0 bg-secondary hover:bg-secondary/80"
              >
                <Search className="h-4 w-4 text-secondary-foreground" />
              </Button>
            </div>
          </form>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Link to="/favorites">
              <Button
                variant="ghost"
                size="icon"
                className="relative text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Heart className="h-5 w-5" />
                {favorites.length > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center animate-scale-in">
                    {favorites.length}
                  </span>
                )}
              </Button>
            </Link>

            <Link to="/cart">
              <Button
                variant="ghost"
                size="icon"
                className="relative text-primary-foreground hover:bg-primary-foreground/10"
              >
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center animate-scale-in">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>

            <Button
              variant="ghost"
              size="icon"
              className="text-primary-foreground hover:bg-primary-foreground/10"
            >
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Categories Bar */}
      <div className="bg-primary-foreground/5 border-t border-primary-foreground/10">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-6 h-10 overflow-x-auto text-sm">
            <Link
              to="/?category=Todos"
              className="text-primary-foreground/90 hover:text-primary-foreground whitespace-nowrap transition-colors"
            >
              Todos
            </Link>
            <Link
              to="/?category=Roupas"
              className="text-primary-foreground/90 hover:text-primary-foreground whitespace-nowrap transition-colors"
            >
              Roupas
            </Link>
            <Link
              to="/?category=Calçados"
              className="text-primary-foreground/90 hover:text-primary-foreground whitespace-nowrap transition-colors"
            >
              Calçados
            </Link>
            <Link
              to="/?category=Utensílios"
              className="text-primary-foreground/90 hover:text-primary-foreground whitespace-nowrap transition-colors"
            >
              Utensílios
            </Link>
            <Link
              to="/?category=Ofertas"
              className="text-primary-foreground font-semibold whitespace-nowrap"
            >
              🔥 Ofertas
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
