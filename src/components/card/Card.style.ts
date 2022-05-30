import styled from "styled-components";
import { Card } from "antd";

export const CardDesign = styled(Card)`
  width: 400px;
  box-shadow: 5px 5px 5px 5px rgb(0 0 0 / 8%);
  text-align: right;
  .ant-card-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 33vh;
  }
  border-radius: 5px;
`;
export const CityName = styled.div`
  font-size: 30px;
  font-weight: bold;
`;
export const CityDescription = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.lightGray};
`;
export const TempWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const OneTempWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
`;
export const OneTempTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
`;
export const OneTempValue = styled.div`
  font-size: 30px;
`;
export const CityNameAndIcon = styled.div`
  display: flex;
  justify-content: space-between;
  svg {
    width: 40px;
    height: 40px;
  }
`;
