import React, { useState, useEffect } from "react";
import { View, TextInput, Alert, ActivityIndicator, TouchableOpacity, Text } from "react-native";
import styles from "../styles/styles";
import { createPerson, updatePerson } from "../servers/peopleCrud";

export default function AddEditScreen({ route, navigation }) {
  const person = route.params?.person;

  const [firstName, setFirstName] = useState(person ? person.firstName : "");
  const [lastName, setLastName] = useState(person ? person.lastName : "");
  const [email, setEmail] = useState(person ? person.email : "");
  const [phone, setPhone] = useState(person ? person.phone : "");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      title: person ? "Editar Pessoa" : "Nova Pessoa",
      headerStyle: styles.header,
      headerTitleStyle: styles.headerTitle,
    });
  }, [person]);

  const save = async () => {
    if (!firstName || !lastName || !email || !phone) {
      Alert.alert("Aviso", "Preencha todos os campos!");
      return;
    }

    setSaving(true);
    const data = { firstName, lastName, email, phone };

    try {
      if (person) {
        await updatePerson(person.id, data);
        Alert.alert("Sucesso", "Usuário atualizado com sucesso!");
      } else {
        await createPerson(data);
        Alert.alert("Sucesso", "Usuário criado com sucesso!");
      }
      navigation.goBack();
    } catch (error) {
      Alert.alert("Erro", "Falha ao salvar. Verifique a conexão com a API.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={firstName}
        onChangeText={setFirstName}
      />

      <TextInput
        style={styles.input}
        placeholder="Sobrenome"
        value={lastName}
        onChangeText={setLastName}
      />

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      {saving ? (
        <ActivityIndicator size="large" color="#4CAF50" />
      ) : (
        <TouchableOpacity style={styles.saveButton} onPress={save}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      )}

      <View style={{ height: 10 }} />

      <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
}