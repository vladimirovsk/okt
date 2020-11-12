import React from 'react'
import { DataGrid} from '@material-ui/data-grid';

// const columns = [
//   { field: 'id', headerName: 'ID', width: 50 },
//   { field: 'title', headerName: 'TITLE', width: 300 },
//   { field: 'date', headerName: 'DATE', width: 500}
// ]

// const rows = [
//   { id:1, title:'LOCAL RECORD1', date: new Date().toJSON()},
//   { id:2, title:'LOCAL RECORD2', date: new Date().toJSON()},
//   { id:3, title:'LOCAL RECORD3', date: new Date().toJSON()},
// ]
export const Tables = ({notes}) => (
  <React.Fragment>
    {notes.map(note =>(
      <div>
        <div>{note.title}</div>
        <div>{note.date}</div>
      </div>
    ))}


    )
  </React.Fragment>
)

/**
      //   <div style={{ height: 400, width: '100%' }}>
      //   <DataGrid rows={rows} columns={columns} pageSize={10} checkboxSelection/>     
      //  </div>

          {notes.map(note => (
      {
      <div>note.title</div>
      <div>note.date</div>
      }
 */