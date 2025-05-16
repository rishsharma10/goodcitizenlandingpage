"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Apple, 
  Smartphone, 
  CheckCircle, 
  Shield, 
  Clock, 
  AlertTriangle 
} from "lucide-react";
import { useRouter } from "next/router";
import { APPSTORE_LINK, GOOGLE_PLAY_LINK } from "@/lib/utils";
import Link from "next/link";

export function Download() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // In a real app, you would send this to your backend
      setEmail("");
    }
  };

  return (
    <section id="download" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Download GoodCitizen Today
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-lg">
              Join our community of responsible citizens making the roads safer for emergency vehicles and those in need.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-300 mr-3 mt-0.5 flex-shrink-0" />
                <p>Free installation with no in-app purchases or advertisements</p>
              </div>
              <div className="flex items-start">
                <Shield className="h-6 w-6 text-blue-300 mr-3 mt-0.5 flex-shrink-0" />
                <p>Privacy-focused with minimal data collection and no tracking</p>
              </div>
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-blue-300 mr-3 mt-0.5 flex-shrink-0" />
                <p>Takes less than 60 seconds to set up and runs quietly in the background</p>
              </div>
              <div className="flex items-start">
                <AlertTriangle className="h-6 w-6 text-blue-300 mr-3 mt-0.5 flex-shrink-0" />
                <p>Be part of a lifesaving network that helps emergency services</p>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href={APPSTORE_LINK} target="_blank">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 h-14 px-8">
                <Apple className="mr-2 h-5 w-5" />
                App Store
              </Button>
              </Link>
              <Link href={GOOGLE_PLAY_LINK} target="_blank">
              <Button size="lg" className="border-white text-white hover:bg-blue-700 h-14 px-8">
                <Smartphone className="mr-2 h-5 w-5" />
                Google Play
              </Button>
              </Link>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-2">Get Early Access</h3>
              <p className="text-blue-100">
                Sign up to be notified when GoodCitizen launches in your area.
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-700 mb-4">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Thank You!</h4>
                <p className="text-blue-100">
                  We'll notify you when GoodCitizen launches in your area.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="your@email.com"
                    className="bg-white/10 border-white/20 placeholder:text-blue-200/50 text-white h-12"
                  />
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-medium mb-2">
                    Your City
                  </label>
                  <Input
                    id="location"
                    type="text"
                    placeholder="Enter your city"
                    className="bg-white/10 border-white/20 placeholder:text-blue-200/50 text-white h-12"
                  />
                </div>
                <div className="pt-4">
                  <Button type="submit" className="w-full bg-white text-blue-700 hover:bg-blue-50 h-12">
                    Get Notified
                  </Button>
                </div>
                <p className="text-xs text-center text-blue-200 pt-2">
                  We respect your privacy and will never share your information.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}