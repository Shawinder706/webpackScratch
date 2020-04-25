import React from 'react';


class Form extends React.Component {

    constructor() {
        super();

        this.state = {
            value: ""
        };
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const { value } = event.target;
        console.log("test" + value)
        this.setState(() => {
            return {
                value: value
            };
        });
    }

    render() {
        return (
            <form>
                <input type="text"
                    value={this.state.value}
                    onChange={this.handelChange}
                />

            </form>
        )
    }
}



export default Form

