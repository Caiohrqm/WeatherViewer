import { useState } from "react";
import { Background, Container, Title, Subtitle, Input } from "./Style";
import axios from "axios";
import { StatusBar } from "react-native";

export default function App() {
  const backgroundImages = {
    Clear: require("./assets/clear.jpg"),
    Clouds: require("./assets/cloudy.jpg"),
    Rain: require("./assets/rainy.jpg"),
    Drizzle: require("./assets/rainy.jpg"),
    Thunderstorm: require("./assets/storm.jpg"),
    Snow: require("./assets/snowy.jpg"),
  };

  const [background, setBackground] = useState();
  const [location, setLocation] = useState();
  const [weather, setWeather] = useState();

  const getWeather = () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=6444229195a78b5fdbc30e23769da758`;
    axios
      .get(url)
      .then((response) => {
        const data = {
          city: response.data.name,
          desc: response.data.weather[0].main,
          temp: Math.round(response.data.main.temp) + "°",
        };
        setBackground(backgroundImages[data.desc]);
        setWeather(data);
        setLocation("");
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <Background source={background || backgroundImages["Clouds"]}>
      <StatusBar backgroundColor="#000" />
      <Container>
        <Title>{weather?.city || ""}</Title>
        <Subtitle>{weather?.desc || ""}</Subtitle>
        <Title>{weather?.temp || ""}</Title>
        <Input
          placeholder="Search any city"
          placeholderTextColor="#FFF"
          onChangeText={setLocation}
          onSubmitEditing={getWeather}
          value={location}
        ></Input>
      </Container>
    </Background>
  );
}
