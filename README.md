# 🔁 SkillSwap — Trade Skills, Learn Freely

**SkillSwap** is a community platform where users can offer their skills (like guitar, drawing, coding) and browse others' to request them in return. It encourages learning and sharing through peer-to-peer skill exchange — no payment, just passion.

>— Trade Skills. Learn Freely.

---

## 🌟 Features

- ✍️ Offer any skill with a description, level, and category
- 🔍 Browse skills with filters (category, level, search)
- 📄 View full details of any skill
- 🙋‍♀️ "Request" skills (simulated UI interaction)
- 🛠️ Manage your own skills — edit, delete, update
- 🔒 Login and register to offer or manage skills

---

## 👥 Target Users

| 👤 User Type | 💡 Value Proposition |
|-------------|-----------------------|
| **Learners** | Discover new skills and request help from real people |
| **Sharers**  | Offer their skills to help others and build a portfolio |
| **Hobbyists** | Exchange knowledge without money involved |

---

## 🗺️ Pages (MVP)

- `/` - Home Page (Hero + Featured + How it Works)
- `/browse` - Browse All Skills
- `/skill/:id` - Skill Details Page
- `/offer` - Offer a New Skill _(requires login)_
- `/my-skills` - Manage Your Offered Skills _(requires login)_
- `/login` - Login
- `/register` - Register
- `/about` - About the Platform
- `*` - 404 Not Found Page

---

## 💻 Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend Framework | **React** |
| Language | **TypeScript** |
| Styling | **Tailwind CSS** |
| Routing | React Router |
| State Management | React Context (Auth State) |
| Feedback | Toasts, Modals |
| Hosting | Netlify / Vercel (suggested) |

---

## 🚀 Getting Started

```bash
git clone https://github.com/your-username/skillswap.git
cd skillswap
npm install
npm run dev
