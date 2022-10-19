export default function AllEditTable() {
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

const columns = [
  { field: 'number', headerName: 'Number', type: 'number', width: 180, editable: true },
  { field: 'series', headerName: 'Series', editable: false },
  { field: 'team', headerName: 'Team Name', editable: false },
  { field: 'driver1', headerName: 'Driver 1', width: 180, editable: true },
  { field: 'driver2', headerName: 'Driver 2', width: 180, editable: true },
  { field: 'driver3', headerName: 'Driver 3', width: 180, editable: true },
  { field: 'vehicle', headerName: 'Vehicle', width: 180, editable: true },
  
];
