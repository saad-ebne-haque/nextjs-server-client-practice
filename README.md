

# Next.js Server & Client Practice

A hands-on Next.js learning repository where I practice Next.js App Router, Server Components, Client Components, data fetching, caching, dynamic routing, Suspense, Context API, and Custom Hooks.

This project is part of my journey to improve my web development skills through practical learning and experimentation.

## 🚀 Technologies Used

- Next.js
- React
- JavaScript
- Tailwind CSS
- JSON Server
- REST API
- Context API
- React Hooks

## 📚 Topics Practiced

### Next.js Fundamentals

- Next.js project setup
- App Router structure
- File-based routing
- Layouts and nested layouts
- Server Components
- Client Components
- Dynamic routes
- Nested dynamic routes

### Data Fetching & Caching

- Asynchronous data fetching in Server Components
- Fetching data from local REST APIs
- `force-cache`
- `no-store`
- `next.revalidate`
- Basic caching concepts
- Static Site Generation (SSG)
- Incremental Static Regeneration (ISR)
- Parallel data fetching with `Promise.all()`

### Routing & Rendering

- Dynamic route parameters
- `generateStaticParams()`
- `generateMetadata()`
- Loading UI with `loading.jsx`
- Error handling with `error.jsx`
- Not Found pages with `not-found.jsx`
- Suspense and streaming

### React Concepts

- Context API
- Shared state management
- Context Provider
- `useContext()`
- `useState()`
- Custom Hooks
- Reusable logic with Custom Hooks
- Client-side event handling

## 📁 Project Structure

```text
nextjs-server-client-practice/
│
├── public/
│
├── src/
│   ├── app/
│   │   ├── artist/
│   │   │   ├── [username]/
│   │   │   │   ├── [id]/
│   │   │   │   │   └── page.jsx
│   │   │   │   └── page.jsx
│   │   │   └── page.jsx
│   │   │
│   │   ├── books/
│   │   │   ├── [id]/
│   │   │   │   ├── loading.jsx
│   │   │   │   └── page.jsx
│   │   │   └── page.jsx
│   │   │
│   │   ├── dashboard/
│   │   │   └── page.jsx
│   │   │
│   │   ├── posts/
│   │   │
│   │   ├── products/
│   │   │
│   │   ├── error.jsx
│   │   ├── loading.jsx
│   │   ├── not-found.jsx
│   │   ├── globals.css
│   │   ├── layout.js
│   │   └── page.js
│   │
│   ├── components/
│   ├── contexts/
│   └── hooks/
│
├── artists-albums.json
├── artists-playlists.json
├── db.json
├── package.json
├── next.config.mjs
├── jsconfig.json
└── README.md
```

## 🗄️ Local JSON Server APIs

This project uses local JSON files with JSON Server to practice REST API integration and data fetching in Next.js.

### 1. `db.json`

The `db.json` file is used for local API practice on port `3001`.

Start the JSON Server:

Bash

```
npx json-server --watch db.json --port 3001
```

Base URL:

```
http://localhost:3001
```

Example API endpoints:

```
http://localhost:3001/products

http://localhost:3001/books
```

### 2. `artists-albums.json`

The `artists-albums.json` file is used to practice artist and album-related API requests on port `3002`.

Start the JSON Server:

Bash

```
npx json-server --watch artists-albums.json --port 3002
```

Base URL:

```
http://localhost:3002
```

Example API endpoints:

```
http://localhost:3002/artists

http://localhost:3002/albums
```

Filter albums by username:

```
http://localhost:3002/albums?username=arijit-singh
```

Filter albums by artist ID:

```
http://localhost:3002/albums?artistID=artist-001
```

### 3. `artists-playlists.json`

The `artists-playlists.json` file is used for artist and playlist-related API practice.

Run it on a separate port:

Bash

```
npx json-server --watch artists-playlists.json --port 3003
```

Base URL:

```
http://localhost:3003
```

> Note: Run each JSON Server in a separate terminal if you need to use multiple APIs at the same time.

## 🛠️ Getting Started

### 1. Clone the repository

Bash

```
git clone https://github.com/saad-ebne-haque/nextjs-server-client-practice.git
```

### 2. Navigate to the project directory

Bash

```
cd nextjs-server-client-practice
```

### 3. Install dependencies

Bash

```
npm install
```

### 4. Start the Next.js development server

Bash

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)  in your browser.

### 5. Start the JSON Server

Open a separate terminal and run the required JSON Server:

Bash

```
npx json-server --watch db.json --port 3001
```

For the artists and albums API:

Bash

```
npx json-server --watch artists-albums.json --port 3002
```

## 🎯 Learning Goals

* Understand the Next.js App Router and project structure.

* Learn the difference between Server Components and Client Components.

* Practice asynchronous data fetching.

* Understand caching and revalidation in Next.js.

* Learn the difference between SSG and ISR.

* Practice dynamic and nested dynamic routes.

* Understand `generateStaticParams()` and `generateMetadata()`.

* Practice loading and error handling.

* Explore Suspense and streaming.

* Manage shared state using the Context API.

* Create reusable logic using Custom Hooks.

* Improve my understanding of REST APIs and asynchronous JavaScript.

## 📖 Learning Resources

* [Next.js Documentation](https://nextjs.org/docs) 

* [Learn Next.js](https://nextjs.org/learn) 

* [JSON Server](https://github.com/typicode/json-server) 

## 👨‍💻 Author

Saad Ebne Haque

GitHub: [saad-ebne-haque](https://github.com/saad-ebne-haque) 

Repository: [nextjs-server-client-practice](https://github.com/saad-ebne-haque/nextjs-server-client-practice)
