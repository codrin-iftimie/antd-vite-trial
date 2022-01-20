import './App.css'
import { useState } from 'react';
import Cron from "react-js-cron";
import { useTranslation } from 'react-i18next';


function App() {
  const {t} =useTranslation();
  const [value, setValue] = useState("");
  return (
    <>
      {t("Something")}
      <Cron value={value} setValue={setValue}/>
    </>
  )
}

export default App
