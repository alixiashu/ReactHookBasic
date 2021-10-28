import React from "react";

export interface ITheme {
    foreground: string,
    background: string
}

export const themes = {
    light: {
      foreground: '#000000',
      background: '#eeeeee',
    },
    dark: {
      foreground: '#ffffff',
      background: '#222222',
    },
};

export const ThemeContext = React.createContext({
    theme: themes.light, // default value
    toggleTheme: () => {},
});

export function useTheme(): [ITheme, () => void]{
    const [theme, setTheme] = React.useState(themes.light)
    const toggleTheme = () => {
      theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light)
    }

    React.useEffect(() => {
        console.log('Theme changed: ' + (theme === themes.light ? 'light' : 'dark'));
    }, [theme])
  
    return [theme, toggleTheme]
}
  