import styled from "@emotion/styled";

export const Container = styled.div`
  & ul {
    margin-bottom: 40px;
    & li {
      background: #ffffff;
      border: 1px solid #d1dce5;
      border-radius: 8px;
      padding: 21px 28px 21px 35px;

      :not(:last-child) {
        margin-bottom: 20px;
      }
    }
  }
`;
