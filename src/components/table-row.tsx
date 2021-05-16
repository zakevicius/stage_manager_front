import { Fragment, useState } from 'react'

import {
  makeStyles,
  TableCell,
  TableHead,
  TableBody,
  TableRow,
  Typography,
  Table,
  IconButton,
  Collapse,
  Box,
} from '@material-ui/core'

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'

import { StageRow } from './utils'

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
})

const StageTableRow = ({ row }: { row: StageRow }) => {
  const [open, setOpen] = useState(false)
  const classes = useRowStyles()

  return (
    <Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            onClick={() => setOpen(!open)}
            size="small"
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.id}
        </TableCell>
        <TableCell align="right">{row.status}</TableCell>
        <TableCell align="right">{row.claimed_since}</TableCell>
        <TableCell align="right">{row.last_deployment_made_by}</TableCell>
        <TableCell align="right">{row.actions}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={6} style={{ paddingBottom: 0, paddingTop: 0 }}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography component="div" gutterBottom variant="h6">
                {'History'}
              </Typography>
              <Table aria-label="purchases" size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>{'Date'}</TableCell>
                    <TableCell>{'Action'}</TableCell>
                    <TableCell align="right">{'By whom'}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.action}</TableCell>
                      <TableCell align="right">{historyRow.whom}</TableCell>
                    </TableRow>
                  ))} */}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  )
}

export default StageTableRow
