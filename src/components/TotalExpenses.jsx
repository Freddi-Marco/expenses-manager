import React, { useEffect, useState } from "react";

const TotalExpenses = ({ items }) => {
  const [total, setTotal] = React.useState(0);
  useEffect(() => {
    let sum = 0
    items.map((item) => {
      sum += item.price
    })
    setTotal(sum)
  }, [items]);
  return(
  <>
    <h1 className="heading text-3xl mb-6 text-center">
      Total Expenses: <span className="text-blue-600 font-bold">€ {total}</span>
    </h1>
  </>
  );
};

export default TotalExpenses;