import Banner from "../components/home/Banner";
import BannerOptions from "../components/home/BannerOptions";
import JoinBanner from "../components/home/JoinBanner";
import Presentation from "../components/home/Presentation";
import Tendency from "../components/home/Tendency";
import UploadMovie from "../components/home/UploadMovie";

const HomePage = () => {
  return (
    <div className="bg-primary-500 w-full min-h-screen">
      <Presentation />
      <Banner />
      <BannerOptions />
      <Tendency />
      <UploadMovie />
      <JoinBanner />
    </div>
  );
};
export default HomePage;
