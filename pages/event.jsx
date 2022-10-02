import Head from "@components/Head";
import Image from "next/image";
import Cake from "@public/images/birthday-cake.png";
import { ImCalendar, ImLocation2 } from "react-icons/im";

const Event = () => {
  return (
    <>
      <Head title="Envited - Event" />
      <main className="bg-neutrals-100">
        <div className="min-h-screen flex-row-reverse justify-between lg:container lg:mt-24 lg:flex">
          <div className="md:mx-auto md:mt-24 md:w-9/12 lg:mx-0 lg:mt-0 lg:w-1/2">
            <Image
              src={Cake}
              alt="Birthday Cake"
            />
          </div>
          <div className="mx-auto mt-4 space-y-4 px-4 md:w-9/12 md:px-0 lg:space-y-8">
            <div className="space-y-1 lg:space-y-2">
              <h1 className="text-3xl font-bold tracking-tight text-primary-purple-dark md:text-5xl">
                Birthday Bash
              </h1>
              <p className="text-neutrals-500 md:text-lg">
                Hosted by <span className="font-bold">Elysia</span>
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <ImCalendar className="h-14 w-14 rounded-md border border-neutrals-200 bg-white p-4 text-primary-purple shadow-md" />
                <p>
                  <span className="block font-semibold text-primary-purple-dark md:text-lg">
                    18 August 6:00PM
                  </span>
                  <span className="text-sm font-light text-neutrals-500 md:text-base">
                    to <span className="font-semibold">19 August 1:00PM</span>{" "}
                    UTC +10
                  </span>
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <ImLocation2 className="h-14 w-14 rounded-md border border-neutrals-200 bg-white p-4 text-primary-purple shadow-md" />
                <p>
                  <span className="block font-semibold text-primary-purple-dark md:text-lg">
                    Street Name
                  </span>
                  <span className="text-sm font-light text-neutrals-500 md:text-base">
                    Suburb, State, Postcode
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Event;
