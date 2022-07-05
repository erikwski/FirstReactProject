import { useState } from 'react';
import { StyleSheet, View, Button, TextInput, Text } from 'react-native';
function GoalItem(props){
    const [enteredText, setEnteredGoalText] = useState("");
    function inputChange(enteredText){
        setEnteredGoalText(enteredText);
    }
    function addGoalHandler(){
        props.clickEvent(enteredText)
        setEnteredGoalText("");
    }
    return (
        <View style={inputContainer}>
            <Text style={titleModal}>INSERT YOUR GOALS</Text>
            <TextInput 
                style={inputGoals} 
                placeholder='Add your reached goals' 
                onChangeText={inputChange} 
                value={enteredText}
            ></TextInput>
            <Button title='Add new goal' onPress={addGoalHandler}></Button>
        </View>
    )
}
const {inputGoals, inputContainer, titleModal} = StyleSheet.create({
    inputGoals: {
        borderWidth: 1,
        borderColor: "gray",
        width: '70%',
        marginLeft: -10,
        marginRight: 10,
        marginBottom: 30,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#e5f4ff"
    },
    inputContainer: {
        paddingLeft: "10%",
        paddingRight: "10%",
        paddingBottom: 100,
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center',
        backgroundColor: "#282828"
    },
    titleModal:{
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 30,
        color: "#fff",
    }
});
export default GoalItem;