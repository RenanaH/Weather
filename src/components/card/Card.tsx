import { text } from "../../config/text";
import {
  CardDesign,
  CityDescription,
  CityName,
  CityNameAndIcon,
  OneTempTitle,
  OneTempValue,
  OneTempWrapper,
  TempWrapper,
} from "./Card.style";
import { ReactComponent as Cloud } from "../../assets/icons/cloud.svg";
import { ReactComponent as Sun } from "../../assets/icons/sun.svg";
import { ReactComponent as Storm } from "../../assets/icons/storm.svg";

const { tempT, feels_likeT, humidityT } = text;
export function CardWeather(props: any) {
  const { name, weather, main } = props;
  const { description } = weather[0];
  const { temp, feels_like, humidity } = main;
  const getIconByTemp = () => {
    if (Math.round(temp) <= 20) return <Storm />;
    else if (Math.round(temp) < 30) return <Cloud />;
    else return <Sun />;
  };
  return (
    <>
      <CardDesign bordered={false}>
        <CityNameAndIcon>
          <CityName>{name}</CityName>
          {getIconByTemp()}
        </CityNameAndIcon>
        <CityDescription>{description}</CityDescription>
        <TempWrapper>
          <OneTempWrapper>
            <OneTempTitle>{tempT} </OneTempTitle>
            <OneTempValue>&#8451;{Math.round(temp)}</OneTempValue>
          </OneTempWrapper>

          <OneTempWrapper>
            <OneTempTitle>{feels_likeT} </OneTempTitle>
            <OneTempValue>&#8451; {Math.round(feels_like)}</OneTempValue>
          </OneTempWrapper>

          <OneTempWrapper>
            <OneTempTitle> {humidityT} </OneTempTitle>
            <OneTempValue> {humidity}%</OneTempValue>
          </OneTempWrapper>
        </TempWrapper>
      </CardDesign>
    </>
  );
}
