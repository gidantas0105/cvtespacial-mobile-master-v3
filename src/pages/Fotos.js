import React from 'react';
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';
import PaginaHTML from './base.html'

const source = {
  html: {PaginaHTML}
};

export default function Fotos() {
  const { width } = useWindowDimensions();
  return (
    <RenderHtml
      contentWidth={width}
      source={source}
    />
  );
}