import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        height:"100%",
        width:"100%",
        backgroundColor:"#FAFAFA",
    },
    textbox:{
        justifyContent:"center",
        // backgroundColor:"red",
        marginTop:20,
        padding:20,
        height:"10%",
        width:"50%",
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
      },
      text: {
        marginBottom: 100,
        fontSize: 18,
        color: 'white',
      },
      languagesList: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#6258e8',
      },
      button: {
        backgroundColor: '#6258e8',
        padding: 10,
        borderRadius: 3,
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