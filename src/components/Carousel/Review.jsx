import { Card } from "react-bootstrap";

const Review = () => {
  return (
    <>
      <h3>DeccanRummy Review</h3>
      <Card
        style={{ height: "60vh", minHeight: "50vh", background: "#B2DFDB" }}
      >
        <Card.Body className="text-center">
          <img
            src="https://www.deccanrummy.com/images/homepage/reviews/deccan-reviews2.png"
            className="w-100"
            alt=""
          />
          <br />
          <br />
          <p>
            Repeated confirmation from our players proves that Deccanrummy.com
            is the online rummy site they trust the most. Here is a collated
            version of the reviews submitted by real players. Check it out..
          </p>
        </Card.Body>
      </Card>
    </>
  );
};

export default Review;
