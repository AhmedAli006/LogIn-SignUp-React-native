import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
  Image,
} from 'react-native';
// import { SearchBar } from '@rneui/themed';



const work = () => {
  const [data, setData] = useState<any[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch('https://dummyjson.com/product')
      .then(response => response.json())
      .then(json => {
        setData(json.products);
        setTotalItems(json.total_items);
      });
  }, []);

  const handleLoadMore = () => {
    setIsLoading(true);
    const nextPageData = data.slice((page - 1) * 5, page * 5);
    setData([...data, ...nextPageData]);
    setPage(page + 1);
    setIsLoading(false);
  };

  const handleButtonClick = (pageNumber: React.SetStateAction<number>) => {
    setPage(pageNumber);
  };

  return (
    <><FlatList
      data={data.slice((page - 1) * 5, page * 5)}
      onEndReached={() => {
        if (!isLoading && page * 5 < totalItems) {
          handleLoadMore();
        }
      } }
      renderItem={({ item }) => (
        <View style={{ padding: 16, margin: 25 }}>
          <Image style={{ height: 200, objectFit: 'contain' }} source={{ uri: item.thumbnail }} />
          <Text style={{ fontSize: 25, padding: 5 }}>{item.title}</Text>
          <Text style={{ fontSize: 18, padding: 5, color: 'green' }}>${item.price}</Text>
          <Text style={{ fontSize: 14, padding: 5 }}>{item.description}</Text>
        </View>
      )} /><View style={{ alignItems: 'center',flexDirection:'row', justifyContent: 'center', padding:20,backgroundColor: "#a8dadc", }}>
        {[1, 2, 3, 4, 5].map((pageNumber) => (
          <TouchableOpacity
            key={pageNumber}
            style={{
              padding: 10,
              margin:10,
              borderRadius: 5,
              backgroundColor: page === pageNumber ? '#e63946' : '#023047',
            }}
            onPress={() => handleButtonClick(pageNumber)}
          >
            <Text style={{ color: 'white' }}>{pageNumber}</Text>
          </TouchableOpacity>
        ))}
      </View></>
  );
};



export default work;
