import styled from "styled-components/native";

export const Background = styled.ImageBackground`
  flex: 1;
  resize: cover;
`;

export const Container = styled.View`
  background-color: rgba(0, 0, 0, 0.5);
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 42px;
`;

export const Subtitle = styled.Text`
  color: #fff;
  font-size: 20px;
`;

export const Input = styled.TextInput`
  background-color: rgba(120, 120, 120, 0.8);
  font-size: 16px;
  color: #fff;
  width: 280px;
  height: 42px;
  border-radius: 4px;
  padding-left: 12px;
  margin-top: 24px;
`;
