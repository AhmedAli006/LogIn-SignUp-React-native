import React from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  Dimensions,
} from 'react-native';

const SignUp = () => {
  return (
    <>
      <View style={s.container}>
        <Image style={s.bgImg} source={require('../assets/bgLight.png')} />
      </View>
      <View style={s.container}>
        <Image style={s.bgImg2} source={require('../assets/bgLight.png')} />
      </View>
        <View style={s.bottomBox}></View>
      <View style={s.topBg}>
        <View style={s.inBox}>
          <Text style={s.inBoxTxt}>Create account</Text>
          <Text style={s.inBoxSub}>
            Let's us know your name, email and your password
          </Text>
        </View>
        <TextInput style={s.SgInp} placeholder="User Name" />
        <TextInput style={s.SgInp} placeholder="Email" />
        <TextInput style={s.SgInp} placeholder="Password" />

        <TouchableOpacity style={s.lgBtn}>
          <Text style={s.lgbtxt}>Sin Up</Text>
        </TouchableOpacity>

      </View>
    </>
  );
};
const colors = {
  dark: '#101233',
  primary: '#ff4d15',
  gray: '#bdbdbd',
  white: ' #f0f0f0',
};

// const aspectRatio = 900 / 1200;
// const {width} = Dimensions.get('window');
// const height = width * (900 / 1200) * 0.61;

const s = StyleSheet.create({
 topBg: {
    // flex: 1,
    backgroundColor: '#f0f0f0' || colors.white,
    position: 'relative',
    width: '100%',
   
    borderTopRightRadius: 90,
    borderBottomRightRadius: 90,
    borderBottomLeftRadius: 90,
    

  },
  bottomBox:{
    width:'100%',
    height:250,
    backgroundColor:colors.dark,
    position: 'absolute',
    top: 550,
    flex: 1,

    
    
  },

  lgbtxt: {
    color: colors.dark,
    fontSize: 20,
    fontWeight: 'bold',
  },
  lgBtn: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    marginHorizontal: 55,
    marginVertical: 30,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  SgInp: {
    paddingVertical: 11,
    paddingHorizontal: 30,
    borderWidth: 1.5,
    borderRadius: 30,
    borderColor: colors.gray,
    marginVertical: 10,
    marginHorizontal: 35,
  },
  inBoxTxt: {
    color: colors.dark,
    fontSize: 30,
    marginTop: 30,
    fontWeight: '700',
  },
  inBoxSub: {
    fontWeight: '400',
    paddingHorizontal: 80,
    marginVertical: 20,
    textAlign: 'center',
  },
  
  bgImg: {
    width: '100%',
    height: 150,
    borderBottomLeftRadius: 90,
    overflow: 'hidden',
  },
  bgImg2: {
    width: '100%',
    height: 150,
    overflow: 'hidden',
    ...StyleSheet.absoluteFillObject,
  },

  container: {
    backgroundColor: '#f0f0f0' || colors.white,

    // flex: 1,
  },
});
export default SignUp;
