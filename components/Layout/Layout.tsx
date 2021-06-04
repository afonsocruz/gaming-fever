import Head from 'next/head'

import { Header } from '../Header'

import { GlobalStyle } from '../../styles/globalStyle'
import { Container } from './styles'

interface IPageTitle {
  title: string
  description: string
  keywords: string
  children: JSX.Element
}

export const Layout = ({ title, description, keywords, children }: IPageTitle): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Container>{children}</Container>
    </>
  )
}

Layout.defaultProps = {
  title: 'Gaming Fever | Blog',
  description: 'Fique por dentro no mundo dos games!',
  keywords: 'blog, games, gaming',
}
