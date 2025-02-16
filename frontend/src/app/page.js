import AdBar from "@/pages/AdBar/page";
import FinancialServices from "@/pages/FinancialSer/page";
import Hero from "@/pages/Hero/Hero";
import Testimonial from "@/pages/Testimonials/page";
import WhyChooseUs from "@/pages/WhyChooseUs/page";
import Achievements from "./components/Achievements/Achievements";
import Certification from "./components/Certification/page";

export default function Home() {
  return (
    <div>
    <Hero />
    <AdBar />
    <FinancialServices />
    <WhyChooseUs />
    <Testimonial />
    <Certification />
    <Achievements />
    </div>
  );
}
