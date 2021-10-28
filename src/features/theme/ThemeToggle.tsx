import Button from "react-bootstrap/esm/Button";
import { ThemeContext } from "./ThemeContext";

function ThemeToggle() {
    return (
        <ThemeContext.Consumer>
            {( {theme, toggleTheme} ): React.ReactNode => 
               <Button
                onClick={toggleTheme}
                style={{backgroundColor: theme.background, color: theme.foreground}}>
                    Toggle Theme
               </Button>
            }
        </ThemeContext.Consumer>
    )
}

export default ThemeToggle;