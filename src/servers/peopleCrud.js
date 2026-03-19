import { API_URL } from "./configApi";

export async function getPeople() {
  try {
    const response = await fetch(`${API_URL}/people`);
    if (!response.ok) throw new Error("Erro ao buscar pessoas.");
    return await response.json();
  } catch (error) {
    throw error;
  }
}

export async function createPerson(person) {
  try {
    const response = await fetch(`${API_URL}/people`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(person)
    });
    if (!response.ok) throw new Error("Erro ao criar pessoa.");
    return await response.json();
  } catch (error) {
    throw error;
  }
}

export async function updatePerson(id, person) {
  try {
    const response = await fetch(`${API_URL}/people/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(person)
    });
    if (!response.ok) throw new Error("Erro ao atualizar pessoa.");
    return await response.json();
  } catch (error) {
    throw error;
  }
}

export async function deletePerson(id) {
  try {
    const response = await fetch(`${API_URL}/people/${id}`, {
      method: "DELETE"
    });
    if (!response.ok) throw new Error("Erro ao deletar pessoa.");
  } catch (error) {
    throw error;
  }
}