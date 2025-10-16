# WhatNxt - MVP Development Plan

## Project Overview
**Platform:** CMU Africa student guidance platform  
**Goal:** Build a high-fidelity prototype demonstrating core value  
**Approach:** Frontend-only with static JSON data  
**Timeline:** Hackathon timeframe

---

## Tech Stack
- **Frontend Framework:** React
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router
- **Deployment:** Vercel
- **Data:** Local JSON files

---

## Development Phases

### **Phase 1: Project Setup** ⏱️ 15-20 mins
**Goal:** Get the foundation ready

- [ ] Initialize React + Vite project
- [ ] Install and configure Tailwind CSS
- [ ] Set up React Router for navigation
- [ ] Create base layout structure (Header, Footer, Navigation)
- [ ] Set up initial folder structure:
  ```
  src/
  ├── components/
  ├── pages/
  ├── data/
  ├── assets/
  └── styles/
  ```
- [ ] Deploy skeleton to Vercel (early deployment setup)

---

### **Phase 2: Data Layer** ⏱️ 30 mins
**Goal:** Create realistic mock data

**Files to create in `src/data/`:**

1. **`alumni.json`** (5-10 profiles)
   - Name, graduation year, concentration
   - Current role & company
   - Location
   - Bio/journey summary
   - Contact preferences
   - Link to degree plan ID

2. **`degreePlans.json`** (2-3 detailed pathways)
   - Alumni ID reference
   - Concentration/focus area
   - Semester-by-semester course list
   - Course codes, names, credits
   - Rationale notes for each course
   - Career outcome

3. **`transitionGuide.json`**
   - Housing tips
   - Setup essentials (banking, phone, transport)
   - Daily life (food, safety, culture)
   - Campus resources

4. **`chatbotQA.json`** (5-7 Q&A pairs)
   - Common questions students ask
   - Detailed, personalized responses
   - Examples: AI career path, course selection, networking tips

---

### **Phase 3: Feature Development** ⏱️ 3-4 hours

#### **Priority 1: Alumni Connect (Profile Viewer)** 🎯 ~1 hour
*This is the centerpiece - connects everything together*

**Components to build:**
- [ ] `AlumniDirectory.jsx` - Main page with search/filter
- [ ] `AlumniCard.jsx` - Profile card component
- [ ] `AlumniDetail.jsx` - Detailed profile view
- [ ] `SearchBar.jsx` - Filter by name, concentration, company

**Features:**
- Grid layout of alumni cards
- Search functionality (client-side filtering)
- Filter by concentration
- Click to view detailed profile
- Link from profile to their degree plan

**Design considerations:**
- Clean card design with photo placeholder
- Quick scan info (name, role, concentration)
- Easy navigation back to directory

---

#### **Priority 2: Degree & Course Planner** 🎯 ~1.5 hours
*Show the "path to success" - key differentiator*

**Components to build:**
- [ ] `DegreePlanner.jsx` - Main planner page
- [ ] `DegreePlanList.jsx` - Browse available plans
- [ ] `DegreePlanView.jsx` - Detailed timeline view
- [ ] `SemesterBlock.jsx` - Individual semester component
- [ ] `CourseCard.jsx` - Course details with rationale

**Features:**
- Timeline/roadmap visualization
- Semester blocks with courses
- Expandable course cards showing "why this course"
- Visual flow (Freshman → Sophomore → Junior → Senior)
- Attribution to alumni who followed this path

**Design considerations:**
- Horizontal or vertical timeline
- Color coding by semester/year
- Tooltips for additional info
- Mobile-responsive layout

---

#### **Priority 3: Transition Guide** 🎯 ~30 mins
*Quick win - immediate value for new students*

**Components to build:**
- [ ] `TransitionGuide.jsx` - Single page with sections

**Features:**
- Tabbed or accordion sections:
  - 🏠 Housing
  - 💳 Setup Essentials
  - 🍕 Daily Life
  - 📚 Campus Resources
- Static content with nice formatting
- Icons and images for visual appeal
- Downloadable checklist (bonus)

**Design considerations:**
- Easy to scan
- Practical, actionable tips
- Welcoming tone

---

#### **Priority 4: AI Assistant (Mock-up)** 🎯 ~1 hour
*Demo the vision - shows future potential*

**Components to build:**
- [ ] `ChatBot.jsx` - Chat interface
- [ ] `ChatMessage.jsx` - Individual message component
- [ ] `QuickQuestions.jsx` - Suggested question buttons

**Features:**
- Chat UI (messages stack up)
- User types or clicks pre-set questions
- Bot responds with canned answers from JSON
- Typing indicator animation
- 5-7 pre-programmed responses

