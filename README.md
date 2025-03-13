# NGO Connection Web App

A **Next.js & Tailwind CSS** web application that connects individuals with NGOs based on the issues they encounter. Users can report problems by posting text or images and selecting a relevant category, which notifies nearby NGOs.

## 🚀 Features

### 1. Landing Page
- Showcases the **vision**: Connecting people with NGOs that can help them.
- Features a **hero section** with a CTA button.
- Lists **NGO categories** (Animal Welfare, Health, Disaster Relief, etc.).
- Explains how the platform works.

### 2. Category Selection Page
- Users choose the type of problem or NGO they need assistance from.
- Displays NGO categories as interactive cards/buttons.

### 3. Post an Issue Page
- Users can **upload images** and **describe the problem**.
- Dropdown to select **NGO category**.
- Manual or auto-detect **location input**.
- Submitting an issue triggers **email notifications** to relevant NGOs nearby.

### 4. Contact Page
- Users can **reach out** via a simple contact form.
- Displays team contact details.

## 🛠️ Tech Stack
- **Frontend:** Next.js, Tailwind CSS
- **Backend:** Next.js API routes
- **Notifications:** Email alerts (Nodemailer or similar service)

## 📌 Installation & Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/Community-Engagement-Project.git
   cd Community-Engagement-Project
   ```
2. Install dependencies:
   ```sh
   npm install  # or yarn install
   ```
3. Run the development server:
   ```sh
   npm run dev  # or yarn dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📧 Future Enhancements
- **User authentication** (Sign-up/Login for tracking issues)
- **NGO verification system** to list only genuine NGOs
- **Impact tracking** to monitor issue resolution progress
- **Crowdfunding integration** for urgent cases
  

💡 **Idea:** Making NGO assistance more accessible to the public with a simple, intuitive web app. 🚀
