"use client";

import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollText, AlertTriangle, ShieldCheck, HelpCircle } from "lucide-react";
import Link from "next/link";

export default function TermsConditions() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-1 pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-8">
              <ScrollText className="h-8 w-8 text-blue-600" />
              <h1 className="text-3xl font-bold">Terms & Conditions</h1>
            </div>
            
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-lg text-muted-foreground mb-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
                <p className="mb-4">
                  By downloading, installing, or using GoodCitizen ("the App"), you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you must not use the App.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Use License</h2>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-900/50 rounded-lg p-6 mb-6">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-6 w-6 text-yellow-600 mt-1" />
                    <div>
                      <h3 className="font-medium mb-2">Important Notice</h3>
                      <p className="text-sm">
                        GoodCitizen is designed as a supplementary safety tool. It should not replace your attention to the road or override official traffic rules and regulations.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mb-4">
                  Permission is granted to download and use the App under the following conditions:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>The App must be used in accordance with all applicable laws and regulations</li>
                  <li>The App may not be copied, modified, or distributed except as provided by these terms</li>
                  <li>The App may not be used for commercial purposes without express permission</li>
                  <li>Any misuse of the App may result in immediate termination of this license</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <ShieldCheck className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-medium mb-2">No Guarantee</h3>
                      <p className="text-muted-foreground">
                        The App is provided "as is" without any guarantees or warranties. We cannot ensure 100% accuracy of alerts or continuous availability of the service.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <HelpCircle className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-medium mb-2">Limitation of Liability</h3>
                      <p className="text-muted-foreground">
                        We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the App.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">User Responsibilities</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-amber-600 mr-3 mt-1" />
                    <span>Follow all traffic laws and regulations regardless of alerts</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-amber-600 mr-3 mt-1" />
                    <span>Maintain attention to road conditions and surroundings</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-amber-600 mr-3 mt-1" />
                    <span>Do not rely solely on the App for emergency vehicle awareness</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-amber-600 mr-3 mt-1" />
                    <span>Keep the App updated to ensure optimal performance</span>
                  </li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
                <p className="mb-4">
                  We reserve the right to modify these terms at any time. We will notify users of any material changes through the App or via email. Continued use of the App after such modifications constitutes acceptance of the updated terms.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
                <p className="mb-4">
                  These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which the App operates, without regard to its conflict of law provisions.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                <p className="mb-4">
                  For any questions about these Terms & Conditions, please contact us at:
                </p>
                <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                  <p>Email: legal@goodcitizen.app</p>
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