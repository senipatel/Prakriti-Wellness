import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Flower2, Mail, Facebook } from "lucide-react";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    if (!agreeToTerms) {
      alert("Please agree to the terms and conditions");
      return;
    }
    
    // Store user data in localStorage
    const userData = {
      fullName: formData.fullName,
      email: formData.email,
      password: formData.password
    };
    
    // Get existing users or initialize empty array
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Check if email already exists
    if (existingUsers.some((user: any) => user.email === formData.email)) {
      alert('Email already registered!');
      return;
    }
    
    // Add new user
    existingUsers.push(userData);
    localStorage.setItem('users', JSON.stringify(existingUsers));
    
    // Store demo account if it doesn't exist
    const demoAccount = {
      fullName: "Demo User",
      email: "demo@gmail.com",
      password: "12345678"
    };
    if (!existingUsers.some((user: any) => user.email === demoAccount.email)) {
      existingUsers.push(demoAccount);
      localStorage.setItem('users', JSON.stringify(existingUsers));
    }
    
    alert('Signup successful! Please login.');
    window.location.href = '/login';
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
            <CardTitle className="text-2xl font-bold">Create Your Account</CardTitle>
            <p className="text-muted-foreground">
              Join us to unlock personalized wellness insights
            </p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Social Signup */}
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

            {/* Signup Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  required
                  className="h-11 border-input focus:ring-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  className="h-11 border-input focus:ring-primary"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  required
                  className="h-11 border-input focus:ring-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                  required
                  className="h-11 border-input focus:ring-primary"
                />
              </div>
              
              <div className="flex items-start space-x-2">
                <Checkbox 
                  id="terms" 
                  checked={agreeToTerms}
                  onCheckedChange={(checked) => setAgreeToTerms(checked as boolean)}
                  className="mt-1"
                />
                <Label htmlFor="terms" className="text-sm leading-relaxed">
                  I agree to the{" "}
                  <Link to="/terms" className="text-primary hover:underline">
                    Terms and Conditions
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                </Label>
              </div>
              
              <Button 
                type="submit" 
                disabled={!agreeToTerms}
                className="w-full h-11 wellness-gradient text-primary-foreground shadow-wellness hover:opacity-90 transition-wellness disabled:opacity-50"
              >
                Create Account
              </Button>
            </form>

            {/* Login Link */}
            <div className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link 
                to="/login" 
                className="text-primary hover:underline font-medium transition-wellness"
              >
                Sign In
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Signup;