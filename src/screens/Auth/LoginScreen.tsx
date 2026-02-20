import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../../style/Login.styles';
import InputField from '../../components/TextInput';
import Layout from '../../layout';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/AppNavigator';
type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;
const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation<NavigationProp>();

  const handleLogin = () => {
    console.log({ email, password });
    navigation.replace('MainTabs')
  };

  return (
    <Layout fullScreen>
      <View style={styles.bg}>
        <View style={styles.centerWrap}>
          <View style={styles.row}>
            {/* <MaterialIcons name="keyboard-arrow-left" size={26} color="#fff" /> */}

            <Text style={styles.logoText}>Log in</Text>
          </View>

          <Text style={styles.tagline}>
            Welcome ! Please enter log in details below
          </Text>
          <Text style={styles.label}>E-mail address</Text>
          <InputField
            placeholder="Enter your email address"
            value={email}
            onChangeText={setEmail}
          />
          <Text style={styles.label}>Password</Text>
          <InputField
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            rightIconName={showPassword ? 'eye-off-outline' : 'eye-outline'}
            onRightIconPress={() => setShowPassword(prev => !prev)}
          />

          <TouchableOpacity style={styles.forgotWrap}>
            <Text style={styles.forgotText}>Forgot password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
          <View style={styles.divider}>
            <View style={styles.line} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.line} />
          </View>
          <Text style={styles.footerText}>
            Don’t Have An Account ?{' '}
            <Text
              style={styles.createAccount}
              onPress={() => navigation.replace('Register')}
            >
              Create Account
            </Text>
          </Text>
        </View>
      </View>
    </Layout>
  );
};

export default LoginScreen;
