import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { useSnackbar } from 'notistack'

import { request } from '../utils'

import TooltipWrapper from '../tooltip-wrapper'

interface Props {
  id: string | number
}

const ClaimAction = ({ id }: Props) => {
  const { enqueueSnackbar } = useSnackbar()

  const handleClick = async () => {
    try {
      await request("PUT", { id, action: 'claim', claimed_by: 'me' })
      enqueueSnackbar(`Claimed #${id}`, { variant: 'success' })
    } catch (err) {
      let message = err.response.data?.error || err.message
      enqueueSnackbar(message, { variant: 'error' })
    }
    
  }

  return (
    <TooltipWrapper handleClick={handleClick} label={'Claim stage'}>
      <LockOutlinedIcon />
    </TooltipWrapper>
  )
}

export default ClaimAction
