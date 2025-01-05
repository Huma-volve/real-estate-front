import AcceptedOfferCard from "../components/cards/AcceptedOfferCard";
import OfferCard from "../components/cards/OfferCard";

const offers = [
  {
    id: 1,
    companyName: "شركة الأحمدية",
    price: 85000,
    address: "عقار في شارع السند ، حي النرجس ، الرياض ، منطقة الرياض",
    description:
      "تتكون من صالة ومجلس وثلاث غرف نوم ومطبخ وثلاث دورات مياه وتراس  مطل على الشارع  بمساحة 138م",
  },
  {
    id: 2,
    companyName: "شركة البندقية",
    price: 90000,
    address: "حي العقيق، الرياض",
    description:
      "شقة مميزة بمساحة 150م مع إطلالة رائعة.شقة مميزة بمساحة 150م مع إطلالة رائعة.شقة مميزة بمساحة 150م مع إطلالة رائعة.شقة مميزة بمساحة 150م مع إطلالة رائعة.",
  },
];

const Offers = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 flex-wrap">
      {offers.map((offer) => (
        <AcceptedOfferCard key={offer.id} offer={offer} />
      ))}
      {offers.map((offer) => (
        <OfferCard key={offer.id} offer={offer} />
      ))}
    </div>
  );
};

export default Offers;
