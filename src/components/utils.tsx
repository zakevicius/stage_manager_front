import ActionButtons from './icons/action-buttons'
import OccupationIcon from './icons/occupation-icon'

export type Stage = {
  id: number
  stage: number
  status: string
  claimed_since: string
  last_deployment_made_by: string
  history: {
    date: string
    action: string
    whom: string
  }[]
}

export type StageRow = ReturnType<typeof createData>

export const createData = (stage: Stage) => {
  const data = {
    ...stage,
    actions: <ActionButtons stage={stage} />,
    occupation: <OccupationIcon status={stage.status} />,
  }

  return data
}
