import styled from "@emotion/styled";

export const Container = styled.div`
  margin-bottom: 60px;
`;

export const ListItem = styled.li`
  width: 492px;
  height: 72px;
  background: #ffffff;
  border: 1px solid #d1dce5;
  border-radius: 8px;
  padding: 0 30px 0 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  :not(:last-child) {
    margin-bottom: 20px;
  }
`;
