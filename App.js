import React, { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import Loader from './src/Loader'; // ✅ Import your Loader

const App = () => {
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      <Button title="Show Loader" onPress={() => setLoading(true)} />
      <Loader visible={loading} overlay color="red" boxWidth={100} boxHeight={100}/>
      <Loader visible={loading} overlay color="red" />
      <Loader visible={loading} overlay boxWidth={100} boxHeight={100} type="dot" size= 'small'/>
      <Loader visible={loading} overlay type="pulse" color="blue"  boxWidth={100} boxHeight={100}/>
      <Loader visible={loading} overlay type="wave" color="green" boxWidth={100} boxHeight={100}/>
      <Loader visible={loading} overlay type="bar"  boxWidth={100} boxHeight={100}/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
