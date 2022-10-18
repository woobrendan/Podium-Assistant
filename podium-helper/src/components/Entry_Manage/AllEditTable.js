import { DataGrid } from '@mui/x-data-grid';
import React from 'react'

export default function AllEditTable(props) {
  
  const rows = props.allEntries.map((entry, index) => {
    return {...entry, id: index}
  })

  const getRowSpacing = React.useCallback((params) => {
    return {
      top: params.isFirstVisible ? 0 : 5,
      bottom: params.isLastVisible ? 0 : 5,
    };
  }, []);

  return (
    <div className="Edit-Table" style={{ height: 750, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        experimentalFeatures={{ newEditingApi: true }}
        getRowHeight={() => 'auto'}
        getRowSpacing={getRowSpacing}
      />
    </div>
  )
}

const columns = [
  { field: 'carNum', headerName: 'Number', type: 'number', width: 80, editable: true, align: 'center' },
  { field: 'series', headerName: 'Series', width: 180, editable: false, align: 'center' },
  { field: 'teamName', headerName: 'Team Name', editable: false, align: 'center' },
  { field: 'driver1', headerName: 'Driver 1', width: 180, editable: true, align: 'center' },
  { field: 'driver2', headerName: 'Driver 2', width: 180, editable: true, align: 'center' },
  { field: 'driver3', headerName: 'Driver 3', width: 180, editable: true, align: 'center' },
  { field: 'vehicle', headerName: 'Vehicle', width: 180, editable: true, align: 'right' },
];
