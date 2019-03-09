import gql from 'graphql-tag';

export const ListEmails = gql`
  query listEmails {
    listEmails {
      items {
        id
        firstName
        lastName
        email
        consentDate
      }
    }
  }
`

export const CreateEmail = gql`
    mutation createEmail(
        $email: AWSEmail!, 
        $firstName: String!, 
        $lastName: String!, 
        $consentDate: AWSDate!
    ) {
    createEmail(input: {
        email: $email,
        firstName: $firstName,
        lastName: $lastName,
        consentDate: $consentDate
    }
    ) {
        id
        firstName
        lastName
    }
  }
`;