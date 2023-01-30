import { Box, Grid, Skeleton } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { useSelector } from 'react-redux'
import Footer from '../Footer/footer'
import Item from '../Item/item'


export default function WallPaperGrid() {
  //data.data.children[0].data.thumbnail
  const data = useSelector((state) => state.FetchReducer.data)

  return (
    <>
      {data.data ? data.data?.children.map((v: any, i: any) => {
        return (
          <Grid item xs={3} >
            <Item key={i} sx={{width:'clamp(100px,90%,600px)',height:'clamp(100px,90%,600px)'}}>
              
              <img src={v.data.preview?.images[0].resolutions[1].url} style={{width:'clamp(100px,100%,600px)',height:'clamp(100px,100%,600px)'}}></img>
            </Item>
          </Grid>
        )
      }) : <>loading</>}

    </>
  )
}