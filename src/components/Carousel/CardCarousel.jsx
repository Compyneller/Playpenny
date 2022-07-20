import { Button, Carousel } from "react-bootstrap";
import "./All.scss";
const CardCarousel = () => {
  return (
    <>
      <h3 className="text-center">Best Rummy Promotions</h3>
      <Carousel indicators={false} className="allStarCarousel">
        <Carousel.Item className="allItems">
          <img
            className="d-block w-100"
            src="https://www.deccanrummy.com/promotions/promo-thumb/sharks-thumb.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="allCaptions">
            <h3>SOCIAL SHARKS</h3>
            <p>
              Think you’ve got what it takes to eliminate the sharks and prove
              you’re the king of the rummy game? Try our rummy sharks
              tournament.
            </p>
            <Button
              className="text-light"
              style={{ background: "#004D40", border: "none" }}
            >
              READ MORE
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="allItems">
          <img
            className="d-block w-100"
            src="https://www.deccanrummy.com/promotions/promo-thumb/decBounty-thumb.jpg"
            alt="Second slide"
          />

          <Carousel.Caption className="allCaptions">
            <h3>WEEKLY LEADERBOARD</h3>
            <p>
              Join Deccan Rummy’s weekly Gold, Platinum, and diamond leaderboard
              contests and win splendid gifts every week.
            </p>
            <Button
              className="text-light"
              style={{ background: "#004D40", border: "none" }}
            >
              READ MORE
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="allItems">
          <img
            className="d-block w-100"
            src="https://www.deccanrummy.com/promotions/promo-thumb/leader-thumb.jpg?rand=57"
            alt="Third slide"
          />

          <Carousel.Caption className="allCaptions">
            <h3>DECCAN BOUNTY</h3>
            <p>
              Get a resplendent 60% bonus with our Deccan Bonus Bounty. Start
              your rummy adventure this August by availing a fabulous bonus
              every week.
            </p>
            <Button
              className="text-light"
              style={{ background: "#004D40", border: "none" }}
            >
              READ MORE
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CardCarousel;
