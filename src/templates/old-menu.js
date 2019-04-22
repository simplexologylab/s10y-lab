/* OLD MENU

{menu ? (
              <Layer
                full="vertical"
                position="left"
                margin="10px"
                onClickOutside={() => setMenu(false)}
                onEsc={() => setMenu(false)}
              >
                <Box as="header" direction="row" elevation="medium" align="center" justify="center">
                  <Heading level={3} margin="small">
                    {pageInfo.frontmatter.title}
                  </Heading>
                </Box>
                <Box flex overflow="auto" pad="xsmall">
                  {subPages.map(page => (
                    <Anchor
                      href={`#${page.node.id}`}
                      label={
                        <Box direction="row" gap="medium" pad={{ vertical: 'medium', horizontal: 'xsmall' }}>
                          <EmptyCircle />
                          {page.node.frontmatter.title}
                        </Box>
                      }
                    />
                  ))}
                </Box>
                <Box as="footer" border={{ side: 'top' }} pad="small" align="center">
                  <FixedButton primary label="Close" onClick={() => setMenu(false)} />
                </Box>
              </Layer>
            ) : (
              <Box animation="fadeIn" alignSelf="center">
                <FixedButton
                  icon={<Menu style={{ verticalAlign: 'bottom' }} />}
                  primary
                  color="accent-4"
                  justify="stretch"
                  onClick={() => setMenu(true)}
                />
              </Box>
            )}

*/
