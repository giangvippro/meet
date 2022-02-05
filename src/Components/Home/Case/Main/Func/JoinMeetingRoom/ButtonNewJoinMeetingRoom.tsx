import { useStyles } from "../../../Index"
import KeyboardIcon from '@mui/icons-material/Keyboard';
import D from "../D/D";
import { useState } from "react";
import E from "./E"
import { makeStyles } from "@mui/styles"


const ButtonJoinMeetingRoom = () => {
    const classes= useStyles()
    const [state, setState]= useState<{borderColor: string, joinRoom: boolean, backgroundColor: string, checkValue: boolean, color: string}>({borderColor:"", joinRoom: false, backgroundColor: "", checkValue: false, color: ""})
    const checkValue= ():void => {
        setState(prev=> ({...prev, checkValue: true, backgroundColor: "#067cf191", color: "#1a73e8"}))
    }
    const checkValueEmpty= (): void=> {
        setState(prev=> ({...prev, checkValue: false, backgroundColor: "none", color: "#333"}))
    }
    const useStyles2= makeStyles({
        buttonJoinRoom: {
            width: 85,
            height: 48,
            borderRadius: 6,
            display: 'flex',
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            top: 0,
            left: '100%',
            marginLeft: 20,
            transition: "all 0.1s linear",
            position: 'absolute',
            "&:hover": {
                backgroundColor: state.backgroundColor
            }
        },
    })
    const classes2= useStyles2()
    const focusBorderColor= ()=> {
        setState((prev)=> ({...prev, borderColor: "#1a73e8", joinRoom: true}))
    }
    const blurBorderColor= ()=> {
        if(state.checkValue=== false) {
            setState((prev)=> ({...prev, borderColor: "", joinRoom: false}))
        }
    }
    return (
        <div style={{position: 'relative'}} onFocus={()=> focusBorderColor()} onBlur={()=> blurBorderColor()}>
            <div className={classes.buttonJoinMeetingRoom} style={{borderColor: state.borderColor}} >
                <D icon={<KeyboardIcon />} title="Enter a code or a link" style={{color: "#5f6368"}} checkValue={checkValue} checkValueEmpty={checkValueEmpty} />
            </div>
            {
                state.joinRoom=== true && 
                <div className={classes2.buttonJoinRoom} >
                    <E disable={state.checkValue} color={state.color} title="Join room" />
                </div>
            }
        </div>

    )
}

export default ButtonJoinMeetingRoom