'use client';

import Link from 'next/link';
import ProductItem from '@/app/components/ProductItem';
import { usePathname } from 'next/navigation';

interface MenuItem {
  name: string;
  href: string;
  subMenu?: SubMenu[];
  subShop?: Product[];
}

interface SubMenu {
  name: string;
  items: SubMenuItem[];
}

interface SubMenuItem {
  name: string;
  href: string;
}

interface Product {
  id: number;
  name: string;
  price: string;
  currency: string;
  image: string;
  hoverImage: string;
  href: string;
}

const menuItems: MenuItem[] = [
  {
    name: 'خانه',
    href: '/',
  },
  {
    name: 'فروشگاه',
    href: '#',
    subMenu: [
      {
        name: 'چیدمان فروشگاه',
        items: [
          { name: 'شبکه پیش فرض', href: 'shop-default-grid.html' },
          { name: 'لیست پیش فرض', href: 'shop-default-list.html' },
          { name: 'لیست عرض کامل', href: 'shop-fullwidth-list.html' },
          { name: 'شبکه کامل عرض', href: 'shop-fullwidth-grid.html' },
          { name: 'نوار کناری چپ', href: 'shop-left-sidebar.html' },
          { name: 'نوار کناری راست', href: 'shop-right-sidebar.html' },
          { name: 'کشویی فیلتر', href: 'shop-filter-dropdown.html' },
          { name: 'بوم فیلتر', href: 'shop-filter-canvas.html' },
        ],
      },
      {
        name: 'ویژگی های فروشگاه',
        items: [
          { name: 'رده های برتر 1', href: 'shop-categories-top.html' },
          { name: 'رده های برتر 2', href: 'shop-categories-top-02.html' },
          { name: 'مجموعه فروشگاه', href: 'shop-collection.html' },
          { name: 'بردکرامپ با بکگراند', href: 'shop-breadcrumb-img.html' },
          { name: 'بردکرامپ سمت راست', href: 'shop-breadcrumb-left.html' },
          { name: 'بکگراند بردکرامب', href: 'shop-breadcrumb-background.html' },
          { name: 'دکمه بار', href: 'shop-load-button.html' },
          { name: 'صفحه بندی', href: 'shop-pagination.html' },
          { name: 'پیمایش نامتناهی', href: 'shop-infinite-scrolling.html' },
        ],
      },
      {
        name: 'محصولات شناور',
        items: [
          { name: 'سبک محصول 1', href: 'product-style-01.html' },
          { name: 'سبک محصول 2', href: 'product-style-02.html' },
          { name: 'سبک محصول 3', href: 'product-style-03.html' },
          { name: 'سبک محصول 4', href: 'product-style-04.html' },
          { name: 'سبک محصول 5', href: 'product-style-05.html' },
          { name: 'سبک محصول 6', href: 'product-style-06.html' },
          { name: 'سبک محصول 7', href: 'product-style-07.html' },
        ],
      },
      {
        name: 'صفحات من',
        items: [
          { name: 'علاقه مندی ها', href: 'wish-list.html' },
          { name: 'نتیجه جستجو', href: 'search-result.html' },
          { name: 'سبد خرید', href: 'shopping-cart.html' },
          { name: 'ورود به سیستم/ثبت نام', href: 'login.html' },
          { name: 'رمز عبور را فراموش کنید', href: 'forget-password.html' },
          { name: 'ردیابی سفارش', href: 'order-tracking.html' },
          { name: 'حساب من', href: 'my-account.html' },
        ],
      },
    ],
    subShop: [
      {
        id: 1,
        name: 'تی شرت پنبه ای یقه V',
        price: '59.99',
        currency: 'تومان',
        image: 'images/products/womens/women-19.jpg',
        hoverImage: 'images/products/womens/women-20.jpg',
        href: 'product-detail.html',
      },
      {
        id: 2,
        name: 'عینک آفتابی پلاریزه',
        price: '59.99',
        currency: 'تومان',
        image: 'images/products/womens/women-37.jpg',
        hoverImage: 'images/products/womens/women-38.jpg',
        href: 'product-detail.html',
      },
      {
        id: 3,
        name: 'تاپ پنبه ای روبان',
        price: '59.99',
        currency: 'تومان',
        image: 'images/products/womens/women-8.jpg',
        hoverImage: 'images/products/womens/women-9.jpg',
        href: 'product-detail.html',
      },
      {
        id: 4,
        name: 'شلوار',
        price: '79.99',
        currency: 'تومان',
        image: 'images/products/womens/women-171.jpg',
        hoverImage: 'images/products/womens/women-172.jpg',
        href: 'product-detail.html',
      },
    ],
  },
  {
    name: 'بلاگ',
    href: '#',
  },
  {
    name: 'درباره ما',
    href: '#',
  },
  {
    name: 'تماس با ما',
    href: '#',
  },
];

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '#') return false;
    return pathname === href;
  };

  return (
    <header className="header-default header-fullwidth" id="header">
      <div className="row wrapper-header align-items-center">
        {/* mobile menu */}
        <div className="col-md-4 col-3 d-xl-none">
          <a
            aria-controls="mobileMenu"
            className="mobile-menu"
            data-bs-toggle="offcanvas"
            href="home-activewear.html#mobileMenu"
          >
            <i className="icon icon-categories"></i>
          </a>
        </div>

        {/* logo */}
        <div className="col-xl-3 col-md-4 col-6">
          <a className="logo-header" href="index.html">
            <img alt="logo" className="logo" src="images/logo/logo.svg" />
          </a>
        </div>

        {/* desktop menu */}
        <div className="col-xl-6 d-none d-xl-block">
          <nav className="box-navigation text-center">
            <ul className="box-nav-ul d-flex align-items-center justify-content-center">
              {menuItems.map((item, index) => (
                <li
                  className={`menu-item ${isActive(item.href) ? 'active' : ''}`}
                  key={index}
                >
                  <Link className="item-link" href={item.href}>
                    {item.name}
                    {(item.subMenu || item.subShop) && (
                      <i className="icon icon-arrow-down"></i>
                    )}
                  </Link>

                  {(item.subMenu || item.subShop) && (
                    <div className="sub-menu mega-menu">
                      <div className="container">
                        <div className="row">
                          {item.subMenu?.map((subMenu, subIndex) => (
                            <div
                              key={`submenu-${subIndex}`}
                              className="col-lg-2"
                            >
                              <div className="mega-menu-item">
                                <div className="menu-heading">
                                  {subMenu.name}
                                </div>
                                <ul className="menu-list">
                                  {subMenu.items.map((subItem, itemIndex) => (
                                    <li key={`submenu-item-${itemIndex}`}>
                                      <a
                                        className="menu-link-text"
                                        href={subItem.href}
                                      >
                                        {subItem.name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          ))}
                          {item.subShop && (
                            <div className="col-lg-4">
                              <div className="wrapper-sub-shop">
                                <div className="menu-heading">محصولات اخیر</div>
                                <div
                                  className="swiper tf-product-header"
                                  dir="ltr"
                                >
                                  <div className="swiper-wrapper">
                                    {item.subShop.map((product, index) => (
                                      <div
                                        key={`product-${index}`}
                                        className="swiper-slide"
                                      >
                                        <ProductItem {...product} />
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* left icons */}
        <div className="col-xl-3 col-md-4 col-3">
          <ul className="nav-icon d-flex justify-content-end align-items-center">
            <li className="nav-search">
              <a
                className="nav-icon-item"
                data-bs-toggle="modal"
                href="home-activewear.html#search"
              >
                <svg
                  className="icon"
                  fill="none"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                    stroke="#181818"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                  <path
                    d="M21.35 21.0004L17 16.6504"
                    stroke="#181818"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                </svg>
              </a>
            </li>
            <li className="nav-account">
              <a className="nav-icon-item" href="home-activewear.html#">
                <svg
                  className="icon"
                  fill="none"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                    stroke="#181818"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                  <path
                    d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                    stroke="#181818"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                </svg>
              </a>
              <div className="dropdown-account dropdown-login">
                <div className="sub-top">
                  <a className="tf-btn btn-reset" href="login.html">
                    ورود
                  </a>
                  <p className="text-center text-secondary-2">
                    حساب کاربری ندارید؟<a href="register.html">ثبت نام کنید</a>
                  </p>
                </div>
                <div className="sub-bot">
                  <span className="body-text-">حمایت</span>
                </div>
              </div>
            </li>
            <li className="nav-wishlist">
              <a className="nav-icon-item" href="wish-list.html">
                <svg
                  className="icon"
                  fill="none"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.8401 4.60987C20.3294 4.09888 19.7229 3.69352 19.0555 3.41696C18.388 3.14039 17.6726 2.99805 16.9501 2.99805C16.2276 2.99805 15.5122 3.14039 14.8448 3.41696C14.1773 3.69352 13.5709 4.09888 13.0601 4.60987L12.0001 5.66987L10.9401 4.60987C9.90843 3.57818 8.50915 2.99858 7.05012 2.99858C5.59109 2.99858 4.19181 3.57818 3.16012 4.60987C2.12843 5.64156 1.54883 7.04084 1.54883 8.49987C1.54883 9.95891 2.12843 11.3582 3.16012 12.3899L4.22012 13.4499L12.0001 21.2299L19.7801 13.4499L20.8401 12.3899C21.3511 11.8791 21.7565 11.2727 22.033 10.6052C22.3096 9.93777 22.4519 9.22236 22.4519 8.49987C22.4519 7.77738 22.3096 7.06198 22.033 6.39452C21.7565 5.72706 21.3511 5.12063 20.8401 4.60987V4.60987Z"
                    stroke="#181818"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                </svg>
              </a>
            </li>
            <li className="nav-cart">
              <a
                className="nav-icon-item"
                data-bs-toggle="modal"
                href="home-activewear.html#shoppingCart"
              >
                <svg
                  className="icon"
                  fill="none"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5078 10.8734V6.36686C16.5078 5.17166 16.033 4.02541 15.1879 3.18028C14.3428 2.33514 13.1965 1.86035 12.0013 1.86035C10.8061 1.86035 9.65985 2.33514 8.81472 3.18028C7.96958 4.02541 7.49479 5.17166 7.49479 6.36686V10.8734M4.11491 8.62012H19.8877L21.0143 22.1396H2.98828L4.11491 8.62012Z"
                    stroke="#181818"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                </svg>
                <span className="count-box">1</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
