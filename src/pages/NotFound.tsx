
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "../components/ui/button";
import { ShieldX } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cctv-dark">
      <div className="text-center max-w-md px-6">
        <div className="bg-cctv-muted rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6">
          <ShieldX className="h-10 w-10 text-cctv-accent" />
        </div>
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Surveillance area not found
        </p>
        <Button asChild>
          <a href="/">Return to Security Dashboard</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
