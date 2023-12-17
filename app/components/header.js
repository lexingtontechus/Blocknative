"use client";
import Link from "next/link";
import Image from "next/image";
//import { AiOutlineLogin } from "react-icons/ai";
import Switch from "./switchtheme";

const logoImage = ({ src, width, quality }) => {
  return `https://localhost:3000/${src}?w=${width}&q=${quality || 75}`;
};

const Header = () => (
  <div className="navbar flex justify-between px-4 whitespace-normal uppercase bg-base-200">
    <div className="flex-1">
      <div className="avatar">
        <div className="p-0 h-12 w-12">
          <Link href="/">
            <LogoFuturistic />
          </Link>
        </div>
      </div>
    </div>
    <div className="ml-2">
      <Switch />
    </div>
  </div>
);

export default Header;

function Connect() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      viewBox="0 0 512 512"
      className="fill-neutral hover:fill-accent"
    >
      <path d="M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
    </svg>
  );
}

function LogoModern() {
  return (
    <svg
      viewBox="0 0 300 340.15116964277064"
      preserveAspectRatio="xMidYMid meet"
      className="h-10 w-10 py-1"
    >
      <g
        transform="matrix(6.048385422138436,0,0,6.048385422138436,0.00004450431117322022,0.02524321256231135)"
        className="fill-secondary"
      >
        <path
          d="M23.11 55.78L1.69 43.41A3.39 3.39 0 0 1 0 40.48V15.75a3.39 3.39 0 0 1 1.69-2.94L23.11.45a3.39 3.39 0 0 1 3.39 0l21.41 12.37a3.39 3.39 0 0 1 1.69 2.94v24.72a3.39 3.39 0 0 1-1.69 2.94L26.5 55.78a3.39 3.39 0 0 1-3.39 0z"
          className="fill-secondary"
        />
      </g>
      <g
        transform="matrix(3.7965071913705,0,0,3.7965071913705,43.92558885587034,71.4419209448168)"
        className="fill-base-100"
      >
        <path
          d="M1.6 33.28 l0 -21.28 l5.04 0 l0 21.28 l-5.04 0 z M1.6 40 l0 -5.04 l5.04 0 l0 5.04 l-5.04 0 z M8.32 40 l0 -5.04 l6.16 0 l0 5.04 l-6.16 0 z M22.44 25.16 l-4.76 -13.16 l5.36 0 l3.52 9.68 l3.48 -9.68 l5.36 0 l-4.76 13.16 l-8.2 0 z M17.680000000000003 40 l4.76 -13.16 l8.2 0 l4.76 13.16 l-5.36 0 l-3.48 -9.68 l-3.52 9.68 l-5.36 0 z M43.92 40 l0 -21.28 l5.04 0 l0 21.28 l-5.04 0 z M38.6 17.04 l0 -5.04 l15.68 0 l0 5.04 l-15.68 0 z"
          className="fill-base-100"
        />
      </g>
    </svg>
  );
}

function LogoFuturistic() {
  return (
    <svg className="h-10 w-10" viewBox="0 0 312.5 312.5">
      <g
        transform="matrix(6.25,0,0,6.25,0.31249597668647766,0)"
        className="fill-secondary"
      >
        <path
          d="M24.95 0a25 25 0 1 0 25 25 25 25 0 0 0-25-25zm0 46.91a22 22 0 1 1 22-22 22 22 0 0 1-22 21.99z"
          className="fill-secondary"
        ></path>
        <path
          d="M24.95 3.65a21.3 21.3 0 1 0 21.3 21.3 21.33 21.33 0 0 0-21.3-21.3z"
          className="text-primary-content"
        ></path>
      </g>
      <g
        transform="matrix(3.8212932024467334,0,0,3.8212932024467334,48.357413595106536,57.041305021540545)"
        className="fill-base-100"
      >
        <path
          d="M3.5885 40.038594 l-1.5885 0 l0 -27.999 l1.5885 0 l0 27.999 z M6.6112 38.45 l10.167 -0.000039062 l0 1.5885 l-11.755 0 l0 -1.071 l-0.000078125 0 l0 -26.928 l1.5886 0 l0 26.411 z M29.039 26.032 l6.5268 14.003 l-1.753 0 l-0.010352 -0.022226 l-5.6396 -12.1 l-5.6492 12.123 l-1.753 0 l0.025625 -0.054844 l6.5012 -13.948 l-6.522 -13.993 l1.7529 0 l0.01043 0.022305 l5.6344 12.09 l5.6452 -12.112 l1.7529 0 l-0.025625 0.054844 z M29.039 33.0432 l3.2588 6.9924 l-1.7521 0 l-2.383 -5.1124 l-2.3825 5.1124 l-1.7529 0 l3.2589 -6.9924 l-0.00023438 -0.000625 l0.87648 -1.8794 z M39.56 12.027000000000001 l14.778 0 l0 1.5885 l-8.0665 0 l0 26.423 l-1.5885 0 l0 -26.423 l-5.1231 0 l0 -1.5885 z M47.706 15.05 l6.6323 0 l0 1.5885 l-5.0439 0 l0 23.4 l-1.5884 0 l0 -24.989 z"
          className="fill-base-100"
        ></path>
      </g>
    </svg>
  );
}
