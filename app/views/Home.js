import React from 'react'
import { View, Text, StyleSheet,Image } from 'react-native'
import Header from '../sections/Header'
import Hero from '../sections/Hero'
import Menu from '../sections/Menu'
import { StackNavigator } from 'react-navigation'

export default class Home extends React.Component{
    static navigationOptions = {
        header: null
    }

    render() {
        const {navigate} = this.props.navigate

        return (
            <View style={styles.container}>
                <Header message = {" Press to Login"}/>
                <Hero />
                <Menu navigate={navigate} />      
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex:1
    }
})