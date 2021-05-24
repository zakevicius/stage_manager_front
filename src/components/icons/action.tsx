import { useRouter } from 'next/router'
import { LockOutlined, LockOpen } from '@material-ui/icons'
import { useSnackbar } from 'notistack'

import { request, throttle } from '../utils'

import TooltipWrapper from '../tooltip-wrapper'

const icons = {
  unclaim: <LockOpen />,
  claim: <LockOutlined />
}

interface Props {
  id: string | number
  action: keyof typeof icons
}

const Action = ({ id, action }: Props) => {
  const { enqueueSnackbar } = useSnackbar()
  const router = useRouter()

  const handleClick = async () => {
    try {
      await request("PUT", { id, action })
      enqueueSnackbar(`${action}ed #${id}`, { variant: 'success' })
      router.replace(router.asPath)
    } catch (err) {
      let message = err.response?.data?.error || err.message
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
