import React from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import InputSpinner from "react-native-input-spinner";
import { connect } from 'react-redux';


function Itempage({ itemDetails, addItemToCart}) {
  const { data: details } = itemDetails;
  const { description } = details;
  const { price } = details;
  const { qty } = details;
  const {product_image} = details;
  return (
    <View style={styles.container}>
        <View style={{display:'flex', alignSelf:'center',alignItems:'center', flexDirection:'column', flexGrow:1, justifyContent:'center', backgroundColor:'green'}}>
            <Text style={{marginTop:'5%', backgroundColor:'pink'}}>
                {description}
            </Text>
            <Image source={{uri: `${product_image}`}} style={{width: 300, height: 300, resizeMode: 'contain'}} />




            <Text>
                {price}
            </Text>

           <View style={{display:'flex', backgroundColor:'yellow', flexDirection:'column', alignItems: 'center'}}>

               <InputSpinner
                   min={1}
                   max ={qty}
                   arrows
                   continuity
                   style={{
                       maxWidth:150,
                       minWidth: 100,}}
               >

               </InputSpinner>
            <Button title={"Add to basket"} onPress={() => addItemToCart(itemDetails.data)}>

            </Button>



           </View>




        </View>

    </View>



  );


}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart:(product) => dispatch({type:'ADD_TO_CART',
            payload:product})
    }
}

export default connect(null, mapDispatchToProps)(Itempage);

const styles = StyleSheet.create({



    container: {
        backgroundColor:'red',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
    },

})
