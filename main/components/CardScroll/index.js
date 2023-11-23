import React from 'react';
import {View, ScrollView} from 'react-native';
import styles from './CardScroll.sass';

function CardScroll(props) {
  return (
    <View style={[styles.container, props.container_style]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        ref={ref => {
          this.scrollView = ref;
        }}
        onContentSizeChange={() =>
          this.scrollView.scrollToEnd({animated: true})
        }>
        <View style={props.style}>{props.children}</View>
      </ScrollView>
    </View>
  );
}

export default CardScroll;
