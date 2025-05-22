# 🌤️ Weather Dashboard – Submission Overview

## 📌 Project Summary

This Angular 17 standalone application, **Weather Dashboard**, provides real-time weather conditions and a 3-day forecast for multiple cities using the OpenWeatherMap API. Users can search for cities, view weather cards, and enjoy a responsive, persistent, and interactive experience.

## 🧩 Features

* 🔍 **Search Cities**: Get current temperature and weather condition by city name.
* 📆 **3-Day Forecast**: Displays the weather for the next three days at noon.
* 💾 **Local Storage**: Searched cities are saved for future sessions.
* 🎨 **Responsive UI**: Optimized layout for both desktop and mobile.
* ✨ **Animations**: Subtle loading and transition effects for enhanced UX.

## 🌐 Hosted Repository & Setup Instructions

Use this repository as a starting point for your journey:

* 📄 **README**: Setup instructions and API key guidance included
* 🔐 **API Key**: Requires a free OpenWeatherMap API key. available in `weather.service.ts` for now. We can move it to .env for production level.

### 🔧 Quick Setup

```bash
git clone  https://bitbucket.org/voxloud/angular-hw.git
cd weather-dashboard
npm install
ng serve
```

---


### 🔧 For test

```bash
ng test
```
---

## 🛠️ Technologies Used

* **Framework**: Angular 17 (standalone architecture)
* **HTTP**: Angular HttpClient
* **Testing**: Jasmine, Karma
* **CSS**: Tailwind CSS
* **API**: OpenWeatherMap API (Current + Forecast endpoints)

---

## 🧪 Testing Strategy

* ✅ Component rendering verification
* ✅ Forecast logic tested using mocked city data
* ✅ Error messaging and loading state validation
* ✅ `localStorage` interaction ensured


## ✅ Submission Checklist

* [x] Angular 17 standalone setup
* [x] OpenWeatherMap API integration
* [x] Forecast + current weather
* [x] Tailwind-styled responsive UI
* [x] Loading indicators + error handling
* [x] `localStorage` for city persistence
* [x] Unit tests implemented
* [x] Hosted on GitHub with README.md + setup guide

---
