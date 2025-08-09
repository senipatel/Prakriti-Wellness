import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, Calendar, Apple, User as UserIcon } from "lucide-react";
import { getCurrentUser, User as UserType } from "@/lib/auth";
import { ResultCard } from "@/components/ui/result-card";
import { DietRecommendations } from "@/components/ui/diet-recommendations";
import { doshaSchedules } from "@/lib/dosha-schedules";

const getDominantDosha = (constitution: { vata: number; pitta: number; kapha: number }) => {
  const doshas = Object.entries(constitution).sort((a, b) => b[1] - a[1]);
  return doshas[0][0];
};

const DailySchedule = ({ dominantDosha }: { dominantDosha: string }) => {
  const schedule = doshaSchedules[dominantDosha];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            Morning Routine
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {schedule.morning.map((item, i) => (
              <li key={i} className="flex justify-between text-sm">
                <span className="text-muted-foreground">{item.time}</span>
                <span>{item.activity}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            Afternoon Routine
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {schedule.afternoon.map((item, i) => (
              <li key={i} className="flex justify-between text-sm">
                <span className="text-muted-foreground">{item.time}</span>
                <span>{item.activity}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            Evening Routine
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {schedule.evening.map((item, i) => (
              <li key={i} className="flex justify-between text-sm">
                <span className="text-muted-foreground">{item.time}</span>
                <span>{item.activity}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

const Dashboard = () => {
  const user = getCurrentUser();

  if (!user) {
    window.location.href = '/login';
    return null;
  }

  return (
    <div className="container py-8 max-w-7xl">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Welcome, {user.fullName}!</h1>
      </div>

      <Tabs defaultValue="constitution" className="space-y-6">
        <TabsList>
          <TabsTrigger value="constitution">
            <Brain className="h-4 w-4 mr-2" />
            Constitution
          </TabsTrigger>
          <TabsTrigger value="schedule">
            <Calendar className="h-4 w-4 mr-2" />
            Daily Schedule
          </TabsTrigger>
          <TabsTrigger value="diet">
            <Apple className="h-4 w-4 mr-2" />
            Diet
          </TabsTrigger>
        </TabsList>

        <TabsContent value="constitution" className="space-y-6">
          {user.constitution && (
            <>
              <ResultCard
                dosha="vata"
                percentage={user.constitution.vata}
                description="Vata types are typically creative, energetic, and quick-thinking. You benefit from routine, warm foods, and calming practices."
              />
              <ResultCard
                dosha="pitta"
                percentage={user.constitution.pitta}
                description="Pitta types are typically organized, intelligent, and goal-oriented. You benefit from cooling foods, moderate exercise, and avoiding excessive heat."
              />
              <ResultCard
                dosha="kapha"
                percentage={user.constitution.kapha}
                description="Kapha types are typically calm, stable, and compassionate. You benefit from stimulating activities, light foods, and regular exercise."
              />
            </>
          )}
        </TabsContent>

        <TabsContent value="schedule">
          {user.constitution && (
            <DailySchedule dominantDosha={getDominantDosha(user.constitution)} />
          )}
        </TabsContent>

        <TabsContent value="diet">
          {user.constitution && (
            <DietRecommendations dominantDosha={getDominantDosha(user.constitution)} />
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
