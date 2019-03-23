// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
import Amplify from 'aws-amplify';
import awsConfig from './src/aws-exports';

Amplify.configure(awsConfig);

export { wrapRootElement } from './src/api/wrap-root-element';