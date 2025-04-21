# Doctor Booking UI Module

A responsive and accessible doctor booking interface built with React and Vite, designed to meet the requirements outlined by InVitro Capital for a front-end appointment booking UI. This project showcases a modern healthcare platform's appointment booking system with a focus on user experience, accessibility, and code quality, developed with AI-assisted tools for efficiency.

## Features

- 🏥 **Doctor Directory**: Displays a mock list of doctors with name, photo, specialty, availability, and location, filterable by specialty.
- 📅 **Booking Modal**: Interactive modal for selecting time slots and confirming appointments, triggered by a "Book Appointment" button.
- 📋 **Appointments Summary**: A view to display confirmed appointments with doctor details, date/time, specialty, and location.
- 🌓 **Light/Dark Mode**: Theme toggle for improved user experience.
- ♿ **Accessibility**: WCAG-compliant with semantic HTML, ARIA labels, keyboard navigation, and screen reader support.
- 📱 **Responsive Design**: Optimized for mobile (<768px), tablet (768px-1024px), and desktop (>1024px).

## Technologies Used

- **Frontend**: React 18, JavaScript (ES6+)
- **Build Tool**: Vite
- **Styling**: CSS3 (Custom properties for theming)
- **State Management**: Local state (React hooks)
- **AI Tools**:
  - **Cursor IDE**: Used for scaffolding components, generating mock data, optimizing accessibility, and improving code quality.
  - AI-powered code completion for faster development.
  - Accessibility suggestions to ensure WCAG compliance.
- **Testing/Validation**: Basic accessibility checks with Lighthouse and axe DevTools.

## Project Requirements

This project was developed to meet the specifications provided by **Youssef Magdy** from **InVitro Capital** (email dated April 17, 2025). The task required building a front-end doctor booking UI module with the following key components:

1. **Doctor Directory View**:
   - Mock list of doctors with name, photo, specialty, availability, and location.
   - Filtering by specialty.
   - "Book Appointment" button on each doctor card.
2. **Booking Modal**:
   - Displays doctor name and mocked available time slots.
   - Allows time slot selection and confirmation.
3. **Appointments Summary View**:
   - Lists booked appointments with doctor name, date/time, specialty, and location.
4. **Technical Requirements**:
   - Built with React, JavaScript, and CSS.
   - Local state management.
   - No backend required; mock data used.
   - AI tools (e.g., Cursor) used for scaffolding, accessibility, and optimization.
5. **Accessibility Goals**:
   - Keyboard navigable, ARIA-compliant, and responsive across devices.
   - Passes Lighthouse/axe DevTools accessibility checks.

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
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

4. Open your browser and navigate to `http://localhost:5173`.

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
└── 📄 vite.config.js
```

## Accessibility Features

- **Semantic HTML**: Ensures proper structure for screen readers.
- **ARIA Labels/Roles**: Added for modals, buttons, and filters.
- **Keyboard Navigation**: All interactive elements are accessible via keyboard.
- **Focus Management**: Proper focus handling in modals and forms.
- **Color Contrast**: Meets WCAG 2.1 AA standards.
- **Screen Reader Support**: Tested for compatibility with tools like NVDA and VoiceOver.

## Responsive Design

- **Mobile (<768px)**: Stacked layouts, touch-friendly controls.
- **Tablet (768px-1024px)**: Grid-based doctor directory, adjusted modal sizes.
- **Desktop (>1024px)**: Multi-column layouts, enhanced spacing.

## AI Tools Usage

- **Cursor IDE**:
  - Generated initial component scaffolding (e.g., `DoctorCard.jsx`, `BookingModal.jsx`).
  - Created mock data in `data.js` for doctors and time slots.
  - Provided accessibility suggestions (e.g., ARIA labels, focus management).
  - Optimized code for performance and readability.
- **AI Code Completion**: Accelerated development of hooks (`useAppointments.js`, `useDoctorFilters.js`).
- **Accessibility Validation**: Used AI suggestions to ensure WCAG compliance and improve Lighthouse scores.

## Known Limitations

- **Mock Data**: Static doctor and time slot data; no real backend integration.
- **No Persistence**: Appointments are stored in local state and lost on refresh.
- **Basic Validation**: Minimal form validation in the booking modal.
- **Static Time Slots**: Availability is not dynamically updated.

## Next Steps

- [ ] Implement form validation for booking modal inputs.
- [ ] Integrate a backend API for real data and persistence.
- [ ] Add user authentication for personalized appointment tracking.
- [ ] Include doctor reviews and ratings in `DoctorCard`.
- [ ] Add appointment cancellation functionality.
- [ ] Enable real-time availability updates for time slots.

## Contributing

Contributions are welcome! Please submit issues or pull requests via the GitHub repository.

## License

This project is licensed under the MIT License - see the LICENSE file for details.