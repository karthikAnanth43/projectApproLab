import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    FlatList,
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { styles } from 'react-native-material-ripple/styles';
import {Card,CardContent} from  'react-native-shadow-cards'
const DATA = [
    {
      overs: '30 overs',
      from_time: '08.00 am',
      to_time:'01.00pm',
      date:'sat,01 JAN',
      Advance:'10,000',
      shift:'Day Light',
      total:'25,000',
      discount:'20%',
      status:'OPEN'
    },
    {
        overs: '20 overs',
        from_time: '02.00 am',
        to_time:'04.00pm',
        date:'sat,01 JAN',
        Advance:'10,000',
        shift:'flood Light',
        total:'25,000',
        discount:'20%',
        status:'PARTIAL'
      },
      {
        overs: '20 overs',
        from_time:'02.00 am',
        to_time:'04.00pm',
        date:'sat,01 JAN',
        Advance:'10,000',
        shift:'flood Light',
        total:'25,000',
        discount:'20%',
        status:'BOOKED'
      },
      {
        overs: '20',
        from_time: '02.00 am',
        to_time:'04.00pm',
        date:'sat,01 JAN',
        Advance:'10,000',
        shift:'flood Light',
        total:'25,000',
        discount:'20%',
        status:'BOOKED'
      },
      {
        overs: '20',
        from_time: '02.00 am',
        to_time:'04.00pm',
        date:'sat,01 JAN',
        Advance:'10,000',
        shift:'flood Light',
        total:'25,000',
        discount:'20%',
        status:'BOOKED'
      },
      {
        overs: '20',
        from_time: '02.00 am',
        to_time:'04.00pm',
        date:'sat,01 JAN',
        Advance:'10,000',
        shift:'flood Light',
        total:'25,000',
        discount:'20%',
        status:'BOOKED'
      },
      {
        overs: '20',
        from_time: '02.00 am',
        to_time:'04.00pm',
        date:'sat,01 JAN',
        Advance:'10,000',
        shift:'flood Light',
        total:'25,000',
        discount:'20%',
        status:'BOOKED'
      },
      {
        overs: '20',
        from_time: '02.00 am',
        to_time:'04.00pm',
        date:'sat,01 JAN',
        Advance:'10,000',
        shift:'flood Light',
        total:'25,000',
        discount:'20%',
        status:'BOOKED'
      },

]

class BookingHistory extends Component{
  toSlot=()=>{
    this.props.navigation.navigate('SlotDetails')
  }
  toGround=()=>{
    this.props.navigation.navigate('GroundList')
  }
    render(){
        return(
     <View style={styles1.container}>
<View style={styles1.header}>
          <View onStartShouldSetResponder={this.toGround} style={{justifyContent: 'center'}}>
            <Image source={require('../images/arrow1.png')} style={styles1.image}/>
          </View>
          <View style={{width: '78%'}}>
            <Text style={styles1.headerText}>GROUND NAME</Text>
          </View>
          <View style={{width: '20%',marginLeft: 10,justifyContent:'center'}}>
            <View>
              <Image source={require('../images/shopping.png')} style={{height: 22, width: 22}}/>
            </View>
            
          </View>
          
          </View>
          {/* -------------------------------GroundName---------------------- */}
         
          <FlatList
            style={{ marginBottom: 50 }}
            data={DATA}
            renderItem={({ item, index }) => {
              return (
                 <TouchableOpacity onPress={this.toSlot}>
                <Card style={{width:'100%',height:60,marginTop:10,backgroundColor:item.status== 'OPEN' ? '#aef9c5':item.status=='PARTIAL' ? '#f8cbc2':'white',}}>
                <View style={{flexDirection:'row',marginLeft:15}}>
              <View style={{width:'70%',margin:5}}>
  <Text style={{fontSize:14,fontWeight:'bold'}}>{item.date}({item.from_time}-{item.from_time})</Text>
              </View>
              <View style={{width:'30%',marginTop:10,marginLeft:20}}>
  <Text style={{fontSize:12}}>{item.status}</Text>
              </View>
              </View>
              <View style={{flexDirection:'row',marginLeft:15}}>
              <View style={{width:'70%',margin:5}}>
  <Text style={{fontSize:12,}}>{item.shift} | {item.overs} | Adv:{item.Advance} | Tot:{item.total}</Text>
              </View>
              {/* <View style={{width:'20%',margin:5}}>
  <Text style={{fontSize:16,fontWeight:'bold',color:'#5e2c96',alignSelf:'flex-end'}}>{item.Amount}</Text>
              </View> */}
              </View>
          </Card>
          </TouchableOpacity>   
           );
        }}
        keyExtractor={(item, index) => index}
        />
     </View>
            
       
        
      )
         }
}
export default BookingHistory;
const styles1 = StyleSheet.create({
  container: {
    flex: 1,
  
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
})