import CheckRoundedIcon from '@material-ui/icons/CheckRounded'
import ClearRoundedIcon from '@material-ui/icons/ClearRounded'

import TooltipWrapper from '../tooltip-wrapper'

interface Props {
  status: string
}

const OccupationIcon = ({ status }: Props) => {
  const occupied = status == 'claimed'
  const label = occupied ? 'Occupied' : 'Free to use'

  return (
    <TooltipWrapper label={label}>
      {occupied ? <ClearRoundedIcon /> : <CheckRoundedIcon />}
    </TooltipWrapper>
  )
}

export default OccupationIcon
