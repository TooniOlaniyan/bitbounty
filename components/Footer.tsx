import { Button } from "~/components/ui/button";
import { footerSections, socialLinks } from "constants/index";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section relative overflow-hidden">
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">B</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-footer-foreground">
                    BitBounty
                  </h3>
                </div>
              </div>

              <p className="text-footer-foreground/90 mb-8 max-w-md leading-relaxed text-base">
                The premier platform connecting talented developers with
                companies through coding challenges. Solve problems, get hired,
                build the future.
              </p>

              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <Button
                      key={index}
                      variant="ghost"
                      size="sm"
                      className="w-12 h-12 p-0 bg-footer-foreground/10 hover:bg-footer-foreground/20 border border-footer-foreground/20 hover:border-footer-foreground/30 transition-all duration-300 text-footer-foreground hover:text-footer-foreground"
                      aria-label={social.label}
                    >
                      <IconComponent className="w-5 h-5" />
                    </Button>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                {footerSections.map((section, index) => (
                  <div key={index}>
                    <h4 className="font-semibold mb-6 text-footer-foreground text-lg">
                      {section.title}
                    </h4>
                    <ul className="space-y-4">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Button
                            variant="ghost"
                            className="h-auto p-0 text-footer-foreground/70 hover:text-footer-foreground text-left justify-start font-normal transition-colors duration-200 text-base"
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

          <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 pt-8 border-t border-footer-foreground/20">
            <p className="text-footer-foreground/70 text-sm text-center">
              © {currentYear} BitBounty. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
