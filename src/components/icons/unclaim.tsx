import LockOpenIcon from '@material-ui/icons/LockOpen'
import { useSnackbar } from 'notistack'

import { request } from '../utils'

import TooltipWrapper from '../tooltip-wrapper'

interface Props {
  id: string | number
}

const UnclaimAction = ({ id }: Props) => {
  const { enqueueSnackbar } = useSnackbar()

  const handleClick = async () => {
    try {
      await request("PUT", { id, action: 'unclaim' })
      enqueueSnackbar(`Unclaimed #${id}`, { variant: 'success' })
    } catch (err) {
      let message = err.response.data?.error || err.message
      enqueueSnackbar(message, { variant: 'error' })
    }
  }

  return (
    <TooltipWrapper handleClick={handleClick} label={'Unclaim stage'}>
      <LockOpenIcon />
    </TooltipWrapper>
  )
}

export default UnclaimAction
