import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Brain, List, AlertTriangle } from "lucide-react";

interface ResultCardProps {
  dosha: string;
  percentage: number;
  description: string;
}

const doshaInfo = {
  vata: {
    do: [
      "Maintain a regular daily routine",
      "Practice gentle, calming exercises",
      "Keep warm and avoid cold",
      "Eat warm, nourishing foods",
      "Practice meditation and deep breathing"
    ],
    dont: [
      "Skip meals",
      "Stay up too late",
      "Overexert yourself",
      "Consume too much caffeine",
      "Expose yourself to cold and wind"
    ]
  },
  pitta: {
    do: [
      "Stay cool and avoid overheating",
      "Practice moderate exercise",
      "Eat cooling, fresh foods",
      "Take time to relax",
      "Maintain work-life balance"
    ],
    dont: [
      "Skip meals",
      "Work without breaks",
      "Consume spicy foods in excess",
      "Get too competitive",
      "Stay in the sun too long"
    ]
  },
  kapha: {
    do: [
      "Exercise regularly and vigorously",
      "Try new activities",
      "Keep a varied routine",
      "Eat light, warm foods",
      "Rise early in the morning"
    ],
    dont: [
      "Oversleep",
      "Stay inactive for long periods",
      "Eat heavy foods late at night",
      "Skip exercise",
      "Stay in humid environments"
    ]
  }
};

export const ResultCard = ({ dosha, percentage, description }: ResultCardProps) => {
  const capitalizedDosha = dosha.charAt(0).toUpperCase() + dosha.slice(1);
  const info = doshaInfo[dosha as keyof typeof doshaInfo];

  return (
    <div className="space-y-6">
      <Card className="border-2 border-primary">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold flex items-center justify-center gap-2">
            <Brain className="h-8 w-8 text-primary" />
            {capitalizedDosha} Constitution
          </CardTitle>
          <div className="mt-4">
            <Progress value={percentage} className="h-4" />
            <p className="mt-2 text-lg font-semibold">{percentage}% Match</p>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-6">{description}</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <List className="h-5 w-5 text-primary" />
                  Do's
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  {info.do.map((item, index) => (
                    <li key={index} className="text-sm">{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                  Don'ts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  {info.dont.map((item, index) => (
                    <li key={index} className="text-sm">{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
