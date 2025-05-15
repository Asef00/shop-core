export default function HeroSection() {
  return (
    <div className="slider-padding">
      <div className="tf-slideshow slider-default slider-effect-fade slider-position slider-nav-sw slider-radius-1">
        <div
          className="swiper tf-sw-slideshow"
          data-auto-play="false"
          data-centered="false"
          data-loop="false"
          data-mobile="1"
          data-preview="1"
          data-space="15"
          data-space-mb="0"
          data-tablet="1"
          dir="ltr"
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="wrap-slider slider-group">
                <img
                  alt="fashion-slideshow"
                  src="images/slider/item-slider-activewear1.jpg"
                />
                <img
                  alt="fashion-slideshow"
                  src="images/slider/item-slider-activewear2.jpg"
                />
                <div className="box-content">
                  <div className="content-slider">
                    <div className="box-title-slider">
                      <h1 className="fade-item fade-item-1 heading text-white">
                        مجموعه دنده تنیس
                      </h1>
                      <p className="fade-item fade-item-2 body-text-1 text-white">
                        بازی خود را با تجهیزات و لوازم جانبی تنیس برتر ما تقویت
                        کنید.
                      </p>
                    </div>
                    <div className="fade-item fade-item-3 box-btn-slider">
                      <a
                        className="tf-btn btn-fill btn-white"
                        href="shop-default-grid.html"
                      >
                        <span className="text">مجموعه را کاوش کنید</span>
                        <i className="icon icon-arrowUpRight"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="wrap-slider slider-group">
                <img
                  alt="fashion-slideshow"
                  src="images/slider/item-slider-activewear3.jpg"
                />
                <img
                  alt="fashion-slideshow"
                  src="images/slider/item-slider-activewear4.jpg"
                />
                <div className="box-content">
                  <div className="content-slider">
                    <div className="box-title-slider">
                      <h1 className="fade-item fade-item-1 heading text-white">
                        اجزای دنده در حال اجرا
                      </h1>
                      <p className="fade-item fade-item-2 body-text-1 text-white">
                        با طرح های مبل با کیفیت بالا ، گرما و لوکس را به اتاق
                        نشیمن خود بیاورید.
                      </p>
                    </div>
                    <div className="fade-item fade-item-3 box-btn-slider">
                      <a
                        className="tf-btn btn-fill btn-white"
                        href="shop-default-grid.html"
                      >
                        <span className="text">مجموعه را کاوش کنید</span>
                        <i className="icon icon-arrowUpRight"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wrap-pagination">
          <div className="container">
            <div className="sw-dots sw-pagination-slider type-circle white-circle-line justify-content-center"></div>
          </div>
        </div>
        <div className="navigation-prev-slider nav-sw nav-sw-right lg">
          <i className="icon icon-arrLeft"></i>
        </div>
        <div className="navigation-next-slider nav-sw nav-sw-left lg">
          <i className="icon icon-arrRight"></i>
        </div>
      </div>
    </div>
  );
}
