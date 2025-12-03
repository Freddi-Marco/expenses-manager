const TotalExpenses = ({ total }) => {
  return(
  <>
    <h1 className="heading text-3xl mb-6 text-center">
      Total Expenses: <span className="text-blue-600 font-bold">{total}</span>
    </h1>
  </>
  );
};

export default TotalExpenses;