import HeroContainer from '../containers/HeroContainer';
import PartnerContainer from '../containers/PartnerContainer';
import ProductContainer from '../containers/ProductContainer';

export default function Home() {
  return (
    <div>
      <HeroContainer />
      <div className="mx-auto max-w-screen-xl">
        <PartnerContainer />
        <ProductContainer />
      </div>
    </div>
  );
}
