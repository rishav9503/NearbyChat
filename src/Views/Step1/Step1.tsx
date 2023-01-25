import React,{ LegacyRef, useRef}  from 'react';
import { View, Animated, StyleSheet, Text,Platform, ScrollView, ActivityIndicator, Easing, TextInput } from 'react-native';
import MainContainer from '../../BaseComponets/MainContainer';
import Logo from '../../BaseComponets/Logo';
import CtInput from '../../BaseComponets/CtInput';
import CtButton from '../../BaseComponets/CTButton';
import {  isValidEmail, isValidString } from '../../Utils/helper';
import { createRef } from 'react';
import axios from 'axios';
export interface AppProps {
    navigation: any;
}

const refs = createRef<TextInput>();

export default class Step1 extends React.Component<AppProps, any> {

    constructor(props: AppProps) {
        super(props);
        this.state = {

            ownerName: '',
            email: '',
            aadharNo: '',
            panNo: '',
            dob: '',
            animationValue: new Animated.Value(100),
            isLoading:false
        }
    }




    fadeIn = () => {
        Animated.timing(this.state.animationValue, {
          toValue: 100,
          duration: 300,
          useNativeDriver: false,
        }).start();
      };
    
      fadeOut = () => {
        Animated.timing(this.state.animationValue, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }).start();
      };

    
    handleSubmit() {
            this.setState({isLoading:true})
        axios.post('https://5945c274-9c28-48ed-83c5-366add66f155.mock.pstmn.io/post_Store_owner',{
                data: {},
            })
          .then((response)=> {


            this.props.navigation.navigate('preview')
          })
          .catch(function (error) {


          });
          
          this.setState({isLoading:false})
          
           
    }
    handleChangeText(_text: string, type: string) {
       

        switch (type) {

            case 'storeOwnerName':
                {
                    this.setState({ ownerName: _text } )
                }
                break;
            case 'email':
                {

                    this.setState({ email:_text } )
                }
                break;
            case 'aadharNo':
                {
                        let formattedText = _text.split(' ').join('');

                            console.log(formattedText,'formmm')
                            formattedText = formattedText.length> 4? formattedText.match(new RegExp('.{1,4}', 'g'))?.join(' ') || '': formattedText;

                       
                        console.log(formattedText,'hell')
                        this.setState({ aadharNo: formattedText})

                }
                break;
                    
                   

                case 'PAN':
                {

                   this.setState({panNo:_text})
                   if(_text.length === 10){
                    refs.current?.focus()
                   }
                }
                break;
                case 'DOB':
                    {
                     
                       this.setState({formValues:{...this.state.formValues, ['dob']:_text }})
                    }
                break;
                   
            default:
                break;
        }
    }
    
    renderFormInputs = () => {
        const { ownerName, email, aadharNo, panNo, dob } = this.state

        return (
            <ScrollView   >
                <CtInput
                    onChangeText={(text) => this.handleChangeText(text, 'storeOwnerName')}
                    label='Shop owner name' placeholder='Enter store owner name'
                    onFocus={() => this.fadeOut()}
                    onBlur={() => this.fadeIn()}
                    value={ownerName}
                    style={styles.textInput}
                    marginUp={15}

                />
                <CtInput
                    onChangeText={(text) => this.handleChangeText(text, 'email')}
                    label='Email Address'
                    placeholder='abcdefgh@gmail.com'
                    onFocus={() => this.fadeOut()}
                    onBlur={() => this.fadeIn()}
                    style={styles.textInput}
                    marginUp={15}
                    
                />
                <CtInput
                    label='Aadhar Number'
                    onChangeText={(text) => this.handleChangeText(text, 'aadharNo')}
                    placeholder='1234 5678 9101'
                    maxLength={14}
                    value={aadharNo}
                    keyboardType={'number-pad'}
                    showCheck={this.state.aadharNo.length===14}
                    onFocus={() => this.fadeOut()}
                    onBlur={() => this.fadeIn()}
                    style={styles.textInput}
                    marginUp={15}
                    
                />
                <CtInput
                    label='PAN Number'
                    placeholder='ACBDE1234F'
                    maxLength={10}
                    onChangeText={(text) => this.handleChangeText(text, 'PAN')}
                    showCheck={this.state.panNo.length===10}
                    onFocus={() => this.fadeOut()}
                    onBlur={() => this.fadeIn()}
                    style={styles.textInput}
                    marginUp={15}
                    
                />
                <CtInput
                    label='Date Of Birth'
                    placeholder='DD/MM/YY'
                    onChangeText={(text) => this.handleChangeText(text, 'DOB')}
                    showCheck={false}
                    onFocus={() => this.fadeOut()}
                    onBlur={() => this.fadeIn()}
                    style={styles.textInput}
                    marginUp={15}
                    ref={refs}
                    
                />
            </ScrollView>)
    }
    renderSubmitButton = () => {
        const { ownerName, email, aadharNo, panNo, dob } = this.state
        const disabled = !isValidString(ownerName) ||
            !isValidEmail(email) ||
            aadharNo.length!==14||
            panNo.length!==10

        return (<CtButton disabled={disabled} onPress={this.handleSubmit.bind(this)} />)

    }
    renderLogo = () => (
        <Animated.View style={[styles.logo, { height: this.state.animationValue }]}>
            <Text style={[styles.logoText]}>LOGO</Text>
        </Animated.View>

    )





    public render() {

        return (
            <MainContainer>
                <View style={styles.container}>
                    {this.renderLogo()}
                    <Text style={styles.formHeader}>Step 1</Text>
                    <Text style={styles.formSubHeader}>Please enter your details</Text>
                    {this.renderFormInputs()}
                    {this.state.isLoading && (<ActivityIndicator color='#111' style={{marginVertical:10}}/>)}
                    {this.renderSubmitButton()}
                </View>
            </MainContainer>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        padding:28,
        backgroundColor:'#ffffff'

    },
    logo:{
       
        width:100,
        backgroundColor:'#D6E6FF',
        alignItems:'center',
    },
    logoText:{
        marginTop:'46%',
        fontSize:20,
        fontWeight:'400',
    },
    formHeader: {
        marginTop: 8,
        fontSize: 20,
        fontWeight: '700'

    },
    formSubHeader: {
        fontSize: 16,
        fontWeight: '400',
        marginTop: 7

    },
    fadingContainer: {
        padding: 20,
        backgroundColor: 'powderblue',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#919191',
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 6,
        height: 50,
        fontSize: 16

    },



})
