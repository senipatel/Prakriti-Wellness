import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Flower2, Mail, Facebook } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Find user
    const user = users.find((u: any) => u.email === email && u.password === password);
    
    if (user) {
      // Store logged in user
      localStorage.setItem('currentUser', JSON.stringify(user));
      if (rememberMe) {
        localStorage.setItem('rememberedUser', JSON.stringify({ email }));
      }
      window.location.href = '/';
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen warm-gradient flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 text-primary hover:opacity-80 transition-wellness">
            <Flower2 className="h-8 w-8" />
            <span className="text-2xl font-semibold">Prakriti Wellness</span>
          </Link>
        </div>

        <Card className="shadow-warm border-0">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
            <p className="text-muted-foreground">
              Sign in to access your personalized wellness insights
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Demo account: demo@gmail.com / 12345678
            </p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Social Login */}
            <div className="space-y-3">
              <Button variant="outline" className="w-full h-11 border-border hover:bg-muted/50 transition-wellness">
                <Mail className="h-4 w-4 mr-2" />
                Continue with Google
              </Button>
              <Button variant="outline" className="w-full h-11 border-border hover:bg-muted/50 transition-wellness">
                <Facebook className="h-4 w-4 mr-2" />
                Continue with Facebook
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">
                  Or continue with email
                </span>
              </div>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-11 border-input focus:ring-primary"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="h-11 border-input focus:ring-primary"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="remember" 
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                  />
                  <Label htmlFor="remember" className="text-sm">
                    Remember me
                  </Label>
                </div>
                <Link 
                  to="/forgot-password" 
                  className="text-sm text-primary hover:underline transition-wellness"
                >
                  Forgot Password?
                </Link>
              </div>
              
              <Button 
                type="submit" 
                className="w-full h-11 wellness-gradient text-primary-foreground shadow-wellness hover:opacity-90 transition-wellness"
              >
                Sign In
              </Button>
            </form>

            {/* Sign Up Link */}
            <div className="text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link 
                to="/signup" 
                className="text-primary hover:underline font-medium transition-wellness"
              >
                Sign Up
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;