import {View, StyleSheet} from 'react-native';
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from './common';
import {Button} from 'react-native-paper';
import {String} from '../components/String';
import {strings} from '../core/strings';

export const routeName = 'Home';

type HomeScreenNavigationProps = StackNavigationProp<
  RootStackParamsList,
  'HomeScreen'
>;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 10,
    marginBottom: 5,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    margin: 5,
  },
});

export default ({
  setIndex,
}: {
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <View style={styles.container}>
      <String textStyle={styles.title} id={strings.CRM} />
      <String textStyle={styles.subtitle} id={strings.description} />
      <Button
        mode="contained"
        focusable={true}
        onPress={() => {
          // navigation.navigate(ScreenNames.campaign);
          setIndex(2);
        }}>
        Component
      </Button>
    </View>
  );
};

// // export default ({navigation: {navigation: HomeScreenNavigationProps}) => {
// export default () => {
//   const [index, setIndex] = React.useState(0);
//   const [routes] = React.useState([
//     {key: 'music', title: 'Music', icon: 'account-music'},
//     {key: 'albums', title: 'Campaigns', icon: 'album'},
//     {key: 'recents', title: 'Call Groups', icon: 'history'},
//   ]);

//   const renderScene = BottomNavigation.SceneMap({
//     music: () => <Landing setIndex={setIndex} />,
//     albums: CampaignScreen,
//     recents: CampaignScreen,
//   });
//   return (
//     <BottomNavigation
//       navigationState={{index, routes}}
//       onIndexChange={setIndex}
//       renderScene={renderScene}
//     />
//   );
// };
