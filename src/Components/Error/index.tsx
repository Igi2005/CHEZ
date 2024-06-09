import { createElement } from "react"

interface ErrMsg {
    message : string
}

export function Error({message} : ErrMsg) {

    return createElement('p', {style :{color : "red"}, "data-testid":"error", "role": "error"},message)
}