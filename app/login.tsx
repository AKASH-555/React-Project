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

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [resetMessage, setResetMessage] = useState('');
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

  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
      //  ../../../../Reactnative/my new project/MyApp/assets/images/Digitalcloudies1.png
        source={require('../assets/images/Digitalcloudies1.png')}
      />
      <Text style={styles.title}>Sign In</Text>
      <Text style={styles.subtitle}>Please login to your account</Text>

      <View style={styles.login}>
        <Text style={styles.label}>Email or Phone</Text>
        <TextInput
          style={styles.textinput}
          onChangeText={(text) => {
            setEmail(text);
            setEmailError('');
            setResetMessage('');
          }}
          value={email}
          placeholder="Enter Email or Phone"
        
        />
        {emailError !== '' && <Text style={styles.error}>{emailError}</Text>}

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.textinput}
          onChangeText={(text) => {
            setPassword(text);
            setPasswordError('');
          }}
          value={password}
          placeholder="Enter Password"
          secureTextEntry
        />
        {passwordError !== '' && <Text style={styles.error}>{passwordError}</Text>}

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
          <Text style={styles.buttonText}>Reset Password</Text>
        </TouchableOpacity>

        {resetMessage !== '' && (
          <Text style={[styles.message, { color: 'green' }]}>{resetMessage}</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 110,
    alignItems: 'center',
  },
    tinyLogo: {
      width: 250,
      height: 123,
    },
  title: {
    margin: 30,
    width: 300,
    fontWeight: 'bold',
    fontSize: 24,
  },
  subtitle: {
    marginTop: -30,
    width: 300,
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
    height: 50,
    width: 300,
    marginBottom: 5,
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
    borderColor: '#ccc',
  },
  error: {
    color: 'red',
    marginBottom: 10,
    fontSize: 13,
  },
  message: {
    marginTop: 10,
    fontSize: 14,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#1e90ff',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
