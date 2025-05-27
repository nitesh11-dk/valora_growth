import { Zap, ShieldCheck, ThumbsUp, Users } from 'lucide-react';
import { ComboPackSection } from './ComboPack';

export const HeroSection = () => {
  return (
    <section className="relative py-20 overflow-hidden ">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gray-700/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-10">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white">
            Grow Your Instagram
            <span className="block mt-2 text-gray-300 font-semibold">
              Fast & Organic 🚀
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl max-w-3xl mb-8 text-gray-400">
            Buy Real Likes, Followers, Comments & More to Boost Your Social Presence
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16">
        {[
  { icon: Zap, text: "Start in 15-30 minutes" },
  { icon: ShieldCheck, text: "100% Safe & Secure" },
  { icon: ThumbsUp, text: "High Quality Engagement" },
  { icon: Users, text: "Real-Looking Profiles" }
].map((item, index) => (
  <div
    key={index}
    className="flex flex-col items-center text-center p-4 bg-gray-800/60 backdrop-blur-sm rounded-lg border border-gray-700"
  >
    <item.icon className="text-gray-500 mb-2" size={20} />
    <span className="text-sm font-medium text-gray-300">{item.text}</span>
  </div>
))}

        </div>

        <ComboPackSection />
      </div>
    </section>
  );
};
