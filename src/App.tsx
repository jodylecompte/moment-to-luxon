import { useState } from "react";

import { DateTime } from "luxon";
import moment from "moment";

import "./assets/global.css";

const App = () => {
  const [momentString, setMomentString] = useState("yyyy");
  const [luxonString, setLuxonString] = useState("yyyy");

  const seedDate = DateTime.local();

  return (
    <div className="m-auto max-w-4xl">
      <h1 className="font-bold text-3xl">MomentJS to Luxon</h1>
      <p className="mt-4">
        This is a simple tool to convert MomentJS formatting strings to Luxon
        formatting strings. It is not perfect, but it should get you most of the
        way there.
      </p>
      <p className="mt-4">
        As an example Moment.js supports tokens like Mo, Do, Qo, etc., which
        output the number with an ordinal (like "1st", "2nd", etc.). Luxon.js
        does not have built-in support for this kind of output.
      </p>
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
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="yyyy-mm-dd"
          />
        </div>
      </div>
      <div className="mt-2">
        <button className="bg-slate-800 text-white rounded-lg p-2">
          Convert
        </button>
      </div>
      {luxonString.length > 0 && (
        <>
          <hr className="my-4" />
          <h2 className="font-bold text-2xl">Results: </h2>
          <div className="mt-4">
            <div className="font-bold">Seed Data: </div>
            <div>{seedDate.toString()}</div>
          </div>
          <div className="mt-4">
            <div className="font-bold">Moment String: </div>
            <div>{momentString}</div>
            <div className="font-bold mt-2">Moment Formatted Date: </div>
            <div>{moment(seedDate.toJSDate()).format(momentString)}</div>
          </div>
          <div className="mt-4">
          <div className="font-bold">Luxon String: </div>
            <div>{luxonString}</div>
            <div className="font-bold mt-2">Luxon Formatted Date: </div>
            <div>{seedDate.toFormat(luxonString)}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
