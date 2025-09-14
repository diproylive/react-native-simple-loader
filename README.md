# react-native-simple-loader

A simple and customizable loader (spinner) component for React Native.

---

## ✨ Features
- Circular activity indicator
- Customizable size & color
- Full-screen overlay mode (optional)
- Lightweight and easy to use anywhere

---

## 📦 Installation

Using **npm**:

```bash
npm install react-native-simple-loader


yarn add react-native-simple-loader

# react-native-simple-loader

A simple and customizable loader (spinner) component for React Native.

---

## ✨ Features
- Circular activity indicator
- Customizable size & color
- Full-screen overlay mode (optional)
- Lightweight and easy to use anywhere

---

## 📦 Installation

Using **npm**:

```bash
npm install react-native-simple-loader

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


🔑 Props
| Prop        | Type             | Default   | Description                    |           |             |
| ----------- | ---------------- | --------- | ------------------------------ | --------- | ----------- |
| `visible`   | `boolean`        | `false`   | Show/hide loader               |           |             |
| `size`      | \`"small"        | "large"   | number\`                       | `"large"` | Loader size |
| `color`     | `string`         | `#007bff` | Loader color                   |           |             |
| `overlay`   | `boolean`        | `false`   | If `true`, shows modal overlay |           |             |
| `boxWidth`  | `number \| null` | `null`    | Width of white box (if used)   |           |             |
| `boxHeight` | `number \| null` | `null`    | Height of white box (if used)  |           |             |

