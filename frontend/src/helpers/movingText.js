import styled from "styled-components";

const MovingText = styled.a`
  text-decoration: none;
  color: var(--white);
  display: inline-flex;
  width: 15px;
  height: auto;
  animation: move 4000ms alternate infinite cubic-bezier(0.2, 0.65, 0.6, 1);
  &(
    @keyframes move 
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(100%);
  }
  )
  
`;

export default MovingText;
