import CollectionItem from '@/app/components/CollectionItem';

const collections = [
  {
    id: 1,
    title: 'یوگا',
    image: '/images/collections/image.png',
    count: 12,
    link: 'shop-collection.html',
  },
  {
    id: 2,
    title: 'سالن',
    image: '/images/collections/image.png',
    count: 12,
    link: 'shop-collection.html',
  },
  {
    id: 3,
    title: 'تنیس',
    image: '/images/collections/image.png',
    count: 12,
    link: 'shop-collection.html',
  },
  {
    id: 4,
    title: 'آموزش',
    image: '/images/collections/image.png',
    count: 12,
    link: 'shop-collection.html',
  },
  {
    id: 5,
    title: 'جرات',
    image: '/images/collections/image.png',
    count: 12,
    link: 'shop-collection.html',
  },
  {
    id: 6,
    title: 'آموزش',
    image: '/images/collections/image.png',
    count: 12,
    link: 'shop-collection.html',
  },
];

export default function SectionCategory() {
  return (
    <section className="flat-spacing-2">
      <div className="container">
        <div className="heading-section text-center wow fadeInUp">
          <h3 className="heading">خرید با فعالیت</h3>
          <p className="subheading">
            روند برتر ما را مرور کنید: داغترین انتخاب های مورد علاقه همه.
          </p>
        </div>
        <div
          className="flat-collection-circle wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div
            className="swiper tf-sw-collection"
            data-mobile="2"
            data-pagination="1"
            data-pagination-lg="1"
            data-pagination-md="1"
            data-preview="5"
            data-space="15"
            data-space-lg="20"
            data-space-md="20"
            data-tablet="3"
            dir="ltr"
          >
            <div className="swiper-wrapper">
              {collections.map((item) => (
                <CollectionItem key={item.id} {...item} />
              ))}
            </div>
            <div className="d-flex d-lg-none sw-pagination-collection sw-dots type-circle justify-content-center"></div>
          </div>
          <div className="nav-prev-collection d-none d-lg-flex nav-sw style-line nav-sw-left">
            <i className="icon icon-arrLeft"></i>
          </div>
          <div className="nav-next-collection d-none d-lg-flex nav-sw style-line nav-sw-right">
            <i className="icon icon-arrRight"></i>
          </div>
        </div>
      </div>
    </section>
  );
}
