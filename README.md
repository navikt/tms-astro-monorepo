# tms-astro-monorepo

## Workflows
Deploy trigges bla. av paths i workflowene.

### App-a
```
paths:
  - "apps/app-a/**"
  - "package.json"
```

### App-b
```
paths:
  - "apps/app-b/**"
  - "package.json"
```

## Workspaces
Følgende workspaces er definert i `package.json`:

```
"workspaces": [
  "apps/app-a",
  "apps/app-b"
]
```