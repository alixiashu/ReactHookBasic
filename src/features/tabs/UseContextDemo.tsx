import React from "react"
import { ThemeContext, themes } from "../theme/ThemeContext"

function UseContextDemo() {
    const { theme } = React.useContext(ThemeContext)

    return (<div style={{ backgroundColor: theme.background, padding: '10px' }}>
        Background
        <div style={{ height: '30px', color: theme.foreground }}>Foreground</div>
    </div>)
}

export default UseContextDemo
