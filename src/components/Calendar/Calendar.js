import Datepicker from "../Datepicker/Datepicker";
import { ContainerDatepicker, Container } from "./Calendar.styled";

export default function Calendar({
  titleFirstDate,
  titleSecondDate,
  textTime,
  children,
}) {
  const onDateSelect = (date) => {
    console.log(date);
  };
  return (
    <Container>
      {children}
      <ContainerDatepicker>
        <Datepicker
          title={titleFirstDate}
          onDatepickerClick={onDateSelect}
        ></Datepicker>
        <Datepicker
          title={titleSecondDate}
          onDatepickerClick={onDateSelect}
        ></Datepicker>
      </ContainerDatepicker>
      <div>
        <p>{textTime}</p>
        <div>
          <p></p>
          <p></p>
        </div>
      </div>
    </Container>
  );
}
