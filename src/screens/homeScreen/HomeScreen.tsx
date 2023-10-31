import React, { useRef, useContext, useEffect, useState } from 'react';
  import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
  import { useNavigation } from '@react-navigation/native';
import Route from '@/navigation/routes';
import { fonts } from '@/assets/fonts';
import { UserProfileComponent,useUser } from 'react-native-user-profile-component';
import { colors } from '@/assets/Colors';
import { Button,Layouts } from 'react-native-theme-component';
import {useConditions} from 'react-native-branch-component';

  const HomeScreen: React.FC<HomeScreenProps> = ({ navigation, route }) => {
    const handleButtonPress = (showFinance: boolean) => {
    // Navigate to the Dashboard screen with the button name as a parameter
    // navigation.navigate('Dashboard', { isFinance: showFinance });
    navigation.navigate(Route.BOTTOM_NAVIGATOR, {
        screen: Route.ACCOUNT_SUMMARY_SCREEN,
        params: { isFinance: showFinance },
      });
  };
const { isLogin, hasDepositAccount, testCondition } = useConditions()

    return (
      <SafeAreaView style={styles.container}>
          <>
        <Layouts type='form'>
               <UserProfileComponent fields={{

  "personalDetails": {
    "label": "Personal details",
    "type": "subtitle"
  },
  "nickName": {
    "label": "Preferred name (will be printed on card)",
    "isEditable": true,
    "type": "textField"
  },
  "religion": {
    "label": "Religion",
    "isEditable": true,
    "type": "selectField"
  },
  "email": {
    "label": "Email",
    "isEditable": true,
    "type": "textField"
  },
  "maritalStatus": {
    "label": "Marital status",
    "isEditable": true,
    "type": "selectField"
  },
  "addresses.addressType": {
    "label": "Mailing address",
    "type": "subtitle"
  },
  "addresses[0].line1": {
    "label": "Address line 1",
    "isEditable": true,
    "type": "textField"
  },
  "addresses[0].line2": {
    "label": "Address line 2 (Optional)",
    "isEditable": true,
    "type": "textField"
  },
  "addresses[0].postcode": {
    "label": "Postcode",
    "isEditable": true,
    "type": "textField"
  },
  "addresses[0].city": {
    "label": "City",
    "isEditable": true,
    "type": "selectField"
  },
  "addresses[0].state": {
    "label": "State",
    "isEditable": true,
    "type": "selectField"
  },
  "employmentDetails": {
    "label": "Employment details",
    "type": "subtitle"
  },
  "employmentDetails[0].employmentType": {
    "label": "Employment type",
    "isEditable": true,
    "type": "selectField"
  },
  "employmentDetails[0].employmentSector": {
    "label": "Employment sector",
    "isEditable": true,
    "type": "selectField"
  },
  "employmentDetails[0].companyName": {
    "label": "Employer name",
    "isEditable": true,
    "type": "textField"
  },
  "employmentDetails[0].occupation": {
    "label": "Occupation",
    "isEditable": true,
    "type": "selectField"
  },
  "creditDetails[0].annualIncome": {
    "label": "Annual income",
    "isEditable": true,
    "type": "textField"
  }

  }}/>
            </Layouts>
            <Layouts type='bottom-sticky-content'>
                      <Button
                        testID={'btn-finance'}
                        label='Finance'
                        onPress={() => handleButtonPress(true)}
                        variant= 'primary'
                        style={{
                          primaryContainerStyle: {
                            flex: 1,
                            marginHorizontal:20
                          }
                        }}
                      />
                      </Layouts>
        </>
      </SafeAreaView>
    );
  };

const styles = StyleSheet.create({
  "container": {
    "flex": 1
  }
});

export default HomeScreen