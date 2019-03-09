import React from "react"
import { Link } from "gatsby"
import { graphql, compose } from 'react-apollo';
import { graphqlMutation } from 'aws-appsync-react';

import { ListEmails, CreateEmail } from '../api/email';

class AddAwsApollo extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        consentDate: "2019-03-08"
    }

    handleInputChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createEmail({ 
            email: this.state.email,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            consentDate: "2019-03-07"
        });
    }

    render() {
        return (
           <div> 
            <Link to="/">Go back to the homepage</Link>
            <h1>Need to turn this into a form</h1>
            <form>
                <label>Email: <input name="email" type="email" value={this.state.email} onChange={this.handleInputChange} /> </label><br/>
                <label>First Name <input name="firstName" type="string" value={this.state.firstName} onChange={this.handleInputChange} /> </label><br/>
                <label>Last Name <input name="lastName" type="string" value={this.state.lastName} onChange={this.handleInputChange}  /> </label><br/>
                <input type="submit" value="Submit" onClick={this.handleSubmit} />
            </form>
            <div>
                <h2>Going to Send</h2>
                <pre>{JSON.stringify(this.state, 0, 2)}</pre>
            </div>
            <div>
                <h2>Current List</h2>
                <pre>{JSON.stringify(this.props.emails, 0, 2)}</pre>
            </div>
          </div>
        )
    }
}

export default compose(
    graphql(ListEmails, {
        options: {
            fetchPolicy: 'cache-and-network'
        },
        props: props => ({
            emails: props.data.listEmails ? props.data.listEmails.items : []
        })
    }),
    graphqlMutation(CreateEmail, ListEmails, 'Email')
)(AddAwsApollo)

