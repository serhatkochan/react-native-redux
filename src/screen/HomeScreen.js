import React, {useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { useDispatch, useSelector } from "react-redux";
import { setName } from "../redux/userAction";

const HomeScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const user = useSelector((state) => state)
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'lightgray',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <Text>Welcome Home Screen</Text>
            <Text>Name: {user.name} Age: {user.age}</Text>
            <TextInput
                style={{
                    width: 200,
                    height: 50,
                    borderWidth: 1,
                    borderColor: 'white',
                    padding: 7,
                }}
                placeholder="What is your Name?"
                value={user.name}
                onChangeText={(text)=> dispatch(setName(text))}
            />
            <Button
                title="Go to Details Screen"
                onPress={() => navigation.navigate('DetailsScreen')}
            />
        </View>
    );
};

export default HomeScreen;