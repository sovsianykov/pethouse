import React from 'react';
import { useAppSelector } from "./app/app/hooks/useAppDispatch";
import { RootState } from "./store/store";
import Navbar from "./app/app/ui/Navigation/Navbar";

function App() {
  const { pets } = useAppSelector((state:RootState) => state.petsReducer)
  console.log(pets);
  return (
    <>
      <Navbar/>
    </>
  );
}

export default App;
