import React, { useState } from 'react';
import './UserList.css';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { userRows } from '../../components/recharts/dummyData';


const UserList = () => {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
      setData(data.filter((item) => item.id !== id));
    };
    const columns = [
        { field: 'id', headerName: 'ID', width: 130 },
        { field: 'user', headerName: 'User', width: 330,renderCell: (params) => {
            return (
              <div className="userListUser">
                <img className="userListImg" src={params.row.avatar} alt="" />
                {params.row.username}
              </div>
            );
          },
        },
        { field: 'email', headerName: 'Email name', width: 330 },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
              return (
                <>
                  <Link to={"/user/" + params.row.id}>
                    <button className="userListEdit">Edit</button>
                  </Link>
                  <DeleteOutlineIcon
                    className="userListDelete"
                    onClick={() => handleDelete(params.row.id)}
                  />
                </>
              );
            },
          },
        {
          field: 'transaction',
          headerName: 'Transaction',
          width: 130,
        
        },
      ];
     
    return (
        <div className="deshUser">
             {/* <div style={{ height: 400, width: '100%' }}> */}
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        // rowsPerPageOptions={[5]}
        checkboxSelection
      />
    {/* </div> */}
        </div>
    );
};

export default UserList;