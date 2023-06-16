//@ts-nocheck
import React, {useEffect} from 'react';
import {View} from 'react-native';
import Svg, {Circle, CircleProps} from "react-native-svg";
import Animated, {useAnimatedProps, useSharedValue, withTiming} from "react-native-reanimated";
import { AntDesign } from '@expo/vector-icons';

type RingProgressProps = {
  radius?: number;
  strokeWidth?: number;
  progress?: number;
}

const color = "#EE0F55"

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const RingProgress = ({radius = 100, strokeWidth = 35, progress}: RingProgressProps) => {
  const innerRadius = radius - strokeWidth / 2;
  const circumference = innerRadius * 2 * Math.PI;

  const fill = useSharedValue(0);

  useEffect(() => {
    fill.value = withTiming(progress, {duration: 1500});
  }, [progress])

  const animatedProps = useAnimatedProps(() => ({
    strokeDasharray: [circumference * fill.value, circumference]
  }))

  const circleDefaultProps: CircleProps = {
    r: innerRadius,
    cx: radius,
    cy: radius,
    originX: radius,
    originY: radius,
    strokeWidth: strokeWidth,
    stroke: color,
    strokeLinecap: 'round',
    rotation: -90,
  }

  return (
    <View style={{width: radius * 2, height: radius * 2, alignSelf: 'center'}}>
      <Svg>
        <Circle
          {...circleDefaultProps}
          opacity={0.2}
        />
        <AnimatedCircle
          animatedProps={animatedProps}
          {...circleDefaultProps}
        />
      </Svg>
      <AntDesign style={{position: 'absolute', alignSelf: 'center', top: strokeWidth * 0.1}} name="arrowright" size={strokeWidth * 0.8} color="black" />
    </View>
  );
};

export default RingProgress;
