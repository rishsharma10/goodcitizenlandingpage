import { HOW_IT_WORKS_STEPS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { 
  Download, 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  ArrowRight 
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  "download": <Download className="h-6 w-6" />,
  "shield": <Shield className="h-6 w-6" />,
  "alert-triangle": <AlertTriangle className="h-6 w-6" />,
  "check-circle": <CheckCircle className="h-6 w-6" />,
};

export function HowItWorks() {
  return (
    <section 
      id="how-it-works" 
      className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="text-blue-600">GoodCitizen</span> Works
          </h2>
          <p className="text-muted-foreground text-lg">
            A simple, intuitive process that helps you respond to emergency vehicles quickly and safely.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-900/50 hidden md:block" />

          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <div 
              key={index} 
              className={cn(
                "relative mb-16 last:mb-0",
                "md:flex md:items-center",
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse text-right"
              )}
            >
              {/* Step number for mobile */}
              <div className="absolute top-0 left-0 h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold md:hidden">
                {index + 1}
              </div>

              <div className={cn(
                "pl-16 md:pl-0 md:w-5/12",
                index % 2 === 0 ? "md:pr-16" : "md:pl-16"
              )}>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>

              {/* Center circle for desktop */}
              <div className="hidden md:flex md:items-center md:justify-center md:w-2/12">
                <div className="relative">
                  <div className="h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 z-10 relative">
                    {iconMap[step.icon] || <AlertTriangle className="h-6 w-6" />}
                  </div>
                  <div className="absolute top-0 left-0 right-0 bottom-0 rounded-full bg-blue-600/10 animate-ping" style={{ animationDuration: '3s' }} />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-600 font-bold">
                    {index + 1}
                  </div>
                </div>
              </div>

              {/* Empty space for alternating layout */}
              <div className="hidden md:block md:w-5/12"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 max-w-3xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 mb-6">
              <AlertTriangle className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">What happens during an alert?</h3>
            <div className="space-y-4 max-w-xl">
              <div className="flex items-start bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm">
                <div className="mr-4 h-8 w-8 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 flex-shrink-0">
                  <span className="font-bold">1</span>
                </div>
                <div className="text-left">
                  <p className="font-medium">You receive an audio and visual alert</p>
                  <p className="text-sm text-muted-foreground">A distinct tone and voice announcement will notify you of approaching emergency vehicles.</p>
                </div>
              </div>
              
              <div className="flex items-start bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm">
                <div className="mr-4 h-8 w-8 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 flex-shrink-0">
                  <span className="font-bold">2</span>
                </div>
                <div className="text-left">
                  <p className="font-medium">Directional guidance appears</p>
                  <p className="text-sm text-muted-foreground">Visual indicators show which direction the emergency vehicle is coming from.</p>
                </div>
              </div>
              
              <div className="flex items-start bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm">
                <div className="mr-4 h-8 w-8 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 flex-shrink-0">
                  <span className="font-bold">3</span>
                </div>
                <div className="text-left">
                  <p className="font-medium">Safety instructions guide you</p>
                  <p className="text-sm text-muted-foreground">Simple instructions help you safely pull over to let emergency vehicles pass.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}