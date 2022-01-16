import styled from "@emotion/styled";
import Title from "../Title/Title";

export const StyledTitle = styled(Title)`
  color: red;
`;

export const Wrapper = styled.div`
  width: 867px;
  padding: 47px 54px 100px 54px;

  background: #ffffff;
  border-radius: 12px;

  .react-tabs__tab-list {
    display: flex;
    margin-bottom: 50px;
    border: none;
    justify-content: space-between;

    font-size: 24px;
    line-height: 1.1;

    & li {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      width: 370px;
      height: 72px;

      border: 1px solid #d1dce5;
      border-radius: 8px;

      :hover,
      :focus {
        border: 2px solid #e78004;
      }
    }

    .react-tabs__tab--selected {
      border: 2px solid #e78004;
    }
  }
`;
