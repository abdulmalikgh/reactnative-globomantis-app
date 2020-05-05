import React, { Component } from 'react'
import {View, Text, StyleSheet} from 'react'
import Header from '../sections/Header'

export default class Contact extends Component{
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View style={styles.container}>
                <Header message={'Press to Login'} />
                <Text style={{flex:8}}>This is a text</Text>
                <Text style={{flex:6}}> This is another text</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1
    }
})