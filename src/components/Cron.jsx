import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import CronComponent from "react-js-cron";
import { InfoCircleOutlined } from "@ant-design/icons";

const StyledCron = styled(CronComponent)`
  ${(props) =>
    ["month", "year"].includes(props.selectedPeriod) &&
    css`
      .react-js-cron-week-days {
        display: none;
      }
    `}
`;

const CronInfo = styled.div`
  span {
    font-size: 12px;
    margin-left: 5px;
  }
`;

export default function Cron(props) {
  let periods = props?.value?.split(" ") || [];
  const [selectedPeriod, updateSelectedPeriod] = useState(props.value);
  const wrapRef = useRef(null);

  const previousWeekDay = periods[4];
  const previousDay = periods[2];

  function selectPeriodEffect() {
    if (!wrapRef.current) {
      return;
    }
    const periodSelector = wrapRef.current.querySelector(
      ".react-js-cron-period .react-js-cron-select .ant-select-selector .ant-select-selection-search"
    );

    if (!periodSelector) {
      return;
    }

    const title = periodSelector.getAttribute("title");
    if (!title) {
      return;
    }
    updateSelectedPeriod(title);
  }

  useEffect(() => {
    selectPeriodEffect();
  }, []);

  const onCronChange = (value) => {
    let [minutes, hour, day, month, weekDay] = value?.split(" ");

    if (previousWeekDay !== weekDay) {
      day = "*";
    }

    if (previousDay !== day) {
      weekDay = "*";
    }

    let newValue = `${minutes} ${hour} ${day} ${month} ${weekDay}`;

    props.onChange(newValue);
    selectPeriodEffect();
  };

  return (
    <div ref={wrapRef}>
      <StyledCron
        {...props}
        className="spectro-cron"
        selectedPeriod={selectedPeriod}
        setValue={onCronChange}
        ref={wrapRef}
      />
      <CronInfo>
        <div>
          <InfoCircleOutlined />
        </div>
        <div>
          <InfoCircleOutlined />
        </div>
      </CronInfo>
    </div>
  );
}
