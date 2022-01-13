import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import pl from "date-fns/locale/pl";

export default function Datepicker() {
  const [startDate, setStartDate] = useState(new Date());
  const day = ("0" + startDate.getDate()).slice(-2);
  const month = ("0" + (startDate.getMonth() + 1)).slice(-2);
  const year = startDate.getFullYear();

  return (
    <div>
      <p>{`${day}.${month}.${year}`}</p>

      <ReactDatePicker
        renderCustomHeader={({
          decreaseMonth,
          increaseMonth,
          nextMonthButtonDisabled,
          prevMonthButtonDisabled,
          monthDate,
        }) => (
          <div>
            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
              {"< poprzedni"}
            </button>
            <span className="react-datepicker__current-month">
              {monthDate.toLocaleString("pl", {
                month: "long",
                year: "numeric",
              })}
            </span>
            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
              {"następny >"}
            </button>
          </div>
        )}
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        minDate={new Date()}
        inline
        locale={pl}
      />
    </div>
  );
}
