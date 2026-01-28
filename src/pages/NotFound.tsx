import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4 text-foreground">Страница не найдена</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Запрашиваемая страница не существует или была перемещена.
        </p>
        <Button asChild className="gradient-primary">
          <Link to="/">
            <Home className="w-4 h-4 mr-2" />
            На главную
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
