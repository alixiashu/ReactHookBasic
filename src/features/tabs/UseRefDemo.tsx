import React from "react"
import Button from "react-bootstrap/esm/Button"

// function test() {
//     const [t, st] = React.useState(0)
//     console.log("test" + t)
//     st(ot => ot +1)
// }
var clkCnt = 0;

function UseRefDemo(props: any){
    const inputRef = React.useRef<HTMLInputElement>(null)
    const fileRef = React.useRef<HTMLInputElement>(null)

    const curClkCntRef = React.useRef<number>(0)

    console.log('Render when curClkCntRef\'s value is ' + curClkCntRef.current)
    return <div>
        <input
            ref={inputRef}
            disabled
            title={inputRef.current ? inputRef.current.value : ''}
            tabIndex={-1}
        />
        <Button onClick={() => {
            fileRef.current?.click()

            clkCnt++;
            console.log('clkCnt is ' + clkCnt);

            curClkCntRef.current++;
            console.log('curClkCntRef is ' + curClkCntRef.current);
        }}>Click</Button>
        <input type="file" ref={fileRef} onChange={(event: React.SyntheticEvent<EventTarget>) => {
            const files = (event.target as HTMLInputElement).files
            if (!files || files.length === 0 || !files[0] || files.length > 1) {
              return
            }
            const targetFile = files[0]

            inputRef.current?.setAttribute('value', targetFile.name) 
        }} hidden />
    </div>
}
export default UseRefDemo