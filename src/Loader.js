import React from 'react';
import { ActivityIndicator, View, StyleSheet, Modal, StatusBar } from 'react-native';
// extra loaders
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  PulseIndicator,
  SkypeIndicator,
  WaveIndicator,
} from 'react-native-indicators';

const Loader = ({
  visible = false,
  size = 'large',
  color = '#007bff',
  overlay = false,
  boxWidth = null,
  boxHeight = null,
  type = 'default', // ✅ NEW: loader type
}) => {
  if (!visible) return null; // nothing if not visible

  // 🔹 Choose loader type
  const renderIndicator = () => {
    switch (type) {
      case 'ball':
        return <BallIndicator color={color} size={40} />;
      case 'bar':
        return <BarIndicator color={color} />;
      case 'dot':
        return <DotIndicator color={color} />;
      case 'pulse':
        return <PulseIndicator color={color} />;
      case 'skype':
        return <SkypeIndicator color={color} />;
      case 'wave':
        return <WaveIndicator color={color} />;
      default:
        return <ActivityIndicator size={size} color={color} />;
    }
  };

  if (overlay) {
    return (
       <>
  <StatusBar
    backgroundColor="rgba(0,0,0,0.4)" // dark overlay behind statusbar
    barStyle="light-content"          // white icons/text on statusbar
    translucent={true}                // make overlay appear under statusbar
  />
  <Modal transparent visible={visible}>
    <View style={styles.overlay}>
      {boxWidth && boxHeight ? (
        // ✅ White box
        <View style={[styles.loaderBox, { width: boxWidth, height: boxHeight }]}>
          {renderIndicator()}
        </View>
      ) : (
        // ✅ Dark background only
        renderIndicator()
      )}
    </View>
  </Modal>
</>

      
    );
  }

  // fallback: only spinner
  return renderIndicator();
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderBox: {
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});

export default Loader;
