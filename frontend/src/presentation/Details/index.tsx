import Container from 'components/Container';
import { theme } from 'core/styles/theme';
import React from 'react';
import { Image, View } from 'react-native';
import styles from './styles';
import Text from 'components/Text';
import Button from 'components/Button';

interface DetailsProps {
  route: any;
}

const Details: React.FC<DetailsProps> = ({ route }) => {
  const item = route.params.item;

  return (
    <Container topbar>     
      <View style={styles.cotainer}>
        <View style={styles.content}>
          <Text title bold color={theme.colors.white}>{item.name}</Text>
          <Text space bold color={theme.colors.white}>{item.tagline}</Text>
          <Text space bold color={theme.colors.white}>{'First brewed: ' + item.first_brewed}</Text>
          <Text space color={theme.colors.white} style={{ textAlign: 'justify'}}>{item.description}</Text>
          <View style={styles.footer}>
            <Button label='Buy' onPress={() => {}}/>
          </View>
        </View>
        <View style={styles.contentImage}>
          <Image
            resizeMode='contain' 
            source={{ uri: item.image_url }} 
            style={styles.image}
          />
        </View>
      </View>   
    </Container>
  );
}

export default Details;