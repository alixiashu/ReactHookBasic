import React from "react"

function FcDemo(props: {}){
    const [str, updateStr] = React.useState(() => {
        console.log('FC: when initialize state')
        return "test"
    })

    React.useEffect(() => {
        console.log('FC: useEffect body')
        updateStr('test after mounting')

        setTimeout(() => {
            updateStr('test after timeout')
        }, 200);

        return () => {
            console.log('FC: useEffect returned function body')
        }
    }, [])
    
    React.useEffect(() => {
        console.log("FC: string changed inside useEffect " + str)
    }, [str])

    console.log("FC: string changed before render:  " + str)
    return <div>{str}</div>
}

export default FcDemo