import React,{useState} from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Tissue Paper',
    amount: 120,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'Tomato Sauce',
    amount: 95,
    date: new Date(2020, 8, 5),
  },
  {
    id: 'e3',
    title: 'Fridge',
    amount: 15000,
    date: new Date(2021, 2, 12),
  },
  {
    id: 'e4',
    title: 'Blanket',
    amount: 1000,
    date: new Date(2021, 9, 9),
  },
];
function App() {
  const [expenses,setExpenses]=useState(DUMMY_EXPENSES);

  const addExpenseHandler=expense=>{
    setExpenses((prevExpenses)=>{
      return [expense,...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
