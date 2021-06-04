import { Navbar } from '../Navbar'
import { Logo } from '../Logo'

import { Container } from '../Header/styles'

export const Header = (): JSX.Element => {
  return (
    <Container>
      <Logo />
      <Navbar />
    </Container>
  )
}
