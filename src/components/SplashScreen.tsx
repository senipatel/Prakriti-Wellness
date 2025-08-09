import { Flower2 } from "lucide-react";

export const SplashScreen = () => {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="text-center space-y-4">
        <Flower2 className="h-16 w-16 mx-auto animate-spin text-primary" />
        <h1 className="text-3xl font-bold text-primary">Prakriti Wellness</h1>
        <p className="text-muted-foreground">Discovering your true nature...</p>
      </div>
    </div>
  );
};
