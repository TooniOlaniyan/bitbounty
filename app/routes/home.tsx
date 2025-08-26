import { heroSectionData, howItWorksData } from "constants/index";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { auth } from "~/firebase/client";

interface IHeroData {
  title: string;
  subtitle: string;
  description: string;
  buttons: {
    label: string;
    href: string;
  }[];
}
interface IHowitworks {
  icon: React.ForwardRefExoticComponent<any>;
  title: string;
  description: string;
}

const Hero = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {heroSectionData.map((heroItems: IHeroData, i) => (
          <div className="text-center max-w-4xl mx-auto" key={i}>
            <div className="inline-flex items-center px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-8">
              Secure. Scalable. Built for Emerging Markets →
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight flex-column">
              {heroItems.title}{" "}
              <span className="text-primary">{heroItems.subtitle}</span>
            </h1>

            <p className="text-md text-muted-foreground/60 max-w-2xl mx-auto mb-12 leading-relaxed">
              {heroItems.description}
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              {heroItems.buttons && heroItems.buttons.length > 0 && (
                <>
                  {heroItems.buttons.map((button, buttonIndex) => (
                    <Link
                      className={`flex-center text-md px-8 py-2 ${buttonIndex === 0 ? "button-primary" : "bg-transparent rounded-lg border"} ${buttonIndex === 1 ? "border-primary" : buttonIndex === 2 ? "border-border" : ""}`}
                      key={buttonIndex}
                      to={button.href}
                    >
                      {button.label}
                      {buttonIndex === 0 && <ArrowRight className="ml-4" />}
                    </Link>
                  ))}
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const HowItWorks = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            How BitBounty Works
          </h2>
          <p className="text-lg text-muted-foreground/50 max-w-2xl mx-auto">
            A simple, powerful platform connecting developers with opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {howItWorksData.map((item: IHowitworks, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 border border-grey-500 card-shadow hover:shadow-lg transition-all duration-300 group"
              >
                <div className="bg-primary/10 flex-center rounded-2xl p-4 mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold font-semibold text-foreground mb-4">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  return (
    <section className="content-section mb-20 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="space-y-4">
            <div className="text-5xl font-bold text-content-foreground">
              1,273
            </div>
            <div className="text-lg text-content-foreground/80">
              Successful Hires
            </div>
          </div>
          <div className="space-y-4">
            <div className="text-5xl font-bold text-content-foreground">
              190
            </div>
            <div className="text-lg text-content-foreground/80">
              Active Challenges
            </div>
          </div>
          <div className="space-y-4">
            <div className="text-5xl font-bold text-content-foreground">
              70%
            </div>
            <div className="text-lg text-content-foreground/80">Hire Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <HowItWorks />
      <Stats />
    </div>
  );
}
