# Docs

Os docs dessa API são criados utilizando OpenAPI.


## Como editar os DOCS?

Edite o arquivo `docs/api/openapi.json`.


## Como visualizar no navegador?

Execute `yarn docs`

### Observação

O comando acima roda um npm script com o seguinte comando:

```
npx http-server docs/api -p 4123 -o / -c60
```


## Referências

OpenAPI preview powered by [RapiDoc](https://mrin9.github.io/RapiDoc/)

HTTP Server by `http-server` npm package
