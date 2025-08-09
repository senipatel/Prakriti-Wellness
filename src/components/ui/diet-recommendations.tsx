import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Apple, XCircle, CheckCircle } from "lucide-react";

const dietRecommendations = {
  vata: {
    recommended: [
      "Warm, cooked foods",
      "Sweet, sour, and salty tastes",
      "Healthy oils and fats",
      "Cooked grains (rice, quinoa)",
      "Root vegetables",
      "Nuts and seeds",
      "Dairy products"
    ],
    avoid: [
      "Cold or frozen foods",
      "Raw vegetables",
      "Bitter and astringent foods",
      "Dry snacks",
      "Caffeine",
      "Carbonated drinks",
      "Light, dry foods"
    ]
  },
  pitta: {
    recommended: [
      "Cool or room temperature foods",
      "Sweet, bitter, and astringent tastes",
      "Fresh vegetables and fruits",
      "Basmati rice",
      "Coconut products",
      "Mint and cilantro",
      "Milk and ghee"
    ],
    avoid: [
      "Hot, spicy foods",
      "Sour or fermented foods",
      "Red meat",
      "Hot spices",
      "Alcohol",
      "Coffee",
      "Salty foods"
    ]
  },
  kapha: {
    recommended: [
      "Light, warm foods",
      "Spicy, bitter, and astringent tastes",
      "Leafy greens",
      "Beans and legumes",
      "Honey",
      "Light grains (quinoa, barley)",
      "Lean proteins"
    ],
    avoid: [
      "Heavy, cold foods",
      "Dairy products",
      "Sweet foods",
      "Oily or fried foods",
      "Red meat",
      "Nuts and seeds",
      "Ice cream and frozen desserts"
    ]
  }
};

interface DietRecommendationsProps {
  dominantDosha: string;
}

export const DietRecommendations = ({ dominantDosha }: DietRecommendationsProps) => {
  const recommendations = dietRecommendations[dominantDosha as keyof typeof dietRecommendations];
  const capitalizedDosha = dominantDosha.charAt(0).toUpperCase() + dominantDosha.slice(1);

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary" />
            Recommended Foods
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {recommendations.recommended.map((food, index) => (
              <li key={index} className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-primary" />
                {food}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <XCircle className="h-5 w-5 text-destructive" />
            Foods to Avoid
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {recommendations.avoid.map((food, index) => (
              <li key={index} className="flex items-center gap-2 text-sm">
                <XCircle className="h-4 w-4 text-destructive" />
                {food}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};
