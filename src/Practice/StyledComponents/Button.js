import React from "react";
import styled, { css } from "styled-components";       //
import { darken, lighten } from "polished";   // 색상 유틸 함수

const StyledButton = styled.button`
  display: inline-flex;
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 2.25rem;
  align-items: center;
  font-size: 1rem;

  ${props => {
    const selected = props.theme.palette[props.color];
    return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
    `
  }}
  & + & {
    margin-left: 1rem;
  }
`

const Button = ({ children, ...rest }) => {
  return (
    <>
      <StyledButton {...rest}>{children}</StyledButton>
    </>
  )
}

Button.defaultProps = {
  color: 'blue'
};

export default Button;