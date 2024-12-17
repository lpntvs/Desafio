
# Documentação da API

## Descrição
Essa API foi desenvolvida para fornecer informações sobre repositórios.

---

## Tecnologias Utilizadas
- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework para gerenciamento de rotas.
- **Bibliotecas utilizadas**: Axios, dotenv, etc.

---

## Pré-requisitos
Antes de iniciar, você precisa ter o seguinte instalado na sua máquina:
- **Node.js** (versão 14 ou superior)
- **npm** (gerenciador de pacotes do Node.js)

---

## Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/lpntvs/Challenge
   ```

2. Acesse a pasta do projeto:
   ```bash
   cd Challenge
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

---

## Execução
Para iniciar o servidor em **modo de desenvolvimento**, utilize:
```bash
npm start
```

O servidor rodará em:  
`http://localhost:3000` (ou na porta definida no `.env`).

---

## Endpoints
Aqui estão os endpoints disponíveis na API.

### 1. **Rota principal**
- **Método**: `GET`  
- **URL**: `https://entertaining-precious-salt.glitch.me`  
- **Descrição**: Verifica se a API está funcionando.

**Resposta**:
```json
{
  "status": "API funcionando!"
}
```

---

### 2. **Exemplo de outro endpoint**
- **Método**: `GET`  
- **URL**: `https://entertaining-precious-salt.glitch.me/repositories/csharp`  
- **Descrição**: Retorna a lista dos repositórios.

**Resposta**:
```json
[
    {
        "image": "https://avatars.githubusercontent.com/u/4369522",
        "title": "takenet/library.data",
        "subtitle": "Provides a simple abstraction for implementing the repository and unit of work patterns for data-enabled applications"
    },
    {
        "image": "https://avatars.githubusercontent.com/u/4369522",
        "title": "takenet/library.logging",
        "subtitle": "Provides a simple logging interface for applications and some basic implementations of this interface"
    },
    {
        "image": "https://avatars.githubusercontent.com/u/4369522",
        "title": "takenet/libphonenumber-csharp",
        "subtitle": "Forking original c# port"
    },
    {
        "image": "https://avatars.githubusercontent.com/u/4369522",
        "title": "takenet/ServiceStack.Text",
        "subtitle": ".NET's fastest JSON, JSV and CSV Text Serializers"
    },
    {
        "image": "https://avatars.githubusercontent.com/u/4369522",
        "title": "takenet/lime-csharp",
        "subtitle": "C# LIME protocol implementation"
    }
]
```

---

## Estrutura de Pastas
Este documento descreve a estrutura do projeto e a finalidade de cada pasta e arquivo.

### **Pastas**

1. **.config**
   - Contém arquivos de configuração necessários para o funcionamento do projeto.

2. **public**
   - Armazena arquivos estáticos, como HTML, CSS, imagens e outros recursos públicos.

3. **.data**
   - Contém arquivos gerados em tempo de execução ou armazenamentos temporários de dados.

4. **src**
   - Diretório principal do código-fonte do projeto.

5. **.git**
   - Pasta do Git para controle de versão.

---

### **Arquivos**

1. **.env**
   - Arquivo de variáveis de ambiente.

2. **.gitignore**
   - Define os arquivos e pastas que não devem ser versionados.

3. **LICENSE**
   - Licença de uso do projeto.

4. **README.md**
   - Documento com a descrição e explicação do projeto.

5. **package.json**
   - Lista as dependências do projeto e scripts necessários.

6. **package-lock.json**
   - Garante a consistência das versões das dependências.

7. **server.js**
   - Arquivo principal para iniciar o servidor.

8. **.glitch-assets**
   - Usado em projetos hospedados no Glitch.

9. **shrinkwrap**
   - Similar ao `package-lock.json`, utilizado para gerenciar versões de dependências.

---

## Como Contribuir
Se você quiser contribuir com melhorias:
1. Faça um **fork** do repositório.
2. Crie uma nova branch:
   ```bash
   git checkout -b feature/nome-da-sua-feature
   ```
3. Faça suas alterações e faça o commit:
   ```bash
   git commit -m "Adiciona nova feature"
   ```
4. Faça o **push** para o seu fork:
   ```bash
   git push origin feature/nome-da-sua-feature
   ```
5. Abra um **Pull Request**.

---

## Licença
Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.

---

## Contato
Caso tenha dúvidas ou sugestões, entre em contato:
- **Nome**: Felipe Tavares  
- **Email**: [felipe.fst.81@gmail.com](mailto:felipe.fst.81@gmail.com)  
- **LinkedIn**: [https://www.linkedin.com/in/felipetavares1/](https://www.linkedin.com/in/felipetavares1/)

---
