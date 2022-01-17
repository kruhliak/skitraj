import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 28px;

  font-weight: 400;
  font-size: 18px;
  line-height: 1.3;

  .react-datepicker__month-container {
    width: 358px;
    padding: 30px 15px 25px 15px;
  }

  .react-datepicker__header,
  .react-datepicker__header--custom {
    background: none;
    border: none;
    margin-bottom: 13px;
  }
  & button {
    color: var(--accent-color);
    border: none;
    background: none;
  }
  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 23px;

    & .react-datepicker__current-month {
      text-transform: capitalize;
    }
  }

  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;

    & .react-datepicker__day-name {
      margin: 0;
    }
  }

  .react-datepicker__day {
    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 400;
    font-size: 18px;
    line-height: 1.3;
    letter-spacing: -0.03em;
    width: 40px;
    height: 40px;
    margin: 0;

    :hover:not(.react-datepicker__day--disabled),
    :focus:not(.react-datepicker__day--disabled) {
      background-color: #e78004;
    }
  }

  .react-datepicker__week {
    display: flex;
    justify-content: space-between;

    :not(:last-child) {
      margin-bottom: 5px;
    }
    .react-datepicker__day--outside-month {
      color: #d1dce5;
    }
  }
  .react-datepicker__day--keyboard-selected,
  .react-datepicker__day--selected {
    background-color: var(--accent-color);
  }
  .react-datepicker__month {
    margin: 0;
  }
`;

export const ContainerDatepicker = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & h3 {
    font-weight: 500;
    font-size: 18px;
    line-height: 1.1;
    letter-spacing: -0.03em;

    margin-bottom: 20px;
  }

  & p {
    font-weight: 500;
    font-size: 24px;
    line-height: 1.1;
    letter-spacing: -0.03em;

    color: var(--accent-color);
    margin-bottom: 40px;
  }
`;
