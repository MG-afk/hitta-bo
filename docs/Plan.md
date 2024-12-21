# Dokumentacja Projektu Real Estate Platform

## 1. Architektura Systemu

### Tech Stack
- Frontend: Next.js 14 (App Router)
- Backend: NestJS
- Baza danych: PostgreSQL
- ORM: Prisma
- Autentykacja: NextAuth.js
- Stylizacja: Tailwind CSS
- Zarządzanie stanem: Zustand
- Upload plików: AWS S3
- Mapy: Leaflet/OpenStreetMap

### Struktura Projektu
```
/hitta-bo
├── apps/
│   ├── web/                 # Next.js frontend
│   │   ├── app/            
│   │   ├── components/     
│   │   ├── lib/           
│   │   └── styles/         
│   └── api/                 # NestJS backend
│       ├── src/
│       ├── prisma/
│       └── test/
└── packages/               # Współdzielone pakiety
    ├── database/
    └── types/
```

## 2. Modele Danych

### Property (Nieruchomość)
```typescript
model Property {
  id          String    @id @default(cuid())
  title       String
  description Text
  price       Decimal
  area        Float
  rooms       Int
  type        PropertyType
  status      PropertyStatus
  location    Location
  images      Image[]
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
  userId      String
  user        User      @relation(fields: [userId], references: [id])
}

enum PropertyType {
  HOUSE
  APARTMENT
  LAND
  COMMERCIAL
}

enum PropertyStatus {
  AVAILABLE
  SOLD
  RESERVED
}
```

### User (Użytkownik)
```typescript
model User {
  id         String     @id @default(cuid())
  email      String     @unique
  name       String?
  role       UserRole
  properties Property[]
  favorites  Favorite[]
  messages   Message[]
}

enum UserRole {
  USER
  AGENT
  ADMIN
}
```

## 3. Funkcjonalności i Roadmapa

### Faza 1: Podstawy (2 tygodnie)
- [x] Konfiguracja projektu Next.js
- [ ] Implementacja podstawowego layoutu
- [ ] Setup Prisma i bazy danych
- [ ] Podstawowe modele danych
- [ ] Strona główna z listą nieruchomości

### Faza 2: Autentykacja i Użytkownicy (2 tygodnie)
- [ ] System rejestracji/logowania
- [ ] Panel użytkownika
- [ ] Role i uprawnienia
- [ ] Profil użytkownika

### Faza 3: Nieruchomości (3 tygodnie)
- [ ] CRUD nieruchomości
- [ ] Upload i zarządzanie zdjęciami
- [ ] Wyszukiwarka z filtrami
- [ ] System mapowy
- [ ] Strony szczegółów nieruchomości

### Faza 4: Zaawansowane Funkcje (3 tygodnie)
- [ ] System ulubionych
- [ ] Powiadomienia
- [ ] Wiadomości między użytkownikami
- [ ] Statystyki i dashboardy
- [ ] Eksport danych

## 4. API Endpoints

### Properties
```
GET    /api/properties      - Lista nieruchomości
POST   /api/properties      - Dodaj nieruchomość
GET    /api/properties/:id  - Szczegóły nieruchomości
PUT    /api/properties/:id  - Aktualizuj nieruchomość
DELETE /api/properties/:id  - Usuń nieruchomość
```

### Users
```
POST   /api/auth/register  - Rejestracja
POST   /api/auth/login     - Logowanie
GET    /api/users/me       - Profil użytkownika
PUT    /api/users/me       - Aktualizacja profilu
```

## 5. Komponenty UI

### Współdzielone
- Navbar
- Footer
- PropertyCard
- SearchBar
- FilterPanel
- MapView
- ImageGallery
- Modal
- Button
- Input
- Select

### Strony
- HomePage
- SearchPage
- PropertyDetailsPage
- UserDashboard
- AdminPanel
- ChatPage
- FavoritesPage

## 6. Diagramy