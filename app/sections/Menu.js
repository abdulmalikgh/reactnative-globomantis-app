import React from 'react'
import { View, Alert,StyleSheet, TouchableOpacity,  Text} from 'react-native'

export default class Menu extends React.Component{
    onPress = ()=> {
        Alert.alert("Hello there!")
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress} >
                        <Text style={styles.buttonText}>LESSONS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress} >
                        <Text style={styles.buttonText}>REGISTER</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress} >
                        <Text style={styles.buttonText}>BLOG</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyles} onPress={()=> {this.props.navigate('ContactRT')}} >
                        <Text style={styles.buttonText}>CONTACTS</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress} >
                        <Text style={styles.buttonText}>QUIZ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress} >
                        <Text style={styles.buttonText}>ABOUT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:6,
        backgroundColor:'#35605a'
    },
    buttonRow:{
        flex:2,
        flexDirection:'row',
        alignItems:'center',
        borderColor:'#ffffff',
        borderBottomWidth:1 
    },
    buttonStyles: {
        backgroundColor:'#35605a',
        width:'50%',
        height:'50%',
        justifyContent:'center',
        alignItems: 'center'
    },
    buttonText: {
        color:'#ffffff',
        fontSize:18  
    }
})