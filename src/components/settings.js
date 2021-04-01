import React from 'react';
import {
  Text, View, Button
} from 'react-native';
import {AuthContext} from "../utils/context";
import {AntDesign} from "@expo/vector-icons";

function Settings({navigation}) {
    const {signOut} = React.useContext(AuthContext)

    const handleClick = () => {
        navigation.openDrawer()
    };
    return (
        <>
            <View style={
                {
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'flex-start',
                    alignContent: 'flex-start',
                    backgroundColor: '#fff2323',
                }
            }>

                <View name={"TopBar"}
                      style={{flex: 1, flexDirection: 'row', alignItems: 'flex-start', backgroundColor: '#007aff'}}>


                    <AntDesign.Button name="bars" size={35} onPress={handleClick}/>

                    <Text style={{flexGrow: 1, textAlign: 'center', alignSelf: 'center'}}>
                    Application Settings
                    </Text>

                </View>
            </View>

            <View>
                <Text>
                    Image logo instead of this Text
                </Text>

            </View>


            <View style={{flex: 7, backgroundColor: 'red'}}>
                <Text>
                    Display potential settings / maybe this should be a profile page not settings
                </Text>
            </View>

        </>

    );
}
export default Settings;

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//
//         <Button
//             style={{fontSize: 20, color: 'green'}}
//             styleDisabled={{color: 'red'}}
//             onPress={() => signOut()}
//             title="Logout"
//         >
//             Logout
//         </Button>
//
//     </View>
//   );
// }

