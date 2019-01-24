import React from 'react'
import { TextArea, Form } from 'semantic-ui-react'

let Output = ({ jsonData }) => (
    <Form><TextArea value={JSON.stringify(jsonData, undefined, 2)} /></Form>
)
export default Output