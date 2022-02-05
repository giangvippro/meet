import { useStyles } from '../Account'

const AvatarLogged = (props: any) => {
    const classes= useStyles()
    if(props.photoUrl=== undefined) {
        return (
            <div className={classes.subLogged}>
                <div className={classes.loggedAvatar}>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className={classes.subLogged}>
                <img draggable={false} src={props.photoUrl || "https://ak.picdn.net/shutterstock/videos/16761250/thumb/1.jpg?ip=x480"} alt="open" className={classes.loggedAvatar} />
            </div>
    
        ) 
    }
}

export default AvatarLogged