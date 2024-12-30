import HeroContainer from '../containers/HeroContainer';
import PartnerContainer from '../containers/PartnerContainer';
import StatsContainer from '../containers/StatsContainer';

export default function Home() {
  return (
    <main className="flex w-full flex-col space-y-20">
      <HeroContainer />
      <StatsContainer />
      <PartnerContainer />
    </main>
  );
}
