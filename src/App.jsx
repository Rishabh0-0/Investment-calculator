import React from "react";
import logo from "./assets/investment-calculator-logo.png";

const App = () => {
  return (
    <div className="flex flex-col h-full  items-center bg-amber-900">
      <header className="header mb-6">
        <img src={logo} alt="logo" className="w-40 m-auto" />
        <h1 className="text-white text-2xl">Investment Calculator</h1>
      </header>

      <form className="bg-amber-600 p-6 rounded-sm">
        <div className="grid grid-cols-2 gap-x-8 gap-y-4">
          <p className="flex flex-col">
            <label htmlFor="current-savings" className="text-white text-sm">
              Current Savings ($)
            </label>
            <input
              className="border-1 rounded-sm border-white/60 py-1 text-white"
              type="number"
              id="current-savings"
            />
          </p>
          <p className="flex flex-col">
            <label htmlFor="yearly-contribution" className="text-white text-sm">
              Yearly Savings ($)
            </label>
            <input
              className="border-1 rounded-sm border-white/60 py-1 text-white"
              type="number"
              id="yearly-contribution"
            />
          </p>

          <p className="flex flex-col">
            <label htmlFor="expected-return" className="text-white text-sm">
              Expected Interest (%, per year)
            </label>
            <input
              className="border-1 rounded-sm border-white/60 py-1 text-white"
              type="number"
              id="expected-return"
            />
          </p>
          <p className="flex flex-col">
            <label htmlFor="duration" className="text-white text-sm">
              Investment Duration (years)
            </label>
            <input
              className="border-1 rounded-sm border-white/60 py-1 text-white"
              type="number"
              id="duration"
            />
          </p>
        </div>

        <p className="flex justify-center mt-4 gap-8">
          <button
            type="reset"
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
    </div>
  );
};

export default App;
