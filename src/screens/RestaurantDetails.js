import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, FlatList } from 'react-native';

const RestaurantDetailsScreen = ({ route }) => {
  const apiKey = 'AIzaSyBaXNfik0Mi1P24_467aCFoak_7PWWjvQY'; 

  const { restaurant } = route.params;

  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${restaurant.place_id}&fields=menu&key=${apiKey}`
        );

        if (response.data.result && response.data.result.menus) {
          setMenu(response.data.result.menus);
        }
      } catch (error) {
        console.error('Error fetching menu:', error);
      }
    };

    fetchMenu();
  }, [restaurant.place_id]);


  return (
    <ScrollView style={styles.container}>
      <Image
        source={{
          uri: restaurant.photos && restaurant.photos.length > 0
            ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${restaurant.photos[0].photo_reference}&key=${apiKey}`
            : null,
        }}
        style={styles.restaurantImage}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.restaurantName}>{restaurant.name}</Text>
        <Text style={styles.restaurantRating}>
          Rating: {restaurant.rating} ({restaurant.user_ratings_total} reviews)
        </Text>
        <Text style={styles.restaurantDescription}>{restaurant.vicinity}</Text>
        <Text style={styles.sectionHeader}>Location:</Text>
        <Text style={styles.sectionText}>{restaurant.details && restaurant.details.formatted_address}</Text>
        <Text style={styles.sectionHeader}>Reviews:</Text>
        {restaurant.details && restaurant.details.reviews ? (
          restaurant.details.reviews.map((review, index) => (
            <View key={index} style={styles.reviewContainer}>
              <Text style={styles.reviewAuthor}>{review.author_name}</Text>
              <Text style={styles.reviewText}>{review.text}</Text>
            </View>
          ))
        ) : (
          <Text>No reviews available</Text>
        )}
        <Text style={styles.sectionHeader}></Text>
        <FlatList
          horizontal
          data={restaurant.photos && restaurant.photos.slice(1, 6)} // Show up to 5 additional photos
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Image
              source={{
                uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${item.photo_reference}&key=${apiKey}`,
              }}
              style={styles.additionalImage}
            />
          )}
        />
      </View>

      
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  restaurantImage: {
    width: '100%',
    height: 200,
  },
  detailsContainer: {
    padding: 16,
  },
  restaurantName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  restaurantRating: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
  },
  restaurantDescription: {
    fontSize: 16,
    marginBottom: 16,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  sectionText: {
    fontSize: 16,
    marginBottom: 16,
  },
  reviewContainer: {
    marginBottom: 16,
  },
  reviewAuthor: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  reviewText: {
    fontSize: 16,
  },
  additionalImage: {
    width: 200,
    height: 120,
    marginRight: 8,
    borderRadius: 8,
  },
});

export default RestaurantDetailsScreen;