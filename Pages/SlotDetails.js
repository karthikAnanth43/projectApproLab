import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    FlatList,
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity,
    Switch,
    TextInput
} from 'react-native';

class SlotDetails extends Component{
  state={
    Balltype1:true,
    Balltype2:false,
    Balltype3:false,
    active: true
}
Select1fn=()=>{
    this.setState({Balltype1:true})
    this.setState({Balltype2:false})
    this.setState({Balltype3:false})
}
Select2fn=()=>{
    this.setState({Balltype1:false})
    this.setState({Balltype2:true})
    this.setState({Balltype3:false})
}
Select3fn=()=>{
    this.setState({Balltype1:false})
    this.setState({Balltype2:false})
    this.setState({Balltype3:true})
}
switch=(value)=>{
    this.setState({active: value})
}
toSlot=()=>{
    this.props.navigation.navigate('AddNewSlot')
  }
  toGround=()=>{
    this.props.navigation.navigate('GroundName')
  }
    render(){
        return(
     <View style={styles1.container}>
 <View style={styles1.header}>
          <View onStartShouldSetResponder={this.toGround}  style={{justifyContent: 'center'}}>
            <Image source={require('../images/arrow1.png')} style={styles1.image}/>
          </View>
          <View style={{width: '78%'}}>
            <Text style={styles1.headerText}>SLOT DETAILS</Text>
          </View>
          <View style={{width: '20%',marginLeft: 10,justifyContent:'center'}}>
            <View>
              <Image source={require('../images/pencil.png')} style={{height: 22, width: 22}}/>
            </View>
            
          </View>
          </View> 
          <View style={{flexDirection:'row',margin:15}}>
              <View style={{width:'20%',height:60,width:'15%',backgroundColor:'#d8d8d8'}}>
          </View>
          <View style={{flexDirection:'column',width:'70%',marginTop:10,marginLeft:20}}>
           <Text style={styles1.headerText1}>ApproLabs Private Limited</Text>
           <Text style={styles1.text2}>Caption Name | 1234567890</Text>
          </View>
     </View>
     <View style={{borderWidth:0.4,width:'100%',marginTop:0,borderColor:'#d8d8d8'}}></View>
     <View style={{flexDirection:'row',margin:15}}>
              <View style={{width:'20%',height:60,width:'15%',backgroundColor:'#d8d8d8'}}>
          </View>
          <View style={styles1.manually}>
           <Text style={styles1.headerText2}>ADD TEAM MANUALLY</Text>
          </View>
     </View>
     <View style={{borderWidth:0.4,width:'100%',marginTop:0,borderColor:'#d8d8d8'}}></View>
     <View style={{margin:15}}>
         <View style={{flexDirection:'row',width:'100%'}}>
       <View style={{ borderWidth:1,borderColor:"#e9e9e9",width:'30%',height:45,borderRadius:5,marginTop:20}}>
       <TextInput style={styles1.slottext}>Overs</TextInput>
       </View>
       <View style={{ borderWidth:1,borderColor:"#e9e9e9",width:'59%',height:45,borderRadius:5,marginTop:20,marginLeft:20}}>
       <TextInput style={styles1.slottext}>Start Date Time</TextInput>
       </View>
         </View>
     <View style={styles1.slot1}>
        <TextInput style={styles1.slottext}>Ground Name</TextInput>
    </View>
    <View style={styles1.slot1}>
        <Text style={styles1.slottext}>Ground Name</Text>
    </View>
    </View>
    <View style={{flexDirection:'row',width:'100%',marginLeft:15,marginTop:30}}>
        <View style={{width:'35%',marginTop:5}}>
            <Text>Ball type</Text>
        </View>
        <View  style={{width:'50%',justifyContent:'space-between',flexDirection:'row'}}>
          {this.state.Balltype1==true ?(
          <View onStartShouldSetResponder={this.Select1fn} style={styles1.balltype1}>
        <Image source={require('../images/cricket-ball.png')} style={styles1.image1}/>
        </View>
          ):null}
          {this.state.Balltype1==false ?(
          <View onStartShouldSetResponder={this.Select1fn} style={styles1.balltype}>
        <Image source={require('../images/cricket-ball.png')} style={styles1.image1}/>
        </View>
          ):null}
          {this.state.Balltype2==true ?(
          <View onStartShouldSetResponder={this.Select2fn} style={styles1.balltype1}>
       <Image source={require('../images/cricket-ball.png')} style={styles1.image1}/>
       </View>
          ):null}
           {this.state.Balltype2==false ?(
          <View onStartShouldSetResponder={this.Select2fn} style={styles1.balltype}>
       <Image source={require('../images/cricket-ball.png')} style={styles1.image1}/>
       </View>
          ):null}
          {this.state.Balltype3==true ?(
          <View onStartShouldSetResponder={this.Select3fn} style={styles1.balltype1}>
       <Image source={require('../images/cricket-ball.png')} style={styles1.image1}/>
        </View>
          ):null}
           {this.state.Balltype3==false ?(
          <View onStartShouldSetResponder={this.Select3fn} style={styles1.balltype}>
       <Image source={require('../images/cricket-ball.png')} style={styles1.image1}/>
        </View>
          ):null}
        </View>
        </View>
        <View style={{flexDirection:'row',width:'100%',marginLeft:15,marginTop:30}}>
        <View style={{width:'35%'}}>
            <Text>Match officials</Text>
        </View>
        <View style={{width:'50%',justifyContent:'space-between',flexDirection:'row'}}>
        <View style={styles1.balltype}>
        <Image source={require('../images/cricket-ball.png')} style={styles1.image1}/>
        </View>
        <View style={styles1.balltype}>
       <Image source={require('../images/cricket-ball.png')} style={styles1.image1}/>
       </View>
       <View style={styles1.balltype}>
       <Image source={require('../images/cricket-ball.png')} style={styles1.image1}/>
        </View>
        </View>
        </View>
        <View style={{flexDirection:'row',width:'100%',marginLeft:15,marginTop:30}}>
        <View style={{width:'58%'}}>
            <Text>Wagon wheel</Text>
        </View>
       <View style={{width:'30%'}}>
           <Switch onValueChange={this.Switch} 
           value={this.state.active}></Switch>
       </View>
        </View>
        <View onStartShouldSetResponder={this.toSlot} style={{marginTop:30,backgroundColor:'#7f43b4',height:50,width:'40%',borderRadius:8,alignSelf:'center'}}>
<Text style={{fontSize:16,textAlign:'center',padding:14,color:'white'}}>SCHEDULE</Text>
</View>
          </View>
     )
    }
}
export default SlotDetails;
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
headerText1:{
 fontSize: 14,
 color: '#1d1d1d',
 fontWeight:'bold'
},
text2:{
fontSize:12,
color:'#d8d8d8',
paddingTop:4
},
headerText2:{
    fontSize: 14,
    color: '#1d1d1d',
    fontWeight:'bold',
    textAlign:'center',
    marginTop:'auto',
    marginBottom:'auto'  
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
    padding:12,
    color:'#bfbfbf'
},
image1:{
  height: 22,
  width: 22,
 alignSelf:'center',
 marginTop:8
},
balltype:{
  height:40,
  width:'20%',
  borderWidth:1,
  borderRadius:5,
  borderColor:'#7f43b4'
},
balltype1:{
  height:40,
  width:'20%',
  borderWidth:1,
  borderRadius:5,
  borderColor:'#7f43b4',
  backgroundColor:'yellow'
},
manually:{
    width:'50%',
    margin:10,
    borderWidth:1,
    marginTop:10,
    marginLeft:20,
    borderColor:'#d8d8d8',
    borderRadius:6
}
});