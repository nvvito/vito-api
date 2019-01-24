import React from 'react'
import { TextArea, Form } from 'semantic-ui-react'

let InputJson = ({ jsonBody, method, changeJson }) => {
    let _disabled = false
    if (method === 'get' || method === 'delete') _disabled=true
    else _disabled=false
        return (
            <Form><TextArea disabled={_disabled} value={jsonBody} onChange={(e)=>changeJson(e.target.value)} /></Form>
        )
}
export default InputJson