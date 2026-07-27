import bannerImg from '../assets/winBanner.jpg'; // adjust filename to your actual file

export default function PromoBanner() {
  return (
    <div
      className="promo-banner"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
    </div>
  );
}