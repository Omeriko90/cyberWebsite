import styled, { keyframes } from "styled-components";

export const SpinnerContainer = styled.div`
  display: ${(props) => props.display};
  margin: ${(props) => props.margin} 0px;
  justify-content: center;
  width: 100%;
`;

const rotate = keyframes`
    100% {
        transform: rotate(360deg)
        };
`;

const dash = keyframes` 
    0% {
        stroke-dasharray: 1,200;
        stroke-dashoffset: 0;
    };
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    };
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -90px;
        }
`;

const color = (color) => keyframes`
    100%,
    0% {
        stroke: ${color};
    };
    40% {
        stroke: ${color};
    };
    66%{
        stroke: ${color};
    };
    80%,90%{
        stroke: ${color};
    };
    `;

export const Loader = styled.div`
  display: flex;
  width: ${(props) => props.size}px;
  zoom: 1;
`;

export const CircleSvg = styled.svg`
  animation: ${rotate} 2s linear infinite;
  transform-origin: center center;
  height: 100%;
  width: 100%;
`;

export const Circle = styled.circle`
  stroke-dasharray: 1, 200;
  animation: ${dash} 1.5s ease-in-out infinite,
    ${(props) => color(props.color)} 3s ease-in-out infinite;
  stroke-width: 2;
`;
