//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Svg, {Circle, Rect} from "react-native-svg";

type RingProgressProps = {
  radius?: number;
  strokeWidth?: number;
}

const color = "#EE0F55"

const RingProgress = ({radius = 100, strokeWidth = 20}: RingProgressProps) => {
  const innerRadius = radius - strokeWidth / 2;
  const circumference = innerRadius * 2 * Math.PI;

  return (
    <View style={{width: radius * 2, height: radius * 2, alignSelf: 'center'}}>
      <Svg>
        <Circle
          cx={radius}
          cy={radius}
          r={innerRadius}
          stroke={color}
          strokeWidth={strokeWidth}
          opacity={0.2}
        />
        <Circle
          cx={radius}
          cy={radius}
          r={innerRadius}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={[circumference * 0.2, circumference]}
          strokeLinecap={'round'}
        />
      </Svg>
    </View>
  );
};

export default RingProgress;
