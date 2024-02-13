import React from 'react';
import RenderHtml from 'react-native-render-html';
import { useWindowDimensions } from 'react-native';
import PaginaHTML from '../../assets/my-html-page'

const source = {
  html: {PaginaHTML}
};

export default function MyHtmlPage() {
    const { width } = useWindowDimensions();
  return (
    <RenderHtml
    contentWidth={width}
      source={source}
    />
  );
}