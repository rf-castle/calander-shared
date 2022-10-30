import React from "react"
import {Button, Container, Typography} from '@mui/material';
import {Link} from 'gatsby';

const RoomPage = () => {
  const title = "Zliルーム"
  return (
      <main>
        <Typography variant='h2'>
          {title}
        </Typography>
        <Container sx={{display: "flex"}}>
          <Button sx={{height: "600px", fontSize: 50}} variant="contained">新しい予定を作る</Button>
          <div style={{display: "flex", flexDirection: "column"}}>
              <Button
                  sx={{height: "300px", fontSize: 40}}
                  variant="contained"
                  href="./rooms/settings"
              >
                カレンダーの共有範囲設定
              </Button>

            <Button sx={{height: "300px", fontSize: 40}} variant="contained">現在のメンバー</Button>
          </div>
        </Container>


      </main>
  )
}

export default RoomPage