import Head from "@components/Head";
import Link from "next/link";

const create = () => {
  return (
    <>
      <Head title="Envited - Create Event" />
      <main className="bg-neutrals-100">
        <div className="container grid min-h-screen place-content-center space-y-4 md:space-y-8">
          <h1 className="text-4xl font-bold tracking-tight text-primary-purple-dark md:text-5xl">
            Create new event
          </h1>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-2"
          >
            <div className="space-y-1">
              <label
                htmlFor="event-name"
                className="w-full text-xs font-semibold text-primary-purple lg:text-sm"
              >
                Event Name
              </label>
              <input
                type="text"
                id="event-name"
                placeholder="Event Name"
                className="focus:ring-3 w-full truncate rounded-lg border border-neutrals-400 p-3 text-sm placeholder-neutrals-400 transition-all focus:outline-none focus:ring focus:ring-primary-purple lg:text-base"
              />
            </div>
            <div className="space-y-1">
              <label
                htmlFor="host-name"
                className="w-full text-xs font-semibold text-primary-purple lg:text-sm"
              >
                Host Name
              </label>
              <input
                type="text"
                id="host-name"
                placeholder="Host Name"
                className="focus:ring-3 w-full truncate rounded-lg border border-neutrals-400 p-3 text-sm placeholder-neutrals-400 transition-all focus:outline-none focus:ring focus:ring-primary-purple lg:text-base"
              />
            </div>
            <div className="space-y-1">
              <label
                htmlFor="start-date"
                className="w-full text-xs font-semibold text-primary-purple lg:text-sm"
              >
                Start Date
              </label>
              <input
                type="date"
                id="start-date"
                className="focus:ring-3 w-full truncate rounded-lg border border-neutrals-400 p-3 text-sm placeholder-neutrals-400 transition-all focus:outline-none focus:ring focus:ring-primary-purple lg:text-base"
              />
            </div>
            <div className="space-y-1">
              <label
                htmlFor="start-time"
                className="w-full text-xs font-semibold text-primary-purple lg:text-sm"
              >
                Start time
              </label>
              <input
                type="time"
                id="start-time"
                className="focus:ring-3 w-full truncate rounded-lg border border-neutrals-400 p-3 text-sm placeholder-neutrals-400 transition-all focus:outline-none focus:ring focus:ring-primary-purple lg:text-base"
              />
            </div>
            <div className="space-y-1">
              <label
                htmlFor="end-date"
                className="w-full text-xs font-semibold text-primary-purple lg:text-sm"
              >
                End Date
              </label>
              <input
                type="date"
                id="end-date"
                className="focus:ring-3 w-full truncate rounded-lg border border-neutrals-400 p-3 text-sm placeholder-neutrals-400 transition-all focus:outline-none focus:ring focus:ring-primary-purple lg:text-base"
              />
            </div>
            <div className="space-y-1">
              <label
                htmlFor="end-time"
                className="w-full text-xs font-semibold text-primary-purple lg:text-sm"
              >
                End time
              </label>
              <input
                type="time"
                id="start-time"
                className="focus:ring-3 w-full truncate rounded-lg border border-neutrals-400 p-3 text-sm placeholder-neutrals-400 transition-all focus:outline-none focus:ring focus:ring-primary-purple lg:text-base"
              />
            </div>
            <div className="space-y-1">
              <label
                htmlFor="event-photo"
                className="w-full text-xs font-semibold text-primary-purple lg:text-sm"
              >
                Event Photo
              </label>
              <input
                type="file"
                accept="image/*"
                id="event-photo"
                className="w-full truncate rounded-lg border border-neutrals-400 p-3 text-sm placeholder-neutrals-400 transition-all file:mr-4 file:rounded-full file:border-0 file:bg-secondary-purple-1 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-primary-purple-dark hover:file:bg-secondary-purple-2 focus:outline-none focus:ring focus:ring-primary-purple lg:text-base"
              />
            </div>
            <div>
              <Link href="/event">
                <a className="inline-block w-full rounded-lg bg-gradient-to-r from-primary-purple to-primary-pink p-3 text-center font-bold text-white lg:text-lg">
                  Go Next
                </a>
              </Link>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default create;
