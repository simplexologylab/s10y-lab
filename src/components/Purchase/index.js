import React, { Component } from 'react'
import { Box, Layer, Heading, Button, Image, ResponsiveContext } from 'grommet';
import { Close, Amazon } from 'grommet-icons';
import styled from 'styled-components';

import image from '../../images/thought.jpg';

const ButtonLink = styled(Button)`
  box-shadow: none;
`; 

const Item = () => (
    <ResponsiveContext.Consumer>
        { size => (
            <Box flex="grow" pad={{"vertical": "small"}} border={{ side: "bottom"}}>
                <Heading alignSelf="center" margin="none" level={3}>Something</Heading>
                <Box direction="row" justify="center" align="center" pad="small">
                    <Box elevation="large" width="30vw">
                        <Image fit="contain" src={image} margin="none" />
                    </Box>
                    <Box gap="small" justify="center" pad="small">
                        <Button label="Our Review, make link" />
                        <Box direction="row" gap="small" align="center">
                            Buy on: 
                            <ButtonLink icon={<Amazon />} href="https://www.google.com" target="_blank" rel="nofollow" plain />
                            <ButtonLink icon={<Amazon />} href="https://www.google.com" target="_blank" rel="nofollow" plain />
                            <ButtonLink icon={<Amazon />} href="https://www.google.com" target="_blank" rel="nofollow" plain />
                        </Box>
                    </Box>
                </Box>
            </Box>
        )}
    </ResponsiveContext.Consumer>
)

export default class Purchase extends Component {
    state = {
        open: false
    }

    toggleLayer = () => {
        this.setState({ open: !this.state.open })
    }

    render() {
        const {product} = this.props;
        
        return (
            <Box fill align="center" justify="center">
                <Button label="purchase" onClick={this.toggleLayer} />
                { this.state.open && (
                    <Layer
                        modal
                        position="right"
                        full="vertical"
                        onClickOutside={this.toggleLayer}
                        onEsc={this.toggleLayer}
                    >
                        <Box>
                            <Box direction="row" justify="between" align="center" as="header" elevation="medium" pad="small" height="small">
                                <Heading level={2} margin="none" size="medium">Header</Heading>
                                <Button icon={<Close />} onClick={this.toggleLayer} />
                            </Box>
                            <Box overflow={{"vertical": "scroll", "horizontal": "hidden"}}>
                                <Item />
                                <Item />
                                <Item />
                                <Item />
                                <Item />
                                <Item />
                                <Item />
                                <Item />
                                <Item />
                                <Item />
                            </Box>
                            {/* <pre>
                                {JSON.stringify(product, 0, 2)}
                            </pre> */}
                        </Box>
                    </Layer>
                    
                )}
            </Box>
        )
    }

}