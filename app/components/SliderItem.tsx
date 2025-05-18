import Image from 'next/image';

interface SliderItemProps {
  image1: string;
  image2: string;
  title: string;
  description: string;
  buttonText: string;
}

export default function SliderItem({
  image1,
  image2,
  title,
  description,
  buttonText,
}: SliderItemProps) {
  return (
    <div className="swiper-slide">
      <div className="wrap-slider slider-group">
        <Image
          alt="fashion-slideshow"
          src={image1}
          width={1000}
          height={1000}
        />
        <Image
          alt="fashion-slideshow"
          src={image2}
          width={1000}
          height={1000}
        />
        <div className="box-content">
          <div className="content-slider">
            <div className="box-title-slider">
              <h1 className="fade-item fade-item-1 heading text-white">
                {title}
              </h1>
              <p className="fade-item fade-item-2 body-text-1 text-white">
                {description}
              </p>
            </div>
            <div className="fade-item fade-item-3 box-btn-slider">
              <a
                className="tf-btn btn-fill btn-white"
                href="shop-default-grid.html"
              >
                <span className="text">{buttonText}</span>
                <i className="icon icon-arrowUpRight"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
