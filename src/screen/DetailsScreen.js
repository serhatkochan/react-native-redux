import React from "react";
import {View, Text, Button} from "react-native";
import {useNavigation, useRoute} from "@react-navigation/native";
import {useSelector} from "react-redux";

const DetailsScreen = () => {
    const navigation = useNavigation()
    const route = useRoute()
    const user = useSelector(state => state)
    return (
        <View style={{flex: 1, backgroundColor: 'orange', alignItems: 'center', justifyContent: 'center'}}>
            <Text>Welcome Details Screen</Text>
            <Text>Dear {user.name}, your age is {user.age}</Text>
            <Button title="Go Back!" onPress={navigation.goBack}/>
        </View>
    )
};

export default DetailsScreen;