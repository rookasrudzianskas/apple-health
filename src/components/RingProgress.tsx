//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Svg, {Circle, Rect} from "react-native-svg";

type RingProgressProps = {
  radius?: number;
}

const color = "#EE0F55"

const RingProgress = ({radius = 100}: RingProgressProps) => {
  return (
    <View style={{width: radius * 2, height: radius * 2, alignSelf: 'center'}}>
      <Svg height="50%" width="50%" viewBox="0 0 100 100">
        <Circle
          r={radius}
          fill={color}
        />
      </Svg>
    </View>
  );
};

export default RingProgress;
