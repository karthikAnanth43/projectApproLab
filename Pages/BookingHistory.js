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
import RBSheet from "react-native-raw-bottom-sheet";

const DATA = [
    {
      name: 'Ground name',
      from_time: '02.00 pm',
      to_time:'04.00pm',
      advance:'10000',
      date:'sat,01 JAN 2021',
      Amount:'25,000'
    },
    {
        name: 'Ground name',
        from_time: '02.00 pm',
        to_time:'04.00pm',
        advance:'10000',
        date:'sat,01 JAN 2021',
        Amount:'25,000'
    },
    {
        name: 'Ground name',
        from_time: '02.00 pm',
        to_time:'04.00pm',
        advance:'10000',
        date:'sat,01 JAN 2021',
        Amount:'25,000'
    },
    {
        name: 'Ground name',
        from_time: '02.00 pm',
        to_time:'04.00pm',
        advance:'10000',
        date:'sat,01 JAN 2021',
        Amount:'25,000'
    },
    {
        name: 'Ground name',
        from_time: '02.00 pm',
        to_time:'04.00pm',
        advance:'10000',
        date:'sat,01 JAN 2021',
        Amount:'25,000'
    },
    {
        name: 'Ground name',
        from_time: '02.00 pm',
        to_time:'04.00pm',
        advance:'10000',
        date:'sat,01 JAN 2021',
        Amount:'25,000'
    },
    {
        name: 'Ground name',
        from_time: '02.00 pm',
        to_time:'04.00pm',
        advance:'10000',
        date:'sat,01 JAN 2021',
        Amount:'25,000'
    },
    {
        name: 'Ground name',
        from_time: '02.00 pm',
        to_time:'04.00pm',
        advance:'10000',
        date:'sat,01 JAN 2021',
        Amount:'25,000'
    },

  ];
  const DATA1 = [
    {
      name: 'Ground name',
    },
    {
        name: 'Ground name',
      },
      {
        name: 'Ground name',
      },
      {
        name: 'Ground name',
      },
      {
        name: 'Ground name',
      },
      {
        name: 'Ground name',
      },

]
class BookingHistory extends Component{
    constructor(props) {
        super(props); 
      this.state={
        open: false,
        showCancel:false,
        name:''
    }
}
    open = () => {
        this.setState({ open: true });
        this.setState({ open: !this.state.open })
    }
   
    toggleCancel=()=> {
        this.setState({
            showCancel: !this.state.showCancel
        });
    }
    toGround=()=>{
        this.props.navigation.navigate('AddNewSlot')
      }
    render(){
        return(
     <View style={styles1.container}>
 <View style={styles1.header}>
          <View onStartShouldSetResponder={this.toGround} style={{justifyContent: 'center'}}>
            <Image source={require('../images/arrow1.png')} style={styles1.image}/>
          </View>
          <View style={{width: '78%'}}>
            <Text style={styles1.headerText}>BOOKING HISTORY</Text>
          </View>
          <View style={{width: '20%',marginLeft: 10,justifyContent:'center'}}>
            <View>
              <Image source={require('../images/menu.png')} style={{height: 22, width: 22}}/>
            </View>
            
          </View>
          
          </View>
          {/* ----------------------Flatlist-------------------------------- */}
          <FlatList
            style={{ marginBottom: 50}}
            data={DATA}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity onPress={() => this.RBSheet.open()}>
          <Card style={{width:'100%',height:60,marginTop:15}}>
              <View style={{flexDirection:'row',marginLeft:15}}>
            <View style={{width:'70%',margin:5}}>
<Text style={{fontSize:15,fontWeight:'bold'}}>{item.name}</Text>
            </View>
            <View style={{width:'30%',margin:5}}>
<Text style={{fontSize:11}}>sat,01 JAN 2021</Text>
            </View>
            </View>
            <View style={{flexDirection:'row',marginLeft:15}}>
            <View style={{width:'70%',margin:5}}>
<Text style={{fontSize:12,}}>{item.from_time}-{item.to_time} | adv:{item.advance}</Text>
            </View>
            <View style={{width:'20%',margin:5}}>
<Text style={{fontSize:16,fontWeight:'bold',color:'#5e2c96',alignSelf:'flex-end'}}>{item.Amount}</Text>
            </View>
            </View>
        </Card>
        </TouchableOpacity>
 );
}}
keyExtractor={(item, index) => index}
/>
           <RBSheet
                    ref={ref => {
                        this.RBSheet = ref;
                    }}
                    height={650}
                    openDuration={250}     
            >
                    <View style={{ alignItems: 'center', width: '100%',padding:10 }}>
                        <Text style={{ fontSize: 16, paddingTop: 6 }}>Select Ground to be filtered</Text>
                    </View>
                    <View style={{borderWidth:0.5,borderColor:'gray'}}></View>

               <FlatList
           style={{ marginBottom: 50 , marginTop:10}}
            data={DATA1}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity>
                    <View style={{width:'100%',flexDirection:'row'}}>
               <View style={{margin:10,width:'70%'}}>
              <Text style={{fontSize:16,padding:10}}>{item.name}</Text>
              </View>
            
                </View>
                <View style={{borderWidth:0.5}}></View>

                      </TouchableOpacity>          

                );
}}
keyExtractor={(item, index) => index}
/>
                    </RBSheet>
        </View>
       
        
        )
           }
}
export default BookingHistory;
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
});
