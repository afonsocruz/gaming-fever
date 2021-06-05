import CloseIcon from '@material-ui/icons/Close'

import { Container } from './styles'

export const ModalTagsContent = ({ handler }): JSX.Element => {
  return (
    <>
      <Container>
        <CloseIcon className="close-icon" style={{ color: '#000' }} onClick={handler} />
      </Container>
    </>
  )
}
