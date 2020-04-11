import React from 'react'
import {Image, StyleSheet} from 'react-native'

export default function Hero(){
    return (
        <Image 
            source={require('./img/laptop2.jpg') }
            style={styles.heroImage}
        />
    )
}

const styles = StyleSheet.create({
    heroImage :{
        width:undefined,
        height:undefined,
        flex: 8
    }
})