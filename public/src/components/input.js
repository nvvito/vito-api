import React from 'react'
import { Label, Select, Button, Input } from 'semantic-ui-react'

let InputBox = ({ collection, method, input, changeCollection, changeMethod, changeInput, sendRequest }) => (
    <div>
        <h1>Try it!</h1>
        <div className="App">
            <Label>
                {window.location.host + '/api/'}
            </Label>
            <Select compact options={[
                { key: 'book', text: 'book/', value: 'book' },
                { key: 'user', text: 'user/', value: 'user' },
            ]} value={collection} onChange={(e, { value }) => changeCollection(value)} />
            <Input type='text' placeholder='id...' action value={input} onChange={(e)=>changeInput(e.target.value)}>
                <input />
                <Select compact options={[
                    { key: 'get', text: 'get', value: 'get' },
                    { key: 'post', text: 'post', value: 'post' },
                    { key: 'put', text: 'put', value: 'put' },
                    { key: 'delete', text: 'delete', value: 'delete' },
                ]} value={method} onChange={(e, { value }) => changeMethod(value)} />
                <Button onClick={sendRequest}>Send</Button>
            </Input>
        </div>
    </div>
)
export default InputBox