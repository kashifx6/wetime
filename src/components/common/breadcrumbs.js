import React from "react";
import Link from "next/link";

const Breadcrumbs = ({ items, title }) => {
  return (
    <div
      className="h-[258px] bg-cover bg-center relative"
      style={{ backgroundImage: `url('/assets/images/user_img.jpg')` }}
    >
      <div className="bg-[#fdcf7a] absolute top-0 left-0 w-full h-full opacity-75"></div>
      <div className="flex flex-col justify-center h-full relative z-10">
        <div className="text-center text-[#120F49] text-[36px] font-bold">
          {title}
        </div>
        <nav className="flex justify-center" aria-label="Breadcrumb">
          <ol className="inline-flex items-center mb-3 sm:mb-0">
            {items.map((item, index) => (
              <React.Fragment key={index}>
                {index > 0 && <span className="text-black px-2">/</span>}
                <li>
                  <div className="flex items-center">
                    <Link
                      className="text-black inline-flex items-center px-1 py-2 text-sm font-normal text-center"
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  </div>
                </li>
              </React.Fragment>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumbs;
