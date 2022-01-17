import { useState } from "react";
import Datepicker from "../Datepicker/Datepicker";
import { Container, ContainerTime, Time, Period } from "./Calendar.styled";

export default function Calendar({
  titleFirstDate,
  titleSecondDate,
  textTime,
  children,
}) {
  const [time, setTime] = useState(0);
  const [period, setPeriod] = useState(null);

  const onDateSelect = (day, period) => {
    console.log(day);
    if (day < 0) {
      setTime(0);
      setPeriod(null);
      return;
    }
    if (day === 0) {
      setTime(1);
      setPeriod(period);
      return;
    }

    setPeriod(period);
    setTime(day + 1);
  };
  return (
    <Container>
      {children}
      <Datepicker
        onDatepickerClick={onDateSelect}
        titleFirstDate={titleFirstDate}
        titleSecondDate={titleSecondDate}
      ></Datepicker>
      <ContainerTime>
        <p>{textTime}</p>
        <div>
          <Time>{time} dni</Time>
          <Period>{period}</Period>
        </div>
      </ContainerTime>
    </Container>
  );
}
