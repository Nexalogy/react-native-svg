import React from 'react';
import { requireNativeComponent } from 'react-native';
import extractProps, { propsAndStyles } from '../lib/extract/extractProps';
import { NumberProp } from '../lib/extract/types';
import Shape from './Shape';

export default class Line extends Shape<{
  x1?: NumberProp;
  y1?: NumberProp;
  x2?: NumberProp;
  y2?: NumberProp;
}> {
  static displayName = 'Line';

  static defaultProps = {
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
  };

  render() {
    const { props } = this;
    const { x1, y1, x2, y2 } = props;
    return (
      <RNSVGLine
        ref={this.refMethod}
        {...extractProps(propsAndStyles(props), this)}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
      />
    );
  }
}

export const RNSVGLine = requireNativeComponent('RNSVGLine');