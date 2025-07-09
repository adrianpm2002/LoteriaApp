# Lotería App

## Descripción
Lotería App es una aplicación móvil desarrollada con React Native que permite gestionar listas de lotería. Los usuarios pueden ver listas disponibles, acceder a detalles de cada lista y realizar operaciones básicas de gestión.

## Estructura del Proyecto
El proyecto está organizado de la siguiente manera:

```
loteria-app
├── src
│   ├── components
│   │   └── ListaLoteria.tsx
│   ├── screens
│   │   ├── HomeScreen.tsx
│   │   └── DetalleListaScreen.tsx
│   ├── services
│   │   └── supabase.ts
│   ├── navigation
│   │   └── AppNavigator.tsx
│   └── types
│       └── index.ts
├── App.tsx
├── package.json
├── tsconfig.json
└── README.md
```

## Instalación

1. Clona el repositorio:
   ```
   git clone <URL_DEL_REPOSITORIO>
   ```

2. Navega al directorio del proyecto:
   ```
   cd loteria-app
   ```

3. Instala las dependencias:
   ```
   npm install
   ```

## Uso

Para iniciar la aplicación, ejecuta el siguiente comando:
```
npm start
```

Esto abrirá el servidor de desarrollo y podrás escanear el código QR con la aplicación Expo Go para ver la aplicación en tu dispositivo móvil.

## Contribuciones
Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.

## Licencia
Este proyecto está bajo la licencia MIT.