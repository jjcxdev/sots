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
      <div className="py-6 bg-white">
        <div>
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
            blurb="As your Royal Caribbean cruise sails to some of the world&#39;s most stunning destinations, you don&#39;t want to miss a single moment. In an Ocean View stateroom, you&#39;ll be treated to a beautiful new view every day! Spend the day exploring the world, then retreat to your comfortable, well-appointed stateroom and don&#39;t miss a thing."
          />
        </div>
        <div>
          <RoomCard
            title="Balcony Stateroom"
            imageSrc="/img8.webp"
            price={2735}
            earlybird={2895}
            id=""
            blurb="Imagine waking up every morning, opening your balcony door, and being greeted with views of a brand-new and breathtaking part of the world. Reserve a Royal Caribbean Balcony stateroom to enjoy spectacular vistas each and every day from the comfort and privacy of your own room. We believe the best way to explore the world is by sea &#45; and a Balcony stateroom is the perfect way to get a little bit closer to everything!"
          />
        </div>
        <div className="mx-4 border my-6 border-custom-blue rounded-md">
          <div className="text-custom-blue uppercase text-xl font-bold text-center p-4">
            These packages include
          </div>
          <div className="text-neutral-600 pb-4 px-4">
            <ul className="custom-list">
              <li>All taxes</li>
              <li>Port Entry fees</li>
              <li>Mandatory gratuities</li>
              <li>Meals</li>
              <li>1 Deluxe beverage package</li>
              <li>1 WiFi package</li>
              <li>All training courses</li>
              <li>Custom golf shirt & other items</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Rooms;
