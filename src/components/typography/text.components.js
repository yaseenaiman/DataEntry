import styled from "styled-components/native";

const defaultTextStyles = (theme) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
  text-align: right;

`;

const body = (theme) => `
    font-size: ${theme.fontSizes.body};
    text-align: right;

`;

const hint = (theme) => `
    font-size: ${theme.fontSizes.body};
    text-align: right;

`;

const error = (theme) => `
    color: ${theme.colors.text.error};
    text-align: right;

`;

const caption = (theme) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
    text-align: right;

`;

const label = (theme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
    text-align: right;

`;

const textButton = (theme) => `
font-family: ${theme.fonts.body};
font-weight: ${theme.fontWeights.regular};
color: ${theme.colors.text.inverse};
flex-wrap: wrap;
margin-top: 0px;
margin-bottom: 0px;
text-align: right;

`;

const variants = {
  body,
  label,
  caption,
  error,
  hint,
  textButton,
};

export const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

Text.defaultProps = {
  variant: "body",
};
