# Who’s Living Dropdown Edition App

## 👋 Welcome!

This is Who’s Living Dropdown Edition App. It includes:

- ✅ A fully functional **Dropdown Select component**
- ✅ Data fetched from an **ASP.NET Core API**
- ✅ A fun **Destruct Countdown button**
- ✅ Chakra UI + React Query integration
- ✅ etc

---

## 🧱 Tech Stack

- [Next.js 15](https://nextjs.org/)
- [React Query](https://tanstack.com/query)
- [Chakra UI](https://chakra-ui.com/)
- TypeScript
- ASP.NET Core Web API (backend)
- Jest
- React Testing Library

---

## 🧪 Features

### 🧠 Dropdown Select
- Pulls data from a real API
- Includes search with dynamic filtering
- Styled with Chakra UI
- Displays default label if nothing is selected
- Highlights selected and hovered items
- Fully keyboard accessible (base functionality)

### 🎮 Destruct Button
- Humorous button labeled **“Do NOT click this”**
- Triggers a countdown (default: 5 seconds)
- Ends with a fun message:  
  _“💥 I just saved you... now you have to hire me 😄”_

---

## 🧑‍💻 How to Run the Project

### 1. Clone the repo

```bash
git clone [URL-REPOSITORY]
cd family-tree-ui
```

### 2. Install dependencies

```bash
yarn install
```

### 3. Create `.env` file

You can use `.env.example` as a reference:

```bash
cp .env.example .env
```

And fill in:

```
NEXT_PUBLIC_API_URL=https://your-api-url.com
NEXT_PUBLIC_CLIENT_ID=your-client-id
NEXT_PUBLIC_TREE_ID=your-tree-id
```

### 4. Run the app

```bash
yarn dev
```

The app will be running at [http://localhost:3000](http://localhost:3000)

---

## 🧠 Project Structure

```
src/
├── app/
│   ├── api-hooks/
│   │   └── queries/use-people-query.ts
│   ├── components/
│   │   ├── dropdown/
│   │   │   └── dropdown.tsx
│   │   └── destruct-button/
│   │       └── destruct-button.tsx
│   ├── home/
│   │   ├── page.tsx
│   │   └── style.ts
│   ├── providers/
│   │   └── index.tsx
│   └── services/
│       └── people-service.ts
├── utils/
│   └── types/People.ts
│   └── constants/constants.ts
```


## 🤝 Feedback

If you have questions or suggestions, feel free to reach out. Thanks for reviewing my work!


