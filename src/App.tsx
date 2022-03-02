import './App.css'
import { useState } from 'react';
import Cron from "react-js-cron";
import { useTranslation } from 'react-i18next';
import {Button} from "antd";

function App() {
  const {t} =useTranslation();
  const [value, setValue] = useState("");
  return (
    <>
      <Button>Test</Button>
      {t("Something")}
      <Cron value={value} setValue={setValue}/>
    </>
  )
}

export default App
