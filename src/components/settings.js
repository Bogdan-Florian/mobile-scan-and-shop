import React from 'react';
import {
  Text, View, Button
} from 'react-native';
import {AuthContext} from "../utils/context";

function Settings() {
    const { signOut } = React.useContext(AuthContext);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        <Button
            style={{fontSize: 20, color: 'green'}}
            styleDisabled={{color: 'red'}}
            onPress={() => signOut()}
            title="Logout"
        >
            Logout
        </Button>

    </View>
  );
}

export default Settings;
