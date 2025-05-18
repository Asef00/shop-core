import SliderItem from '@/app/components/SliderItem';

const sliderItems = [
  {
    image1: '/images/slider/item-slider-activewear1.jpg',
    image2: '/images/slider/item-slider-activewear2.jpg',
    title: 'مجموعه دنده تنیس',
    description:
      'بازی خود را با تجهیزات و لوازم جانبی تنیس برتر ما تقویت کنید.',
    buttonText: 'مجموعه را کاوش کنید',
  },
  {
    image1: '/images/slider/item-slider-activewear3.jpg',
    image2: '/images/slider/item-slider-activewear4.jpg',
    title: 'اجزای دنده در حال اجرا',
    description:
      'بازی خود را با تجهیزات و لوازم جانبی تنیس برتر ما تقویت کنید.',
    buttonText: 'مجموعه را کاوش کنید',
  },
];

export default function SectionSlider() {
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
            {sliderItems.map((item) => (
              <SliderItem key={item.image1} {...item} />
            ))}
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
