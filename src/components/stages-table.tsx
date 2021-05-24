import { memo, useEffect, useState } from 'react'

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core'

import StageTableRow from './table-row'

import { createData, Stage, StageRow } from './utils'

interface Props {
  stages: Stage[]
}

const StagesTable = memo(({ stages }: Props) => {
  const [rows, setRows] = useState<StageRow[]>([])

  useEffect(() => {
    const stageRowsTemp: StageRow[] = []

    stages.forEach((stage) => {
      stageRowsTemp.push(createData(stage))
    })

    setRows(stageRowsTemp)
  }, [stages])

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>{'Stage'}</TableCell>
            <TableCell align="right">{'Occupation'}</TableCell>
            <TableCell align="right">{'Occupied since'}</TableCell>
            <TableCell align="right">{'By whom'}</TableCell>
            <TableCell align="right">{'Actions'}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StageTableRow key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
})

export default StagesTable
