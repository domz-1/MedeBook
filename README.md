# Doctor Booking UI Module

A responsive and accessible doctor booking interface built with React and Vite. This project demonstrates a modern healthcare platform's appointment booking system with a focus on user experience and accessibility.

## Features

- 🏥 Doctor Directory with filtering by specialty
- 📅 Appointment booking modal with time slot selection
- 📋 Appointments summary view
- 🌓 Light/Dark mode support
- ♿ Fully accessible (WCAG compliant)
- 📱 Responsive design for all devices

## Tech Stack

- React 18
- Vite
- CSS3 (Custom properties for theming)
- JavaScript (ES6+)

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

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
doctor-booking/
├── src/
│   ├── components/
│   │   ├── AppointmentsSummary.jsx
│   │   ├── BookingModal.jsx
│   │   ├── DoctorCard.jsx
│   │   ├── DoctorDirectory.jsx
│   │   └── ThemeToggle.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── public/
└── package.json
```

## Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Color contrast compliance
- Screen reader compatibility

## Responsive Design

The application is fully responsive and optimized for:
- Mobile devices (< 768px)
- Tablets (768px - 1024px)
- Desktop (> 1024px)

## AI Tools Used

This project was developed with assistance from:
- Cursor IDE for code generation and optimization
- AI-powered code completion
- Accessibility suggestions and improvements

## Known Limitations

- Mock data is used instead of a real backend
- Time slots are static and not dynamically generated
- No persistent storage (appointments are lost on page refresh)

## Next Steps

- [ ] Add form validation for booking
- [ ] Implement backend integration
- [ ] Add user authentication
- [ ] Include doctor reviews and ratings
- [ ] Add appointment cancellation functionality
- [ ] Implement real-time availability updates

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the LICENSE file for details.
