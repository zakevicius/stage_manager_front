import LockOpenIcon from '@material-ui/icons/LockOpen'
import { useSnackbar } from 'notistack'

import TooltipWrapper from '../tooltip-wrapper'

interface Props {
  id: string | number
}

const UnclaimAction = ({ id }: Props) => {
  const { enqueueSnackbar } = useSnackbar()

  const handleClick = () => {
    // post to unclaim stage
    enqueueSnackbar(`Unclaimed #${id}`, { variant: 'success' })
  }

  return (
    <TooltipWrapper handleClick={handleClick} label={'Unclaim stage'}>
      <LockOpenIcon />
    </TooltipWrapper>
  )
}

export default UnclaimAction
