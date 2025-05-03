import React, { useState } from "react";
import Header from "./components/Header";
import Forms from "./components/Forms";
import ResultTable from "./components/ResultTable";

const App = () => {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = [];

  if (userInput) {
    let currentSavings = userInput["current-savings"];
    const yearlyContribution = userInput["yearly-contribution"];
    const expectedReturn = userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    // The calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div className="flex flex-col min-h-screen items-center bg-amber-900">
      <Header />
      <Forms onCalculate={calculateHandler} />
      {userInput !== null ? (
        <ResultTable
          data={yearlyData}
          initialInvestment={userInput["current-savings"]}
        />
      ) : (
        <p className="text-white">No user Input</p>
      )}
    </div>
  );
};

export default App;
