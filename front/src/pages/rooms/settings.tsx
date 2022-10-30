import React from 'react'
import type {PageProps} from 'gatsby'
import {Box, Divider, Typography} from '@mui/material'

import CalenderPermissionList from '../../components/list/calenderPermissionList';
import OverrideConditionList from '../../components/list/overrideConditionList';
import AddOverrideButton from '../../components/button/addOverrideButton';

const getTitle = (id: string) => {
    return "Zliルーム"
}
const RoomPage = ({params}: PageProps) => {
    const room_id = params.id
    const title = getTitle(room_id)
    return (
        <>
            <main>
                <Typography variant='h2'>
                    {title}
                </Typography>
                <Divider variant="middle" />
                <Box>
                    <Typography variant='h4'>
                        カレンダーの共有範囲の設定
                    </Typography>
                    <CalenderPermissionList />
                </Box>
                <Box>
                    <Typography variant='h4'>
                        条件指定でのオーバーライド
                    </Typography>
                    <OverrideConditionList/>
                </Box>
                <AddOverrideButton/>
            </main>
        </>
    )
}
export default RoomPage