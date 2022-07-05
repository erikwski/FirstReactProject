import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';


export default function App() {
  const [enteredText, setEnteredGoalText] = useState("")
  function inputChange(enteredText){
    setEnteredGoalText(enteredText);
  }
  function addGoal(){
    console.log(enteredText);
  }
  return (
    <View style={container}>
      <View style={inputContainer}>
        <TextInput 
          style={inputGoals} 
          placeholder='Add your reached goals' 
          onChangeText={inputChange}
        ></TextInput>
        <Button title='Add new goal' onPress={addGoal}></Button>
      </View>
      <View style={listContainer}>
        <Text>Will be list of the goals</Text>
      </View>
    </View>
  );
}

const {
  container, inputContainer, inputGoals, listContainer
} = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 100,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginLeft: "10%",
  },
  inputGoals: {
    borderWidth: 1,
    borderColor: "gray",
    width: '70%',
    marginLeft: -10,
    marginRight: 10,
  },
  listContainer: {
    marginTop: 30,
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "gainsboro"
  }
  
});
