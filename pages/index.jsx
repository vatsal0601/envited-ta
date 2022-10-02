import Head from "@components/Head";
import Image from "next/image";
import Link from "next/link";
import LandingPageSVG from "@public/images/landing-page-image.svg";

const Home = () => {
  return (
    <>
      <Head />
      <main className="bg-secondary-purple-3">
        <div className="container min-h-screen items-center justify-between py-16 lg:flex">
          <div className="relative hidden w-max lg:block">
            <Image
              src={LandingPageSVG}
              alt="Landing Page"
              className="shadow-lg"
            />
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-center text-4xl font-bold tracking-tight md:text-6xl lg:text-right">
                Imagine if{" "}
                <span className="block bg-gradient-to-r from-primary-purple to-primary-pink bg-clip-text text-transparent">
                  Snapchat
                </span>{" "}
                had events.
              </h1>
              <p className="mx-auto max-w-xs text-center font-light text-neutrals-600 md:text-2xl lg:mx-0 lg:ml-auto lg:text-right">
                Easily host and share events with your friends across any social
                media.
              </p>
            </div>
            <div className="relative mx-auto w-3/5 md:w-max lg:hidden">
              <Image
                src={LandingPageSVG}
                alt="Landing Page"
                className="shadow-lg"
              />
            </div>
            <div className="mx-auto w-3/5 text-center lg:w-96">
              <Link href="/create">
                <a className="inline-block w-full rounded-lg bg-gradient-to-r from-primary-purple to-primary-pink p-4 text-lg font-bold text-white lg:text-xl">
                  <span>🎉</span> Create my event
                </a>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
