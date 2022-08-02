import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './PagenationOutline.css'

const PaginationOutlined = () => {
  return (
    <div className='pagination'>
    <Stack spacing={2}>
      <Pagination 
        count={5}
        // page={page} 
        // onChange={handleChange} 
        showFirstButton showLastButton 
        variant="outlined" color="primary" />
    </Stack>
    </div>
   
  );
}

export default PaginationOutlined;
