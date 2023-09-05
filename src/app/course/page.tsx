import Card from "../components/faqcard";
import PageHeader from "../components/pageheader";

const CourseCards: React.FC = () => (
  <div role="main" aria-labelledby="course-heading">
    <PageHeader
      title="Courses"
      imageSrc="/theatre.webp"
      alt="Theatre inside the ship"
      id="course-heading"
    />

    <div className="bg-white" role="region" aria-labelledby="questions-heading">
      <div className="py-10 lg:py-24 lg:mx-24 md:mx-10 mx-4 flex gap-10 flex-col">
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
