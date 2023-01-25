import * as React  from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity,ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInput } from 'react-native';
import PDFView from 'react-native-view-pdf';
import MainContainer from '../../BaseComponets/MainContainer';
import axios from 'axios';
const resources = {
  url: 'https://www.africau.edu/images/default/sample.pdf',
};
const resourcesType = 'url';
const HEIGHT = Dimensions.get('window').height
const WIDTH=  Dimensions.get('window').width
       

export interface AppProps {
  navigation:any
}
type StateType = {
  showKeyboard: boolean,
  otpValue1: string,
  otpValue2: string,
  otpValue3: string,
  otpValue4: string,
  currentFocus: string,
  isLoading: boolean
}
const textInput0 = React.createRef<TextInput>();
const textInput1 = React.createRef<TextInput>();
const textInput2 = React.createRef<TextInput>();
const textInput3 = React.createRef<TextInput>();
export default class Step2 extends React.Component <AppProps, StateType>{
  
  constructor(props:any) {
    super(props);
    this.state={
      showKeyboard:false,
      otpValue1: '',
      otpValue2: '',
      otpValue3: '',
      otpValue4: '',
      currentFocus: '',
      isLoading:true

    }
  
  }
  submitOtp(){
      return;
  }

 async onKeyPress(item:string ){
  const { currentFocus} = this.state
     if(item==='->'){
      this.submitOtp()
     }
     if(item==='x'){
      textInput0.current?.setNativeProps({text:''})
      textInput1.current?.setNativeProps({text:''})
      textInput2.current?.setNativeProps({text:''})
      textInput3.current?.setNativeProps({text:''})
      textInput0.current?.focus()
      this.setState({currentFocus:'0'})
      
      return
     }
     switch(currentFocus){
        case '0': 
        {
          this.setState({otpValue1:item})
          textInput0.current?.setNativeProps({text:item})
          textInput1.current?.focus()


          
        }
        break
        case '1': 
        {
          this.setState({otpValue2:item})
         textInput2.current?.focus()

        }
        break
        case '2': 
        {
          this.setState({otpValue3:item})
          textInput3.current?.focus()

        }
        break
        case '3': 
        {
          this.setState({otpValue4:item})

        }
        break
     }
     console.log('current focus',currentFocus)


  }
  handleSubmit() {
    this.setState({isLoading:true})
    const cb = this.setState({isLoading:false})

axios.post('https://5945c274-9c28-48ed-83c5-366add66f155.mock.pstmn.io/post_Store_owner',{
        data: {},
    })
  .then((response)=> {
    console.log(response);

    this.props.navigation.navigate('preview')
  })
  .catch(function (error) {

    console.log('error',error);
  });
  
  this.setState({isLoading:false})
  
   
}

