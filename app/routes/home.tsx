import { heroSectionData, howItWorksData } from "constants/index";
import { Link } from "react-router";

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
    <>
      {heroSectionData.map((heroItems: IHeroData, i) => (
        <div className="flex flex-col" key={i}>
          <p className="text-[5rem] font-bold text-blue-700">
            {heroItems.title}
          </p>
          <p className="text-[5rem] font-bold text-green-700">
            {heroItems.subtitle}
          </p>
          <p className="text-lg max-w-2xl text-blue-700">
            {heroItems.description}
          </p>
          <div className="flex justify-around items-center">
            {heroItems.buttons && heroItems.buttons.length > 0 && (
              <>
                {heroItems.buttons.map((button, buttonIndex) => (
                  <Link
                    className="rounded-2xl bg-amber-500 px-5 py-2 text-sm font-bold"
                    key={buttonIndex}
                    to={button.href}
                  >
                    {button.label}
                  </Link>
                ))}
              </>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

const HowItWorks = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
        How BitBounty Works
      </h2>

      <div className="grid grid-cols-4 gap-4">
        {howItWorksData.map((item: IHowitworks, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 border border-gray-100 flex flex-col justify-center items-center`}
            >
              <span className="bg-blue-400 rounded-2xl p-2">
                {" "}
                <IconComponent className="text-blue-300" />
              </span>
              <div className="h-full flex flex-col justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <Hero />
      <HowItWorks />
      <div className="flex justify-around items-center py-8">
        <div className="text-center">
          <span className="text-4xl font-bold text-blue-600">1,273</span>
          <span className="block text-gray-500">Successful Hires</span>
        </div>
        <div className="text-center">
          <span className="text-4xl font-bold text-blue-600">190</span>
          <span className="block text-gray-500">Active Challenges</span>
        </div>
        <div className="text-center">
          <span className="text-4xl font-bold text-blue-600">70%</span>
          <span className="block text-gray-500">Hire Rate</span>
        </div>
      </div>
    </div>
  );
}
