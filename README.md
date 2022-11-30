<h1 align="center">
  Técnica de Programação I
</h1>

|Alunos|Nome|
|:---:|:---:|
|1|Lucas Vinicius da Silva Soares|
|2|Victor dos Santos Salles|

## Atividade para Técnica de Programação I
- Objetivo
Este é um sistema para gerenciamento de um ambiente comercial, especificamente um salão de beleza, consistindo em uma série de opções acessadas via terminal que permitem cadastro, exclusão e alteração de informações sobre clientes, produtos, serviços e pedidos, além de possibilitar também a aplicação de alguns filtros para obter dados como "quais os clientes que mais consumiram em quantidade" ou "qual o produto mais consumido"


## :railway_track: Opções disponiveis no projeto

|                   | Clientes           | Produtos           | Serviços           | Pedidos            |
| :---------------- | :----------------- | :----------------- | :----------------- | :----------------- |
| Create            | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| Update            | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :x:                |
| Delete            | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| Listagem Geral    | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

## Como fazer a aplicação rodar ##

Tendo a ferramenta Git e NodeJS instalados em seu computador:
- Abra o Prompt de Comando no caminho de um novo diretório e copie o seguinte comando para clonar o nosso repositório:

```
git clone https://github.com/LucasVinicius32/TPI-World-Beauty-System.git
```
- Dentro da pasta root do projeto, digite o seguinte comando para a geração dos arquivos JS:
```
tsc
```
- Agora instale as dependências do projeto:
``` 
npm install
``` 
- Agora no diretorio root do projeto digite este comando para iniciar o projeto:
```
node main.js
```
