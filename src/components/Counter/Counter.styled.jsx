import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  font-size: 24px;
  line-height: 1.1;
  font-weight: 400;

  align-items: center;
  text-align: center;

  & button {
    font-size: 24px;

    background-color: inherit;
    border: none;
    outline: none;
    font-weight: 500;

    :hover,
    :focus {
      color: var(--accent-color);
    }
  }
  & p {
    margin: 0 10px;
  }
`;
