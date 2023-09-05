import Card from "../components/faqcard";
import PageHeader from "../components/pageheader";
import Image from "next/image";
import Keynote from "../components/keynote";

const CourseCards: React.FC = () => (
  <div role="main" aria-labelledby="course-heading">
    <PageHeader
      title="Courses"
      imageSrc="/theatre.webp"
      alt="Theatre inside the ship"
      id="course-heading"
    />

    <div className="px-24 pt-12 hidden lg:block overflow-hidden">
      <div className="relative h-full w-full">
        <div className="absolute top-0 left-0 w-full h-full z-1 overflow-hidden">
          <div className="">
            <Image
              src="/anthony.webp"
              alt="anthony grimani"
              className="object-contain"
              layout="fill"
              objectPosition="center 30%"
              priority
              style={{ left: "30%" }}
            />
          </div>
          <div className="relative w-full h-full bg-white z-10 diagonal-cut-2 "></div>
        </div>
        <Keynote />
      </div>
    </div>

    <div className="lg:hidden py-12 lg:py-24 px-4 md:px-10 gap-8 lg:px-24">
      <div className="">
        <h2 className="pt-2 uppercase bg-white text-custom-gold text-2xl font-bold">
          VIP Keynote Speaker & Instructor
        </h2>
        <div className="pb-2 uppercase bg-white text-custom-blue-dark text-2xl font-bold">
          Anthony Grimani
        </div>
      </div>
      <div
        className="relative overflow-hidden w-full"
        style={{ height: "500px" }}
      >
        <Image
          src="/anthony.webp"
          alt="anthony grimani"
          layout="fill"
          objectFit="cover"
          className="absolute pb-2 overflow-hidden"
          objectPosition="center 40%"
        />
      </div>
      <div className="bg-white text-neutral-600 pb-2">
        Anthony Grimani is a highly respected expert in home theater acoustics
        and design. He was named one of the “50 Most Vital Influencers” by
        CustomRetailer magazine and inducted as Fellow of the CEDIA trade
        association. In 2013, CEPro Magazine named him one of the “Top 20 Most
        Influential People of the Past 20 Years.”
        <br />
        <br />
        His more than 25 years of industry experience include executive
        positions at Dolby and Lucasfilm THX.
        <br />
        <br />
        At Dolby, Anthony was intricately involved in the development of
        surround sound for consumer applications. During his nine-year tenure at
        THX, he managed the THX consumer licensing program and the technology
        development program, setting the direction for consumer and professional
        Audio/Video businesses.
        <br />
        <br />
        Anthony developed the Home THX program, the THX PM3 program, and
        invented the revolutionary Surround EX 6.1 channel audio format
        pioneered in Star Wars, the Phantom Menace.
        <br />
        <br />
        He&apos;s a frequent lecturer at industry conferences such as AES (Audio
        Engineering Society) and CEDIA (Custom Electronics Design and
        Installation Association) and earned the CEDIA Top Instructor award.
        <br />
        <br />
        Anthony holds six patents in the area of audio and acoustics. He
        received his bachelor&apos;s degree in Electrical Engineering from the
        University of California at Davis.
        <br />
        <br />
        He&apos;s been passionate about music and technology since he was a
        young man. He studied at the Music Conservatory in Paris and tinkered
        with gear lying around his father&apos;s amateur audio workshop.
        <br />
        <br />
        Born in Asia and raised in Europe, Anthony speaks four languages
        fluently. He resides in Marin County with his wife.
      </div>
    </div>

    <div className="bg-white" role="region" aria-labelledby="questions-heading">
      <div className="py-10 lg:pb-24 lg:mx-24 md:mx-10 mx-4 flex gap-10 flex-col">
        <Card
          title="Seminar on the Seas Custom Integrator Training"
          id="seminar-heading"
        >
          Choose from 36 hours of advanced courses over the three days the ship
          is at sea on the cruise. “Seminar on the Seas” is a key educational
          and networking event designed to inform and connect with some of the
          top instructors and manufacturers in the industry.
          <br />
          <br />
          The “Seminar on the Seas” cruise is designed to provide advanced
          training in business, marketing and managing your business to become
          more profitable and efficient. Also, this cruise offers a chance to
          network with some the industry&apos;s top instructors, integrators and
          manufacturers. This cruise is designed to deliver crucial industry
          knowledge and connections. Choose from multiple classes over the three
          days of training.
        </Card>
        <Card title="Planned Topics" id="topics-heading">
          <ul className="custom-list ml-4" aria-label="Planned course topics">
            <li className="pb-2">
              Real live challenges of selecting the right equipment for the
              application.
            </li>
            <li className="pb-2">
              Flat panel, projector, LED walls. When and how to use them.
            </li>
            <li>
              Standards and certifications A/V for residential and commercial.
            </li>
            <li className="pb-2">
              Automation, new and amazing ways to apply automation to your
              projects.
            </li>
            <li className="pb-2">
              Proper design of motorized shades for energy and lighting
              management.
            </li>
            <li className="pb-2">
              Where are we heading? A look down the CE path.
            </li>
            <li className="pb-2">
              Lighting. Why it&apos;s so important. How to use tunable and other
              LED lights.
            </li>
            <li className="pb-2">
              Social Marketing, what is it and how to take advantage of it.
            </li>
            <li className="pb-2">
              Lessons on real world networking needs for today&apos;s
              integration of electronic systems.
            </li>
            <li className="pb-2">
              Get it done right! Learn how to correctly use your distributors to
              increase your profits.
            </li>
            <li className="pb-2">
              Advertising, when and how to use it effectively. How to use
              competitions to your advantage.
            </li>
            <li className="pb-2">
              Ask the Experts. Q &A panel discussion on any CI matters.
            </li>
          </ul>
        </Card>
        <Card title="Other Highlights" id="highlights-heading">
          <ul className="custom-list " aria-label="Other event highlights">
            <li className="pb-2">
              Welcome reception in the evening after departing Tampa.
            </li>
            <li className="pb-2">
              Behind the scenes tour of the A/V, automation equipment for
              entertainment areas of the ship.
            </li>
          </ul>
        </Card>
      </div>
    </div>
  </div>
);

export default CourseCards;
