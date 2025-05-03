import React, { useState } from "react";

const initialUserInput = {
  "current-savings": 10000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  duration: 10,
};

const Forms = ({ onCalculate }) => {
  const [userInput, setUserInput] = useState(initialUserInput);

  const submitHandler = (e) => {
    e.preventDefault();
    onCalculate(userInput);
  };

  const resetHandler = () => {
    setUserInput(initialUserInput);
  };

  const inputChangeHandler = (input, e) => {
    const value = e.target.value;
    setUserInput((prevInput) => {
      return { ...prevInput, [input]: value };
    });
  };

  return (
    <form onSubmit={submitHandler} className="bg-amber-600 p-6 rounded-sm">
      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
        <p className="flex flex-col">
          <label htmlFor="current-savings" className="text-white text-sm">
            Current Savings ($)
          </label>
          <input
            className="border rounded-sm border-white/60 py-1 text-white px-2 bg-transparent"
            type="number"
            id="current-savings"
            name="current-savings"
            value={userInput["current-savings"]}
            onChange={(e) => inputChangeHandler("current-savings", e)}
          />
        </p>
        <p className="flex flex-col">
          <label htmlFor="yearly-contribution" className="text-white text-sm">
            Yearly Savings ($)
          </label>
          <input
            className="border-1 rounded-sm border-white/60 py-1 text-white px-2 bg-transparent"
            type="number"
            id="yearly-contribution"
            name="yearly-contribution"
            value={userInput["yearly-contribution"]}
            onChange={(e) => inputChangeHandler("yearly-contribution", e)}
          />
        </p>

        <p className="flex flex-col">
          <label htmlFor="expected-return" className="text-white text-sm">
            Expected Interest (%, per year)
          </label>
          <input
            className="border-1 rounded-sm border-white/60 py-1 text-white px-2 bg-transparent"
            type="number"
            id="expected-return"
            name="expected-return"
            value={userInput["expected-return"]}
            onChange={(e) => inputChangeHandler("expected-return", e)}
          />
        </p>
        <p className="flex flex-col">
          <label htmlFor="duration" className="text-white text-sm">
            Investment Duration (years)
          </label>
          <input
            className="border-1 rounded-sm border-white/60 py-1 text-white px-2 bg-transparent"
            type="number"
            id="duration"
            name="duration"
            value={userInput["duration"]}
            onChange={(e) => inputChangeHandler("duration", e)}
          />
        </p>
      </div>

      <p className="flex justify-center mt-4 gap-8">
        <button
          type="reset"
          onClick={resetHandler}
          className="bg-zinc-700 rounded text-white w-20 h-8"
        >
          Reset
        </button>
        <button
          type="submit"
          className="bg-zinc-700 rounded text-white w-20 h-8"
        >
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Forms;
