import React from 'react'
import { View, Text, StyleSheet,Image } from 'react-native'
import Header from '../sections/Header'
import Hero from './Hero'

export default class Home extends React.Component{
    render() {
        return (
            <View style={styles.container}>
                <Header message = {" Press to Login"}/>
                <Hero />
                <Text style={{flex:6}} >These other lines are here</Text>      
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex:1
    }
})