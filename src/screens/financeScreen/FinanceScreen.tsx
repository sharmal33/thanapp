import React, { useRef, useContext, useEffect, useState } from 'react';
  import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
  

  const FinanceScreen: React.FC<FinanceScreenProps> = ({ navigation, route }) => {
  

    return (
      <SafeAreaView style={styles.container}>
         <Text>FinanceScreen</Text>
      </SafeAreaView>
    );
  };

const styles = StyleSheet.create({
  "container": {
    "flex": 1
  }
});

export default FinanceScreen