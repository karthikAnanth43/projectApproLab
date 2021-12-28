import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image
} from 'react-native';
import { styles } from 'react-native-material-ripple/styles';
class GroundList extends Component{
  toManageSlot=()=>{
    this.props.navigation.navigate('GroundName')
  }
    render(){
        return(
     <View style={styles1.container}>
                <ScrollView>

            <View style={styles1.header}>
          <View style={{alignSelf: 'center'}}>
            <Image source={require('../images/arrow1.png')} style={styles1.image}/>
          </View>
          <View style={{width: '78%'}}>
            <Text style={styles1.headerText}>GROUND LISTS</Text>
          </View>
          <View style={{width: '10%',marginLeft: 10,justifyContent:'center'}}>
            <View>
              <Image source={require('../images/shopping.png')} style={{height: 22, width: 22}}/>
            </View>
            
          </View>
          </View>
         {/* ------------------header-----------------------------        */}
            <View>
                 <Text style={styles1.heading1}>Ground name</Text>
            </View>
            <View style={styles1.rectangle}></View>
            <View style={{flexDirection:'row',marginTop:5,marginLeft:15}}>
            <View>
              <Image source={require('../images/location.png')} style={styles1.locationimage}/>
            </View>
            <View>
              <Text style={styles1.areaname}>Area name </Text>
            </View>
            <View>
              <Text style={styles1.areaname}>|</Text>
            </View>
            <View>
              <Text style={styles1.areaname}>created on 10 SEB 2021</Text>
            </View>
            </View>
            {/* ----------------------Ground name------------------------------- */}
            <View style={{flexDirection:'row',marginTop:5}}>
        <View style={{width:'33%',backgroundColor:'#5e2c96',height:40}}>
<              Text style={styles1.sharename}>SHARE VIA</Text>
        </View>
        <View style={{width:'33%',backgroundColor:'#5e2c96',height:40,marginLeft:3}}>
              <Text style={styles1.sharename}>EDIT</Text>
              
        </View>
        <View onStartShouldSetResponder={this.toManageSlot} style={{width:'33%',backgroundColor:'#5e2c96',height:40,marginLeft:3}}>
              <Text style={styles1.sharename}>MANAGE SLOTS</Text>
        </View>
                </View>
                <View style={{borderWidth:0.4,width:'100%',marginTop:20}}></View>
          {/* ---------------------------Ground name1------------------------------- */}
          <View>
                 <Text style={styles1.heading2}>Ground name</Text>
            </View>
            <View style={styles1.rectangle}></View>
            <View style={{flexDirection:'row',marginTop:5,marginLeft:15}}>
            <View>
              <Image source={require('../images/location.png')} style={styles1.locationimage}/>
            </View>
            <View>
              <Text style={styles1.areaname}>Area name </Text>
            </View>
            <View>
              <Text style={styles1.areaname}>|</Text>
            </View>
            <View>
              <Text style={styles1.areaname}>created on 10 SEB 2021</Text>
            </View>
            </View>
         
          <View style={{flexDirection:'row',marginTop:5}}>
        <View style={{width:'33%',backgroundColor:'#5e2c96',height:40}}>
<              Text style={styles1.sharename}>SHARE VIA</Text>
        </View>
        <View style={{width:'33%',backgroundColor:'#5e2c96',height:40,marginLeft:3}}>
              <Text style={styles1.sharename}>EDIT</Text>
              
        </View>
        <View onStartShouldSetResponder={this.toManageSlot} style={{width:'33%',backgroundColor:'#5e2c96',height:40,marginLeft:3}}>
              <Text style={styles1.sharename}>MANAGE SLOTS</Text>
        </View>
                </View>
                <View style={{borderWidth:0.4,width:'100%',marginTop:20}}></View>

                {/* ---------------------------Ground name2------------------------ */}
                <View>
                 <Text style={styles1.heading2}>Ground name</Text>
            </View>
            <View style={styles1.rectangle}></View>
            <View style={{flexDirection:'row',marginTop:5,marginLeft:15}}>
            <View>
              <Image source={require('../images/location.png')} style={styles1.locationimage}/>
            </View>
            <View>
              <Text style={styles1.areaname}>Area name </Text>
            </View>
            <View>
              <Text style={styles1.areaname}>|</Text>
            </View>
            <View>
              <Text style={styles1.areaname}>created on 10 SEB 2021</Text>
            </View>
            </View>
                
                <View style={{flexDirection:'row',marginTop:5}}>
        <View style={{width:'33%',backgroundColor:'#5e2c96',height:40}}>
<              Text style={styles1.sharename}>SHARE VIA</Text>
        </View>
        <View style={{width:'33%',backgroundColor:'#5e2c96',height:40,marginLeft:3}}>
              <Text style={styles1.sharename}>EDIT</Text>
              
        </View>
        <View onStartShouldSetResponder={this.toManageSlot} style={{width:'33%',backgroundColor:'#5e2c96',height:40,marginLeft:3}}>
              <Text style={styles1.sharename}>MANAGE SLOTS</Text>
        </View>
        <View style={{borderWidth:0.4,width:'100%',marginTop:20,marginBottom:50}}></View>
                </View>
                </ScrollView>
                

 </View>
        )
    }
}
export default GroundList;
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
    heading1:{
        fontSize:16,
        fontWeight:'bold',
        marginLeft:15,
        marginTop:15
    },
    heading2:{
      fontSize:16,
      fontWeight:'bold',
      marginLeft:15,
      marginTop:30
  },
    rectangle:{
        height:200,
        width: '90%',
        backgroundColor:'#d8d8d8',
        marginLeft:15,
        borderRadius:8 ,marginTop:10
    },
    locationimage:{
        height:20,
        width:20,
    },
    areaname:{
        fontSize:12,
        color:'gray',
        marginLeft:5
    },
    sharename:{
        fontSize:14,
        color:'white',
        fontWeight:'bold',
        textAlign:'center',
        marginTop:10
    }
  });