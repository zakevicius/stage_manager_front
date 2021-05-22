import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import LockOpenIcon from '@material-ui/icons/LockOpen'
import { useSnackbar } from 'notistack'

import { request, throttle } from '../utils'

import TooltipWrapper from '../tooltip-wrapper'

const icons = {
  unclaim: <LockOpenIcon />,
  claim: <LockOutlinedIcon />
}

interface Props {
  id: string | number
  action: keyof typeof icons
}


const Action = ({ id, action }: Props) => {
  const { enqueueSnackbar } = useSnackbar()

  const handleClick = async () => {
    try {
      await request("PUT", { id, action })
      enqueueSnackbar(`${action}ed #${id}`, { variant: 'success' })
    } catch (err) {
      let message = err.response.data?.error || err.message
      enqueueSnackbar(message, { variant: 'error' })
    }
  }

  return (
    <TooltipWrapper handleClick={throttle(handleClick, 1000)} label={action}>
      {icons[action]}
    </TooltipWrapper>
  )
}

export default Action
