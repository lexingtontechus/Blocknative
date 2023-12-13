"use client";
import Link from "next/link";
import OnBoard from "../components/onboard";
export default function About() {
  return (
    <main>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/paradisecitymetaverse.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl">
            <div className="justify-center pt-8 pb-4">
              <Link href="http://lexingtontech.us" target="_blank">
                <LogoFuturistic />
              </Link>
            </div>
            <h1 className="mb-5 text-5xl font-bold uppercase">
              Lexington WEB3 Demo
            </h1>
            <p className="mb-5">
              Visit{" "}
              <Link
                href="http://lexingtontech.us"
                target="_blank"
                className="text-primary"
              >
                Lexington Tech{" "}
              </Link>{" "}
              to learn more about WEB3.{" "}
            </p>
            <div className="align-center my-4">
              <ul className="menu menu-horizontal bg-base-200 rounded-box">
                <li>
                  <Link
                    href="https://unstoppabledomains.com/?ref=919f0efc41df4c6"
                    target="_blank"
                    className="tooltip hover:bg-accent"
                    data-tip="Verify on Unstoppable Domains"
                  >
                    <img
                      src="data:image/png;base64,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"
                      alt="unstoppable domains"
                      height="25px"
                      width="25px"
                      className="py-0.5"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://rainbow.me"
                    target="_blank"
                    className="font-black text-xl text-lime-500 tooltip hover:bg-accent"
                    data-tip="Rainbow"
                  >
                    <img
                      src="https://framerusercontent.com/images/Hml6PtJwt03gwFtTRYmbpo7EarY.png?scale-down-to=512"
                      alt="Rainbow"
                      height="25px"
                      width="25px"
                      className="py-0.5"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://metamask.io"
                    target="_blank"
                    className="tooltip hover:bg-accent"
                    data-tip="Metamask"
                  >
                    <Metamask />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://linkedin.com/company/lexingtontech"
                    target="_blank"
                    className="tooltip hover:bg-accent"
                    data-tip="LinkedIn"
                  >
                    <LinkedIn />
                  </Link>
                </li>
              </ul>
            </div>
            <OnBoard />
          </div>
        </div>
      </div>
    </main>
  );
}

function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="max-h-[200px] max-w-[200px] mx-auto"
      viewBox="0 0 312.5 312.5"
      preserveAspectRatio="xMidYMid meet"
      id="hfghagba"
    >
      <defs id="SvgjsDefs4797" />
      <g
        id="SvgjsG4798"
        featurekey="rootContainer"
        transform="matrix(6.25,0,0,6.25,0.31249597668647766,0)"
        fill="#e2e8f0" //slate200
      >
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M24.95 0a25 25 0 1 0 25 25 25 25 0 0 0-25-25zm0 46.91a22 22 0 1 1 22-22 22 22 0 0 1-22 21.99z"
          fill="#e2e8f0"
        />
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M24.95 3.65a21.3 21.3 0 1 0 21.3 21.3 21.33 21.33 0 0 0-21.3-21.3z"
          fill="#e2e8f0"
        />
      </g>
      <g
        id="SvgjsG4799"
        featurekey="nameFeature-0"
        transform="matrix(2.6150626467234352,0,0,2.6150626467234352,51.397489143226416,88.24686516991014)"
        fill="#1e293b" //slate800
      >
        <path
          d="M21.6 40 l-19.84 0 l0 -28.24 l8.92 0 l0 21.12 l10.92 0 l0 7.12 z M55 40 l-10.52 0 l-6.16 -10.16 l-6.24 10.16 l-10.48 0 l10.92 -15.16 l-9.16 -13.08 l10.48 0 l4.48 7.76 l4.56 -7.76 l10.2 0 l-8.92 13.04 z M78.24 18.72 l-7.16 0 l0 21.28 l-8.92 0 l0 -21.28 l-7.2 0 l0 -6.96 l23.28 0 l0 6.96 z"
          fill="#1e293b"
        />
      </g>
    </svg>
  );
}

function LinkedIn() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="2em"
      viewBox="0 0 448 512"
      fill="#e2e8f0"
    >
      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
    </svg>
  );
}

