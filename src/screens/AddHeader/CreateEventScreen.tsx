import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  Switch,
} from 'react-native';
import Layout from '../../layout';
import HomeHeader from '../../components/HomeHeader';
import { styles } from '../../style/CreateEvent.styles';
import Images from '../../const/imgUrl';

interface Props {
  type: 'meet' | 'social';
}

const CreateEventScreen: React.FC<Props> = ({ type }) => {
  const [remote, setRemote] = useState(false);
  const [promote, setPromote] = useState(false);
  const [privateEvent, setPrivateEvent] = useState(false);

  const [form, setForm] = useState({
    title: '',
    seats: '',
    organizer: '',
    interests: '',
    cost: '',
    date: '',
    startTime: '',
    endTime: '',
    location: '',
  });

  const renderInput = (
    label: string,
    key: keyof typeof form,
    placeholder: string,
  ) => (
    <View style={styles.inputCard}>
      <Text style={styles.inputLabel}>{label}</Text>

      <TextInput
        value={form[key]}
        placeholder={placeholder}
        placeholderTextColor="#888"
        style={styles.inputText}
        onChangeText={text => setForm(prev => ({ ...prev, [key]: text }))}
      />
    </View>
  );

  return (
    <Layout fullScreen>
      <ScrollView
        style={styles.Scrollcontainer}
        contentContainerStyle={{ paddingBottom: 50, marginTop: 50 }}
        showsVerticalScrollIndicator={false}
      >
        <HomeHeader
          centerText={type === 'social' ? 'Social Impact' : 'Meet People'}
        />
        <View style={styles.container}>
          <Text style={styles.title}>
            Create {type === 'social' ? 'Social Event' : 'Meet Event'}
          </Text>
          <Text style={styles.subtitle}>Fill all the details of the event</Text>

          {renderInput('Event Title', 'title', 'Peace Walk')}
          {renderInput('Total Seats', 'seats', '20')}
          {renderInput('Organizer', 'organizer', 'Jannie Perez')}
          {renderInput('Interests', 'interests', 'Anything Art')}
          {renderInput('Cost', 'cost', '$ Enter amount')}
          {renderInput('Date', 'date', 'MM/DD/YYYY')}
          {renderInput('Start time', 'startTime', 'Select time')}
          {renderInput('End time', 'endTime', 'Select time')}
          {renderInput('Location', 'location', 'Open map')}

          {/* SWITCHES */}
          <View style={styles.switchRow}>
            <Text style={styles.switchLabel}>Remote</Text>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setRemote(!remote)}
              style={[styles.toggleContainer, remote && styles.toggleActive]}
            >
              <View
                style={[
                  styles.toggleCircle,
                  remote && styles.toggleCircleActive,
                ]}
              />

              <Text style={styles.toggleText}>{remote ? '' : 'Yes'}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.switchRow}>
            <Text style={styles.switchLabel}>Promote event</Text>
          <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setPromote(!promote)}
              style={[styles.toggleContainer, promote&& styles.toggleActive]}
            >
              <View
                style={[
                  styles.toggleCircle,
                  promote && styles.toggleCircleActive,
                ]}
              />

              <Text style={styles.toggleText}>{promote ? '' : 'Yes'}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.switchRow}>
            <Text style={styles.switchLabel}>Private event</Text>
             <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setPrivateEvent(!privateEvent)}
              style={[styles.toggleContainer, privateEvent && styles.toggleActive]}
            >
              <View
                style={[
                  styles.toggleCircle,
                  privateEvent && styles.toggleCircleActive,
                ]}
              />

              <Text style={styles.toggleText}>{privateEvent ? '' : 'Yes'}</Text>
            </TouchableOpacity>
          </View>

          {/* INVITE */}
          <Text style={styles.sectionTitle}>Invite People</Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.inviteScroll}
          >
            {[Images.USER3, Images.USER4, Images.USER5, Images.USER3].map(
              (img, i) => (
                <TouchableOpacity key={i}>
                  <Image source={img} style={styles.avatar} />
                </TouchableOpacity>
              ),
            )}
          </ScrollView>

          <TouchableOpacity style={styles.inviteBtn}>
            <Text style={styles.inviteText}>Invite</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Layout>
  );
};

export default CreateEventScreen;
