import RoomCard from "../components/roomcard";
import PageHeader from "../components/pageheader";

const Rooms: React.FC = () => (
  <>
    <div role="main" aria-labelledby="rooms-heading">
      <PageHeader
        title="Rooms / Pricing"
        imageSrc="/img4.webp"
        alt={""}
        id={""}
      />
      <RoomCard
        title="Interior Stateroom"
        imageSrc="/img6.webp"
        price={2125}
        earlybird={1995}
        id=""
        blurb="After an action-packed schedule of meetings, activities, and exploring the world, you need to relax. At the end of a busy day, retreat to your Interior stateroom and unwind in comfort! These well-appointed staterooms offer everything you need for a comfortable voyage. Aboard our Voyager-class ships, opt for a Promenade stateroom, offering all the features of a standard room plus a bowed window overlooking the Promenade."
      />
    </div>
    <div>
      <RoomCard
        title="Ocean View Stateroom"
        imageSrc="/img7.webp"
        price={2295}
        earlybird={2175}
        id=""
        blurb="As your Royal Caribbean cruise sails to some of the world’s most stunning destinations, you don’t want to miss a single moment. In an Ocean View stateroom, you’ll be treated to a beautiful new view every day! Spend the day exploring the world, then retreat to your comfortable, well-appointed stateroom and don’t miss a thing."
      />
    </div>
    <div>
      <RoomCard
        title="Balcony Stateroom"
        imageSrc="/img8.webp"
        price={2735}
        earlybird={2895}
        id=""
        blurb="Imagine waking up every morning, opening your balcony door, and being greeted with views of a brand-new and breathtaking part of the world. Reserve a Royal Caribbean Balcony stateroom to enjoy spectacular vistas each and every day from the comfort and privacy of your own room. We believe the best way to explore the world is by sea – and a Balcony stateroom is the perfect way to get a little bit closer to everything!"
      />
    </div>
  </>
);

export default Rooms;
