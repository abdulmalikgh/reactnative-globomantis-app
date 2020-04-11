import React, { Component } from 'react'
import { View, Text, StyleSheet,Image} from 'react-native'

export default class Header extends Component{

    state = {
        isLoggedIn : false
    }

    toggleUser = ()=> {
        this.setState( (prevState) => {
            return {
                isLoggedIn : !prevState.isLoggedIn
            }
        })
    }
    render() {
        let display = this.state.isLoggedIn ? 'Sample User' : this.props.message
        return (
            <View style={styles.headStyle}>
                <Image 
                    source={require('./img/Globo_logo_REV.png')} 
                    style={styles.logoStyle}/>
                <Text 
                    onPress={this.toggleUser}
                    style={styles.headText}
                >{display}</Text> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headText : {
        textAlign:'right',
        fontSize:20,
        color:'#fff',
        flex:1
    },
    headStyle : {
        paddingTop:30,
        paddingBottom:10,
        paddingRight:10,
        backgroundColor:'#35605a',
        flex:1,
        flexDirection:'row',
        borderColor:'#000000',
    },
    logoStyle : {
        flex: 1,
        width:undefined,
        height:undefined,
    }
})