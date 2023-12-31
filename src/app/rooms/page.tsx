import RoomCard from "../components/roomcard";
import PageHeader from "../components/pageheader";
import Link from "next/link";

const Rooms: React.FC = () => (
  <>
    <div role="main" aria-labelledby="rooms-heading">
      <PageHeader
        title="Rooms / Pricing"
        imageSrc="/deck.webp"
        alt="Deck view of the ship"
        id="Rooms / Pricing"
      />
      <div>
        <div className="bg-custom-gold p-4 px-9 text-center uppercase font-extrabold text-2xl border border-custom-blue">
          All prices are per person in USD
        </div>
      </div>
      <div className="py-6 bg-white mx-4 md:mx-10 lg:mx-24">
        <div>
          <RoomCard
            title="Interior Stateroom"
            imageSrc="/interiorview.webp"
            price={2125}
            earlybird={1995}
            alt="Interior Stateroom Image"
            id="Interior Stateroom"
            blurb="After a day of world class training, ship board activities and exploring the island, you need to relax. At the end of a busy day, retreat to your Interior stateroom and unwind in comfort! These well-appointed staterooms offer everything you need for a comfortable voyage."
          />
        </div>
        <div>
          <RoomCard
            title="Ocean View Stateroom"
            imageSrc="/oceanview.webp"
            price={2295}
            earlybird={2175}
            alt="Ocean View Stateroom Image"
            id="Ocean View Stateroom"
            blurb="As your Royal Caribbean cruise sails to some of the world's most stunning destinations, you don't want to miss a single moment. In an Ocean View stateroom, you'll be treated to a beautiful new view every day! Spend the day exploring the world, then retreat to your comfortable, well-appointed stateroom and don't miss a thing."
          />
        </div>
        <div>
          <RoomCard
            title="Balcony Stateroom"
            imageSrc="/balconyview.webp"
            price={2895}
            earlybird={2735}
            alt="Balcony Stateroom Image"
            id="Balcony Stateroom"
            blurb="Imagine waking up every morning, opening your balcony door, and being greeted with views of a brand-new and breathtaking part of the world. Reserve a Royal Caribbean Balcony stateroom to enjoy spectacular vistas each and every day from the comfort and privacy of your own room. We believe the best way to explore the world is by sea &#45; and a Balcony stateroom is the perfect way to get a little bit closer to everything!"
          />
        </div>
        <div>
          <RoomCard
            title="Suite Stateroom"
            imageSrc="/suite.jpg"
            price={""}
            earlybird={"Contact Rhonda Hamilton for prices"}
            alt="Suite Stateroom Image"
            id="Suite Stateroom"
            blurb="Real luxury is so much more than design and amenities. It’s about unforgettable experiences — moments that inspire, service that exceeds expectations, and one-of-a-kind adventures that give you stories to bring home. You'll discover all that and more when you sail in a royal Suite Classe"
          />
        </div>

        <div className="flex gap-4 m-auto flex-col lg:flex-row">
          <div className="mb-4 lg:w-1/2  ">
            <div className="bg-accent-blue  p-4 px-9 text-center uppercase font-extrabold text-2xl border border-custom-blue">
              Your Price Includes
            </div>
            <div className="border  text-neutral-600 text-base  border-custom-blue">
              <div className="p-4">
                <ul className="custom-list">
                  <li>Round trip cruise from Miami, FL </li>
                  <li>
                    Free Royal Caribbean Deluxe Beverage Package ($550+ value){" "}
                    <Link
                      className="text-accent-blue uppercase font-bold hover:text-custom-gold underline"
                      href="https://www.royalcaribbean.com/content/dam/royal/resources/pdf/beverage-packages/deluxe-beverage-packages-cruises.pdf"
                    >
                      find out more
                    </Link>
                  </li>
                  <li>
                    As part of the Included Dining experience, unlimited
                    non-bottled beverages (i.e. water, soda, juices, coffee &
                    tea) are provided without charge
                  </li>
                  <li>
                    All Taxes, fees, port expenses, mandatory gratuities are
                    included
                  </li>
                  <li>Voom &quot;surf&quot; WiFi package</li>
                  <li>
                    All training courses, ship board integration tour &
                    reception on the cruise
                  </li>
                  <li>
                    All meals &quot;Included Dining&quot; features breakfast,
                    lunch, dinner and snacks in the Windjammer Café and
                    breakfast/brunch and dinner in the Main Dining Room as well
                    as food in other &quot;Included&quot; dining venues, i.e.
                    Café Promenade, solarium Bistro, Boardwalk Dog House.
                  </li>
                  <li>
                    Recreation facilities, such as Fitness Center, Pools, Hot
                    Tubs, Lazer Tag, FlowRider®, Rock Climbing Wall, Basketball
                    Court, Jogging Track
                  </li>
                  <li>In-room TV and movies (excluding pay-per-view movies)</li>
                  <li>Full-service room cleaning</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-4 lg:w-1/2 ">
            <div className="bg-accent-blue p-4 px-9 uppercase text-center font-extrabold text-2xl border border-custom-blue">
              Your Price Does Not Include
            </div>
            <div className="border  text-neutral-600 text-base border-custom-blue">
              <div className="p-4">
                <ul className="custom-list">
                  <li>
                    Air and ground transportation to and from the pier in Port
                    Canaveral, FL
                  </li>
                  <li>Ground transportation in ports-of-call</li>
                  <li>Pre- and post-cruise lodging</li>
                  <li>Dining in Specialty Restaurants</li>
                  <li>
                    Personal expenditures and purchases such as photos,
                    souvenirs, excursions, spa services, personal training,
                    “Escape the Rubicon” escape room, Gambling
                  </li>
                  <li>Travel Insurance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Rooms;