function LogoFuturistic() {
  return (
    <svg
      className="max-h-[200px] max-w-[200px] mx-auto"
      viewBox="0 0 312.5 312.5"
    >
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

function Metamask() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      height="33"
      viewBox="0 0 35 33"
      width="35"
    >
      <g strokeLinecap="round" strokeLinejoin="round" strokeWidth=".25">
        <path
          d="m32.9582 1-13.1341 9.7183 2.4424-5.72731z"
          fill="#e17726"
          stroke="#e17726"
        />
        <g fill="#e27625" stroke="#e27625">
          <path d="m2.66296 1 13.01714 9.809-2.3254-5.81802z" />
          <path d="m28.2295 23.5335-3.4947 5.3386 7.4829 2.0603 2.1436-7.2823z" />
          <path d="m1.27281 23.6501 2.13055 7.2823 7.46994-2.0603-3.48166-5.3386z" />
          <path d="m10.4706 14.5149-2.0786 3.1358 7.405.3369-.2469-7.969z" />
          <path d="m25.1505 14.5149-5.1575-4.58704-.1688 8.05974 7.4049-.3369z" />
          <path d="m10.8733 28.8721 4.4819-2.1639-3.8583-3.0062z" />
          <path d="m20.2659 26.7082 4.4689 2.1639-.6105-5.1701z" />
        </g>
        <path
          d="m24.7348 28.8721-4.469-2.1639.3638 2.9025-.039 1.231z"
          fill="#d5bfb2"
          stroke="#d5bfb2"
        />
        <path
          d="m10.8732 28.8721 4.1572 1.9696-.026-1.231.3508-2.9025z"
          fill="#d5bfb2"
          stroke="#d5bfb2"
        />
        <path
          d="m15.1084 21.7842-3.7155-1.0884 2.6243-1.2051z"
          fill="#233447"
          stroke="#233447"
        />
        <path
          d="m20.5126 21.7842 1.0913-2.2935 2.6372 1.2051z"
          fill="#233447"
          stroke="#233447"
        />
        <path
          d="m10.8733 28.8721.6495-5.3386-4.13117.1167z"
          fill="#cc6228"
          stroke="#cc6228"
        />
        <path
          d="m24.0982 23.5335.6366 5.3386 3.4946-5.2219z"
          fill="#cc6228"
          stroke="#cc6228"
        />
        <path
          d="m27.2291 17.6507-7.405.3369.6885 3.7966 1.0913-2.2935 2.6372 1.2051z"
          fill="#cc6228"
          stroke="#cc6228"
        />
        <path
          d="m11.3929 20.6958 2.6242-1.2051 1.0913 2.2935.6885-3.7966-7.40495-.3369z"
          fill="#cc6228"
          stroke="#cc6228"
        />
        <path
          d="m8.392 17.6507 3.1049 6.0513-.1039-3.0062z"
          fill="#e27525"
          stroke="#e27525"
        />
        <path
          d="m24.2412 20.6958-.1169 3.0062 3.1049-6.0513z"
          fill="#e27525"
          stroke="#e27525"
        />
        <path
          d="m15.797 17.9876-.6886 3.7967.8704 4.4833.1949-5.9087z"
          fill="#e27525"
          stroke="#e27525"
        />
        <path
          d="m19.8242 17.9876-.3638 2.3584.1819 5.9216.8704-4.4833z"
          fill="#e27525"
          stroke="#e27525"
        />
        <path
          d="m20.5127 21.7842-.8704 4.4834.6236.4406 3.8584-3.0062.1169-3.0062z"
          fill="#f5841f"
          stroke="#f5841f"
        />
        <path
          d="m11.3929 20.6958.104 3.0062 3.8583 3.0062.6236-.4406-.8704-4.4834z"
          fill="#f5841f"
          stroke="#f5841f"
        />
        <path
          d="m20.5906 30.8417.039-1.231-.3378-.2851h-4.9626l-.3248.2851.026 1.231-4.1572-1.9696 1.4551 1.1921 2.9489 2.0344h5.0536l2.962-2.0344 1.442-1.1921z"
          fill="#c0ac9d"
          stroke="#c0ac9d"
        />
        <path
          d="m20.2659 26.7082-.6236-.4406h-3.6635l-.6236.4406-.3508 2.9025.3248-.2851h4.9626l.3378.2851z"
          fill="#161616"
          stroke="#161616"
        />
        <path
          d="m33.5168 11.3532 1.1043-5.36447-1.6629-4.98873-12.6923 9.3944 4.8846 4.1205 6.8983 2.0085 1.52-1.7752-.6626-.4795 1.0523-.9588-.8054-.622 1.0523-.8034z"
          fill="#763e1a"
          stroke="#763e1a"
        />
        <path
          d="m1 5.98873 1.11724 5.36447-.71451.5313 1.06527.8034-.80545.622 1.05228.9588-.66255.4795 1.51997 1.7752 6.89835-2.0085 4.8846-4.1205-12.69233-9.3944z"
          fill="#763e1a"
          stroke="#763e1a"
        />
        <path
          d="m32.0489 16.5234-6.8983-2.0085 2.0786 3.1358-3.1049 6.0513 4.1052-.0519h6.1318z"
          fill="#f5841f"
          stroke="#f5841f"
        />
        <path
          d="m10.4705 14.5149-6.89828 2.0085-2.29944 7.1267h6.11883l4.10519.0519-3.10487-6.0513z"
          fill="#f5841f"
          stroke="#f5841f"
        />
        <path
          d="m19.8241 17.9876.4417-7.5932 2.0007-5.4034h-8.9119l2.0006 5.4034.4417 7.5932.1689 2.3842.013 5.8958h3.6635l.013-5.8958z"
          fill="#f5841f"
          stroke="#f5841f"
        />
      </g>
    </svg>
  );
}
