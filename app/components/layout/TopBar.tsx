export default function TopBar() {
  return (
    <div className="tf-topbar topbar-white bg-main">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-12 text-center">
            <div className="wrapper-slider-topbar">
              <div
                className="swiper tf-sw-top_bar"
                data-auto-play="true"
                data-delay="2000"
                data-loop="true"
                data-preview="1"
                data-space="0"
                data-speed="2000"
                dir="ltr"
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <p className="top-bar-text text-line-clamp-1 text-btn-uppercase fw-semibold letter-1">
                      ارسال رایگان تمام سفارشات
                      <span className="text-primary">20.00 تومان</span>
                    </p>
                  </div>
                  <div className="swiper-slide">
                    <p className="top-bar-text text-line-clamp-1 text-btn-uppercase fw-semibold letter-1">
                      فروش میان فصل: 20 ٪ تخفیف - خودکار اعمال شده در پرداخت -
                      فقط زمان محدود.
                    </p>
                  </div>
                </div>
              </div>
              <div className="navigation-topbar nav-prev-topbar">
                <span className="icon icon-arrLeft"></span>
              </div>
              <div className="navigation-topbar nav-next-topbar">
                <span className="icon icon-arrRight"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
