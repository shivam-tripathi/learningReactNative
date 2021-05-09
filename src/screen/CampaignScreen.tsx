import React, {useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {PermissionsAndroid} from 'react-native';
import Contacts from 'react-native-contacts';
import {Button, List} from 'react-native-paper';

export default () => {
  const [loading, setLoading] = useState(false);
  interface contactsT {
    displayName: string;
    number: string;
  }
  const [contacts, setContacts] = useState([] as contactsT[]);

  const permission = () => {
    setLoading(true);
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
      title: 'Contacts',
      message: 'This app would like to view your contacts.',
      buttonNeutral: 'Ask Me Later',
      buttonNegative: 'Cancel',
      buttonPositive: 'Ok',
    })
      .then(async (resp) => {
        console.log(resp);
        const allContacts = await Contacts.getAll();
        setContacts(
          allContacts.reduce((acc, obj) => {
            const {displayName, phoneNumbers} = obj;
            phoneNumbers.forEach(({number}) => {
              acc.push({displayName, number});
            });
            return acc;
          }, [] as contactsT[]),
        );
        setLoading(false);
      })
      .catch(console.log);
  };

  const styles = StyleSheet.create({
    view: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 50,
      paddingLeft: 50,
      paddingRight: 50,
    },
    spinner: {
      color: '#FFF',
    },
    list: {
      width: Dimensions.get('window').width,
    },
    listSubheading: {
      fontSize: 18,
      paddingLeft: 50,
    },
  });

  return (
    <View style={styles.view}>
      <Spinner
        visible={loading}
        textContent={'Loading...'}
        textStyle={styles.spinner}
      />
      <Button onPress={permission} focusable={true}>
        Load Contacts
      </Button>
      <List.Section focusable={true} style={styles.list}>
        <List.Subheader style={styles.listSubheading}>Contacts</List.Subheader>
        {contacts.map((contact, idx) => (
          <List.Item
            key={idx}
            title={contact.displayName}
            description={contact.number}
            left={() => <List.Icon color="#000" icon="phone" />}
          />
        ))}
      </List.Section>
    </View>
  );
};
