import { useEffect, useMemo, useRef } from 'react'
import styled, { keyframes } from 'styled-components'

const disapear_anim_horizontal = (props) => keyframes`
  0% {
    width: 100%;
  }
  100% {
    width: 0;
  }
`
const disapear_anim_vertical = (props) => keyframes`
  0% {
    height: 100%;
    margin-top: 0;
  }
  100% {
    height: 0;
    margin-top: ${props.shadowSize || 10}px;
  }
`
const apear_anim_horizontal = (props) => keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`
const apear_anim_vertical = (props) => keyframes`
  0% {
    height: 0;
    margin-top: ${props.shadowSize || 10}px;
  }
  100% {
    height: 100%;
    margin-top: 0;
  }
`

const CubeButtonStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  position: relative;
  margin: 1em;
  transition-duration: ${({ animationTime }) => animationTime || 200}ms;
  cursor: pointer;
  ${({
    width,
    height,
  }) => `
    width: ${width || 120}px;
    height: ${height || 100}px;
  `}
  .left-wrap {
    transition-duration: ${({ animationTime }) => animationTime || 200}ms;
    position: absolute;
    left: 0;
    height: 0;
    width: ${({shadowSize}) => shadowSize || 10}px;
    height: 100%;
    background: transparent;
    top: ${({shadowSize}) => (shadowSize || 10) / 2}px;
    .left {
      transition-duration: ${({ animationTime }) => animationTime || 200}ms;
      top: ${({shadowSize}) => (shadowSize || 10) / 2}px;
      height: ${({height, shadowSize}) => (height || 100) - (shadowSize || 10)}px;
      background: ${({shadowColor}) => shadowColor || 'steelblue'};
      -webkit-transform: skewY(-30deg) rotate(0deg);
      -ms-transform: skewY(-30deg) rotate(0deg);
      transform: skewY(-45deg) rotate(0deg);
      border-radius: 3px;
      z-index: 3;
    }
  }
  .content-back {
    width: calc(100% - ${({shadowSize}) => shadowSize || 10}px);
    height: calc(100% - ${({shadowSize}) => shadowSize || 10}px);
    margin-top: ${({shadowSize}) => shadowSize || 10}px;
    background: ${({shadowColor}) => shadowColor || 'steelblue'};
    position: absolute;
    z-index: 2;
  }
  .right {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    height: 100%;
    transition-duration: ${({ animationTime }) => animationTime || 200}ms;
    .content {
      width: calc(100% - ${({shadowSize}) => shadowSize || 10}px);
      height: calc(100% - ${({shadowSize}) => shadowSize || 10}px);
      margin-left: ${({shadowSize}) => shadowSize || 10}px;
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
      border-radius: 3px;
      transition-duration: ${({ animationTime }) => animationTime || 200}ms;
      z-index: 4;
      ${({
        fontSize,
        fontWeight,
        color,
        background,
      }) => `
        font-size: ${fontSize || '16px'};
        font-weight: ${fontWeight || 'bold'};
        color: ${color || 'white'};
        background: ${background || 'red'};
      `}
    }
    .bottom-wrap {
      position: absolute;
      z-index: 2;
      left: ${({shadowSize}) => (shadowSize || 10) / 2}px;
      bottom: 0;
      height: 0;
      background: transparent;
      height: ${({shadowSize}) => shadowSize || 10}px;
      width: ${({width, shadowSize}) => (width || 120) - (shadowSize || 10)}px;
      z-index: 3;
      .bottom {
        width: 100%;
        height: 100%;
        background: ${({shadowColor}) => shadowColor || 'steelblue'};;
        transform: skewX(-45deg) rotate(0deg);
        border-radius: 3px;
        transition-duration: unset;
      }
    }
  }
  &.animation-hover {
    .left {
      animation: ${(props) => disapear_anim_horizontal(props)} ${({ animationTime }) => animationTime || 200}ms ease-in-out;
    }
    .right {
      .content {
        margin-left: 0;
        margin-top: ${({shadowSize}) => shadowSize || 10}px;
      }
      .bottom {
        animation: ${(props) => disapear_anim_vertical(props)} ${({ animationTime }) => animationTime || 200}ms ease-in-out;
        transition: skewX(-45deg) rotate(0deg) translateY(100%);
        transition-duration: unset;
      }
    }
  }

  &.anim-complete {
    .left {
      display: none;
      transition-duration: unset;
    }
    .right {
      .content {
        box-shadow: 0px 4px ${({ color }) => color || 'steelblue'};
        transition-duration: 400ms;
      }
      .bottom {
        display: none;
        transition-duration: unset;
      }
    }
  }

  &.animation-hover-off {
    .left {
      animation: ${(props) => apear_anim_horizontal(props)} ${({ animationTime }) => animationTime || 200}ms ease-in-out;
      transition-duration: unset;
    }
    .right {
      .content {
        margin-left: ${({shadowSize}) => shadowSize || 10}px;
        margin-top: 0;
        transition-duration: ${({ animationTime }) => (animationTime || 200) * 2}ms;
      }
      .bottom {
        animation: ${(props) => apear_anim_vertical(props)} ${({ animationTime }) => animationTime || 200}ms ease-in-out;
        transition: skewX(-45deg) rotate(0deg) translateY(100%);
        transition-duration: unset;
      }
    }
  }
`

const CubeButton = ({ label, useMouseHover = false, onClick, id, animationTime = 200, ...props }) => {
  const selfRef = useRef(null);

  const _id = useMemo(() => {
    return `cube-button-${id}`
  }, [id])

  const handleOnMouseIn = (e, force) => {
    if (!useMouseHover && !force) return
    if (!selfRef.current) return
    const selfElem = document.getElementById(_id)
    selfElem.classList.add('animation-hover');
    selfElem.classList.remove('animation-hover-off');
    setTimeout(() => {
      selfElem.classList.add('anim-complete');
    }, animationTime - 10)
  }

  const handleOnMouseLeave = (e, force) => {
    if (!useMouseHover && !force) return
    if (!selfRef.current) return
    const selfElem = document.getElementById(_id)
    selfElem.classList.add('animation-hover-off');
    setTimeout(() => {
      selfElem.classList.remove('animation-hover');
      selfElem.classList.remove('anim-complete')
    }, animationTime - 10)
  }

  const handleOnClick = (e) => {
    if (!useMouseHover) {
      handleOnMouseIn(null, true);
      setTimeout(() => {
        handleOnMouseLeave(null, true)
      }, animationTime - 10)
    }
    onClick && onClick(e)
  }

  return <CubeButtonStyled {...props}
    onMouseEnter={handleOnMouseIn}
    onMouseLeave={handleOnMouseLeave}
    onClick={handleOnClick}
    ref={selfRef}
    id={_id}
    animationTime={animationTime}
  >
    <div className="left-wrap"><div className="left"></div></div>
    <div className="content-back"></div>
    <div className="right">
      <div className="content" style={props.style || {}}>{label || 'test cube'}</div>
      <div className="bottom-wrap"><div className="bottom"></div></div>
    </div>
  </CubeButtonStyled>
}

export default CubeButton