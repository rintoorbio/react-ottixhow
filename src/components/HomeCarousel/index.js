import Carousel from "react-bootstrap/Carousel";
import CarouselItems from "../carouselItems/CarouselItems";

const HomeCarousel = () => {
  return (
    <div>
      <Carousel interval={6000} fade>
        <Carousel.Item>
        <img
        alt="img"
          src="assets/background2.jpg"
          style={{ height: "100vh", minWidth: "100vw" }}
        />
        <CarouselItems
          title="Enable Business Transformation"
          desc="Leveraging cutting-edge AI technology. OttixHow rapidly identifies the most suitable competitor from any marketplace or website."
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
        alt="img"
          src="assets/background1.jpg"
          style={{ height: "100vh", minWidth: "100vw" }}
        />
        <CarouselItems
          title="Stay one step ahead"
          desc="By utilizing intelligent data, you can make informed decisions regarding sales and pricing, giving your business a competitive edge."
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
        alt="img"
          src="assets/background2.jpg"
          style={{ height: "100vh", minWidth: "100vw" }}
        />
        <CarouselItems
          title="Enable Business Transformation"
          desc="Leveraging cutting-edge AI technology. OttixHow rapidly identifies the most suitable competitor from any marketplace or website."
        />
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default HomeCarousel