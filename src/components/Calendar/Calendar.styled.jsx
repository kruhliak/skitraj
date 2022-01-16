import styled from "@emotion/styled";

export const Container = styled.div`
  margin-bottom: 62px;
  display: flex;
  flex-direction: column;

  font-weight: 500;
  font-size: 24px;
  line-height: 1.1;
`;

export const ContainerTime = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: end;
`;

export const Time = styled.p`
  color: var(--accent-color);
  line-height: 30px;
`;

export const Period = styled.p`
  font-size: 18px;
  line-height: 30px;
`;
