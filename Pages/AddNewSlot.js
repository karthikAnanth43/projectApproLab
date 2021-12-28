import React, { Component } from 'react';
import { TextInput } from 'react-native';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image
} from 'react-native';
import { styles } from 'react-native-material-ripple/styles';
class AddNewSlot extends Component{
    state={
        Daylight:true,
        Floodlight:false
    }
    Daylightfn=()=>{
        this.setState({Daylight:true})
        this.setState({Floodlight:false})
    }
    Floodlightfn=()=>{
        this.setState({Daylight:false})
        this.setState({Floodlight:true})
    }
    toSlot=()=>{
        this.props.navigation.navigate('BookingHistory')
      }
      toGround=()=>{
        this.props.navigation.navigate('SlotDetails')
      }
    render(){
        return(
            <View style={styles1.container}>
<View style={styles1.header}>
          <View onStartShouldSetResponder={this.toGround} style={{justifyContent: 'center'}}>
            <Image source={require('../images/arrow1.png')} style={styles1.image}/>
          </View>
          <View style={{width: '78%'}}>
            <Text style={styles1.headerText}>ADD NEW SLOT</Text>
          </View>
          </View>

<View style={{marginTop:50,marginLeft:15}}>
    <View style={styles1.slot}>
        <TextInput style={styles1.slottext} placeholder='Slot Date*'></TextInput>
    </View>
    <View style={styles1.slot1}>
        <TextInput style={styles1.slottext} placeholder='Start Time*'></TextInput>
    </View>
    <View style={styles1.slot1}>
        <TextInput style={styles1.slottext} placeholder='End Time*'></TextInput>
    </View>
    <View style={styles1.slot1}>
        <TextInput style={styles1.slottext} placeholder='Overs*'></TextInput>
    </View>
    <View style={styles1.slot1}>
        <TextInput style={styles1.slottext} placeholder='Amount*'></TextInput>
    </View>
    <View style={styles1.slot1}>
        <TextInput style={styles1.slottext} placeholder='Advance*'></TextInput>
    </View>
    <View style={styles1.slot1}>
        <TextInput style={styles1.slottext} placeholder='Discount*'></TextInput>
    </View>
    </View>
    <View style={{flexDirection:'row',width:'100%',marginTop:10}}>
<View style={{width:'25%',margin:15}}>
<Text style={{fontSize:15}}>Slot Type</Text>
</View>
{this.state.Daylight==true ? (
<View onStartShouldSetResponder={this.Daylightfn} style={styles1.Daylight}>
<Text style={{fontSize:13,fontSize:13,textAlign:'center',padding:5,color:'white'}}>Day Light</Text>
</View>
        ):null}
        {this.state.Daylight ==false ? (
<View onStartShouldSetResponder={this.Daylightfn} style={styles1.Floodlight}>
<Text style={{fontSize:13,fontSize:13,textAlign:'center',padding:5}}>Day Light</Text>
</View>
        ):null}
     {this.state.Floodlight==true ? (   
<View onStartShouldSetResponder={this.Floodlightfn} style={styles1.Daylight}>
<Text style={{fontSize:13,textAlign:'center',padding:5,color:'white'}}>Flood Light</Text>
</View>
):null}
{this.state.Floodlight==false ? (
<View onStartShouldSetResponder={this.Floodlightfn} style={styles1.Floodlight}>
<Text style={{fontSize:13,textAlign:'center',padding:5}}>Flood Light</Text>
</View>
):null}
    </View>
    <View onStartShouldSetResponder={this.toSlot} style={{marginTop:30,backgroundColor:'#7f43b4',height:50,width:'40%',borderRadius:8,alignSelf:'center'}}>
<Text style={{fontSize:16,textAlign:'center',padding:14,color:'white'}}>CREATE SLOT</Text>
</View>
            </View>
        )
    }
}
export default AddNewSlot
const styles1 = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#ffffff'
    },
    header: {
        width: '100%', 
        flexDirection: 'row',
        backgroundColor: '#fde44d',
        height: 50,
       
    },
    image:{
        height: 22,
         width: 22, 
         marginLeft: 15
    },
    headerText:{
        textAlign: 'center',
        fontSize: 16,
        color: '#1d1d1d',
        marginTop:"auto",
        marginBottom:"auto"
    },
    slot:{
        borderWidth:1,
        borderColor:"#e9e9e9",
        width:'94%',
        height:45,
        borderRadius:5
    },
    slot1:{
        borderWidth:1,
        borderColor:"#e9e9e9",
        width:'94%',
        height:45,
        borderRadius:5,
        marginTop:20
    },
    slottext:{
        fontSize:14,
        padding:10,
        color:'#bfbfbf'
    },
    Daylight:{
        width:'30%',
        margin:15,
        backgroundColor:'#7f43b4',
        height:30,
        width:'25%',
        borderRadius:20
    },
    Floodlight:{
        width:'30%',
        margin:15,
        backgroundColor:'#e2e2e2',
        height:30,
        width:'25%',
        borderRadius:20
    }
});