import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TextInput, ActivityIndicator, Alert, TouchableOpacity } from "react-native";
import styles from "../styles/styles";
import { getPeople, deletePerson } from "../servers/peopleCrud";
// Importando os ícones do Expo
import { MaterialIcons } from '@expo/vector-icons'; 

export default function HomeScreen({ navigation }) {
  const [people, setPeople] = useState([]);
  const [filteredPeople, setFilteredPeople] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    navigation.setOptions({
      title: "Meus Contatos",
      headerStyle: styles.header,
      headerTitleStyle: styles.headerTitle,
    });
  }, []);

  const loadPeople = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getPeople();
      setPeople(data);
      setFilteredPeople(data);
    } catch (err) {
      setError("Falha ao carregar os dados. Verifique a conexão com a API.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      loadPeople();
    });
    return unsubscribe;
  }, [navigation]);

  const handleSearch = (text) => {
    setSearchQuery(text);
    if (text) {
      const newData = people.filter(item => {
        const itemData = item.firstName ? item.firstName.toUpperCase() : '';
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredPeople(newData);
    } else {
      setFilteredPeople(people);
    }
  };

  const handleDelete = async (id) => {
    Alert.alert("Confirmação", "Deseja realmente apagar este registro?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Apagar",
        onPress: async () => {
          try {
            setLoading(true);
            await deletePerson(id);
            loadPeople();
          } catch (err) {
            Alert.alert("Erro", "Não foi possível deletar o usuário.");
            setLoading(false);
          }
        }
      }
    ]);
  };

  const renderCard = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardInfo}>
        <Text style={styles.name}>{item.firstName} {item.lastName}</Text>
        <Text style={styles.email}>{item.email}</Text>
        <Text style={styles.phone}>{item.phone}</Text>
      </View>

      <View style={styles.cardActions}>
        <TouchableOpacity
          onPress={() => navigation.navigate("AddEdit", { person: item })}
          style={{ padding: 10 }}
        >
          <MaterialIcons name="edit" size={24} color="#af874cff" />
        </TouchableOpacity>

        <View style={{ width: 10 }} />

        <TouchableOpacity
          onPress={() => handleDelete(item.id)}
          style={{ padding: 10 }}
        >
          <MaterialIcons name="delete" size={24} color="#412905ff" />
        </TouchableOpacity>
      </View>
    </View>
  );

  if (loading && people.length === 0) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#072c08ff" />
        <Text>Carregando dados...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity style={styles.button} onPress={loadPeople}>
          <Text style={styles.buttonText}>Tentar Novamente</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar por nome..."
        value={searchQuery}
        onChangeText={handleSearch}
        placeholderTextColor="#5c4d2eff"
      />

      <FlatList
        data={filteredPeople}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCard}
        ListEmptyComponent={<Text style={{ textAlign: 'center' }}>Nenhuma pessoa encontrada.</Text>}
      />

      <TouchableOpacity
        style={[styles.button, { marginTop: 10 }]}
        onPress={() => navigation.navigate("AddEdit")}
      >
        <Text style={styles.buttonText}>Adicionar Novo</Text>
      </TouchableOpacity>
    </View>
  );
}