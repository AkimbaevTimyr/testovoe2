import { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useAppDispatch } from '../../hooks/redux';
import { setUsers } from '../../store/actions/UserActionCreator';


const Paginationn = () => {
    const dispatch: any = useAppDispatch()
    const handleClick = (page: number) =>{
        dispatch(setUsers(page))
    }
  return (
    <Stack spacing={2}>
      <Pagination  onChange={(_, page) => handleClick(page)} count={2} variant="outlined" shape="rounded" />
    </Stack>
  );
}

export default Paginationn