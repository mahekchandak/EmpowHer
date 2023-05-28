import React, { useState } from "react";

const PeriodTracker = () => {
  const [startDate, setStartDate] = useState("");
  const [cycles, setCycles] = useState([]);

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const addCycle = (startDate) => {
    const newCycle = {
      startDate,
      daysSincePreviousCycle: calculateDaysDifference(startDate),
    };

    setCycles([...cycles, newCycle]);
    setStartDate("");
  };

  const calculateDaysDifference = (date) => {
    if (cycles.length > 0) {
      const lastCycle = cycles[cycles.length - 1];
      const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds
      const diffDays = Math.round((new Date(date) - new Date(lastCycle.startDate)) / oneDay);
      return diffDays;
    }
    return "";
  };

  const calculateNextPeriod = () => {
    if (cycles.length > 0) {
      const lastCycle = cycles[cycles.length - 1];
      const nextPeriodDate = new Date(lastCycle.startDate);
      nextPeriodDate.setDate(nextPeriodDate.getDate() + lastCycle.daysSincePreviousCycle);
      return nextPeriodDate.toLocaleDateString(undefined, {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (startDate !== "") {
      addCycle(startDate);
    }
  };

  return (
    <div className="container">
      <h1>Period Tracker</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="start-date">Cycle Start Date:</label>
        <input
          type="date"
          id="start-date"
          name="start-date"
          value={startDate}
          onChange={handleStartDateChange}
        />

        <input type="submit" value="Add Cycle" />
      </form>

      <table id="cycle-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Days Since Previous Cycle</th>
          </tr>
        </thead>
        <tbody>
          {cycles.map((cycle, index) => (
            <tr key={index}>
              <td>{cycle.startDate}</td>
              <td>{cycle.daysSincePreviousCycle}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="next-period">
        <h2>Expected Next Period:</h2>
        <p>{calculateNextPeriod()}</p>
      </div>
    </div>
  );
};

export default PeriodTracker;
