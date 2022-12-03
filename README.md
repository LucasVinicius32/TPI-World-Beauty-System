## Como fazer a aplicação rodar ##

Tendo a ferramenta Git , NodeJS e workbench instalados em seu computador:
- Abra o Prompt de Comando no caminho de um novo diretório e copie o seguinte comando para clonar o nosso repositório:

```
git clone https://github.com/LucasVinicius32/TPI-World-Beauty-System.git
```
- Dentro da pasta do projeto, digite o seguinte comando para baixar as dependências do projeto:
```
yarn install
```
- Agora Crie o database no seu Workbench:
``` 
Create DATABASE gerson;
``` 
- Agora Mude dentro da pasta back/config/databaseConfig:
```
Coloque o nome do database que você criou, e a senha do seu banco de dados workbench
```
- Agora para rodar o projeto digite:
```
Yarn start
```
