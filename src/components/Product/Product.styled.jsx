import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  align-items: center;

  & img {
    margin-right: 32px;
  }
`;

export const ContainerInfo = styled.div`
  margin-right: 43px;
`;

export const ContainerPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-self: end;
  text-align: end;
`;

export const Price = styled.p`
  margin-top: 50px;
  color: var(--accent-color);
`;
