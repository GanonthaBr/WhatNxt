# Project: WhatNext (Formerly Plaid)

**Tagline:** Your future, guided by Tartans.

## 1. Project Description

### The Problem

The journey at CMU Africa is transformative, yet it is filled with critical, often stressful, decisions. Upon admission, students face the immediate challenge of transitioning to a new country and academic environment. This is quickly followed by the immense pressure of defining a career path, planning a degree, and selecting the right courses to achieve their goals.

Currently, guidance comes from informal chats with senior students, alumni, and general info sessions. While well-intentioned, these channels are often unreliable and inefficient. Advice can be fragmented, one-size-fits-all, and finding a mentor with a relevant career trajectory is left to chance. This lack of a centralized, personalized guidance system means students navigate their most important decisions with incomplete information, leading to uncertainty and stress.

### The Solution

WhatNext is a unified digital platform designed to help students discover, plan, and connect throughout their journey. It centralizes the scattered wisdom of the community by providing a **Transition Guide** for a smooth arrival in Kigali, a **Degree & Course Planner** that showcases anonymized academic paths from successful upperclassmen, and an AI Assistant to offer personalized guidance based on student interests and the proven success patterns of past Tartans.

---

## 2. Features

### Full Vision (All Features)

* **Transition Guide:** A comprehensive Kigali starter toolkit (housing, setup, daily-life essentials).
* **Interactive Degree & Course Planner:** An interactive tool for students to build, visualize, and get feedback on their degree plans.
* **Career Insight Hub:** A data-driven view of how concentrations connect to real-world roles, certifications, and internships.
* **Research Explorer:** A showcase of past student research to inspire new students.
* **Alumni/Student Connect:** A fully functional chat and scheduling system to connect with mentors.
* **Live AI Assistant:** A conversational chatbot trained on real CMU-Africa data that generates personalized "journey maps" for students.
* **User Profiles & Authentication:** Secure login and personalized profiles for students and alumni.

### Hackathon MVP (Minimum Viable Product) Features ✅

The goal for the hackathon is to build a high-fidelity prototype that demonstrates the core value of WhatNext. We will use a **frontend-only application with static JSON data** to simulate the experience.

**1. Transition Guide (Static Page)**
    * **Description:** A simple, well-designed page with essential tips for new students arriving in Kigali.
    * **Implementation:** A static component with hardcoded text and images. This is a quick win and shows immediate value.

**2. Degree & Course Planner (View-Only Showcase)**
    * **Description:** A feature where users can view 2-3 pre-made, detailed degree plans from fictional successful alumni. Each plan will show the courses they took each semester and include short notes on *why* a course was chosen
    * **Implementation:** Create a JSON file with 2-3 alumni profiles and their course data. The UI will display this data in a clean, easy-to-read timeline format. *No interactive planning for the MVP.*

**3. Alumni Connect (Profile Viewer)**
    * **Description:** A searchable or filterable directory of alumni profiles. Users can click on a profile to see details like their concentration, current job, and the degree plan they followed (linking back to Feature #2).
    * **Implementation:** A JSON file with 5-10 sample alumni profiles. The UI will have a simple search bar that filters the list. *No live chat for the MVP.*

**4. AI Assistant (Mock-up)**
    * **Description:** A chatbot interface that demonstrates the *concept* of the AI assistant. The bot can answer 3-5 pre-programmed questions with canned responses.
    * **Implementation:** A simple chat UI. When a user asks a question like "What courses should I take for a career in AI?", the bot gives a pre-written, detailed answer. This effectively fakes the AI for the demo.

---

## 3. Tech Stack (Proposed for MVP)

* **Frontend Framework:** React
* **Styling:** Tailwind CSS
* **Deployment:** Vercel
* **Data:** Local JSON files stored within the `src` or `public` directory of the project.