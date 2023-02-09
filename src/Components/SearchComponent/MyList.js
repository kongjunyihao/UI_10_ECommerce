import React, { useState, useEffect } from 'react';

import "./MylistStyle.css";
import Box from '@mui/material/Box';
import Divider, { Button } from "@mui/material";
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export default function MyList({productID}) {
    const [items,setItems] = useState([])
    const [itemDetails, setDetails] = useState([])

  return (
    <>
        <Toolbar>
                <Typography
                    variant="h4"
                    component="div"
                    sx={{ display: { xs: 'none', sm: 'block' }, paddingTop: '8px' }}
                >
                    Shopping List
                </Typography>
            </Toolbar>
            <div className='list-container'>
                <div className='list-info'>
                    {items.length === 0? (
                        <h1 style={{marginTop: "15%", marginBottom: "15%", marginLeft:"40px"}}>Your cart is empty. Add something you like here!</h1>
                    ) : null}
                    {items.map((item, index) => {})}
                </div>
            </div>
    </>
  );
}