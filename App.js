import React, { useState } from "react";
import { View, Button } from "react-native";
import Loader from "react-native-simple-loader";

const App = () => {
  const [loading, setLoading] = useState(false);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Show Loader" onPress={() => setLoading(true)} />
      <Loader visible={loading}  boxWidth={100} boxHeight={100}  />
    </View>
  );
};

export default App;