**Sample Questions:**
- "What courses should I take for a career in AI?"
- "How do I choose a concentration?"
- "What internships do CMU Africa students get?"
- "Should I focus on research or industry?"
- "How do I connect with alumni?"

**Design considerations:**
- Chat bubble design
- Smooth animations
- Clear disclaimer: "Demo mode - powered by alumni insights"
- Friendly, conversational tone

---

### **Phase 4: Polish & Integration** ⏱️ 1-2 hours

**Landing/Home Page:**
- [ ] Hero section with tagline: "Your future, guided by Tartans"
- [ ] Brief problem/solution statement
- [ ] Feature highlights with links
- [ ] Call-to-action buttons

**Navigation:**
- [ ] Consistent header across all pages
- [ ] Active page indicators
- [ ] Smooth transitions between routes

**Responsive Design:**
- [ ] Test on mobile, tablet, desktop
- [ ] Adjust layouts for smaller screens
- [ ] Ensure touch-friendly interactions

**Final Touches:**
- [ ] Loading states
- [ ] Error handling (graceful fallbacks)
- [ ] Smooth animations/transitions
- [ ] Accessibility basics (alt text, keyboard nav)

---

## Demo Flow (Practice This!)

### **Act 1: The Problem (30 seconds)**
*"Students at CMU Africa face overwhelming decisions with fragmented guidance..."*

### **Act 2: The Solution Tour (3-4 minutes)**

1. **Landing Page** → Introduce WhatNxt
2. **Transition Guide** → "New students start here"
3. **Alumni Connect** → "Meet successful Tartans"
   - Search for "AI" concentration
   - Click on a profile
4. **Degree Planner** → "See the exact path they took"
   - Show linked degree plan
   - Highlight course rationales
5. **AI Assistant** → "Get personalized guidance"
   - Ask "What courses for AI career?"
   - Show intelligent response

### **Act 3: The Vision (30 seconds)**
*"This is just the MVP - imagine with real-time data, live mentorship, and true AI..."*

---

## File Structure (Final)

```
WhatNxt/
├── public/
│   └── assets/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Layout.jsx
│   │   ├── alumni/
│   │   │   ├── AlumniCard.jsx
│   │   │   ├── AlumniDetail.jsx
│   │   │   └── SearchBar.jsx
│   │   ├── planner/
│   │   │   ├── DegreePlanView.jsx
│   │   │   ├── SemesterBlock.jsx
│   │   │   └── CourseCard.jsx
│   │   └── chatbot/
│   │       ├── ChatBot.jsx
│   │       └── ChatMessage.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── TransitionGuide.jsx
│   │   ├── AlumniDirectory.jsx
│   │   ├── DegreePlanner.jsx
│   │   └── ChatAssistant.jsx
│   ├── data/
│   │   ├── alumni.json
│   │   ├── degreePlans.json
│   │   ├── transitionGuide.json
│   │   └── chatbotQA.json
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── tailwind.config.js
```

---

## Success Metrics (For Demo)

✅ **Functional Navigation:** All pages load without errors  
✅ **Data Display:** All JSON data renders correctly  
✅ **Search Works:** Alumni filtering functions properly  
✅ **Visual Appeal:** Clean, professional design  
✅ **Demo Flow:** Smooth 4-minute walkthrough  
✅ **Mobile Responsive:** Looks good on different screen sizes  

---

## Backup Plan (If Running Out of Time)

**Must-Have (Core Demo):**
- Home page
- Alumni Connect (even with 3 profiles)
- 1 Degree Plan view

**Nice-to-Have (Cut if needed):**
- AI Assistant (can describe the vision instead)
- Advanced filters
- Complex animations

**Post-Hackathon:**
- Backend integration
- Real authentication
- Live chat system
- True AI with LLM

---

## Notes & Tips

- **Commit often** to git
- **Deploy early** to Vercel (test the pipeline)
- **Focus on demo flow** - make the path you'll present perfect first
- **Use placeholder images** from unsplash or UI avatar generators
- **Keep it simple** - better to have 3 polished features than 5 half-done ones
- **Test the search** - it's a key interaction point
- **Practice the pitch** - the demo is everything

---

## Team Task Distribution (If Applicable)

- **Person 1:** Setup + Data Creation + Alumni Connect
- **Person 2:** Degree Planner + Transition Guide
- **Person 3:** AI Chatbot + Home Page + Polish
- **Everyone:** Final integration, testing, demo prep

---

**Let's build something amazing! 🚀**
