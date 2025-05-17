import Image from 'next/image';

interface CollectionItemProps {
  title: string;
  image: string;
  count: number;
  link: string;
}

export default function CollectionItem({
  title,
  image,
  count,
  link,
}: CollectionItemProps) {
  return (
    <div className="swiper-slide">
      <div className="collection-circle hover-img">
        <a className="img-style radius-12" href={link}>
          <Image
            alt="collection-img"
            src={image}
            width={800}
            height={600}
            className="lazyload"
          />
        </a>
        <div className="collection-content text-center">
          <div>
            <a className="cls-title" href={link}>
              <h6 className="text">{title}</h6>
              <i className="icon icon-arrowUpRight"></i>
            </a>
          </div>
          <div className="count text-secondary">{count} مورد</div>
        </div>
      </div>
    </div>
  );
}
