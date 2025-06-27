import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [resetMessage, setResetMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLogin = () => {
    let valid = true;
    setEmailError('');
    setPasswordError('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      valid = false;
    }

    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
      valid = false;
    }

    if (valid) {
      console.log('Email:', email);
      console.log('Password:', password);
      router.push('/Dashboard');
    }
  };

  const handleResetPassword = () => {
    setEmailError('');
    setResetMessage('');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email to reset password');
      return;
    }

    setResetMessage(`Password reset instructions sent to ${email}`);
  };
  const login=()=>{
    router.push('/login')
  };

  return (
    <SafeAreaProvider>
          <SafeAreaView style={{ flex: 1 }}>
           
    <View style={styles.container}>
      
      <Image
        style={styles.tinyLogo}
      //  ../../../../Reactnative/my new project/MyApp/assets/images/Digitalcloudies1.png
        source={require('../assets/images/Digitalcloudies1.png')}
      />
      <Text style={styles.title}>CREATE YOUR PLACE</Text>
      <Text style={styles.subtitle}>Please signup to your account</Text>

      <View style={styles.login}>

        <View style={styles.inputContainer}>
           <AntDesign name="mail" size={20} color="grey" style={styles.icon} />
        <TextInput
          style={styles.textinput}
          onChangeText={(text) => {
            setEmail(text);
            setEmailError('');
            setResetMessage('');
          }}
          value={email}
          placeholder="Email"
        
        />
        </View>
        
        {emailError !== '' && <Text style={styles.error}>{emailError}</Text>}

      
        <View style={styles.inputContainer}>
      <AntDesign name="key" size={20} color="grey" style={styles.icon} />
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setPassword(text)}
        value={password}
        placeholder="Password"
        placeholderTextColor="grey"
        secureTextEntry={!showPassword}
      />
      <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
         <AntDesign
          name={showPassword ? 'eye' : 'eyeo'} 
          size={20}
          color="grey"
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
        {passwordError !== '' && <Text style={styles.error}>{passwordError}</Text>}

         {/* <TouchableOpacity style={styles.forgotpsw} onPress={handleResetPassword}>
          <Text style={{ fontSize: 14,color:'grey' }}>Forgot Password?</Text>
        </TouchableOpacity> */}


        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
          <Text style={styles.buttonText}>Reset Password</Text>
        </TouchableOpacity> */}
       <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20, marginHorizontal: '8%' }}>
  <View style={{ flex: 1, height: 1, backgroundColor: 'grey' }} />
  <Text style={{ marginHorizontal: 10, color: 'grey' }}>Or continue with</Text>
  <View style={{ flex: 1, height: 1, backgroundColor: 'grey' }} />
</View>

   
          <TouchableOpacity style={styles.textInputLikeButton} onPress={() => console.log('Apple Login')}>
  <AntDesign name="apple1" size={22} color="black" style={styles.icon} />
  <Text style={styles.buttonapple}>Continue With Apple</Text>
</TouchableOpacity>
      
          
      
    <TouchableOpacity style={styles.textInputLikeButton} onPress={() => console.log('Google Login')}>
  <MaterialCommunityIcons name="google" size={22} color="black" style={styles.icon} />
  <Text style={styles.buttonapple}>Continue With Google</Text>
</TouchableOpacity>


       <TouchableOpacity style={styles.textInputLikeButton} onPress={() => console.log('Facebook Login')}>
  <AntDesign name="facebook-square" size={22} color="#1877F2" style={styles.icon} />
  <Text style={styles.buttonapple}>Continue With Facebook</Text>
</TouchableOpacity>
        {/* {resetMessage !== '' && (
          <Text style={[styles.message, { color: 'green' }]}>{resetMessage}</Text>
        )} */}
           <View style={{ flexDirection:'row',marginTop:'5%',gap:1, }}>
                   <Text style={{ color:'grey',marginHorizontal:'1%',textAlign:'center' }}>already have an account?  </Text>
            <TouchableOpacity onPress={login}>
              <Text style={{ color:'black',fontWeight:'bold',marginHorizontal:'1%',marginTop:'2%', }}>
              login
              </Text>
              </TouchableOpacity>
           </View>
            
        

     
       
      </View>
    </View>
    </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: -30,
    alignItems: 'center',
  
  },
    tinyLogo: {
      width: '50%',
      height: '20%',
    },
  title: {
    margin: '1%',
    marginLeft:'10%',
    width: '70%',
    fontWeight: 'bold',
    fontSize: 24,
  },
  subtitle: {
    marginTop: '1%',
    width: '55%',
    marginLeft:'10%',
    fontSize: 14,
    color: '#555',
  },
  login: {
    margin: 40,
  },
  label: {
    marginVertical: 5,
    height: 30,
    fontWeight: 'bold',
    fontSize: 16,
  },
  textinput: {
    height: 40,
    width:300,
    marginBottom: '1%',
    marginTop:8,
    paddingHorizontal: 5,
    
    
   
  },
  error: {
    color: 'red',
    marginTop: -10,
    fontSize: 13,
  },
  message: {
    marginTop: 10,
    fontSize: 14,
    textAlign: 'center',
  },
  forgotpsw:{
 
   marginVertical: '1%',
    marginLeft: '60%',
  },
  pswtext:{
  fontSize: 14,
  
  },
  button: {
    backgroundColor: '#25252a',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  
  },
   textInputLikeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 44,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: '#d9d8e6',
    marginVertical: 10,
  },
 
  
  buttonapple: {
    fontSize: 16,
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#d9d8e6',
    paddingHorizontal: 10,
    height: 40,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
    eyeIcon: {
    marginLeft: 10,
  },
});

export default LoginScreen;
