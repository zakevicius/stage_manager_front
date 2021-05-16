import { makeStyles } from '@material-ui/core'
import { Stage } from '../utils'
import ClaimAction from './claim'

import UnclaimAction from './unclaim'

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',

    '& svg': {
      cursor: 'pointer',
    },
  },
})

interface Props {
  stage: Stage
}

const ActionButtons = ({ stage }: Props) => {
  const classes = useStyles()

  return (
    <div className={classes.wrapper}>
      {stage.status == 'unclaimed' ? (
        <ClaimAction id={stage.id} />
      ) : (
        <UnclaimAction id={stage.id} />
      )}
    </div>
  )
}

export default ActionButtons
