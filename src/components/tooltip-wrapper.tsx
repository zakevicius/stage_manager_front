import { Tooltip } from '@material-ui/core'

interface Props {
  children: JSX.Element
  label: string
  handleClick?: () => void
}

const TooltipWrapper = ({ children, label, handleClick }: Props) => {
  return (
    <Tooltip
      aria-label={label}
      onClick={handleClick}
      placement="top"
      title={label}
    >
      {children}
    </Tooltip>
  )
}

export default TooltipWrapper
