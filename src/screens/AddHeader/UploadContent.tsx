import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
  TextInput,
} from 'react-native';
import { styles } from '../../style/UploadContent.styles';
import Images from '../../const/imgUrl';
import Layout from '../../layout';
import { useNavigation } from '@react-navigation/native';
import HomeHeader from '../../components/HomeHeader';
import { launchImageLibrary } from 'react-native-image-picker';
import Video from 'react-native-video';
const UploadContent = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [thoughtMode, setThoughtMode] = useState(false);
  const [thoughtText, setThoughtText] = useState('');
  const options = [
    { icon: Images.COLORCAMERA, label: 'Photos' },
    { icon: Images.VIDEO, label: 'Videos' },
    { icon: Images.LOCATION, label: 'Share\nThoughts' },
  ];
  const pickImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 0.8,
      },
      response => {
        if (response.didCancel) return;
        if (response.errorCode) {
          console.log('ImagePicker Error: ', response.errorMessage);
          return;
        }

        const uri = response.assets?.[0]?.uri;
        if (uri) {
          setSelectedImage(uri);
        }
      },
    );
  };
  const pickVideo = () => {
    setThoughtMode(false);
    setSelectedImage(null);

    launchImageLibrary({ mediaType: 'video' }, res => {
      if (res.assets?.[0]?.uri) {
        setSelectedVideo(res.assets[0].uri);
      }
    });
  };
  const openThoughts = () => {
  setSelectedImage(null);
  setSelectedVideo(null);
  setThoughtMode(true);
};
  return (
    <Layout fullScreen>
      <ScrollView
        style={{ flex: 1, backgroundColor: '#000' }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <View style={styles.container}>
          <HomeHeader
            onMenuPress={() => setDrawerOpen(true)}
            onAddPress={() => navigation.navigate('UploadContent' as never)}
          />
          <Text style={styles.title}>Upload Your Content Here</Text>

          <View style={styles.circleWrapper}>
            {/* THOUGHT MODE */}
            {thoughtMode ? (
              <View style={{ flex: 1 }}>
                <Image
                  source={Images.circlebg} // animated gif
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                  }}
                />

                <TextInput
                  placeholder="Share your thoughts..."
                  placeholderTextColor="#fff"
                  value={thoughtText}
                  onChangeText={setThoughtText}
                  multiline
                  style={{
                    flex: 1,
                    color: '#fff',
                    textAlign: 'center',
                    
                    fontSize: 18,
                    paddingVertical: 120,
                    paddingHorizontal:40
                  }}
                />
              </View>
            ) : selectedVideo ? (
      
              <Video
                source={{ uri: selectedVideo }}
                style={{ width: '100%', height: '100%' }}
                resizeMode="cover"
                repeat
                muted
              />
            ) : (
 
              <Image
                source={
                  selectedImage
                    ? { uri: selectedImage }
                    : require('../../assets/images/user1.png')
                }
                style={styles.circleImage}
              />
            )}
          </View>

          <TouchableOpacity style={styles.uploadBtn} onPress={pickImage}>
            <Text style={styles.uploadText}>Upload</Text>
          </TouchableOpacity>

          <View style={styles.optionsRow}>
            <TouchableOpacity style={styles.optionCard} onPress={pickImage}>
              <Image source={Images.COLORCAMERA} style={styles.optionIcon} />
              <Text style={styles.optionText}>Photos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionCard} onPress={pickVideo}>
              <Image source={Images.VIDEO} style={styles.optionIcon} />
              <Text style={styles.optionText}>Videos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionCard} onPress={openThoughts}>
              <Image source={Images.LOCATION} style={styles.optionIcon} />
              <Text style={styles.optionText}>Share{'\n'}Thoughts</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
};

export default UploadContent;
