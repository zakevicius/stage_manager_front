import { Link, makeStyles, Box, Container, Typography } from '@material-ui/core'

import StagesTable from '../components/stages-table'

import { Stage } from '../components/utils'

const useStyles = makeStyles({
  logoBox: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '2rem',
    '& img': {
      height: '24px',
      width: 'auto',
      marginRight: '0.9rem',
    },
    '& span': {
      marginBottom: '0',
      lineHeight: '0',
    },
  },
  help: {
    marginTop: '1rem',
  },
})

interface Props {
  stages: Stage[]
}

const Index = ({ stages }: Props) => {
  const classes = useStyles()
  return (
    <Container maxWidth="md">
      <Box my={4}>
        <div className={classes.logoBox}>
          <img
            alt="CoinGate"
            src="https://assets.coingate.com/images/logo/logo.svg"
          />
          <Typography variant="overline">{'Stages Manager'}</Typography>
        </div>
        <StagesTable stages={stages} />
        <Typography align="center" className={classes.help} variant="body2">
          {"Something's not working? "}
          <Link href="https://github.com/coingate/coingate">
            {'You can find help here'}
          </Link>
          {'.'}
        </Typography>
      </Box>
    </Container>
  )
}

export const getServerSideProps = async () => {
  const axios = require('axios');

  const response = await axios.get(`${process.env.STAGE_MANAGER_API_URL}/stages`);

  return {
    props: {
      stages: response.data
    }
  }
}

export default Index
