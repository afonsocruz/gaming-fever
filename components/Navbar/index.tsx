import Link from 'next/link'

import SearchIcon from '@material-ui/icons/Search'
import MenuIcon from '@material-ui/icons/Menu'

import { useReducer } from 'react'

import { Container } from './styles'

import { ModalTagsContent } from '../ModalTagsContent'

export const Navbar = ({ handler }): JSX.Element => {
  const [isSearchModalOpen, toggleSearchModal] = useReducer((s) => !s, false)

  return (
    <Container>
      <Link href="/">HOME</Link>
      <Link href="/ps5">PS5</Link>
      <Link href="/pc">PC</Link>
      <Link href="/xbox">XBOX ONE</Link>
      <Link href="/mobile">MOBILE</Link>
      <SearchIcon className="clickable" style={{ color: 'red' }} onClick={toggleSearchModal} />
      {isSearchModalOpen && <ModalTagsContent handler={toggleSearchModal} />}
      <MenuIcon className="hamb-icon clickable" style={{ color: 'red' }} />
    </Container>
  )
}
