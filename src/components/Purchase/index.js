import React, { Component } from 'react'
import { Box, Layer, Heading, Button, Image, ResponsiveContext } from 'grommet';
import { Close, Amazon, Shop, Search, Compliance } from 'grommet-icons';
import styled from 'styled-components';

const ButtonLink = styled(Button)`
  box-shadow: none;
`; 

const Item = ({data}) => (
    <ResponsiveContext.Consumer>
        { size => (
            <Box flex="grow" pad={{"vertical": "small"}} border={{ side: "bottom"}}>
                <Heading alignSelf="center" margin="none" level={3}>{data.product}</Heading>                
                <Box direction="row" justify="center" align="center" pad="small">
                    { data.amazonImage &&
                        <Box elevation="large">
                            <Image fit="contain" src={data.amazonImage} margin="none" />
                        </Box> 
                    }
                    <Box gap="small" justify="center" pad="small">
                        <Button color="accent-3" icon={<Compliance />} label="Our Review, make link" />
                        <Box direction="row" gap="small" align="center" justify="center">
                            { data.amazonShortLink && <ButtonLink icon={<Amazon />} href={data.amazonShortLink} target="_blank" rel="nofollow" plain /> }
                            <ButtonLink icon={<Shop />} href="https://www.google.com" target="_blank" rel="nofollow" plain />
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
        const {items} = this.props;

        return (
            <Box align="center" justify="center">
                <Button 
                    primary 
                    color="accent-1"
                    icon={<Search />} reverse 
                    label="See all items used" 
                    onClick={this.toggleLayer} 
                    margin="small" 
                />
                { this.state.open && (
                    <Layer
                        modal
                        position="right"
                        full="vertical"
                        onClickOutside={this.toggleLayer}
                        onEsc={this.toggleLayer}
                    >
                        <Box>
                            <Box direction="row" justify="between" align="center" as="header" elevation="medium" pad="small">
                                <Heading level={2} margin="none" size="medium">Items Used</Heading>
                                <Button icon={<Close />} onClick={this.toggleLayer} />
                            </Box>
                            <Box overflow={{"vertical": "auto", "horizontal": "hidden"}}>
                                { items.edges.map(item => (
                                    <Item data={item.node.childJson} />
                                ))}
                            </Box>
                        </Box>
                    </Layer>
                    
                )}
            </Box>
        )
    }

}