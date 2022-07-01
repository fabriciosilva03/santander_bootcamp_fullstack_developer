# Santander Bootcamp Fullstack Developer

Repositório criado com o objetivo de detalhar os meus estudos dentro do Santander Bootcamp Fullstack Developer, gerenciado pela plataforma de treinaentos DIO.

## Introdução ao Git e ao GitHub

## Anotações:

- Comandos sendo utilizandos através do Git Bash

- Acessando diretorio onde possui chave ssh:
`cd /c/Users/Fabricio Silva/.ssh`

- Gerando a chave ssh: 
`ssh-keygen -t ed25519 -C endereço_de_email_do_usuario``

- Rodando o ssh-agent:
`eval $(ssh-agent -s)`

- Incluindo a chave privada:
`ssh-add id_ed25519`

- Clonando repositorio:
`git clone link_do_diretorio`

- Dentro do diretorio onde será desenvolvido o projeto dê incio a execução do git conforme o comando abaixo:
`git init`

- Configurando seu git conforme seu repositório remoto:
`git config --global user.email "seu_email"`
- 
`git config --global user.name "seu_username"`

- Adicionando os arquivos novos ou alterados de trabalho à area de teste do Git:
`git add *`

- Comando responsável por gerenciar o historico do projeto:
`git commit -m "comentario"`

- Verifica como esta o status do projeto:
`git status`

- Caso o arquivo tenha sido movido e nao informado ao git, deve ser usado este comando para informar ao git: 
`git add arquivo diretorio/`

- Commit:  
`git commit -m "..." `

- Analisando as configurações do seu git:
`git config --list `

- Removendo email configurado:
`git config --gobal --unset user.email `

- Removendo user name:
`git config --global --unset user.name`

- Para gerenciar comunicação repositórios remotos, você precisa salvar no seu repositório local :
`git remote add origin link_do_repositorio. `

- Verificando a origem do repositorio:
`git remote -v `

- Transfere commits do repositório local a um repositório remoto:
`git push origin master`


- *Resolvendo Conflitos:*

- Comando utilizado para puchar o arquivo que foi modificado pra solucionar problemas de clofitos entre o arquivo remoto e o local:

`git pull origin master`

*Obs.:*
- Markdow ( Linguagem de marcação utilizada pelo git).
