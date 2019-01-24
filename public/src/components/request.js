import React, { Component } from 'react';

import Output from './output'
import InputBox from './input'
import InputJson from './inputJson'
import Axios from 'axios';

class Request extends Component {
    constructor() {
        super()
        this.state = {
            collection: 'book',
            method: 'get',
            input: '',
            jsonBody: '',
            jsonData: {},
        }
        this.changeCollection = this.changeCollection.bind(this)
        this.changeMethod = this.changeMethod.bind(this)
        this.changeInput = this.changeInput.bind(this)
        this.changeJson = this.changeJson.bind(this)
        this.sendRequest = this.sendRequest.bind(this)
    }
    changeCollection(data) {
        this.setState({ ...this.state, collection: data })
    }
    changeMethod(data) {
        this.setState({ ...this.state, method: data })
    }
    changeInput(data) {
        this.setState({ ...this.state, input: data })
    }
    changeJson(data) {
        this.setState({ ...this.state, jsonBody: data })
    }
    sendRequest() {
        let options = {
            method: this.state.method,
            url: `http://localhost:5000/api/${this.state.collection}/${this.state.input}`,
        }
        if (this.state.method === 'post' || this.state.method === 'put') options.data = JSON.parse(this.state.jsonBody)
        Axios(options)
            .then(reaponse => this.setState({ ...this.state, jsonData: reaponse.data }))
            .catch(err => this.setState({ ...this.state, jsonData: err }))
    }
    render() {
        return (
            <div className='request'>
                <InputBox
                    collection={this.state.collection}
                    method={this.state.method}
                    input={this.state.input}
                    changeCollection={this.changeCollection}
                    changeMethod={this.changeMethod}
                    changeInput={this.changeInput}
                    sendRequest={this.sendRequest}
                />
                <InputJson
                    jsonBody={this.state.jsonBody}
                    method={this.state.method}
                    changeJson={this.changeJson}
                />
                <Output jsonData={this.state.jsonData} />
            </div>
        )
    }
}
export default Request