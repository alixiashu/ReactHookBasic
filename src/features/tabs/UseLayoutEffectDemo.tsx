import React from "react";

function UseLayoutEffectDemo() {
    const [state, setState] = React.useState("hello world")

    // React.useEffect(() => {
    //     let i = 0;
    //     while (i <= 10e8) {
    //         i++;
    //     };
    //     setState("world hello");
    // }, []);

    React.useLayoutEffect(() => {
      let i = 0;
      while(i <= 10e8) {
        i++;
      };
      setState("world hello");
    }, []);

    console.log(state)
    return (
        <>
            <div>{state}</div>
        </>
    );
}

export default UseLayoutEffectDemo