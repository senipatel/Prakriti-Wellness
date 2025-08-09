import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Brain, Leaf, Users, ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-meditation.jpg";
import { useState } from "react";

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const features = [
    {
      icon: Heart,
      title: "Understand Your Body Type",
      description: "Discover your unique Vata, Pitta, or Kapha constitution through our detailed assessment."
    },
    {
      icon: Brain,
      title: "Personalized Wellness Tips",
      description: "Receive customized lifestyle and dietary recommendations based on your Prakriti."
    },
    {
      icon: Leaf,
      title: "Ayurvedic Lifestyle Guidance",
      description: "Learn how to balance your doshas and optimize your daily routines naturally."
    },
    {
      icon: Users,
      title: "Holistic Wellness Approach",
      description: "Embrace a complete mind-body-soul approach to health and wellbeing."
    }
  ];
  
  const testimonials = [
    {
      quote: "The Prakriti assessment completely transformed my understanding of my body. I finally know how to eat and live in harmony with my constitution.",
      name: "Sarah Chen",
      avatar: "SC"
    },
    {
      quote: "As a wellness coach, I recommend this assessment to all my clients. It provides such valuable insights into personal health optimization.",
      name: "Dr. Michael Rodriguez",
      avatar: "MR"
    },
    {
      quote: "I've been struggling with digestive issues for years. Learning about my Pitta constitution helped me make the right dietary changes.",
      name: "Priya Patel",
      avatar: "PP"
    }
  ];
  
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 hero-gradient opacity-80"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Discover Your <span className="text-sage-lighter">Prakriti</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up">
            Balance Your Mind, Body, and Soul
          </p>
          <p className="text-lg mb-10 opacity-80 max-w-2xl mx-auto animate-fade-in-up">
            Take our free Prakriti Assessment to unlock personalized wellness insights 
            based on ancient Ayurvedic wisdom.
          </p>
          <Button 
            size="lg" 
            asChild 
            className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 transition-gentle text-lg px-8 py-6 rounded-full shadow-warm animate-scale-in"
          >
            <Link to="/assessment">Take the Assessment</Link>
          </Button>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 warm-gradient">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Why Discover Your Prakriti?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Understanding your unique constitution empowers you to make informed choices for optimal health and wellbeing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-wellness hover:shadow-warm transition-gentle bg-white/80 backdrop-blur-sm group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full wellness-gradient flex items-center justify-center group-hover:animate-glow transition-gentle">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-xl text-muted-foreground">
              Real stories from people who discovered their Prakriti
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <Card className="shadow-wellness border-0">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <p className="text-lg italic text-muted-foreground leading-relaxed">
                    "{testimonials[currentTestimonial].quote}"
                  </p>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-12 h-12 rounded-full wellness-gradient flex items-center justify-center text-white font-semibold">
                    {testimonials[currentTestimonial].avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonials[currentTestimonial].name}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Button
              size="icon"
              variant="ghost"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 shadow-wellness hover:shadow-warm transition-gentle"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 shadow-wellness hover:shadow-warm transition-gentle"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-wellness ${
                  index === currentTestimonial ? 'wellness-gradient' : 'bg-muted'
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Begin Your Wellness Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Take the first step towards understanding your unique constitution and living in harmony with your natural tendencies.
          </p>
          <div className="space-x-4">
            <Button 
              size="lg" 
              asChild 
              className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 transition-gentle"
            >
              <Link to="/assessment">Start Assessment</Link>
            </Button>
            <Button 
              size="lg" 
              variant="ghost" 
              asChild 
              className="text-white border border-white/30 hover:bg-white/10 transition-gentle"
            >
              <Link to="/signup">Create Account</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;