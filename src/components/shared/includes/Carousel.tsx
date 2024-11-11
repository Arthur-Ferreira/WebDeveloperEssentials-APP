const Carousel: React.FC = () => {
  return (
    <section id="carousel">
      <article className="carousel-content">
        <div id="before">
          <img src="/assets/promo/anterior.png" alt="" />
        </div>
        <ul>
          <li>
            <div className="image-content">
              <img src="/assets/promo/WDETechnologyBanner.png" alt="" />
            </div>
          </li>
          <li>
            <div className="image-content">
              <img src="/assets/promo/boldBagSaleBanner.png" alt="" />
            </div>
          </li>
          <li>
            <div className="image-content">
              <img src="/assets/promo/campainBlackFridaySaleBanner.png" alt="" />
            </div>
          </li>
        </ul>
        <div id="next">
          <img src="/assets/promo/proximo.png" alt="" />
        </div>
      </article>
    </section>
  );
}


export default Carousel