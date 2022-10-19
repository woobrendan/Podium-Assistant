import { DataGrid } from '@mui/x-data-grid';

export default function AllEditTable(props) {
  
  const idMappedEntries = props.allEntries.map((entry, index) => {
    return {...entry, id: index}
  })
  
  const rows = idMappedEntries
  const columns = [
    { field: 'number', headerName: 'Number', type: 'number', width: 180, editable: true },
    { field: 'series', headerName: 'Series', editable: false },
    { field: 'team', headerName: 'Team Name', editable: false },
    { field: 'driver1', headerName: 'Driver 1', width: 180, editable: true },
    { field: 'driver2', headerName: 'Driver 2', width: 180, editable: true },
    { field: 'driver3', headerName: 'Driver 3', width: 180, editable: true },
    { field: 'vehicle', headerName: 'Vehicle', width: 180, editable: true },
  ];

  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </div>
  )
}

