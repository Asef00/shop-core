interface ProductItemProps {
  name: string;
  href: string;
  image: string;
  hoverImage: string;
  price: string;
  currency: string;
}

export default function ProductItem({
  name,
  href,
  image,
  hoverImage,
  price,
  currency,
}: ProductItemProps) {
  return (
    <div className="card-product">
      <div className="card-product-wrapper">
        <a className="product-img" href={href}>
          <img
            alt={name}
            className="lazyload img-product"
            data-src={image}
            src={image}
          />
          <img
            alt={name}
            className="lazyload img-hover"
            data-src={hoverImage}
            src={hoverImage}
          />
        </a>
        <div className="list-product-btn">
          <a
            className="box-icon wishlist btn-icon-action"
            href="javascript:void(0);"
          >
            <span className="icon icon-heart"></span>
            <span className="tooltip">علاقه مندی ها</span>
          </a>
          <a
            className="box-icon compare btn-icon-action"
            href="javascript:void(0);"
          >
            <span className="icon icon-gitDiff"></span>
            <span className="tooltip">مقایسه کردن</span>
          </a>
          <a
            className="box-icon quickview tf-btn-loading"
            href="javascript:void(0);"
          >
            <span className="icon icon-eye"></span>
            <span className="tooltip">نمایش سریع</span>
          </a>
        </div>
        <div className="list-btn-main">
          <a className="btn-main-product" href="javascript:void(0);">
            سبد خرید
          </a>
        </div>
      </div>
      <div className="card-product-info">
        <a className="title link" href={href}>
          {name}
        </a>
        <span className="price">
          {price} {currency}
        </span>
      </div>
    </div>
  );
}
