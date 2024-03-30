import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/shared-react';
import { useEffect, useState } from 'react';
import Alpine from 'alpinejs';
Alpine.start();

export default function Header() {
  const [smallHeader, setSmallHeader] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      lastScrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = lastScrollY > 32;
          setSmallHeader(isScrolled);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky flex justify-between items-center w-full bg-white shadow top-[64px] z-10 transition-all duration-300 ${
        smallHeader ? 'h-[32px]' : 'h-[64px]'
      }`}
    >
      <div className="flex-col max-w-9xl px-4 sm:px-6 lg:px-8 flex justify-between items-left">
        <h1 className="text-lg font-bold tracking-tight text-gray-900">
          Transcation
        </h1>
        <span className={`text-sm ${smallHeader ? 'hidden' : 'block'}`}>
          Monitor the course of transactions, search, and identify issues.
          Resubmit or reprocess transactions as needed.
        </span>
      </div>
      <div className="max-w-9xl px-4 sm:px-6 lg:px-8">
        <span>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/components">Monitoring</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Transactions</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </span>
      </div>
    </header>
  );
}
