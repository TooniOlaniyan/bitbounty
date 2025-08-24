import { Button } from "~/components/ui/button";
import { footerSections, socialLinks } from "constants/index";

import {
  Trophy,
  Github,
  Twitter,
  Linkedin,
  Mail,
  Heart,
  Globe,
} from "lucide-react";



export function Footer() {
  const currentYear = new Date().getFullYear();


  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-orange-500/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">BitBounty</h3>
                  <p className="text-blue-200 text-sm">Powered by Bitcoin</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                The premier platform connecting talented developers with
                companies through Bitcoin-powered coding challenges. Solve
                problems, earn crypto, build the future.
              </p>

              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <Button
                      key={index}
                      variant="ghost"
                      size="sm"
                      className="w-10 h-10 p-0 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <IconComponent className="w-4 h-4" />
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {footerSections.map((section, index) => (
                  <div key={index}>
                    <h4 className="font-semibold mb-4 text-white">
                      {section.title}
                    </h4>
                    <ul className="space-y-3">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Button
                            variant="ghost"
                            className="h-auto p-0 text-gray-400 hover:text-white text-left justify-start font-normal transition-colors duration-200"
                            onClick={link.action}
                          >
                            {link.label}
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © {currentYear} BitBounty. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <Button
                  variant="ghost"
                  className="h-auto p-0 text-gray-400 hover:text-white"
                >
                  Privacy Policy
                </Button>
                <Button
                  variant="ghost"
                  className="h-auto p-0 text-gray-400 hover:text-white"
                >
                  Terms of Service
                </Button>
                <Button
                  variant="ghost"
                  className="h-auto p-0 text-gray-400 hover:text-white"
                >
                  Cookie Policy
                </Button>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>for developers</span>
              <Globe className="w-4 h-4 text-blue-400" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
