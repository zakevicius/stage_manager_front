import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { useSnackbar } from 'notistack'

import TooltipWrapper from '../tooltip-wrapper'

interface Props {
  id: string | number
}

const ClaimAction = ({ id }: Props) => {
  const { enqueueSnackbar } = useSnackbar()

  const handleClick = () => {
    // post to claim stage
    enqueueSnackbar(`Claimed #${id}`, { variant: 'success' })
  }

  return (
    <TooltipWrapper handleClick={handleClick} label={'Claim stage'}>
      <LockOutlinedIcon />
    </TooltipWrapper>
  )
}

export default ClaimAction
