import styled from 'styled-components'

export const Container = styled.nav`
  display: flex;

  a {
    text-decoration: none;
    color: red;
    font-size: 16px;
    margin: 0px 24px;
    font-weight: bold;
  }
  .clickable {
    cursor: pointer;
    margin-right: 24px;
  }

  @media screen and (max-width: 600px) {
    display: none;
  }

  .hamb-icon {
    display: none;
  }

  @media screen and (max-width: 600px) {
    .hamb-icon {
      display: block;
    }
  }
`
