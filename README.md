# 📱 App - CRUD React Native

Este projeto é uma aplicação de gerenciamento de contatos (CRUD) desenvolvida em React Native. O aplicativo consome uma API REST fake utilizando json-server e localtunnel, implementando funcionalidades avançadas de navegação, busca e tratamento de estados para alcançar a Menção MB.

Link do vídeo: 

## 🚀 Desafios Implementados

Esta versão do projeto cumpre todos os requisitos dos três níveis de desafio propostos pelo Prof. Rafael Cruz:

1. Nível Júnior:
   - Adição do campo Telefone (phone) em toda a estrutura (Banco de dados, Telas e API).
   - Implementação de navegação entre telas usando React Navigation (Stack).

2. Nível Pleno:
   - Criação de uma Barra de Busca funcional na tela principal que filtra contatos por nome em tempo real.

3. Nível Sênior:
   - Tratamento de Erros: Mensagens de feedback (Alertas e Textos) caso a API esteja offline.
   - Indicador de Carregamento: Uso do ActivityIndicator para mostrar ao usuário que os dados estão sendo processados.

## 🛠️ Tecnologias Utilizadas

- React Native / Expo (Framework Mobile)
- React Navigation (Navegação de Telas)
- JSON Server (Simulação de API REST)
- Localtunnel (Exposição da API para acesso externo/mobile)
- Fetch API (Comunicação HTTP)

## 📦 Configuração do Ambiente e Instalação

### 1. Pré-requisitos
- Node.js instalado no computador.
- Expo Go instalado no smartphone.

### 2. Instalação das dependências do App
No terminal, dentro da pasta do projeto, execute:
```
cd frontend
npm install

```

### 3. Instalação das ferramentas globais (API)
Se ainda não possuir, instale o JSON Server e o Localtunnel na raíz do projeto:
```
npm install -g json-server localtunnel

```

## ⚙️ Execução da Aplicação

Para rodar o projeto completo, você precisará de 3 terminais abertos:

### Passo 1: Iniciar o Servidor de Dados
No Terminal 1, rode:
```
cd backend
json-server --watch database.json --port 3000

```

### Passo 2: Iniciar o Túnel (Exposição da API)
No Terminal 2, rode:
```
lt --port 3000

```
⚠️ ATENÇÃO: Copie a URL gerada (ex: https://xyz.loca.lt) e cole-a no arquivo src/servers/configApi.js.

### Passo 3: Iniciar o Aplicativo
No Terminal 3, rode:
```
cd frontend
npx expo start

```

## 💡 Explicação da Solução Técnica

Para atingir o Nível Sênior, a solução foi estruturada focando em escalabilidade, organização de código e resiliência da interface:

- Arquitetura Modular (Clean Code): 
  O projeto foi separado em camadas de responsabilidade. As 'Screens' cuidam da interface, o 'Styles' centraliza o design para manter a identidade visual, e a pasta 'Servers' isola a lógica de rede. Isso permite que, se a URL da API mudar ou se trocarmos o fetch por outra biblioteca no futuro, precisaremos alterar o código em apenas um lugar.

- Gestão de Estado e Ciclo de Vida: 
  Utilizei os hooks 'useState' para gerenciar os dados em tempo real e 'useEffect' (ou listeners de navegação) para garantir que a lista de contatos seja sincronizada com o banco de dados sempre que o usuário interagir com o app ou navegar entre telas.

- Desafio Júnior (Persistência e Extensibilidade): 
  O esquema de dados original foi estendido para incluir o campo 'phone'. A navegação foi implementada com 'React Navigation Stack', permitindo um fluxo natural de ida e volta entre a listagem e o formulário.

- Desafio Pleno (Lógica de Filtragem): 
  A barra de busca não apenas filtra nomes, mas foi otimizada para ignorar diferenças entre letras maiúsculas e minúsculas (case-insensitive), proporcionando uma busca mais fluida e intuitiva para o usuário.

- Desafio Sênior (Resiliência e UX Profissional): 
  A aplicação trata o "caminho infeliz" (erros). Em vez de travar ou exibir telas vazias em caso de falha no Localtunnel ou servidor offline, o app captura a exceção via blocos 'try/catch' e informa o usuário. O 'ActivityIndicator' foi implementado para eliminar a incerteza durante o tempo de resposta da rede, seguindo as melhores práticas de User Experience (UX).

- Comunicação REST: 
  A integração com o JSON Server utiliza os métodos HTTP de forma semântica: GET para leitura, POST para criação, PUT para atualização total e DELETE para remoção, simulando perfeitamente um ambiente de produção real.

---

## 👨‍💻 Autor

Projeto desenvolvido por **Luis Ricardo**.

---
