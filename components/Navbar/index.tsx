import Link from 'next/link'

import SearchIcon from '@material-ui/icons/Search'
import MenuIcon from '@material-ui/icons/Menu'

import { Container } from './styles'

export const Navbar = (): JSX.Element => {
  return (
    <Container>
      <Link href="/">HOME</Link>
      <Link href="/ps5">PS5</Link>
      <Link href="/pc">PC</Link>
      <Link href="/xbox">XBOX ONE</Link>
      <Link href="/mobile">MOBILE</Link>
      <SearchIcon className="clickable" style={{ color: 'red' }} />
      <MenuIcon className="hamb-icon clickable" style={{ color: 'red' }} />
    </Container>
  )
}
