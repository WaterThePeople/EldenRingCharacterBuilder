import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import style from './RankingPage.sass';
import Title from '../../../components/Title';
import CardScroll from '../../../components/CardScroll';
import { getPublishedCharacters } from '../../../../firebase';
import RankingItemButton from '../../../components/RankingItemButton';
import { useNavigation } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';
import DefaultText from '../../../components/DefaultText';
import Loader from '../../../components/Loader';
import Card from '../../../components/Card';

export default function RankingPage() {

    const [isLoading, setIsLoading] = useState(false)

    const isFocused = useIsFocused();
    const navigation = useNavigation();

    const [characters, setCharacters] = useState([]);

    const getData = async () => {
        setIsLoading(true)
        try {
            setCharacters(await getPublishedCharacters())
        }
        catch (error) {
            console.log(error)
        }
        finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if (isFocused) {
            getData();
        }
    }, [isFocused]);

    const moveToScreen = (save_id, save_name, user_name, ratings) => {
        navigation.navigate('RankingSummaryScreen', {
            save_id: save_id,
            save_name: save_name,
            user_name: user_name,
            ratings: ratings,
        });
    };

    const calculateRating = (ratings) => {
        let count = 0
        let length = 0
        ratings.forEach(element => {
            count = count + element?.rating
            length = length + 1
        });

        let solution = 0

        if (length > 0) {
            solution = (Math.floor((count / length) * 100) / 100).toFixed(2);
        }
        else {
            solution = 0
        }

        return solution
    }

    return (
        <View style={style.container}>
            <Title name={'Community characters'}></Title>
            {!isLoading ? (
                <CardScroll style={style.card}>
                    <View style={style.labels_container}>
                        <DefaultText style={style.label}>
                            Character and author
                        </DefaultText>
                        <DefaultText style={style.label}>
                            Rating
                        </DefaultText>
                    </View>
                    {characters.map((item, index) => (
                        <RankingItemButton
                            saveName={item?.save_name}
                            userName={item?.user_name}
                            rating={calculateRating(item?.ratings)}
                            key={index}
                            onClick={() => moveToScreen(item?.save_id, item?.save_name, item?.user_name, item?.ratings)}
                        />
                    ))}
                </CardScroll>
            ) : (
                <Card style={style.card_loading}>
                    <Loader />
                </Card>
            )}
        </View>
    );
}