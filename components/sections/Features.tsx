import { FEATURES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { 
  Bell,
  Volume2,
  MapPin,
  Users,
  ShieldAlert,
  Clock,
  Smartphone,
  Headphones
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  "bell": <Bell className="h-6 w-6" />,
  "volume-2": <Volume2 className="h-6 w-6" />,
  "map-pin": <MapPin className="h-6 w-6" />,
  "users": <Users className="h-6 w-6" />,
};

export function Features() {
  return (
    <section id="features" className="py-20 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technology That <span className="text-red-500">Saves Lives</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our innovative alert system connects emergency services with everyday drivers, creating safer streets for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <div 
              key={index}
              className={cn(
                "bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800",
                "transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              )}
            >
              <div className="flex justify-center mb-4">
                <div className="h-14 w-14 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-500">
                  {iconMap[feature.icon] || <Bell className="h-6 w-6" />}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-center">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-blue-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-2xl p-8 md:p-12 overflow-hidden relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Advanced Safety <span className="text-blue-600">Technology</span>
              </h3>
              <p className="text-muted-foreground mb-6">
                GoodCitizen uses cutting-edge technology to create a network of informed drivers, ensuring emergency vehicles can navigate through traffic efficiently.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
                    <ShieldAlert className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <span className="font-medium">GPS Precision</span>
                    <p className="text-sm text-muted-foreground">Accurate to within meters for timely alerts</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
                    <Clock className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <span className="font-medium">Low Latency</span>
                    <p className="text-sm text-muted-foreground">Alerts delivered in milliseconds</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
                    <Smartphone className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <span className="font-medium">Battery Efficient</span>
                    <p className="text-sm text-muted-foreground">Optimized to use minimal battery power</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
                    <Headphones className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <span className="font-medium">Clear Audio</span>
                    <p className="text-sm text-muted-foreground">Distinct alerts even in noisy environments</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute inset-0 bg-blue-500/10 rounded-full animate-pulse" style={{ animationDuration: '3s' }} />
              <img 
                src="https://images.pexels.com/photos/13861/IMG_3496bfree.jpg?auto=compress&cs=tinysrgb&w=600" 
                alt="Emergency vehicle" 
                className="relative z-10 rounded-lg shadow-lg transform -rotate-3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}