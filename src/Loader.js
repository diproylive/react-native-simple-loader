import React from 'react';
import { ActivityIndicator, View, StyleSheet, Modal } from 'react-native';

const Loader = ({
  visible = false,
  size = 'large',
  color = '#007bff',
  overlay = false,
  boxWidth = null,
  boxHeight = null,
}) => {
  if (!visible) return null; // nothing if not visible

  if (overlay) {
    return (
      <Modal transparent visible={visible}>
        <View style={styles.overlay}>
          {boxWidth && boxHeight ? (
            // ✅ White box with spinner
            <View
              style={[
                styles.loaderBox,
                { width: boxWidth, height: boxHeight },
              ]}
            >
              <ActivityIndicator size={size} color={color} />
            </View>
          ) : (
            // ✅ Fullscreen dark background with spinner
            <ActivityIndicator size={size} color={color} />
          )}
        </View>
      </Modal>
    );
  }

  // fallback: only spinner
  return <ActivityIndicator size={size} color={color} />;
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
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});

export default Loader;
