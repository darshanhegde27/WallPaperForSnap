// import { Grid } from '@mui/material'
// import { Box } from '@mui/system'
// import React from 'react'
// import { useLoadQuery } from '../../services/RedditService'
// import Hedder from '../Comman/Hedder/Headder'
// import WallPaperGrid from '../Comman/WallaperGrid/WallPaperGrid'



// export default function Home() {
//  
//   return (
//     <>
//       <Grid>
//         <Grid item xs={4}>
//           <Hedder />

//         </Grid>
//         <Grid item xs={12}>

//           {JSonData ? <WallPaperGrid data={JSonData} /> : <div>YooooHoooo..:)</div>}
//         </Grid>
//       </Grid>
//     </>
//   )
// }
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Hedder from '../Comman/Hedder/Headder';
import { useLoadQuery } from '../../services/RedditService'
import WallPaperGrid from '../Comman/WallaperGrid/WallPaperGrid';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Footer from '../Comman/Footer/footer';
import { useDispatch } from 'react-redux';
import { load } from '../../Redux/fetchSlice';



export default function Home() {
  const { data, error, isLoading } = useLoadQuery(70)

  const dispacth = useDispatch();
  React.useEffect(() => {
    if (error === undefined && isLoading === false) {
         dispacth(load({data,error,isLoading}))
    }
  }, [data])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Hedder />
       
        <WallPaperGrid/>
        <Footer></Footer>
        
      </Grid>
    </Box>
  );
}

