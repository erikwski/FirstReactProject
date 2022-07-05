import { StyleSheet, Text, Pressable, View } from 'react-native';

function GoalItem(props){
    // using bind this we going to skip to add handler event
    // for pass parameter but bind directly in main event
    return (
        <View style={goalStyle}>
            <Pressable 
                android_ripple={{color: "#dddddd"}} 
                onPress={props.onTap.bind(this, props.idx)}
                style={{padding: 10}}
            >
                <Text style={{color: "#fff"}}>{props.text}</Text>
            </Pressable>
        </View>
    );
}
const {goalStyle} = StyleSheet.create({
    goalStyle: {
        backgroundColor: "#1187db",
        marginBottom: 10,
        borderRadius: 10,
        textAlign: "center"
    }
});
export default GoalItem;