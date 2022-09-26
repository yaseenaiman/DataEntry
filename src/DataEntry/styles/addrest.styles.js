import styled from "styled-components/native";
import { Button } from "react-native-paper";
import { colors } from "../../infrastructure/theme/colors";
import { Text } from "../../components/typography/text.components";
import { TextInput } from "react-native";
import { ScrollView } from "react-native";

export const DataEntryBack = styled.ImageBackground.attrs({
  source: require("../../../assets/home_bg.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const RestButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[0]};
`;

export const RestInput = styled(TextInput)`
  text-align: right;
  font-family: ${(props) => props.theme.fonts.body};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  background-color: ${(props) => props.theme.colors.bg.secondary};
  padding: ${(props) => props.theme.space[3]};
  border: ${(props) => props.theme.colors.ui.quaternary};
`;

export const TitleEntry = styled(Text)`
  font-size: 24px;
  text-align: center;
  padding: ${(props) => props.theme.space[4]};
`;

export const EntryRestList = styled(ScrollView)`
  text-align: right;
  font-family: ${(props) => props.theme.fonts.body};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[5]};
`;

export const EntryContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[3]};
  margin-top: ${(props) => props.theme.space[3]};
`;
