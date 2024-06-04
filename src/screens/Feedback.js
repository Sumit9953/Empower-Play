import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity , KeyboardAvoidingView } from 'react-native';
import * as MailComposer from 'expo-mail-composer';
import Footer from './footer';
import WelcomeAimation from './WlcomeAimation';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');

  const handleFeedbackChange = (text) => {
    setFeedback(text);
  };

  const handleSubmit = async () => {
    try {
      const isAvailable = await MailComposer.isAvailableAsync();
      if (isAvailable) {
        await MailComposer.composeAsync({
          recipients: ['sumitsantosh555@gmail.com'],
          subject: 'Feedback from FeedbackApp',
          body: feedback,
        });
      } else {
        alert('Email is not available on this device.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('An error occurred while sending feedback.');
    }
  };

  return (
    <View style={styles.container}>
    <View style={{height:300 }}>
    <Text style={{fontSize:40 , fontWeight:500 , textAlign:"center" }}>Feedback</Text>
    <Text style={{fontSize:15 , fontWeight:300 , textAlign:"center" , marginTop:20 }}>Give your valuable feedback that's help us to imporve the application 📩</Text>
    {/* <WelcomeAimation /> */}
    </View>
    <View style={{padding:20}}>
      <TextInput
        placeholder="Enter your feedback..."
        multiline
        numberOfLines={4}
        value={feedback}
        onChangeText={handleFeedbackChange}
        style={styles.input}
      />

      <TouchableOpacity
          onPress={handleSubmit}
          style={{backgroundColor:"#41B06E" , height:50 , justifyContent: "center" , alignItems:"center" , borderRadius:10 , elevation:10}}
        >
          <Text
            style={{
              color:"#fff",
              fontSize:20,
              fontWeight:400,
            }}
          >
            Submit Feedback 📩
          </Text>
        </TouchableOpacity>

    </View>
    <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#97E7E1",
    justifyContent: 'space-evenly',
  },
  input: {
    height: 150,
    borderColor: 'black',
    // borderWidth: 1,
    marginBottom: 20,
    padding: 20,
    elevation:3,
    borderRadius:5,
    fontSize:20
  },
});

export default FeedbackForm;
