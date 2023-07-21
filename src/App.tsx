import { FormEvent, useState } from "react";

import { DateTime } from "luxon";
import moment from "moment";

import { mapFormat } from "./lib/mapFormat";

import "./assets/global.css";

const App = () => {
  const [momentString, setMomentString] = useState("");
  const [luxonString, setLuxonString] = useState("");
  const [momentFormattedDate, setMomentFormattedDate] = useState("");
  const [luxonFormattedDate, setLuxonFormattedDate] = useState("");

  const seedDate = DateTime.local();

  const convertFormat = (e: FormEvent) => {
    e.preventDefault();

    setLuxonString(mapFormat(momentString));
    setMomentFormattedDate(moment(seedDate.toJSDate()).format(momentString));
    setLuxonFormattedDate(seedDate.toFormat(mapFormat(momentString)));
  };

  return (
    <div className="m-auto max-w-4xl px-8 flex flex-col h-full">
      <div className="flex-grow">
        <h1 className="font-bold text-3xl mt-4">MomentJS to Luxon</h1>
        <p className="mt-4">
          This is a simple tool to convert MomentJS formatting strings to Luxon
          formatting strings. It is not perfect, but it should get you most of
          the way there.
        </p>
        <p className="mt-4">
          As an example Moment.js supports tokens like Mo, Do, Qo, etc., which
          output the number with an ordinal (like "1st", "2nd", etc.). Luxon.js
          does not have built-in support for this kind of output.
        </p>
        <form onSubmit={convertFormat}>
          <div className="mt-8">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              MomentJS Formatting String
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="momentString"
                id="string"
                className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="yyyy-mm-dd"
                value={momentString}
                onChange={(e) => setMomentString(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-2">
            <button
              type="submit"
              className="bg-slate-800 text-white rounded-lg p-2"
            >
              Convert
            </button>
          </div>
        </form>
        {luxonString.length > 0 && (
          <>
            <hr className="my-4" />
            <h2 className="font-bold text-2xl">Results: </h2>
            <div className="mt-4">
              <div className="font-bold">Seed Data: </div>
              <div>{seedDate.toString()}</div>
              <div className="font-bold mt-2">Moment Formatted Date: </div>
              <div>{momentFormattedDate}</div>
            </div>
            <div className="mt-2">
              <div className="font-bold">Luxon String: </div>
              <div>{luxonString}</div>
              <div className="font-bold mt-2">Luxon Formatted Date: </div>
              <div>{luxonFormattedDate}</div>
            </div>
          </>
        )}
      </div>
      <footer className="text-center">
        <p>
          Coded with ❤️ by <a href="https://jodylecompte.com">Jody LeCompte</a>.
        </p>
        <p>
          Code available on{" "}
          <a href="https://github.com/jodylecompte/moment-to-luxon">Github</a>
        </p>
      </footer>
    </div>
  );
};

export default App;
