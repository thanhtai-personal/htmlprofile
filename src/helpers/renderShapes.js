import styled from 'styled-components'

export const SHAPES = {
  circle: 'circle',
  square: 'square',
  rectangle: 'rectangle',
  oval: 'oval',
  triangle: {
    up: 'triangleUp',
    down: 'triangleDown',
    left: 'triangleLeft',
    right: 'triangleRight',
  },
  diamond: 'diamond',
  trapezium: 'trapezium',
  parallelogram: 'parallelogram',
  star: 'star',
  star_six_points: 'star_six_points',
  pentagon: 'pentagon',
  hexagon: 'hexagon',
  octagon: 'octagon',
  heart: 'heart',
  egg: 'egg',
  infinity: 'infinity',
  comment_bubble: 'comment_bubble',
  pacman: 'pacman'
}

export const Shapes = {
  [SHAPES.circle]: styled.div`
      width: 120px;
      height: 120px;
      background: #7fee1d;
      -moz-border-radius: 60px;
      -webkit-border-radius: 60px;
      border-radius: 60px;
      `,
  [SHAPES.circle]: styled.div`
          width: ${({ size }) => size || 120}px;
          height: ${({ size }) => size || 120}px;
          background: ${({ background }) => background || '#7fee1d'};
          -moz-border-radius: 50%;
          -webkit-border-radius: 50%;
          border-radius: 50%;
        `,
  [SHAPES.square]: styled.div`
        width: ${({ size }) => size || 120}px;
        height: ${({ size }) => size || 120}px;
        background: ${({ background }) => background || '#7fee1d'};
      `,
  [SHAPES.rectangle]: styled.div`
          width: ${({ width }) => width || 120}px;
          height: ${({ height }) => height || 60}px;
          background: ${({ background }) => background || '#7fee1d'};
        `,
  [SHAPES.oval]: styled.div`
          width: ${({ size }) => size || 120}px;
          height: ${({ size }) => (size || 120) / 2}px;
          background: ${({ background }) => background || '#7fee1d'};
          -webkit-border-radius: ${({ size }) => (size || 120) / 2}px / ${({ size }) => (size || 120) / 4}px;
          -moz-border-radius: ${({ size }) => (size || 120) / 2}px / ${({ size }) => (size || 120) / 4}px;
          border-radius: ${({ size }) => (size || 120) / 2}px / ${({ size }) => (size || 120) / 4}px;
        `,
  [SHAPES.triangle.up]: styled.div`
        width: 0;
        height: 0;
        border-bottom: ${({ size }) => size || 120}px solid ${({ color }) => color || '#fcf921'};
        border-left: ${({ size }) => (size || 120) / 2}px solid transparent;
        border-right: ${({ size }) => (size || 120) / 2}px solid transparent;
      `,
  [SHAPES.triangle.down]: styled.div`
      width: 0;
      height: 0;
      border-top: ${({ size }) => size || 120}px solid ${({ color }) => color || '#fcf921'};
      border-left: ${({ size }) => (size || 120) / 2}px solid transparent;
      border-right: ${({ size }) => (size || 120) / 2}px solid transparent;
      `,
  [SHAPES.triangle.right]: styled.div`
        width: 0;
        height: 0;
        border-top: ${({ size }) => (size || 120) / 2}px solid transparent;
        border-left: ${({ size }) => size || 120}px solid ${({ color }) => color || '#fcf921'};
        border-bottom: ${({ size }) => (size || 120) / 2}px solid transparent;
      `,
  [SHAPES.triangle.left]: styled.div`
        width: 0;
        height: 0;
        border-top: ${({ size }) => (size || 120) / 2}px solid transparent;
        border-right: ${({ size }) => size || 120}px solid ${({ color }) => color || '#fcf921'};
        border-bottom: ${({ size }) => (size || 120) / 2}px solid transparent;
      `,
  [SHAPES.diamond]: styled.div`
        width: ${({ size }) => size || 120}px;
        height: ${({ size }) => size || 120}px;
        background: ${({ color }) => color || '#fcf921'};
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
        -webkit-transform-origin: 0 100%;
        -moz-transform-origin: 0 100%;
        -ms-transform-origin: 0 100%;
        -o-transform-origin: 0 100%;
        transform-origin: 0 100%;
        margin: ${({ size }) => (size || 120) / 2
    }px 0 ${({ size }) => (size || 120) / 12
    }px ${({ size }) => (size || 120) / 12 + 5 * (size || 120) / 2
    }px;
      `,
  [SHAPES.trapezium]: styled.div`
        height: 0;
        width: ${({ size }) => size || 120}px;
        border-bottom: ${({ size }) => (size || 120) || 120}px solid ${({ color }) => color || '#ec3504'};
        border-left: ${({ size }) => (size || 120) / 2}px solid transparent;
        border-right: ${({ size }) => (size || 120) / 2}px solid transparent;
      `,
  [SHAPES.parallelogram]: styled.div`
        width: ${({ width }) => width || 160}px;
        height: ${({ height }) => height || 120}px;
        background:  ${({ color }) => color || '#ec3504'};
        -webkit-transform: skew(${({ deg }) => deg || '30deg'});
        -moz-transform: skew(${({ deg }) => deg || '30deg'});
        -o-transform: skew(${({ deg }) => deg || '30deg'});
        transform: skew(${({ deg }) => deg || '30deg'});
      `,
  [SHAPES.star]: styled.div`
          width: 0;
          height: 0;
          margin: ${({ size }) => (size || 100) / 2}px 0;
          color: ${({ color }) => color};
          position: relative;
          display: block;
          border-right: ${({ size }) => size || 100}px solid transparent;
          border-bottom: ${({ size }) => (size || 100) / 10 * 7}px solid ${({ color }) => color};
          border-left: ${({ size }) => size || 100}px solid transparent;
          -moz-transform: rotate(35deg);
          -webkit-transform: rotate(35deg);
          -ms-transform: rotate(35deg);
          -o-transform: rotate(35deg);
          :before {
            height: 0;
            width: 0;
            position: absolute;
            display: block;
            top: -${({ size }) => (45 * (size || 100) / 100)}px;
            left: -${({ size }) => (65 * (size || 100) / 100)}px;
            border-bottom: ${({ size }) => (8 * (size || 100) / 10)}px solid ${({ color }) => color};
            border-left: ${({ size }) => (3 * (size || 30) / 10)}px solid transparent;
            border-right: ${({ size }) => (3 * (size || 30) / 10)}px solid transparent;
            content: '';
            -webkit-transform: rotate(-35deg);
            -moz-transform: rotate(-35deg);
            -ms-transform: rotate(-35deg);
            -o-transform: rotate(-35deg);
          }
          :after {
            content: '';
            width: 0;
            height: 0;
            position: absolute;
            display: block;
            top: ${({ size }) => (3 * size / 100) || 3}px;
            left: -${({ size }) => (size || 100) + (size || 100) / 20}px;
            color: ${({ color }) => color};
            border-right: ${({ size }) => size}px solid transparent;
            border-bottom: ${({ size }) => 7 * (size || 100) / 10}px solid ${({ color }) => color};
            border-left: ${({ size }) => size}px solid transparent;
            -webkit-transform: rotate(-70deg);
            -moz-transform: rotate(-70deg);
            -ms-transform: rotate(-70deg);
            -o-transform: rotate(-70deg);
          }
        `,
  [SHAPES.star_six_points]: styled.div`
          width: 0;
          height: 0;
          display: block;
          position: absolute;
          border-left: ${({ size }) => (size || 100) / 2}px solid transparent;
          border-right: ${({ size }) => (size || 100) / 2}px solid transparent;
          border-bottom: ${({ size }) => (size || 100)}px solid #de34f7;
          margin: ${({ size }) => (size || 100) / 10}px auto;
          :after {
            content: "";
            width: 0;
            height: 0;
            position: absolute;
            border-left: ${({ size }) => (size || 100) / 2}px solid transparent;
            border-right: ${({ size }) => (size || 100) / 2}px solid transparent;
            border-top: ${({ size }) => (size || 100)}px solid #de34f7;
            margin: ${({ size }) => (size || 100) / 10 * 3}px 0 0 -${({ size }) => (size || 100) / 2}px;
          }
          
        `,
  [SHAPES.pentagon]: styled.div`
        width: ${({ size }) => (size || 100) / 100 * 54}px;
        position: relative;
        border-width: ${({ size }) => (size || 100) / 2}px ${({ size }) => (size || 100) / 100 * 18}px 0;
        border-style: solid;
        border-color: ${({ color }) => (color || '#277bab')} transparent;
        :before {
          content: "";
          height: 0;
          width: 0;
          position: absolute;
          top: -${({ size }) => (size || 100) / 100 * 85}px;
          left: -${({ size }) => (size || 100) / 100 * 18}px;
          border-width: 0 ${({ size }) => (size || 100) / 100 * 45}px ${({ size }) => (size || 100) / 100 * 35}px;
          border-style: solid;
          border-color: transparent transparent ${({ color }) => (color || '#277bab')};
        }
      `,
  [SHAPES.hexagon]: styled.div`
        width: ${({ size }) => (size || 100)}px;
        height: ${({ size }) => (size || 100) / 100 * 55}px;
        background: ${({ color }) => color || '#fc5e5e'};
        position: relative;
        margin: ${({ size }) => (size || 100) / 10}px auto;
        :before {
          content: "";
          width: 0;
          height: 0;
          position: absolute;
          top: -${({ size }) => (size || 100) / 4}px;
          left: 0;
          border-left: ${({ size }) => (size || 100) / 2}px solid transparent;
          border-right: ${({ size }) => (size || 100) / 2}px solid transparent;
          border-bottom: ${({ size }) => (size || 100) / 4}px solid ${({ color }) => color || '#fc5e5e'};
        }
        :after {
          content: "";
          width: 0;
          height: 0;
          position: absolute;
          bottom: -${({ size }) => (size || 100) / 4}px;
          left: 0;
          border-left: ${({ size }) => (size || 100) / 2}px solid transparent;
          border-right: ${({ size }) => (size || 100) / 2}px solid transparent;
          border-top: ${({ size }) => (size || 100) / 4}px solid ${({ color }) => color || '#fc5e5e'};
        }
      `,
  [SHAPES.octagon]: styled.div`
      width: ${({ size }) => (size || 100)}px;
      height: ${({ size }) => (size || 100)}px;
      background: ${({ color }) => color || '#ac60ec'};
      position: relative;
      :before {
        content: "";
        width: ${({ size }) => (size || 100) / 100 * 42}px;
        height: 0;
        position: absolute;
        top: 0;
        left: 0;
        border-bottom: ${({ size }) => (size || 100) / 100 * 29}px solid ${({ color }) => color || '#ac60ec'};
        border-left: ${({ size }) => (size || 100) / 100 * 29}px solid ${({ background }) => background || '#f4f4f4'};
        border-right: ${({ size }) => (size || 100) / 100 * 29}px solid ${({ background }) => background || '#f4f4f4'};
      }
      :after {
        content: "";
        width: ${({ size }) => (size || 100) / 100 * 42}px;
        height: 0;
        position: absolute;
        bottom: 0;
        left: 0;
        border-top: ${({ size }) => (size || 100) / 100 * 29}px solid ${({ color }) => color || '#ac60ec'};
        border-left: ${({ size }) => (size || 100) / 100 * 29}px solid ${({ background }) => background || '#f4f4f4'};
        border-right: ${({ size }) => (size || 100) / 100 * 29}px solid ${({ background }) => background || '#f4f4f4'};
      }
      `,
  [SHAPES.heart]: styled.div`
        position: relative;
        :before, :after {
          content: "";
          width: ${({ size }) => (size || 100) / 100 * 70}px;
          height: ${({ size }) => (size || 100) / 100 * 115}px;
          position: absolute;
          background: ${({ color }) => color || 'red'};
          left: ${({ size }) => (size || 100) / 100 * 70}px;
          top: 0;
          -webkit-border-radius: ${({ size }) => (size || 100) / 100 * 50}px ${({ size }) => (size || 100) / 100 * 50}px 0 0;
          -moz-border-radius: ${({ size }) => (size || 100) / 100 * 50}px ${({ size }) => (size || 100) / 100 * 50}px 0 0;
          border-radius: ${({ size }) => (size || 100) / 100 * 50}px ${({ size }) => (size || 100) / 100 * 50}px 0 0;
          -webkit-transform: rotate(-45deg);
          -moz-transform: rotate(-45deg);
          -ms-transform: rotate(-45deg);
          -o-transform: rotate(-45deg);
          transform: rotate(-45deg);
          -webkit-transform-origin: 0 100%;
          -moz-transform-origin: 0 100%;
          -ms-transform-origin: 0 100%;
          -o-transform-origin: 0 100%;
          transform-origin: 0 100%;
        }
        :after {
          left: 0;
          -webkit-transform: rotate(45deg);
          -moz-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          -o-transform: rotate(45deg);
          transform: rotate(45deg);
          -webkit-transform-origin: 100% 100%;
          -moz-transform-origin: 100% 100%;
          -ms-transform-origin: 100% 100%;
          -o-transform-origin: 100% 100%;
          transform-origin: 100% 100%;
        }
      `,
  [SHAPES.egg]: styled.div`
        width: ${({ size }) => (size || 100) / 100 * 136}px;
        height: ${({ size }) => (size || 100) / 100 * 190}px;
        background: ${({ color }) => color || '#ffc000'};
        display: block;
        -webkit-border-radius: ${({ size }) => (size || 100) / 100 * 63}px ${({ size }) => (size || 100) / 100 * 63}px ${({ size }) => (size || 100) / 100 * 63}px ${({ size }) => (size || 100) / 100 * 63}px / ${({ size }) => (size || 100) / 100 * 108}px ${({ size }) => (size || 100) / 100 * 108}px ${({ size }) => (size || 100) / 100 * 72}px ${({ size }) => (size || 100) / 100 * 72}px;
        border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
      `,
  [SHAPES.infinity]: styled.div`
      width: ${({ size }) => (size || 100) / 100 * 220}px;
      height: ${({ size }) => (size || 100) / 100 * 100}px;
      position: relative;
      :before, :after {
        content: "";
        width: ${({ size }) => (size || 100) / 100 * 60}px;
        height: ${({ size }) => (size || 100) / 100 * 60}px;
        position: absolute;
        top: 0;
        left: 0;
        border: ${({ size }) => (size || 100) / 100 * 20}px solid ${({ color }) => color || '#06c999'};
        -moz-border-radius: ${({ size }) => (size || 100) / 100 * 50}px ${({ size }) => (size || 100) / 100 * 50}px 0;
        border-radius: ${({ size }) => (size || 100) / 100 * 50}px ${({ size }) => (size || 100) / 100 * 50}px 0 ${({ size }) => (size || 100) / 100 * 50}px;
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
      }
      :after {
        left: auto;
        right: 0;
        -moz-border-radius: ${({ size }) => (size || 100) / 100 * 50}px ${({ size }) => (size || 100) / 100 * 50}px ${({ size }) => (size || 100) / 100 * 50}px 0;
        border-radius: ${({ size }) => (size || 100) / 100 * 50}px ${({ size }) => (size || 100) / 100 * 50}px ${({ size }) => (size || 100) / 100 * 50}px 0;
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
      }
    }
                    
                    `,
  [SHAPES.comment_bubble]: styled.div`
      width: ${({ size }) => (size || 100) / 100 * 140}px;
      height: ${({ size }) => (size || 100) / 100 * 100}px;
      background: ${({ color }) => color || '#088cb7'};
      position: relative;
      -moz-border-radius: ${({ size }) => (size || 100) / 100 * 12}px;
      -webkit-border-radius: ${({ size }) => (size || 100) / 100 * 12}px;
      border-radius: ${({ size }) => (size || 100) / 100 * 12}px;
      :before {
        content: "";
        width: 0;
        height: 0;
        right: 100%;
        top: ${({ size }) => (size || 100) / 100 * 38}px;
        position: absolute;
        border-top: ${({ size }) => (size || 100) / 100 * 13}px solid transparent;
        border-right: ${({ size }) => (size || 100) / 100 * 26}px solid ${({ color }) => color || '#088cb7'};
        border-bottom: ${({ size }) => (size || 100) / 100 * 13}px solid transparent;
      }
    `,
  [SHAPES.pacman]: styled.div`
      width: 0;
      height: 0;
      border-right: ${({ size }) => (size || 100) / 100 * 70}px solid transparent;
      border-top: ${({ size }) => (size || 100) / 100 * 70}px solid ${({ color }) => color || '#ffde00'};
      border-left: ${({ size }) => (size || 100) / 100 * 70}px solid ${({ color }) => color || '#ffde00'};
      border-bottom: ${({ size }) => (size || 100) / 100 * 70}px solid ${({ color }) => color || '#ffde00'};
      border-top-left-radius: ${({ size }) => (size || 100) / 100 * 70}px;
      border-top-right-radius: ${({ size }) => (size || 100) / 100 * 70}px;
      border-bottom-left-radius: ${({ size }) => (size || 100) / 100 * 70}px;
      border-bottom-right-radius: ${({ size }) => (size || 100) / 100 * 70}px;
    `
}