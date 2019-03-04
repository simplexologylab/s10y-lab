import React, { Component } from 'react'
import { Box, Layer, Heading, Button, Image, ResponsiveContext } from 'grommet';
import { Close, Amazon, Shop, Search, Compliance, DocumentImage } from 'grommet-icons';
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
                    <Box elevation="large" width="30vw">
                    { data.amazonImage ? <Image fit="contain" src={data.amazonImage} margin="none" /> : <DocumentImage /> }
                        {/* <a 
                            target="_blank"  
                            href="https://www.amazon.com/gp/product/B06XQWQ7C3/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B06XQWQ7C3&linkCode=as2&tag=simplexologyl-20&linkId=9bb8e63f8696c1a642900f4de4d6a58e"
                        >
                            <img 
                                border="0" 
                                src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B06XQWQ7C3&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL160_&tag=simplexologyl-20"
                            />
                        </a>
                        <img src="//ir-na.amazon-adsystem.com/e/ir?t=simplexologyl-20&l=am2&o=1&a=B06XQWQ7C3" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /> */}
                    </Box>
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