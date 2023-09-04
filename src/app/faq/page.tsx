import Card from "../components/faqcard";
import PageHeader from "../components/pageheader";

const FAQPage: React.FC = () => (
  <div className="bg-white" role="main" aria-labelledby="faq-heading">
    <PageHeader
      title="FAQ"
      imageSrc="/img5.webp"
      alt="View from inside the ship"
      id="FAQ-heading"
    />
    <div className="py-6 mx-4 md:mx-10 lg:mx-24">
      <div
        role="region"
        aria-labelledby="questions-heading"
        className="flex gap-8 flex-col">
        <div role="article" aria-labelledby="payment-heading" />

        <Card title="Payments" id="payment-heading">
          Deposits are due at the time of booking:
          <br />
          <br />
          <ul
            className="custom-list"
            aria-label="Deposit amounts per room type">
            <li>Interior/Ocean view $400 per person</li>
            <li>Balcony $500 per person</li>
            <li>Suites $600 per person</li>
          </ul>
          <br />
          Select your preferred payment plan (quarterly or monthly).
          Installments are charged on the 1st of the month based on your
          selected payment plan.
          <br />
          <br />
          Included for each guest are port fees, taxes, gratuities & deluxe
          drink package.
        </Card>
        <div role="article" aria-labelledby="cancellations-heading" />
        <Card title="Cancellations / Changes" id="cancellations-heading">
          All payments made for a Reservation are non-refundable at the time of
          payment. By purchasing Travel Insurance, Guests can offset this risk.
          <br />
          <br />
          Additional details on Travel Insurance can be found under the{" "}
          <span className="font-bold text-custom-blue-dark">
            TRAVEL INSURANCE
          </span>{" "}
          tab below. All reservation change requests must be made by contacting
          our office at 416-896-2495 Mon-Fri 9-5PM EST. <br />
          <br />
          Changes made to an existing reservation within 120 days of the
          embarkation date are subject to a $150 manifest change fee.
        </Card>
        <div role="article" aria-labelledby="insurance-heading" />
        <Card title="Travel Insurance" id="insurance-heading">
          Seminar on the Seas strongly encourages the purchase of Travel
          Insurance. All payments made for a Reservation are non-refundable at
          the time of payment.
          <br />
          <br />
          Though insurance may be purchased up to 48 hours prior to sailing, to
          secure the broadest coverage, including pre-existing conditions,
          Travel Insurance must be purchased within 14 days of the payment of
          your deposit.
        </Card>
        <div role="article" aria-labelledby="documents-heading" />
        <Card title="Travel Documentation" id="documents-heading">
          Seminar on the Seas strongly recommend that all guests travel with a
          valid passport with at least six (6) months validity during their
          cruise. <br />
          <br />
          This greatly assists guests who may need to fly out of the United
          States to meet their ship at the next available port should they miss
          their scheduled embarkation in a U.S. port; guests entering the U.S.
          at the end of their cruise; and guests needing to fly to the U.S.
          before their cruise ends because of medical, family, personal or
          business emergencies, missing a ship&apos;s departure from a port of
          call, involuntary disembarkation from a ship due to misconduct, or
          other reasons.
          <br />
          <br />
          Guests who need to fly to the United States before their cruise ends
          will likely experience significant delays and complications related to
          booking airline tickets and entering the United States if they do not
          have a valid U.S. passport with them.
        </Card>
      </div>
    </div>
  </div>
);

export default FAQPage;
