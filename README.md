# Gestore Spese

Un'applicazione web minimale per la gestione delle spese personali, sviluppata con React, Vite, TailwindCSS e PocketBase.

## Funzionalità
- Aggiunta di spese con nome, prezzo, data e ora
- Visualizzazione delle spese in una lista scrollabile
- Eliminazione delle spese
- Calcolo del totale spese
- Grafico delle spese aggiornato in tempo reale
- Sincronizzazione con database PocketBase
- Interfaccia moderna, minimale, bianco e nero

## Tech stack
- React
- Vite
- TailwindCSS
- PocketBase
- Chart.js
- React Icons
- Font Inter (open source)

## Installazione
1. Installa le dipendenze:
   ```sh
   npm install
   npm install react-icons @fontsource/inter
   ```
2. Importa il font Inter nel file principale:
   ```js
   import "@fontsource/inter/variable.css";
   ```
3. Avvia il server di sviluppo:
   ```sh
   npm run dev
   ```
4. Assicurati che PocketBase sia avviato su `http://127.0.0.1:8090`.

## Configurazione PocketBase
- La collezione deve chiamarsi `spese` e contenere almeno i campi: `name`, `price`, `date`.

## Struttura principale
- **Form**: per aggiungere nuove spese
- **Lista**: mostra tutte le spese con possibilità di eliminazione
- **Totale**: mostra il totale delle spese
- **Grafico**: visualizza l'andamento delle spese

## Stile
- Interfaccia ispirata a Splice, solo bianco e nero, font Inter, layout pulito e moderno