import { useState, useEffect } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import pl from "date-fns/locale/pl";

import { Container, ContainerDatepicker } from "./Datepicker.styled";

export default function Datepicker({
  titleFirstDate,
  titleSecondDate,
  onDatepickerClick,
}) {
  const [startDate, setStartDate] = useState(new Date());
  const [lastDate, setLastDate] = useState(new Date());

  useEffect(() => {
    const oneDay = 86400000;

    const utc1 = Date.UTC(
      startDate.getFullYear(),
      startDate.getMonth(),
      startDate.getDate()
    );

    const utc2 = Date.UTC(
      lastDate.getFullYear(),
      lastDate.getMonth(),
      lastDate.getDate()
    );

    const days = Math.floor((utc2 - utc1) / oneDay);

    const dateStart = date(startDate);
    const dateEnd = date(lastDate);
    const period = `${dateStart} - ${dateEnd}`;

    onDatepickerClick(days, period);
  }, [lastDate, onDatepickerClick, startDate]);

  const onFirstTimeChange = (date) => {
    setStartDate(date);
  };

  const onSecondTimeChange = (date) => {
    setLastDate(date);
  };

  const date = (time) => {
    const day = ("0" + time.getDate()).slice(-2);
    const month = ("0" + (time.getMonth() + 1)).slice(-2);
    const year = time.getFullYear();
    return `${day}.${month}.${year}`;
  };

  return (
    <Container>
      <ContainerDatepicker>
        <h3>{titleFirstDate}</h3>
        <p>{date(startDate)}</p>
        <ReactDatePicker
          renderCustomHeader={({
            decreaseMonth,
            increaseMonth,
            nextMonthButtonDisabled,
            prevMonthButtonDisabled,
            monthDate,
          }) => (
            <div className="header">
              <button
                onClick={decreaseMonth}
                disabled={prevMonthButtonDisabled}
              >
                {"< poprzedni"}
              </button>
              <span className="react-datepicker__current-month">
                {monthDate.toLocaleString("pl", {
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <button
                onClick={increaseMonth}
                disabled={nextMonthButtonDisabled}
              >
                {"następny >"}
              </button>
            </div>
          )}
          onChange={(date) => onFirstTimeChange(date)}
          minDate={new Date()}
          inline
          locale={pl}
        />
      </ContainerDatepicker>
      <ContainerDatepicker>
        <h3>{titleSecondDate}</h3>
        <p>{date(lastDate)}</p>
        <ReactDatePicker
          renderCustomHeader={({
            decreaseMonth,
            increaseMonth,
            nextMonthButtonDisabled,
            prevMonthButtonDisabled,
            monthDate,
          }) => (
            <div className="header">
              <button
                onClick={decreaseMonth}
                disabled={prevMonthButtonDisabled}
              >
                {"< poprzedni"}
              </button>
              <span className="react-datepicker__current-month">
                {monthDate.toLocaleString("pl", {
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <button
                onClick={increaseMonth}
                disabled={nextMonthButtonDisabled}
              >
                {"następny >"}
              </button>
            </div>
          )}
          onChange={(date) => onSecondTimeChange(date)}
          minDate={startDate}
          inline
          locale={pl}
        />
      </ContainerDatepicker>
    </Container>
  );
}
