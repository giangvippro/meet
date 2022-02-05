import React from 'react'
import CurrentTime from './CurrentTime/CurrentTime'
import { makeStyles } from '@mui/styles'
import Account from './Account/Account'

const useStyles= makeStyles({
    rightSide: {
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        
    }
})
const RightSide = () => {
    const classes= useStyles()
    return (
        <div className={classes.rightSide}>
            <CurrentTime />
            <Account />
        </div>
    )
}

export default RightSide
