import { makeStyles } from '@material-ui/core'
import { Stage } from '../utils'

import Action from './action'

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
        <Action id={stage.id} action={'claim'}/>
      ) : (
        <Action id={stage.id} action={'unclaim'}/>
      )}
    </div>
  )
}

export default ActionButtons
