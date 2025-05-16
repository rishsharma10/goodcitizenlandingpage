import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import { 
  AmbulanceIcon, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  MessageCircleMore
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <AmbulanceIcon className="h-8 w-8 text-red-500" />
              <span className="font-bold text-xl">{APP_NAME}</span>
            </Link>
            <p className="text-slate-300 mb-4">
              Helping emergency vehicles reach their destinations faster and making our roads safer for everyone.
            </p>
            <div className="flex space-x-4">
              <Link target="_blank" href="https://www.facebook.com/people/A-Good-Citizen/61576461897022/" className="text-slate-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              {/* <Link target="_blank" href="https://www.instagram.com/agoodcitizen_/" className="text-slate-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link> */}
              <Link target="_blank" href="https://www.instagram.com/agoodcitizen_/" className="text-slate-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link target="_blank" href="https://api.whatsapp.com/send/?phone=919501770159&text=Hi,%20I%20have%20a%20quick%20question.%20Could%20you%20please%20help%20me%20with%20this?%20Thanks!&type=phone_number&app_absent=0" className="text-slate-300 hover:text-white transition-colors">
                <MessageCircleMore className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-slate-300 hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-slate-300 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-slate-300 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#download" className="text-slate-300 hover:text-white transition-colors">
                  Download
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-slate-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-condition" className="text-slate-300 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-red-500 mt-0.5" />
                <span className="text-slate-300">485 sector 21 Panchkula Haryana
                134116</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-red-500 mt-0.5" />
                <span className="text-slate-300">amishmittal5959@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-red-500 mt-0.5" />
                <span className="text-slate-300">+91 9501770159</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; {currentYear} {APP_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}