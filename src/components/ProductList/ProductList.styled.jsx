import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
  & h2 {
    color: var(--accent-color);
    border-color: var(--accent-color);
    margin-bottom: 20px;
  }
  & h3 {
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    margin-bottom: 20px;
  }

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

export const Button = styled.button`
  width: 145px;
  height: 41px;

  border: 2px solid #23242a;
  border-radius: 4px;
  background: inherit;

  font-weight: 700;
  font-size: 18px;
  line-height: 1.2;
  margin: 0 auto;

  :hover,
  :focus {
    color: var(--accent-color);
    border-color: var(--accent-color);
  }
`;
