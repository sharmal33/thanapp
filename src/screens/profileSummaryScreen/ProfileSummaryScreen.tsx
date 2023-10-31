import React, { useRef, useContext, useEffect, useState } from 'react';
  import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
  

  const ProfileSummaryScreen: React.FC<ProfileSummaryScreenProps> = ({ navigation, route }) => {
  

    return (
      <SafeAreaView style={styles.container}>
         <Text>ProfileSummaryScreen</Text>
      </SafeAreaView>
    );
  };

const styles = StyleSheet.create({
  "container": {
    "flex": 1
  }
});

export default ProfileSummaryScreen