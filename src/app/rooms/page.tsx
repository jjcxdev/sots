import RoomCard from "../components/roomcard";
import RootLayout from "../layout";
import PageHeader from "../components/pageheader";

const Rooms: React.FC = () => (
  <RootLayout>
    <div>
      <PageHeader title="FAQ" imageSrc="/img4.png" />
      <RoomCard title="Interior Stateroom" imageSrc="/img6.png" price="$****">
        After an action-packed schedule of meetings, activities, and exploring
        the world, you need to relax. At the end of a busy day, retreat to your
        Interior stateroom and unwind in comfort!
        <br />
        <br />
        These well-appointed staterooms offer everything you need for a
        comfortable voyage. Aboard our Voyager-class ships, opt for a Promenade
        stateroom, offering all the features of a standard room plus a bowed
        window overlooking the Promenade.
      </RoomCard>
      <RoomCard title="Ocean View Stateroom" imageSrc="/img7.png" price="$****">
        As your Royal Caribbean cruise sails to some of the world’s most
        stunning destinations, you don’t want to miss a single moment.
        <br />
        <br />
        In an Ocean View stateroom, you’ll be treated to a beautiful new view
        every day! Spend the day exploring the world, then retreat to your
        comfortable, well-appointed stateroom and don’t miss a thing.
      </RoomCard>
      <RoomCard title="Balcony Stateroom" imageSrc="/img8.png" price="$****">
        Imagine waking up every morning, opening your balcony door, and being
        greeted with views of a brand-new and breathtaking part of the world.
        Reserve a Royal Caribbean Balcony stateroom to enjoy spectacular vistas
        each and every day from the comfort and privacy of your own room.
        <br />
        <br />
        We believe the best way to explore the world is by sea – and a Balcony
        stateroom is the perfect way to get a little bit closer to everything!
      </RoomCard>
      <RoomCard title="Suite Stateroom" imageSrc="/img9.png" price="$****">
        More space. More comfort. More to love! Indulge in one of Royal
        Caribbean’s luxurious suites for the ultimate at-sea experience. With
        additional perks such as concierge service, priority boarding and
        departure privileges, and dedicated entertainment seating, everything
        you need for a lavish voyage is at your fingertips.
        <br />
        <br />
        For an extra-special journey, select Royal Suite Class, with its
        exclusive experiences, deluxe amenities, and the most spacious luxury
        suites at sea. No matter which suite you choose, experience Royal
        Caribbean’s legendary personalized service, spacious accommodations, and
        special touches at every turn.
      </RoomCard>
    </div>
  </RootLayout>
);

export default Rooms;
