import Container from "@/components/re-usable/container/Container";

import HeroSlider from "@/components/home-slider/HeroSlider";
import ProductSlider from "@/components/product-slider/ProductSlider";
export default function Home() {
  return (
    <Container className="py-5">
      <HeroSlider />
      <ProductSlider />
    </Container>
  );
}
