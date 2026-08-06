========================================
EyeTex - Como rodar o projeto
========================================

Estrutura do projeto:
- meu-app/    -> backend (Java + Spring Boot + Maven)
- frontend/   -> frontend (React + Vite)

----------------------------------------
BACKEND (meu-app)
----------------------------------------

1. Abrir terminal dentro da pasta "meu-app"

2. Com o Maven instalado na máquina:
       mvn spring-boot:run

Outros comandos úteis do Maven:
       mvn clean            -> limpa a pasta target
       mvn compile          -> só compila
       mvn clean install    -> compila, roda testes e empacota
       mvn test             -> roda só os testes

A aplicação rodorá em:
       http://localhost:8080


----------------------------------------
FRONTEND (frontend)
----------------------------------------

1. Abrir terminal (CMD) dentro da pasta "frontend"

2. Instalar as dependências (só precisa na primeira vez ou
   quando o package.json mudar):
       npm install

3. Rodar o projeto em modo desenvolvimento:
       npm run dev

O Vite normalmente deverá rodar em:
       http://localhost:5173

Outros comandos úteis:
       npm run build       -> gera a versão de produção (pasta dist/)
       npm run preview      -> testa a versão de produção localmente

----------------------------------------
OBSERVAÇÕES GERAIS
----------------------------------------

- Backend e frontend rodam em portas diferentes (8080 e 5173).
  Se o frontend for chamar a API do backend, pode precisar
  liberar CORS no Spring Boot (@CrossOrigin ou config global).

- Variáveis de ambiente do frontend ficam em arquivos .env
  na raiz da pasta "frontend" (ex: VITE_API_URL=http://localhost:8080).
  Esses arquivos NÃO devem ir pro Git (já estão no .gitignore).

- Nunca commitar chaves/senhas reais em nenhum dos dois projetos.