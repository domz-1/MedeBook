# Doctor Booking UI Module

A responsive and accessible doctor booking interface built with React and Vite, developed to meet the requirements of InVitro Capital's front-end task. This project demonstrates a modern healthcare platform's appointment booking system with a focus on user experience, accessibility, and code quality, leveraging AI tools for efficiency.

## Live Demo

Check out the live demo: [MedeBooking](https://medebooking.netlify.app/)


## Features

- 🏥 **Doctor Directory**: Filterable list of doctors by specialty and availability, displaying name, photo, specialty, location, and a "Book Appointment" button.
- 📅 **Booking Modal**: Interactive modal for selecting time slots and confirming appointments, showing doctor details.
- 📋 **Appointments Summary**: View of booked appointments with doctor name, date, time, specialty, and location.
- 🌓 **Light/Dark Mode**: Theme toggle for enhanced user experience.
- ♿ **Accessibility**: WCAG-compliant with keyboard navigation, ARIA labels, and screen reader support.
- 📱 **Responsive Design**: Optimized for mobile (<768px), tablet (768px-1024px), and desktop (>1024px).

## Technologies Used

- **Frontend**: React 18, JavaScript (ES6+), CSS3 (Custom properties for theming)
- **Build Tool**: Vite
- **State Management**: Zustand (lightweight)
- **Icons**: react-icons
- **Linting**: ESLint with React plugins
- **AI Tools**:
  - Cursor IDE: Component scaffolding, mock data generation, accessibility optimization
  - AI-powered code completion and suggestions
  - Accessibility checks and improvements
- **Dependencies**:
  - react, react-dom
  - zustand (state management)
  - react-icons
  - vite, @vitejs/plugin-react
  - eslint, eslint-plugin-react-hooks, eslint-plugin-react-refresh

## Task Requirements

This project fulfills the requirements outlined by InVitro Capital (Youssef Magdy, Apr 17, 2025):

1. **Doctor Directory View**:
   - Mock list of doctors with name, photo, specialty, availability, and location.
   - Filtering by specialty and availability.
   - "Book Appointment" button on each doctor card.
2. **Booking Modal**:
   - Displays doctor name and mocked time slots.
   - Allows time slot selection and confirmation.
3. **Appointments Summary View**:
   - Lists booked appointments with doctor name, date, time, specialty, and location.
4. **Technical Requirements**:
   - Built with React, JavaScript, and CSS.
   - Uses Zustand for local state management.
   - No backend; relies on mock data.
   - AI tools (Cursor) used for scaffolding, mock data, accessibility, and optimization.
5. **Accessibility**:
   - Keyboard-navigable elements.
   - ARIA labels, roles, and descriptions.
   - Passes Lighthouse/axe DevTools checks.
6. **Responsive Design**:
   - Fully responsive across mobile, tablet, and desktop.

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/domz-1/MedeBook.git
   cd doctor-booking
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open `http://localhost:5173` in your browser.

## Project Structure

```markdown
. 📂 doctor-booking
├── 📄 README.md
├── 📄 eslint.config.js
├── 📄 index.html
├── 📄 package-lock.json
├── 📄 package.json
├── 📂 public/
│   ├── 📄 empty.png
│   ├── 📄 vite.svg
├── 📂 src/
│   ├── 📄 App.css
│   ├── 📄 App.jsx
│   ├── 📂 assets/
│   │   ├── 📄 docs.png
│   │   ├── 📄 logo.png
│   │   ├── 📄 react.svg
│   ├── 📂 components/
│   │   ├── 📄 AppointmentsSummary.jsx
│   │   ├── 📄 BookingModal.jsx
│   │   ├── 📄 DoctorCard.jsx
│   │   ├── 📄 DoctorDetailsModal.jsx
│   │   ├── 📄 DoctorDirectory.jsx
│   │   ├── 📄 LandingPage.jsx
│   │   ├── 📄 NavHeader.jsx
│   │   ├── 📄 ThemeToggle.jsx
│   ├── 📂 database/
│   │   ├── 📄 data.js
│   ├── 📂 hooks/
│   │   ├── 📄 useAppointments.js
│   │   ├── 📄 useDoctorFilters.js
│   │   ├── 📄 useTheme.js
│   ├── 📄 index.css
│   ├── 📄 main.jsx
│   ├── 📂 styles/
│   │   ├── 📄 DoctorCard.css
│   │   ├── 📄 LandingPage.css
│   │   ├── 📄 Layout.css
│   │   ├── 📄 Modal.css
│   │   ├── 📄 base.css
│   │   ├── 📄 index.css
│   │   ├── 📂 modules/
├── 📄 vite.config.js
```

## Accessibility Features

- Semantic HTML for better structure.
- ARIA labels, roles, and `aria-describedby` for screen reader compatibility.
- Full keyboard navigation support.
- Focus management for modals and interactive elements.
- High color contrast ratios (WCAG-compliant).
- Tested with Lighthouse and axe DevTools.

## Responsive Design

Optimized for:
- **Mobile**: <768px
- **Tablet**: 768px-1024px
- **Desktop**: >1024px

## AI Tools Usage

- **Cursor IDE**:
  - Generated initial component structure (DoctorCard, BookingModal, etc.).
  - Created mock data in `src/database/data.js`.
  - Suggested accessibility improvements (ARIA labels, keyboard navigation).
  - Optimized code for performance and readability.
- **AI Code Completion**: Assisted in writing reusable hooks (`useAppointments`, `useDoctorFilters`, `useTheme`).
- **Accessibility Suggestions**: Ensured WCAG compliance and tested with automated tools.

## Known Limitations

- Uses mock data (`src/database/data.js`) instead of a real backend.
- Time slots are static and not dynamically generated.
- No persistent storage; appointments reset on page refresh.
- Limited form validation in the booking modal.
- No user authentication or appointment cancellation functionality.



## Contributing

Submit issues or enhancement requests via the GitHub repository.

## License

Licensed under the MIT License. See the LICENSE file for details.