import { Container, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  error: {
    width: '100vw',
    height: '100vh',
    background: '#eee',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flexWrap: 'wrap'
  },
  image: {
    maxWidth: '50%',
    maxHeight: '50%'
  },
  text: {
    flexBasis: '100%',
    textAlign: 'center',
    fontSize: '48pt',
    color: '#ed4337',
  }
})

const Error = ({ error }: { error: string }) => {
  const classes = useStyles()

  return (
    <Container maxWidth="md" className={classes.error}>
      <Typography variant="overline" className={classes.text}>{error}</Typography>
      <img
        alt="error"
        src="https://external-preview.redd.it/0kzo4prUVMtUVsDeB1-wtgI10VdpK1JrYSwYsiocEAY.png?auto=webp&s=4e9c177a9cd2208d1da95228a8261ccd56b88ddf"
        className={classes.image}
      />
    </Container>
  )
}

export default Error