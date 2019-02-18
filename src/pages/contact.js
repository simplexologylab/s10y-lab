import React, { Component } from "react";
import Helmet from "react-helmet";
import { Grommet, Box, Button, TextArea, TextInput, FormField, Heading} from 'grommet';
import { Contact } from 'grommet-icons';

import config from "../../static/site-config";
import Success from "../components/success";
import Menu from "../components/Menu";
import Sitemap from '../components/Sitemap';

const encode = data => {
  return Object.keys(data)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join("&");
}

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    message: '',
    showModal: false
  }

  handleInputChange = event => {    
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = event => {
    fetch('/contact?no-cache=1', {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
    .then(this.handleSuccess)
    .catch(error => alert(error))

    event.preventDefault();
  }

  handleSuccess = () => {
    this.setState({
      name: '',
      email: '',
      message: '',
      showModal: true
    })
  }

  handleClear = () => {
    this.setState({
      name: '',
      email: '',
      message: '',
      showModal: false
    })
  }

  closeModal = () => {
    this.setState({ showModal: false })
  }

  render() {
    return (
      <Grommet>
        <Helmet title={`Contact | ${config.siteTitle}`} />
        <Menu />
        <Box elevation="small" animation="fadeIn">
          <Box align="center" pad={{"top": "medium", "horizontal": "small"}}>
            <Contact />
            <Heading level="2">Contact Us</Heading>
            <Heading level="3">How can we help you make something simple</Heading>
          </Box>
          <Box pad={{"horizontal": "medium", "vertical": "xsmall"}}>
            <form 
              name="contact" 
              onSubmit={this.handleSubmit}
              data-netlify="true" 
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don't fill this out: {" "}
                  <input name="bot-field" />
                </label>
              </p>
              <FormField
                label="name"
                htmlFor="text-input"
                required
                name="name"
                id="name"
              >
                  <TextInput 
                    name="name"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                  />
              </FormField>
              <FormField
                label="email"
                htmlFor="text-input"
                required
                name="email"
                id="email"
              >
                  <TextInput 
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                  />
              </FormField>
              <FormField
                label="message"
                htmlFor="text-input"
                required
                name="message"
                id="message"
              >
                  <TextArea 
                    name="message"
                    value={this.state.message}
                    onChange={this.handleInputChange}
                  />
              </FormField>
              <Box direction="row" justify="center" gap="medium">
                <Button type="reset" label="Reset" />
                <Button type="submit" label="Submit" primary={true} />
              </Box>
              { this.state.showModal && <Success /> }
            </form>
          </Box>
        </Box>
        <Sitemap />
      </Grommet>
    )
  }
}

export default ContactForm;