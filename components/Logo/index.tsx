import Image from 'next/image'
import Link from 'next/link'

import { Container } from './styles'

export const Logo = (): JSX.Element => {
  return (
    <Link href="/">
      <a style={{ textDecoration: 'none' }}>
        <Container>
          <Image src="/logo.png" alt="red gaming fever logo" width="70" height="55" />
          <span>Gaming Fever</span>
        </Container>
      </a>
    </Link>
  )
}
