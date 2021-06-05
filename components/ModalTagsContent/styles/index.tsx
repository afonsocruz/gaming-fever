import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  background-color: #cc0000;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  animation: run 1s ease-in-out;

  .close-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    font-size: 86px;
  }

  @keyframes run {
    0% {
      left: 100%;
    }
    100% {
      right: 100%;
    }
  }
`
