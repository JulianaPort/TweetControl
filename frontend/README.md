# Tweet Control - Frontend 

## Angular 

O Angular é um framework utilizado para a criação de Single-Page Applications (SPA), que é uma aplicação web consumida em uma única página.

Por ser um framework e estabelecer formas de programações o Angular atua sob determinados princípios:  

* Componentes: são partes/estruturas de código modulares, que possuem e geram em si suas próprias regras de negócios;  
* Two-way data binding: traduzido se torna “ligação de duas vias”, possibilita a alteração simultânea de elementos interconectados. Essa funcionalidade é uma das     grandes forças do framework, pela gama de possibilidades que apresenta;
* MVVM (Model View View-Model): Advindo de um padrão de projetos bem conhecido o MVC (Model-ViewController), no Angular a conversa ocorre entre:  
* View: a visão, o que o usuário vê;  
* View-Model: componente, HTML e templates, fazendo ponte entre o que vem do banco e aquilo que deve ser exposto ao cliente;  
* Model: que por sua vez se encarrega de toda parte lógica.  
* SPA (Single Page Application): Outra ferramenta muito legal, aqui o     Angular apresenta a mudança de componentes sem o recarregamento da página, trazendo uma experiência muito fluida aos sistemas que o usam.

Você pode saber mais sobre o angular lendo a própria documentando do [Angular.io](https://angular.io/guide/what-is-angular).

## Angular no Tweet Control

<br>

#### Estrutura do projeto

```console
├───app
│   ├───@core                   # Coração do projeto
│   │   ├───directives          # Diretivas
│   │   ├───guards              # Guards de rota
│   │   ├───interceptors        # Interceptors de requisições
│   │   ├───pipes               # Pipes da aplicação
│   │   ├───services            # Services p/ funcionamento do projeto
│   │   ├───structs             # Estruturas de nomenclaturas clean 
│   │   └───utils               # Utilitários do projeto
│   ├───components              # Componentes genéricos 
│   ├───pages                   # Páginas da aplicação
│   │   ├───private             # Páginas sem autorização
│   │   └───public              # Páginas que precisam de autorização
│   └───router                  # Rotas
├───assets                      # Uilitários como imagens, icones..
│   └───img                     # Imagens
├───environments                # Variáveis de ambiente do projeto
└───theme                       # Tema da aplicação p/ poder mudar

```
## Rodar o projeto

```bash
 npm i 
 npm run dev
```

## Authors

- **Juliana Portilho** - [JulianaPort](https://github.com/JulianaPort)
