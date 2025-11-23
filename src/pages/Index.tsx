import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import WhatToExpect from "@/components/WhatToExpect";
import NoNeedToWait from "@/components/NoNeedToWait";
import Combo from "@/components/Combo";
import WhyDifferent from "@/components/WhyDifferent";
import AboutNutritionist from "@/components/AboutNutritionist";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Hero />
      <WhatToExpect />
      <NoNeedToWait />
      <Combo />
      <WhyDifferent />
      <AboutNutritionist />
      <FinalCTA />
    </div>
  );
};

export default Index;