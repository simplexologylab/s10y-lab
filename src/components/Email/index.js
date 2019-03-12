import React, { useState } from 'react'
import { Link } from 'gatsby';
import { Box, Heading, Button, Layer, TextInput, Text, FormField, CheckBox } from 'grommet';
import { Previous, Next, Edit } from 'grommet-icons';

import { graphql, compose } from 'react-apollo';
import { graphqlMutation } from 'aws-appsync-react';

import { ListEmails, CreateEmail } from '../../api/email';

function EmailForm(props) {

  const [modal, toggleModal] = useState(false);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [consent, setConsent] = useState(false);

  const handleSubmit = () => {
    props.createEmail({
      email: email,
      firstName: firstName,
      lastName: lastName,
      consentDate: "2019-03-10"
    }).then(response => console.log(response))
    .then(toggleModal(false))
  }
  
  return (
    <Box>
      <Button 
        icon={<Edit />}
        label={`Subscribe`}
        color="accent-3"
        primary
        onClick={() => toggleModal(true)}
      />
      { modal &&
        <Layer 
          position="center"
          modal
          onClickOutside={() => toggleModal(false)}
          onEsc={() => toggleModal(false)}
        >
          <Box pad="small" align="center">
              <Heading alignSelf="center" level={3} margin={{"vertical": "small"}}>
                <Box direction="row">
                  <Next color="accent-1" />
                    Subscribe To Our Emails
                  <Previous color="accent-1" />
                </Box>
              </Heading>
            <FormField label="Email">
              <TextInput 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@email.com"
              />
            </FormField>
            <FormField label="First Name">
              <TextInput 
                type="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Minnie"
              />
            </FormField>
            <FormField label="Last Name">
              <TextInput 
                type="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Mouse"
              />
            </FormField>
            <Box margin="medium">
              <CheckBox 
                checked={consent}
                label="Consent to Email"
                onChange={() => setConsent(!consent)}
                reverse
              />
              <Text
                color="dark-3"
                size="xsmall"
              >
              <Link to="/privacy">Privacy Policy</Link>
              </Text>
            </Box>
            <Box direction='row' gap='small' justify='center'>
              <Button 
                label="close"
                color="accent-4"
                onClick={() => toggleModal(false)} 
              />
              <Button 
                label="subscribe"
                color="accent-1"
                onClick={handleSubmit} 
              />
            </Box>
            <Box>
              <pre>{JSON.stringify(props.listEmails, 0, 2)}</pre>
            </Box>
          </Box>
        </Layer>
      }
    </Box>
  )
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
)(EmailForm)