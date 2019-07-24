import React, { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';
import NProgressCSS from './nprogress';

const DefaultStyles = createGlobalStyle`
  :root {
    --baseFont: system-ui;
    --lightgray: #f6f6f6;
    --gray: #E3E3E3;
    --darkgray: #9B9B9B;
    --black: ${({ black }) => black};
    --red: ${({ red }) => red};
    --white: ${({ white }) => white};
    --contrastPrimary: ${({ contrastPrimary }) => contrastPrimary};
    --primary: ${({ primary }) => primary};
    --danger: ${({ danger }) => danger};
    --warning: #ffa003;
  }
  * {
    margin: 0;
    padding: 0;
  }
  body {
    margin: 0;
    padding: 1rem;
    font-family: var(--baseFont);
    color: var(--black);
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }
  a {
    text-decoration: none;
  }
  input {
    font-family: var(--baseFont);
  }
  button {
    user-select: none;
    &:active {
      transform: scale(0.95);
    }
  }
  .switch-wrapper {
    position: relative;
    & > div {
      position: absolute;
      width: 100%;
    }
  }


`;

const BaseStyles = ({ theme }) => (
  <Fragment>
    <NProgressCSS />
    <DefaultStyles {...theme} />
  </Fragment>
);

export default BaseStyles;
