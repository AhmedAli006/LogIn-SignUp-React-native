import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
const Login = () => {
  const [Obj, setObj] = useState([]);
  return (
    <>
      <View style={s.container}>
       
        {/* <ImageBackground
          source={require('../assets/bgLight.png')}
          style={s.bgImg}></ImageBackground> */}
          <Image style={s.bgImg} source={require('../assets/bgLight.png')}/> 

        <View style={s.card}>
          <Text style={s.loginText}>LogIn</Text>
          <View>
            <Text style={s.lgtxt}>Email</Text>
            <TextInput style={s.lgInp}></TextInput>
            <Text style={s.lgtxt}>Password</Text>
            <TextInput style={s.lgInp}></TextInput>
            <Text style={s.forgTxt}>Forget Password?</Text>
            <TouchableOpacity style={s.lgBtn}>
              <Text style={s.lgbtxt}>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={s.signuptxt}>
          Don't have an account? <Text style={s.span}>SignUp</Text>
        </Text>



      
      </View>
    </>
  );
};

const colors = {
  dark: '#101233',
  primary: '#ff4d15',
  gray: '#bdbdbd',
  white:'#fbfbfb',

};

const s = StyleSheet.create({
  bgImg: {
    height: 400,
    width: '100%',
    position: 'relative',
    borderBottomLeftRadius: 90,
    borderBottomRightRadius: 90,
    overflow: 'hidden',
      resizeMode:'repeat',

    
  },
 

  card: {
    bottom: 420,
    backgroundColor: colors.white,
    padding: 16,
    marginTop: 150,
    margin: 25,
    height: 470,
    borderRadius: 30,
    shadowColor: colors.dark,
    elevation: 6,
  },
  signuptxt: {
    bottom: 360,

    color: colors.dark,
    fontSize: 18,
    fontWeight: '500',
    marginHorizontal: 55,
  },
  span: {
    color: colors.primary,
  },
  loginText: {
    marginLeft: 15,
    marginBottom: 20,
    color: colors.dark,
    fontSize: 35,
    fontWeight: '800',
    paddingVertical: 10,
  },
  forgTxt: {
    marginLeft: 140,
    color: '#9D9D9D',
    fontWeight: 'bold',
  },
  lgtxt: {
    color: colors.dark,
    marginLeft: 20,

    fontSize: 17,
    fontWeight: 'bold',
  },
  lgInp: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 11,
    paddingHorizontal: 9,
    borderWidth: 1.5,
    borderRadius: 30,
    borderColor: colors.gray,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  lgBtn: {
    backgroundColor: colors.primary,
    paddingVertical: 18,
    marginHorizontal: 10,
    marginVertical: 39,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lgbtxt: {
    color: colors.dark,
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    backgroundColor: colors.white,

    flex: 1,
  },
});

export default Login;
