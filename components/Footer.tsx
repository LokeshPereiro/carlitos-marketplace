import Image from "next/image";

import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flexCenter footer">
      <div className="flex flex-col items-center">
        <Image src="/tennis-racket.svg" width={50} height={35} alt="logo" />

        <p className="text-center font-normal mt-5 max-w-xs">
          Carlitos-Marketplace is the world&apos;s leading community to sell
          your tennis related products to tennis fans and lovers.
        </p>
        <p className="mt-3 text-sm">
          &copy; {new Date().getFullYear()} Lokesh Pereiro. All rights reserved
          - Made with 💖
        </p>
      </div>
    </footer>
  );
};
