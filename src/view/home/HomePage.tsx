import CategorySection from "@/components/section/CategorySection";
import HeroSection from "@/components/section/HeroSection";

const HomePage = () => {
  console.log(process.env.NEXT_PUBLIC_API_URL);
  return (
    <>
      <HeroSection />
      <CategorySection />
    </>
  );
};

export default HomePage;
