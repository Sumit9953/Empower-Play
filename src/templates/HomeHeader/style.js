import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        // marginTop:10,
        backgroundColor:"#fff",
        width:"100%",
        height:"12%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly",
        paddingTop:40
    },
    titleBox:{
        height:"100%",
        width:"70%",
        justifyContent:"center"
    },
    avatar:{
        width:50,
        height:50,
        borderRadius:50
    },
    title:{
        fontSize:22,
        fontWeight:"800",
        color:"black"
    },
    description:{
        fontSize:12,
        color:"gray",
        fontWeight:"800",
        marginTop:"2%"
    },
    button: {
        marginTop:10,
        width:"50%",  
        backgroundColor: '#6258e8',
        padding: 10,
        borderRadius: 3,
      },
      buttonText: {
        color: 'black',
        fontSize: 16,
      },
    languagesList: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#6258e8',
      },
    
      languageButton: {
        padding: 10,
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
      },
      lngName: {
        fontSize: 16,
        color: 'white',
      },
});

export default styles