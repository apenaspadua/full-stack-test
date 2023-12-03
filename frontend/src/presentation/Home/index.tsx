import React from 'react';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import Container from 'components/Container';
import Text from 'components/Text';
import { useListBeers } from 'application/modules/beers/BeersService';
import styles from './styles';
import { MaterialIcons } from '@expo/vector-icons'; 
import { useLoading } from 'core/providers/LoadingContext';
import { useNavigationAction } from 'navigation/hooks/useNavigationAction';

interface HomeProps {
  route: any;
}

const Home: React.FC<HomeProps> = ({ route }) => {
  const [page, setPage] = React.useState(1);

  const { username } = route.params;
  const { data, isLoading } = useListBeers(page);
  
  const { showLoading, hideLoading } = useLoading();
  const { navigateTo } = useNavigationAction();

  const handleIncrementPage = () => {
    setPage(page + 1);
  }

  const handleDecrementPage = () => {
    setPage(page === 1 ? 1 : page - 1);
  } 

  isLoading ? showLoading() : hideLoading();
  
  const BeerItem: React.FC<{ item: Beer }> = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => navigateTo('Details', {item: item})}>
      <Image
        resizeMode='contain' 
        source={{ uri: item.image_url }} 
        style={styles.image}
      />
      <Text bold space regular>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <Container margin>
      <View style={styles.texts}>
        <Text style={styles.hi}>Hi, {username}</Text>
        <Text title bold>
          Hit some beer
        </Text>
      </View>

      <FlatList
        data={data}
        numColumns={2}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item: Beer) => item.id.toString()}
        renderItem={({ item }: { item: Beer }) => <BeerItem item={item} />}
      />      

      <View style={styles.pagination}>
        <TouchableOpacity 
          style={styles.arrow}
          onPress={handleDecrementPage}
        >
          <MaterialIcons name='arrow-left' size={24} color='black' />
        </TouchableOpacity>
          <Text>{page}</Text>
        <TouchableOpacity 
          style={styles.arrow}
          onPress={handleIncrementPage}
        >
          <MaterialIcons name='arrow-right' size={24} color='black' />
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default Home;
