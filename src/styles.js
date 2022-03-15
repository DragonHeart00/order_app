import {makeStyles} from "@material-ui/core";


export const useStyles = makeStyles((theme) => ({
    root:{
        height:'100vh',
        display: 'flex',
        flexDirection: 'column',
    },
    choose_color:{
        backgroundColor:'#000000',
    },
    content_color:{
        backgroundColor:'#c7c3ba',
        color:'#EF7631'
    },
    main:{
        flex:'1',
        overflow: 'auto',
        flexDirection: 'column',
        display:'flex',
        color:'#EF7631'
    },
    center:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center'
    },
    bottomColor:{
        backgroundColor:'#FFFDF1',
    },
    //style for logo
    largeLogo:{
        height:100
    },
    cards:{
        display:"flex",
        justifyContent: "center",
        alignItems: "center",


    },
    card:{margin:20},
    space:{padding:20},
    media:{width:100}


}))