  renderPdf(){
    return(
      <View style={{flex:1}}>
        <Text style={styles.header}>Step 2</Text>
        <Text>Please Enter otp</Text>
        <PDFView
          fadeInDuration={250.0}
          style={{ flex: 1 }}
          resource={resources[resourcesType]}
          resourceType={resourcesType}
          onLoad={() => console.log(`PDF rendered from ${resourcesType}`)}
          onError={(error) => console.log('Cannot render PDF', error)}
        />
      </View>
    )
  }
  renderOtpInput(){
    return(
      <View style={{ backgroundColor:'#2760B6', padding:20, }}>
          <Text style={{fontWeight:'bold', fontSize:20, color:'#fff'}}>Enter OTP</Text>
          {this.renderOtpInputBox()}
      </View>
    )
  }
  renderOtpInputBox() {
    const {otpValue1, otpValue2, otpValue3, otpValue4, isLoading}=this.state
    return (
      <View>
        <View style={styles.inputBoxContainer}>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-start', flexWrap:'wrap', }}>
            <TextInput ref={textInput0} value={otpValue1} onFocus={()=> {
              this.setState({showKeyboard:true, currentFocus:'0'}) }} showSoftInputOnFocus={false} style={styles.otpInputBox} />
            <TextInput ref={textInput1} value={otpValue2}  onFocus={()=> {this.setState({showKeyboard:true, currentFocus:'1'}) }}  showSoftInputOnFocus={false} style={styles.otpInputBox} />
            <TextInput ref={textInput2} value={otpValue3 }  onFocus={()=> {  this.setState({showKeyboard:true, currentFocus: '2'}) }} showSoftInputOnFocus={false}  style={styles.otpInputBox} />
            <TextInput ref={textInput3} value={otpValue4}  onFocus={()=> {this.setState({showKeyboard:true, currentFocus:'3'}) }} showSoftInputOnFocus={false} style={styles.otpInputBox} />
          </View>
          <TouchableOpacity disabled={isLoading} style={styles.sendButton}>
            {!isLoading ? (<Icon name='send-circle-outline' color='#2760B6' size={28} />): (<ActivityIndicator color={'black'} />)}
          </TouchableOpacity>
        </View>
        {this.renderResend()}
      </View>


    )

  }
  renderResend() {
    return (
      <View style={{marginTop:15}}>
        <Text style={{color:'#fff'}}>Didn't get the code yet?</Text>
        <TouchableOpacity><Text style={{color:'#ffffff', fontWeight:'bold'}}>RESEND</Text></TouchableOpacity>
      </View>
    )
  }
  renderNumPad() {
   

    return (
      <View style={{
        paddingVertical: 16,

       backgroundColor: '#1B1B1D', 
       height: Dimensions.get('window').height / 2,
       flexDirection:'column',  
       justifyContent: 'center', 
       alignItems:'center' 
       }}>
        <View style={{width:'100%', flexDirection:'row', alignSelf:'center', justifyContent:'center'}}>
          <TouchableOpacity onPress={this.onKeyPress.bind(this, '1')} style={{ borderRadius: HEIGHT / 20, height:70, width:70, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#2F3034', marginHorizontal: 15, marginTop: 8 }}>
            <Text style={{ color: '#E6E6E6', fontWeight: '600', fontSize: 30 }}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onKeyPress.bind(this, '2')} style={{ borderRadius: HEIGHT / 20,height:70, width:70,flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#2F3034', marginHorizontal: 15, marginTop: 8 }}>
            <Text style={{ color: '#E6E6E6', fontWeight: '600', fontSize: 30 }}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onKeyPress.bind(this, '3')} style={{ borderRadius: HEIGHT / 20, height:70, width:70, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#2F3034', marginHorizontal: 15, marginTop: 8 }}>
            <Text style={{ color: '#E6E6E6', fontWeight: '600', fontSize: 30 }}>3</Text>
          </TouchableOpacity>
        </View>
        <View style={{width:'100%', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
          <TouchableOpacity onPress={this.onKeyPress.bind(this, '4')} style={{ borderRadius: HEIGHT / 20, height:70, width:70, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#2F3034', marginHorizontal: 15, marginTop: 8 }}>
            <Text style={{ color: '#E6E6E6', fontWeight: '600', fontSize: 30 }}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onKeyPress.bind(this, '5')} style={{ borderRadius: HEIGHT / 20, height:70, width:70, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#2F3034', marginHorizontal: 15, marginTop: 8 }}>
            <Text style={{ color: '#E6E6E6', fontWeight: '600', fontSize: 30 }}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onKeyPress.bind(this, '6')} style={{ borderRadius: HEIGHT / 20, height:70, width:70, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#2F3034', marginHorizontal: 15, marginTop: 8 }}>
            <Text style={{ color: '#E6E6E6', fontWeight: '600', fontSize: 30 }}>6</Text>
          </TouchableOpacity>
        </View>
        <View style={{width:'100%', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
          <TouchableOpacity onPress={this.onKeyPress.bind(this, '7')} style={{ borderRadius: HEIGHT / 20, height:70, width:70, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#2F3034', marginHorizontal: 15, marginTop: 8 }}>
            <Text style={{ color: '#E6E6E6', fontWeight: '600', fontSize: 30 }}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onKeyPress.bind(this, '8')} style={{ borderRadius: HEIGHT / 20, height:70, width:70, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#2F3034', marginHorizontal: 15, marginTop: 8 }}>
            <Text style={{ color: '#E6E6E6', fontWeight: '600', fontSize: 30 }}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onKeyPress.bind(this, '9')} style={{ borderRadius: HEIGHT / 20, height:70, width:70, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#2F3034', marginHorizontal: 15, marginTop: 8 }}>
            <Text style={{ color: '#E6E6E6', fontWeight: '600', fontSize: 30 }}>9</Text>
          </TouchableOpacity>
        </View>
        <View style={{width:'100%', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
          <TouchableOpacity onPress={this.onKeyPress.bind(this, 'x')} style={{ borderRadius: HEIGHT / 20, height:70, width:70, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#2F3034', marginHorizontal: 15, marginTop: 8 }}>

              <Icon color={'#E6E6E6'} name={'close-circle-outline'} size={20} />

          </TouchableOpacity>
          <TouchableOpacity onPress={this.onKeyPress.bind(this, '0')} style={{ borderRadius: HEIGHT / 20,height:70, width:70, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#2F3034', marginHorizontal: 15, marginTop: 8 }}>
            <Text style={{ color: '#E6E6E6', fontWeight: '600', fontSize: 30 }}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onKeyPress.bind(this, '->')} style={{ borderRadius: HEIGHT / 20, height:70, width:70, flexDirection: 'row', justifyContent: 'center', alignItems: 'center',  backgroundColor:'#2760B6', marginHorizontal: 15, marginTop: 8, }}>
          <Icon color={'#E6E6E6'} name={'arrow-right'} size={20} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
   render() {
    const {showKeyboard} = this.state
    return (
      <MainContainer>
        <View style={{ flex: 1, backgroundColor: '#ffff', paddingHorizontal: 28, paddingTop: 23 }} >
          {this.renderPdf()}
          <View style={{ position: 'absolute', bottom: 0, width: WIDTH }}>
            {this.renderOtpInput()}
            {showKeyboard && (this.renderNumPad())}
          </View>

        </View>
      </MainContainer>
     
    );
  }
}
const styles= StyleSheet.create({
  otpInputBox: {
    fontWeight: '600',
    textAlign: 'center',
    height: 50,
    width: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 4,
    marginRight: 15,
    fontize:30
  },
  sendButton: {
    borderRaidus: 25,
    backgroundColor: '#fff',
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputBoxContainer:{ 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: 20 
  },
  header:{
    fontSize:20,
    fontWeight:'700',
    color:'#111111'
  }
})
