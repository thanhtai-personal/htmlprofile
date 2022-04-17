import { useState } from 'react'
import Styled from 'styled-components'

export const THEME = {
  LIGHT: 'light',
  DARK: 'dark'
}

const ThemeStyled = {
  [THEME.LIGHT]: Styled.div`
    --main-bg-color: #dcff7d;
    --main-text-color: #0a0a0a;
    --scroll-bar-color: steelblue;
    --section-background: #dcff7d;
  `,
  [THEME.DARK]: Styled.div`
    --main-bg-color: #dcff7d;
    --main-text-color: #0a0a0a;
    --scroll-bar-color: steelblue;
    --section-background: #0a0a0a;
  `
}

const useThemes = () => {
  const [theme, setTheme] = useState(THEME.LIGHT)

  const ThemeProvider = ThemeStyled[theme || THEME.LIGHT] || ThemeStyled[THEME.LIGHT]

  return [ThemeProvider, setTheme, THEME]

}

export default useThemes