import { useState } from 'react';
import { StyleSheet, View, FlatList, Modal, Button, Text, Image } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [listGoals, setNewGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  function showAddModal(){
    setModalVisible(true)
  }
  function hideAddModal(){
    setModalVisible(false)
  }
  
  function addGoal(newGoal){
    hideAddModal()
    setNewGoals((currentListGoals)=> [
      ...currentListGoals, 
      newGoal,
    ])
  }
  function deleteGoal(id){
    setNewGoals(currentListGoals=> currentListGoals.filter((gg, idx)=> idx !== id))
  }

  return (
    <View style={container}>
      <Modal
        animationType="slide" 
        visible={modalVisible}
      >
        <GoalInput clickEvent={addGoal}></GoalInput>
      </Modal>
      <Image style={logo} source={require('./assets/images/goal.png')}></Image>
      <Text style={title}>ACHIEVE YOUR GOALS</Text>
      <Button title='NEW' onPress={showAddModal}></Button>
      <FlatList 
        data={listGoals} 
        style={listContainer} 
        renderItem={(goal)=> <GoalItem idx={goal.index} text={goal.item} onTap={deleteGoal}></GoalItem>} 
        keyExtractor={(goal, idx)=> idx}
        >
      </FlatList>
    </View>
  );
}

const {
  container, listContainer, title, logo
} = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingTop: 100,
    backgroundColor: "#2a2a2a"
  },
  listContainer: {
    marginTop: 30,
    marginBottom: 50,
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#3c3c3c",
    width: "100%"
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#fff",
  },
  logo: {
    width: 100,
    height: 100,
    margin: 20
  }
});
