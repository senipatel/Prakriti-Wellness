import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Brain } from "lucide-react";
import { Link } from "react-router-dom";
import { ResultCard } from "@/components/ui/result-card";

interface Question {
  id: number;
  question: string;
  answers: {
    text: string;
    dosha: 'vata' | 'pitta' | 'kapha';
  }[];
}

const Assessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [results, setResults] = useState<Array<{ dosha: string; percentage: number; description: string }>>([]);

  const questions: Question[] = [
    {
      id: 1,
      question: "How would you describe your body frame?",
      answers: [
        { text: "Thin, light, small-boned", dosha: 'vata' },
        { text: "Medium build, moderate weight", dosha: 'pitta' },
        { text: "Large frame, heavy, big-boned", dosha: 'kapha' }
      ]
    },
    {
      id: 2,
      question: "How is your digestion typically?",
      answers: [
        { text: "Variable, sometimes good, sometimes poor", dosha: 'vata' },
        { text: "Strong, I can eat almost anything", dosha: 'pitta' },
        { text: "Slow but steady, I prefer lighter meals", dosha: 'kapha' }
      ]
    },
    {
      id: 3,
      question: "How do you typically feel in cold weather?",
      answers: [
        { text: "I get very cold and uncomfortable", dosha: 'vata' },
        { text: "I feel comfortable, prefer cooler temperatures", dosha: 'pitta' },
        { text: "I tolerate cold well, it doesn't bother me much", dosha: 'kapha' }
      ]
    },
    {
      id: 4,
      question: "How would you describe your sleep patterns?",
      answers: [
        { text: "Light sleeper, wake up frequently", dosha: 'vata' },
        { text: "Moderate sleep, usually sleep soundly", dosha: 'pitta' },
        { text: "Deep sleeper, need lots of sleep", dosha: 'kapha' }
      ]
    },
    {
      id: 5,
      question: "How do you typically handle stress?",
      answers: [
        { text: "I worry and feel anxious easily", dosha: 'vata' },
        { text: "I get irritated and impatient", dosha: 'pitta' },
        { text: "I withdraw and become sluggish", dosha: 'kapha' }
      ]
    },
    {
      id: 6,
      question: "How would you describe your skin?",
      answers: [
        { text: "Dry, rough, thin", dosha: 'vata' },
        { text: "Warm, oily, prone to irritation", dosha: 'pitta' },
        { text: "Thick, oily, smooth", dosha: 'kapha' }
      ]
    },
    {
      id: 7,
      question: "How do you prefer to exercise?",
      answers: [
        { text: "I prefer gentle, varied activities", dosha: 'vata' },
        { text: "I enjoy competitive, intense workouts", dosha: 'pitta' },
        { text: "I like slow, steady, endurance activities", dosha: 'kapha' }
      ]
    },
    {
      id: 8,
      question: "How would you describe your appetite?",
      answers: [
        { text: "Variable, sometimes hungry, sometimes not", dosha: 'vata' },
        { text: "Strong, I get hungry regularly", dosha: 'pitta' },
        { text: "Steady but mild, I can skip meals easily", dosha: 'kapha' }
      ]
    },
    {
      id: 9,
      question: "How do you typically speak?",
      answers: [
        { text: "Fast, enthusiastic, but can be scattered", dosha: 'vata' },
        { text: "Clear, articulate, convincing", dosha: 'pitta' },
        { text: "Slow, melodious, thoughtful", dosha: 'kapha' }
      ]
    },
    {
      id: 10,
      question: "How do you usually make decisions?",
      answers: [
        { text: "Quickly but often change my mind", dosha: 'vata' },
        { text: "Decisively and stick to my choices", dosha: 'pitta' },
        { text: "Slowly after careful consideration", dosha: 'kapha' }
      ]
    }
  ];

  const handleAnswerSelect = (value: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult();
    }
  };

  const calculateResult = () => {
    const doshaCount = { vata: 0, pitta: 0, kapha: 0 };
    
    answers.forEach((answer, index) => {
      const selectedAnswer = questions[index].answers.find(a => a.text === answer);
      if (selectedAnswer) {
        doshaCount[selectedAnswer.dosha]++;
      }
    });

    const totalAnswers = answers.length;
    const descriptions = {
      vata: "Vata types are typically creative, energetic, and quick-thinking. You benefit from routine, warm foods, and calming practices.",
      pitta: "Pitta types are typically organized, intelligent, and goal-oriented. You benefit from cooling foods, moderate exercise, and avoiding excessive heat.",
      kapha: "Kapha types are typically calm, stable, and compassionate. You benefit from stimulating activities, light foods, and regular exercise."
    };

    const results = Object.entries(doshaCount).map(([dosha, count]) => ({
      dosha,
      percentage: Math.round((count / totalAnswers) * 100),
      description: descriptions[dosha as keyof typeof descriptions]
    })).sort((a, b) => b.percentage - a.percentage);

    // Save results if user is logged in
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      const user = JSON.parse(currentUser);
      user.constitution = {
        vata: results.find(r => r.dosha === 'vata')?.percentage || 0,
        pitta: results.find(r => r.dosha === 'pitta')?.percentage || 0,
        kapha: results.find(r => r.dosha === 'kapha')?.percentage || 0
      };
      localStorage.setItem('currentUser', JSON.stringify(user));
      
      // Update user in users array
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const userIndex = users.findIndex((u: any) => u.email === user.email);
      if (userIndex !== -1) {
        users[userIndex] = user;
        localStorage.setItem('users', JSON.stringify(users));
      }
    }
    
    setResults(results);
    setShowResult(true);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResult) {
    function getCurrentUser() {
      const userStr = localStorage.getItem('currentUser');
      if (!userStr) return null;
      try {
      return JSON.parse(userStr);
      } catch {
      return null;
      }
    }
    return (
      <div className="min-h-screen warm-gradient py-12">
        <div className="container max-w-2xl mx-auto">
          <Card className="shadow-warm border-0">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full wellness-gradient flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-foreground">
                Assessment Complete!
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {results.map((result, index) => (
                <ResultCard
                  key={result.dosha}
                  dosha={result.dosha}
                  percentage={result.percentage}
                  description={result.description}
                />
              ))}
              
              <div className="text-center space-y-4">
                {getCurrentUser() ? (
                  <Button asChild className="wellness-gradient text-primary-foreground">
                    <Link to="/dashboard">View in Dashboard</Link>
                  </Button>
                ) : (
                  <div className="text-sm text-muted-foreground">
                    <Link to="/signup" className="text-primary hover:underline">
                      Sign up
                    </Link> or{" "}
                    <Link to="/login" className="text-primary hover:underline">
                      log in
                    </Link> to save your results and get personalized recommendations.
                  </div>
                )}
                
                <Button variant="ghost" asChild className="w-full">
                  <Link to="/">Return to Home</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen warm-gradient py-12">
      <div className="container max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Brain className="h-8 w-8 text-primary mr-3" />
            <h1 className="text-3xl font-bold">Prakriti Assessment</h1>
          </div>
          <p className="text-muted-foreground">
            Prakriti is your unique Ayurvedic constitution, determined by Vata, Pitta, and Kapha doshas. 
            Answer these questions honestly to discover yours!
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="shadow-wellness border-0">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">
              {questions[currentQuestion].question}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <RadioGroup 
              value={answers[currentQuestion] || ""} 
              onValueChange={handleAnswerSelect}
              className="space-y-4"
            >
              {questions[currentQuestion].answers.map((answer, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-muted/50 transition-wellness">
                  <RadioGroupItem value={answer.text} id={`answer-${index}`} />
                  <Label 
                    htmlFor={`answer-${index}`} 
                    className="flex-1 cursor-pointer text-sm leading-relaxed"
                  >
                    {answer.text}
                  </Label>
                </div>
              ))}
            </RadioGroup>
            
            <div className="flex justify-between pt-4">
              <Button 
                variant="ghost" 
                onClick={() => currentQuestion > 0 && setCurrentQuestion(currentQuestion - 1)}
                disabled={currentQuestion === 0}
              >
                Previous
              </Button>
              <Button 
                onClick={handleNext}
                disabled={!answers[currentQuestion]}
                className="wellness-gradient text-primary-foreground"
              >
                {currentQuestion === questions.length - 1 ? 'Submit Assessment' : 'Next Question'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Assessment;