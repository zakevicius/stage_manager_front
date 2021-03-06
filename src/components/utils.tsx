import axios from 'axios'
import ActionButtons from './icons/action-buttons'
import OccupationIcon from './icons/occupation-icon'

export type Stage = {
  id: number
  stage_id: number
  status: string
  claimed_since: string
  last_deployment_made_by: string
  logs: {
    created_at: string
    action: string
    action_made_by: string
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

type Data = {
  id: string | number
  action: string
  claimed_by?: string
}

export const request = async (method: String, data: Data) => {
  let response
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_STAGE_MANAGER_API_URL
  axios.defaults.headers.Authorization = `Token ${process.env.API_TOKEN}` 

  try {
    if (data) {
      if (method === "GET") {
        response = await axios.get(`/stages/${data.id}`)
      } else if (method === "PUT") {
        response = await axios.put(`/stages/${data.id}`, { stage: data })
      }
    } else {
      if (method === "GET") {
        response = await axios.get('/stages')
      }
    }
  } catch (e) {
    return { error: e.response.data }
  }

  return response?.data
}

export const throttle = (callback: (...args: string[]) => any, delay: number) => {
  let inThrottle = false;

  return (...args: string[]) => {
    if (!inThrottle) {
      callback(...args)
      inThrottle = true
      setTimeout(() => inThrottle = false, delay)
    }
  }
}