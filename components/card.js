import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet } from 'react-native';




const ProductCard = ({title,price,ImageSource}) => {
    return(
  <Card style = {styles.container}> 
    <Card.Cover source= {ImageSource} />
    <Card.Content>
      <Title>{title}</Title>
      <Paragraph>{price}</Paragraph>
    </Card.Content>
  </Card>
    )
};


const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    width:300
  },
});


export default ProductCard;