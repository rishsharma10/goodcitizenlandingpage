"use client";

import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Shield, Lock, Eye, FileText, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-1 pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-8">
              <Shield className="h-8 w-8 text-blue-600" />
              <h1 className="text-3xl font-bold">Privacy Policy</h1>
            </div>
            
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-lg text-muted-foreground mb-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
                <p className="mb-4">
                  GoodCitizen ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and related services.
                </p>
                <p className="mb-4">
                  Please read this Privacy Policy carefully. By using GoodCitizen, you agree to the collection and use of information in accordance with this policy.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Lock className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-medium mb-2">Location Data</h3>
                      <p className="text-muted-foreground">
                        We collect real-time location data to provide emergency vehicle alerts. This data is processed locally on your device and only shared when necessary to facilitate the alert system.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Eye className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-medium mb-2">Device Information</h3>
                      <p className="text-muted-foreground">
                        We collect device-specific information such as your mobile device ID, model, and operating system to ensure optimal app performance.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <FileText className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-medium mb-2">Usage Data</h3>
                      <p className="text-muted-foreground">
                        We collect anonymous usage statistics to improve our service, including app interactions and alert response patterns.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1" />
                    <span>To provide and maintain our emergency alert service</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1" />
                    <span>To improve and optimize our alert system accuracy</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1" />
                    <span>To analyze usage patterns and enhance user experience</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1" />
                    <span>To communicate important updates and changes to our service</span>
                  </li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
                <p className="mb-4">
                  We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
                <p className="mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate personal data</li>
                  <li>Request deletion of your personal data</li>
                  <li>Object to processing of your personal data</li>
                  <li>Request restriction of processing your personal data</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                <p className="mb-4">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                  <p>Email: privacy@goodcitizen.app</p>
                  <p>Address: 123 Safety Street, Rescue City, RC 10001</p>
                </div>
              </section>
            </div>

            <div className="mt-12 flex justify-center">
              <Button asChild variant="outline" size="lg">
                <Link href="/">Return to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}