import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import InputField from '../../components/TextInput';
import PageDots from '../../components/PageDots';
import { moderateScale, moderateScaleHeight } from '../../utils/scale';
import { COLORS } from '../../theme';
import styles from '../../style/Register.styles';
import Layout from '../../layout';
import Images from '../../const/imgUrl';
import { LinearGradient } from 'react-native-linear-gradient';
import GradientButton from '@gradient-border/react-native-gradient-button';

const countries = [
  {
    name: 'India',
    image: Images.FLAG6,
  },
  {
    name: 'Australia',
    image: Images.FLAG1,
  },
  {
    name: 'Japan',
    image: Images.FLAG3,
  },
  {
    name: 'Bangladesh',
    image: Images.FLAG4,
  },
  {
    name: 'Spain',
    image: Images.FLAG5,
  },
];

const RegisterScreen = ({ navigation }: any) => {
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [agree, setAgree] = useState(false);
  const [education, setEducation] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [funny, setfunny] = useState('');
  const [verifyEmail, setVerifyEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [document, setDocument] = useState<any>(null);
  const [membership, setMembership] = useState<'monthly' | 'yearly' | null>(
    null,
  );

  const renderStepOne = () => (
    <>
      <Text style={styles.label}>Full Name</Text>
      <InputField
        placeholder="Enter your full name"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Email Address</Text>
      <InputField
        placeholder="Enter your email address"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Birthday</Text>
      <InputField
        placeholder="DD / MM / YYYY"
        value={dob}
        onChangeText={setDob}
      />

      <TouchableOpacity
        style={styles.checkboxRow}
        onPress={() => setAgree(!agree)}
      >
        <View style={[styles.checkbox, agree && styles.checked]} />
        <Text style={styles.checkboxText}>
          I Agree To Terms & Community Guidelines
        </Text>
      </TouchableOpacity>
    </>
  );

  const renderStepTwo = () => (
    <>
      <Text style={styles.label}>Education</Text>
      <InputField
        placeholder="Highest Education You Have Completed"
        value={education}
        onChangeText={setEducation}
      />

      <Text style={styles.label}>Company</Text>
      <InputField
        placeholder="Enter Your Current Company"
        value={company}
        onChangeText={setCompany}
      />

      <Text style={styles.label}>Job Role Of The Current Company</Text>
      <InputField
        placeholder="Current Position you are at"
        value={role}
        onChangeText={setRole}
      />
    </>
  );
  const renderStepThree = () => (
    <>
      {/* Title */}
      <Text style={styles.title}>Let’s Create Your Profile</Text>
      <Text style={styles.subtitle}>
        Welcome To On Happiness ! Please enter all the details.
      </Text>

      {/* Video Upload Card */}
      <View style={styles.videoCard}>
        <View style={styles.videoIconWrap}>
          <Image source={Images.CAMERA} style={styles.videoIcon} />
        </View>

        <Text style={styles.videoTitle}>Record Up to 2 Minutes Intro</Text>

        <Text style={styles.videoDesc}>
          Tell Us What Is Your Purpose To Join On Happiness Platform
        </Text>

        <LinearGradient
       colors={['#8B1DA7', '#1690E6']}
        start={{ x: 0.0, y: 1.0 }}
        end={{ x: 1.0, y: 1.0 }}
        style={styles.gradientBorder}
      >
        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
          <Text style={styles.uploadText}>Upload Video</Text>
        </TouchableOpacity>
      </LinearGradient>
      </View>

      {/* Countries */}
      <Text style={styles.sectionTitle}>Countries You Want To Visit</Text>
      

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.countryRow}
      >
        {countries.map((item, index) => (
          <TouchableOpacity key={index} style={styles.countryBox}>
            <Image source={item.image} style={styles.countryImage} />
            <Text style={styles.countryText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Inputs */}
      <Text style={styles.label}>Share A Funny Question….</Text>
      <InputField
        placeholder="Type Here"
        value={funny}
        onChangeText={setfunny}
      />

      <Text style={styles.label}>I Want To Create Social Impact By…</Text>
      <InputField
        placeholder="Type Here"
        value={funny}
        onChangeText={setfunny}
      />
    </>
  );

  const renderStepFour = () => (
    <>
      <Text style={styles.title}>Let’s Verify Your Identity</Text>
      <Text style={styles.subtitle}>
        Welcome To On Happiness ! Please enter all the details.
      </Text>

      <Text style={styles.label}>Email Address</Text>
      <InputField
        placeholder="Type Here"
        value={verifyEmail}
        onChangeText={setVerifyEmail}
      />
      <Text style={styles.label}>Phone Number</Text>
      <InputField
        placeholder="Type Here"
        value={phone}
        onChangeText={setPhone}
      />

      <Text style={styles.label}>LinkedIn</Text>
      <InputField
        placeholder="Enter Your profile url"
        value={linkedin}
        onChangeText={setLinkedin}
      />

      <Text style={styles.label}>ID Document</Text>

      <TouchableOpacity
        style={styles.uploadDocBox}
        onPress={() => {
          // later connect document picker
          setDocument({ name: 'Passport.pdf' });
        }}
      >
        <Text style={styles.uploadDocText}>
          {document ? 'Change Document' : 'Upload Your Document'}
        </Text>
        <Image source={Images.UPLOAD} style={styles.uploadIcon} />
      </TouchableOpacity>

      <View style={styles.uploadedFile}>
        <Text style={styles.uploadedText}>Passport.pdf</Text>
        <TouchableOpacity>
          <Image source={Images.DELETE} style={styles.deleteIcon} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[styles.nextBtn, { alignSelf: 'flex-end' }]}
        onPress={() => setStep(4)}
      >
        <Text style={styles.nextText}>Next →</Text>
      </TouchableOpacity>
    </>
  );

  const renderStepFifth = () => (
    <>
      <Text style={styles.title}>Recommendation </Text>
      <Text style={styles.subtitle}>
        Welcome To On Happiness ! Please enter all the details.
      </Text>

      <Text style={styles.label}>Recommendation 1 </Text>
      <InputField
        placeholder="Type Here"
        value={verifyEmail}
        onChangeText={setVerifyEmail}
      />
      <Text style={styles.label}>Recommendation 2 </Text>
      <InputField
        placeholder="Type Here"
        value={phone}
        onChangeText={setPhone}
      />

      <TouchableOpacity
        style={[styles.nextBtn, { alignSelf: 'flex-end' }]}
        onPress={() => setStep(5)}
      >
        <Text style={styles.nextText}>Next →</Text>
      </TouchableOpacity>
    </>
  );
  const renderStepSix = () => (
    <>
      {/* Title */}
      <Text style={styles.title}>Membership</Text>
      <Text style={styles.subtitle}>
        Welcome To On Happiness ! Please enter all the details.
      </Text>

      {/* Monthly Plan */}
      <Pressable
        onPress={() => setMembership('monthly')}
        style={[
          styles.planCard,
          membership === 'monthly' && styles.planCardActive,
        ]}
      >
        <View style={styles.planHeader}>
          <View style={styles.radioOuter}>
            {membership === 'monthly' && <View style={styles.radioInner} />}
          </View>
          <Text style={styles.planTitle}>Monthly</Text>
          <Text style={styles.planPrice}>$14.99</Text>
        </View>

        <Text style={styles.planDesc}>
          Lorem ipsum dolor sit amet consectetur. Erat vestibulum imperdiet
          tempus convallis neque.
        </Text>
      </Pressable>

      {/* Yearly Plan */}
      <Pressable
        onPress={() => setMembership('yearly')}
        style={[
          styles.planCard,
          membership === 'yearly' && styles.planCardActive,
        ]}
      >
        <View style={styles.planHeader}>
          <View style={styles.radioOuter}>
            {membership === 'yearly' && <View style={styles.radioInner} />}
          </View>
          <Text style={styles.planTitle}>Yearly</Text>
          <Text style={styles.planPrice}>$124.95</Text>
        </View>

        <Text style={styles.planDesc}>
          Lorem ipsum dolor sit amet consectetur. Erat vestibulum imperdiet
          tempus convallis neque.
        </Text>
      </Pressable>

      {/* OR Divider */}
      <View style={styles.divider}>
        <View style={styles.line} />
        <Text style={styles.or}>OR</Text>
        <View style={styles.line} />
      </View>

      {/* Skip Button */}
      <TouchableOpacity
        style={styles.skipBtn}
        onPress={() => navigation.navigate('Thankyou')}
      >
        <Text style={styles.skipText}>Skip For Now</Text>
      </TouchableOpacity>
    </>
  );

  return (
    <Layout fullScreen>
      <View style={styles.bg}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View>
            <PageDots total={6} active={step} />

            {(step === 0 || step === 1) && (
              <>
                <Text style={styles.title}>Register</Text>
                <Text style={styles.subtitle}>
                  Welcome To On Happiness ! Please enter all the details.
                </Text>
              </>
            )}

            {step === 0 && renderStepOne()}
            {step === 1 && renderStepTwo()}
            {step === 2 && renderStepThree()}
            {step === 3 && renderStepFour()}
            {step === 4 && renderStepFifth()}
            {step === 5 && renderStepSix()}

            {step === 0 && (
              <>
                <TouchableOpacity
                  style={[styles.nextBtn, { alignSelf: 'flex-end' }]}
                  onPress={() => setStep(1)}
                >
                  <Text style={styles.nextText}>Next →</Text>
                </TouchableOpacity>
                <View style={styles.divider}>
                  <View style={styles.line} />
                  <Text style={styles.or}>OR</Text>
                  <View style={styles.line} />
                </View>

                <Text style={styles.footer}>
                  Already Have An Account ?{' '}
                  <Text
                    style={styles.link}
                    onPress={() => navigation.navigate('Login')}
                  >
                    <Text style={styles.createAccount}>Login Here</Text>
                  </Text>
                </Text>
              </>
            )}
            {step === 1 && (
              <>
                {/* Social Divider + Title */}
                <View style={styles.socialDivider}>
                  <View style={styles.socialLine} />

                  <View style={styles.socialPill}>
                    <Text style={styles.socialPillText}>
                      Connect Your Social Platform
                    </Text>
                  </View>

                  <View style={styles.socialLine} />
                </View>

                {/* Social Icons */}
                <View style={styles.socialRow}>
                  {/* Instagram */}
                  <LinearGradient
                    colors={['#8B1DA7', '#1690E6']}
                    start={{ x: 1, y: 1 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.socialGradientBorder}
                  >
                    <Pressable style={styles.socialBox}>
                      <Image source={Images.INSTA} style={styles.socialImage} />
                    </Pressable>
                  </LinearGradient>

                  {/* X */}
                  <LinearGradient
                    colors={['#8B1DA7', '#1690E6']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.socialGradientBorder}
                  >
                    <TouchableOpacity
                      style={styles.socialBox}
                      activeOpacity={0.8}
                    >
                      <Image source={Images.X} style={styles.socialImage} />
                    </TouchableOpacity>
                  </LinearGradient>

                  {/* LinkedIn */}
                  <LinearGradient
                    colors={['#8B1DA7', '#1690E6']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.socialGradientBorder}
                  >
                    <TouchableOpacity
                      style={styles.socialBox}
                      activeOpacity={0.8}
                    >
                      <Image source={Images.LINK} style={styles.socialImage} />
                    </TouchableOpacity>
                  </LinearGradient>

                  {/* TikTok */}
                  <LinearGradient
                    colors={['#8B1DA7', '#1690E6']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.socialGradientBorder}
                  >
                    <TouchableOpacity
                      style={styles.socialBox}
                      activeOpacity={0.8}
                    >
                      <Image
                        source={Images.TIKTOK}
                        style={styles.socialImage}
                      />
                    </TouchableOpacity>
                  </LinearGradient>
                </View>
                <TouchableOpacity
                  style={[styles.nextBtn, { alignSelf: 'flex-end' }]}
                  onPress={() => setStep(2)}
                >
                  <Text style={styles.nextText}>Next →</Text>
                </TouchableOpacity>
              </>
            )}
            {step === 2 && (
              <TouchableOpacity
                style={styles.nextBtn}
                onPress={() => setStep(3)}
              >
                <Text style={styles.nextText}>Next →</Text>
              </TouchableOpacity>
            )}
          </View>
        </ScrollView>
      </View>
    </Layout>
  );
};

export default RegisterScreen;
