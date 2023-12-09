import React from 'react';
import { View, useWindowDimensions, Image } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import style from './HomePage.sass';
import icons from '../../constantData/icons';

import LandingPage from './LandingPage';
import SaveSelectionPage from './SaveSelectionPage';
import RankingPage from './RankingPage';

const FirstRoute = () => (
    <LandingPage />
);

const SecondRoute = () => (
    <SaveSelectionPage />
);

const ThirdRoute = () => (
    <RankingPage />
);

const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
});

export default function HomePage() {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'First' },
        { key: 'second', title: 'Second' },
        { key: 'third', title: 'Third' },
    ]);

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            tabBarPosition={'top'}
            renderTabBar={(props) =>
                <TabBar
                    {...props}
                    renderIcon={(props) => getTabBarIcon(props)}
                    style={style.tab}
                    tabStyle={style.tab_item}
                    labelStyle={style.noLabel}
                    indicatorStyle={style.indicator}
                />
            }
        />
    );
}

const getTabBarIcon = (props) => {
    const { route, focused } = props

    iconSelect = (name) => {
        if (name === null) {
            return icons.empty
        }
        return icons[name]
    }

    if (route?.title === 'First') {
        return (
            <View style={focused ? style.image_container_focused : style.image_container}>
                <Image
                    style={style.image}
                    source={iconSelect('home')}
                />
            </View>
        )
    }
    else if (route?.title === 'Second') {
        return (
            <View style={focused ? style.image_container_focused : style.image_container}>
                <Image
                    style={style.image}
                    source={iconSelect('saves')}
                />
            </View>
        )
    }
    else if (route?.title === 'Third') {
        return (
            <View style={focused ? style.image_container_focused : style.image_container}>
                <Image
                    style={style.image}
                    source={iconSelect('ranking')}
                />
            </View>
        )
    }
    else {
        return (
            <View style={focused ? style.image_container_focused : style.image_container}>
                <Image
                    style={style.image}
                    source={iconSelect('empty')}
                />
            </View>
        )
    }
}