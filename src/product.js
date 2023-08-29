import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import NaviBar from './components/header.js';
import CartButton, { BuyButton, OfferButton } from './components/buttons.js';
import Stack from '@mui/material/Stack';
import DataGridDemo from './components/datagrid.js';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import DescriptionText, { ProductText } from './components/productinfo.js';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Image = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '6px', 
});

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>




      <Grid container spacing={2}>

        <Grid item xs={12} sm={12} md={12}>
          <Item><NaviBar /></Item>
        </Grid>

        <Grid item xs={6} sm={6} md={6}>
          <Item>
            <div>
              
              <Image
                src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
                alt="ProductImage"
              />
              
            </div>
          </Item>
          <Item>
              <DescriptionText/>
          </Item>
        </Grid>
   

        <Grid item xs={6} sm={6} md={6}>
          <Item>
            <ProductText/>
          </Item>

          <Item>
            <div>
                <Stack direction="row" spacing={2} >
                    <CartButton />
                    <OfferButton />
                    <BuyButton />
                </Stack>
            </div>
          </Item>
          <Item>
            Listings
          </Item>
          <Item>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <FormatListBulletedIcon />
              <h3 style={{ marginLeft: '8px' }}>Offers</h3>
            </div>           
            <DataGridDemo/>
          </Item>
          </Grid>

      </Grid>

    </Box>
  );
}
<<<<<<< Updated upstream

    
  
=======
>>>>>>> Stashed changes
