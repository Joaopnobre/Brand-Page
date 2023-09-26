import "./Hero.css";

function Hero() {
  return (
    <>
      <main className="hero container">
        <div className="hero-content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="hero-btn">
            <button>Shop Now</button>
            <button className="secondary-btn">Category</button>
          </div>

          <div className="shopping">
            <p>Also Available On</p>
            <div className="brand-icons">
              <img src="../../../assets/amazon.png" alt="amazon-logo" />
              <img src="../../../assets/flipkart.png" alt="flipkart -logo" />
            </div>
          </div>
        </div>
        <div className="hero-image"></div>
        <img src="../../../assets/hero-image.png" alt="hero-image" />
      </main>
    </>
  );
}

export default Hero;
