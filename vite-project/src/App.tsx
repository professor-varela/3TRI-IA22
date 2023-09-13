import { useEffect, useState } from "react";


export default () => {
    const [x, setX] = useState(0)
    

    useEffect(() => {
        let idx = setInterval(() => {
            setX(atual => atual + 1)
        }, 1000)    

        return () => {
            clearInterval(idx)
        }
    }, [])
    

    return <>
        <h1>Oi eu sou um componente {x}</h1>
    </>
}