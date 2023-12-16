import React from 'react';
import { Pressable, Image, View } from 'react-native';
import style from './CategoryButtonItem.sass';
import DefaultText from '../DefaultText';
import icons from '../../constantData/icons';

export default function CategoryButtonItem({
  styles,
  category,
  icon,
  onClick,
  image_url,
}) {
  iconSelect = name => {
    if (name === null) {
      return icons.empty;
    }
    return icons[name];
  };

  return (
    <Pressable style={[style.button, styles]} onPress={onClick}>
      {image_url && (
        <View style={style.image_container}>
          <Image
            style={style.image}
            source={{
              uri: image_url,
            }}
          />
          <Image style={style.image_empty} source={iconSelect('empty')} />
        </View>
      )}
      {icon && <Image style={style.icon} source={iconSelect(icon)} />}
      <DefaultText style={style.text} autoFont numberOfLines={2}>
        {category}
      </DefaultText>
    </Pressable>
  );
}
