import React from 'react'
import { Flex, Heading } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { useTheme } from '@emotion/react'

import { PageWrapper} from 'modules/layout'
import { ConnectButton } from 'modules/wallet'

function NetworkPage(props) {
  const theme = useTheme()
  return (
    <PageWrapper
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
    >
      <Flex
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        mt={-182}
      >
        <Heading size='lg' color={theme.colors.font.primary}>Please use Metamask to switch your network to Ropsten</Heading>
      </Flex>
    </PageWrapper>
  )
}

NetworkPage.propTypes = {

}

export default NetworkPage
