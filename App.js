import React from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import {Constants} from 'expo'

import contacts from './contacts'

export default class App extends React.Component {
  state = {
    showContacts: false,
  }

  toggleContacts = () => {
    this.setState(prevState => ({ showContacts: !prevState.showContacts }))
  }


  render() {
    return (
      <View>
        <Button title="toggle contacts" onPress={this.toggleContacts}></Button>
        <View>
          {contacts.map(contact => (
            <Text>{contact.name}</Text>
          ))}
        </View>
      </View>
    )
  }
}