const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

// Rota principal para verificar o funcionamento
app.get('/', (req, res) => {
    res.send('API funcionando! Use o endpoint /repositories/csharp para acessar os dados.');
});

// Endpoint principal da API
app.get('/repositories/csharp', async (req, res) => {
    try {
        // Fazendo a requisição para a API pública do GitHub
        const response = await axios.get('https://api.github.com/users/takenet/repos', {
            headers: { 'User-Agent': 'request' }, // Cabeçalho obrigatório
            params: { per_page: 100 }, // Número máximo de repositórios
        });

        // Filtrando, ordenando e formatando os dados
        const repos = response.data
            .filter(repo => repo.language === 'C#') // Filtra repositórios em C#
            .sort((a, b) => new Date(a.created_at) - new Date(b.created_at)) // Ordena por data de criação
            .slice(0, 5) // Seleciona os 5 mais antigos
            .map(repo => ({
                image: 'https://avatars.githubusercontent.com/u/4369522', // Avatar fixo da TakeNet
                title: repo.full_name, // Nome completo do repositório
                subtitle: repo.description || 'Sem descrição', // Descrição do repositório
            }));

        // Retornando os dados no formato JSON
        res.json(repos);
    } catch (error) {
        console.error('Erro ao acessar a API do GitHub:', error.message);
        res.status(500).json({ error: 'Erro ao acessar a API do GitHub' });
    }
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`API rodando na porta ${PORT}`);
});
