import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Nav from 'react-bootstrap/esm/Nav';
import CcDemo from './features/tabs/CcDemo';
import FcDemo from './features/tabs/FcDemo';
import { Tabs, Tab, Form, Button } from "react-bootstrap";
import UseRefDemo from './features/tabs/UseRefDemo';
import { UseMemoDemo } from './features/tabs/UseMemoDemo';
import { ITheme, ThemeContext, themes, useTheme } from './features/theme/ThemeContext';
import ThemeToggle from './features/theme/ThemeToggle';
import UseContextDemo from './features/tabs/UseContextDemo';
import UseReducerDemo from './features/tabs/UseReducerDemo';
import UseLayoutEffectDemo from './features/tabs/UseLayoutEffectDemo';


const App = () => {
  // const [theme, toggleTheme] = useTheme()
  const [theme, setTheme] = React.useState(themes.light)
  const toggleTheme = () => {
    theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light)
  }

  React.useEffect(() => {
      console.log('Theme changed: ' + (theme === themes.light ? 'light' : 'dark'));
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
      <div className="App">
        <h1>Demo to test life cycle</h1>
        <ThemeToggle />
        <br />
        <Tabs defaultActiveKey="useLayoutEffect" id="uncontrolled-tab-example" mountOnEnter unmountOnExit>
          <Tab eventKey="cc" title="Class component">
            <CcDemo />
          </Tab>
          <Tab eventKey="fc" title="Function component">
            <FcDemo />
          </Tab>
          <Tab eventKey="useLayoutEffect" title="useLayoutEffect demo component">
            <UseLayoutEffectDemo />
          </Tab>
          <Tab eventKey="useRef" title="useRef demo component">
            <UseRefDemo />
            <UseRefDemo />
          </Tab>
          <Tab eventKey="useMemo" title="useMemo demo  component">
            <UseMemoDemo />
          </Tab>
          <Tab eventKey="useContext" title="useContext demo  component">
            <UseContextDemo />
          </Tab>
          <Tab eventKey="useReducer" title="useReducer demo  component">
            <UseReducerDemo />
          </Tab>
        </Tabs>
      </div>
    </ThemeContext.Provider>
  )
}

export default App;
