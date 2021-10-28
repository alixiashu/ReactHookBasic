import Button from "@restart/ui/esm/Button";
import React from "react";

export function UseMemoDemo() {
    const [cnt, updateCnt] = React.useState(1)
    const [isToggle, setIsToggle] = React.useState(false)

    const memoData = React.useMemo(() => {
        return cnt * cnt;
    }, [cnt])

    const fn = React.useCallback(() => {
        console.log("callback： " + cnt)
    }, [])

    React.useEffect(() => {
        setTimeout(() => {
            updateCnt(cnt +1)
        }, 1000)

        setTimeout(() => {
            setIsToggle(true)
        }, 2000)
    }, [])

    return <div>
        {cnt}
        <br />
        {memoData}
        <br />
        {isToggle.toString()}
        <br/>
        <Button onClick={fn}>Click</Button>
    </div>
}