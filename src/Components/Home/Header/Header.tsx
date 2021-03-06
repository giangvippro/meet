import { makeStyles } from '@mui/styles' 
import TitleHeader from './Title/Title'
import RightSide from './RightSide/RightSide'

const useStyles= makeStyles({
  header: {
    width: '100%',
    height: 60,
    padding: 8,
    boxSizing: 'border-box',
    top: 0,
    left: 0,
    right: 0,
    display: 'flex', 
    flexDirection: 'row',
    justifyContent: 'space-between',
    userSelect: 'none',
    position: 'relative',
    zIndex: 999
  }
})
const HeaderComponent = (props: any) => {
  const classes= useStyles()
  return (
    <div className={classes.header} >
        <TitleHeader />
        <RightSide />
    </div>
  )
}

export default HeaderComponent
