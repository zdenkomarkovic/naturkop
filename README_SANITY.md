# Naturkop - Mamina kuhinja 🍓

Web sajt za Naturkop - proizvođača domaćih džemova i voćnih namaza pod brendom "Mamina kuhinja".

## ✨ Funkcionalnosti

- ✅ O nama sekcija sa informacijama o brendu
- ✅ Prikaz proizvoda sa slikama
- ✅ Robne marke (Mamina kuhinja i Private Label)
- ✅ Blog sistem sa Sanity CMS
- ✅ Partneri/prodajna mesta sa Sanity CMS
- ✅ Kontakt forma
- ✅ Responsive dizajn
- ✅ SEO optimizacija

## 🚀 Brzi start

### Instalacija

```bash
npm install
```

### Konfiguracija Sanity CMS

1. Kreirajte nalog na [sanity.io](https://www.sanity.io/)
2. Kreirajte novi projekat
3. Kopirajte `.env.local.example` u `.env.local`
4. Dodajte svoje Sanity kredencijale u `.env.local`

Detaljne instrukcije: [SANITY_SETUP.md](./SANITY_SETUP.md)

### Pokretanje

```bash
npm run dev
```

Sajt: `http://localhost:3000`
Sanity Studio: `http://localhost:3000/studio`

## 📁 Struktura projekta

```
naturkop/
├── app/
│   ├── blog/          # Blog stranica
│   ├── kontakt/       # Kontakt stranica
│   ├── studio/        # Sanity Studio
│   ├── layout.tsx
│   └── page.tsx       # Početna stranica
├── components/
│   ├── About.tsx      # O nama sekcija
│   ├── Products.tsx   # Proizvodi
│   ├── Brands.tsx     # Robne marke
│   ├── Partners.tsx   # Partneri (Sanity CMS)
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ...
├── lib/
│   ├── sanity.client.ts   # Sanity klijent
│   ├── sanity.fetch.ts    # Fetch funkcije
│   └── sanity.queries.ts  # GROQ queries
├── sanity/
│   ├── config.ts
│   └── schemas/
│       ├── blog.ts        # Blog šema
│       ├── partner.ts     # Partner šema
│       └── index.ts
├── public/
│   └── images/            # Slike proizvoda
└── sanity.config.ts       # Sanity konfiguracija
```

## 📝 Upravljanje sadržajem

### Blog postovi

1. Idite na `/studio`
2. Odaberite "Blog postovi"
3. Kliknite "Create"
4. Popunite podatke i objavite

### Partneri

1. Idite na `/studio`
2. Odaberite "Partneri"
3. Kliknite "Create"
4. Odaberite tip (Maloprodaja/Veleprodaja)
5. Popunite podatke i objavite

## 🎨 Tehnologije

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **CMS**: Sanity
- **Animacije**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React

## 📦 Build za produkciju

```bash
npm run build
npm start
```

## 🔒 Environment varijable

Potrebne environment varijable (kreirajte `.env.local`):

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your_read_token
```

## 📸 Slike proizvoda

Slike proizvoda se nalaze u `public/images/`:
- MK_SLJIVA_L.jpg - Džem od šljive
- MK_VISNJA_L.jpg - Džem od višnje
- MK_JAGODA_L.jpg - Džem od jagode
- MK_KAJSIJA_L.jpg - Džem od kajsije
- MK_SIPURAK_L.jpg - Džem od šipurka
- MK_STACK_L.jpg - Stack slika proizvoda

## 📞 Kontakt informacije

- **Email**: naturkopdoo@gmail.com
- **Telefon**: +381 66 224 502
- **Sedište**: Garevina bb - Gornji Stupanj
- **Ispostava**: Istočna 8 - Kruševac-Mudrakovac

## 📄 Licenca

© 2024 Naturkop doo. Sva prava zadržana.

---

Developed by [ManikamWebSolutions](https://www.manikamwebsolutions.com/)
