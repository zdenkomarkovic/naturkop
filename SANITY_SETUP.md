# Sanity CMS Setup - Naturkop

## 📋 Pregled

Ovaj projekat koristi **Sanity CMS** za upravljanje sadržajem bloga i partnera.

## 🚀 Početak rada

### 1. Kreiranje Sanity projekta

1. Idite na [sanity.io](https://www.sanity.io/) i kreirajte nalog
2. Kreirajte novi projekat preko [Sanity Manage](https://www.sanity.io/manage)
3. Zabeležite sledeće podatke:
   - **Project ID**
   - **Dataset name** (obično "production")

### 2. Konfiguracija environment varijabli

Kreirajte `.env.local` fajl u root-u projekta:

```bash
# Kopirajte .env.local.example u .env.local
cp .env.local.example .env.local
```

Popunite vrednosti u `.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=vas_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=vas_read_token
```

### 3. Dobijanje API tokena

1. Idite na [Sanity Manage](https://www.sanity.io/manage)
2. Odaberite svoj projekat
3. Idite na **API** → **Tokens**
4. Kreirajte novi token sa **Read** pravima
5. Kopirajte token i dodajte ga u `.env.local`

### 4. Pokretanje Sanity Studio

Sanity Studio je dostupan na:

```
http://localhost:3002/studio
```

Prvo pokretanje će vas odvesti na stranici za autentifikaciju.

## 📝 Struktura podataka

### Blog Posts (blog)

Polja:
- **Naslov** (title) - Obavezno
- **Slug** (slug) - Generiše se automatski iz naslova
- **Kratak opis** (excerpt) - Max 200 karaktera
- **Kategorija** (category): Tradicija, Zdravlje, Proizvodnja, Recepti, Vesti
- **Glavna slika** (mainImage) - Obavezno
- **Sadržaj** (content) - Rich text editor
- **Datum objave** (publishedAt) - Obavezno
- **Autor** (author) - Opciono

### Partners (partner)

Polja:
- **Naziv** (name) - Obavezno
- **Tip prodaje** (type): Maloprodaja ili Veleprodaja
- **Lokacija** (location) - Obavezno
- **Adresa** (address) - Opciono
- **Grad** (city) - Obavezno
- **Telefon** (phone) - Opciono
- **Email** (email) - Opciono
- **Web sajt** (website) - Opciono
- **Logo** (logo) - Opciono
- **Opis** (description) - Opciono
- **Aktivan partner** (isActive) - Default: true
- **Redosled** (order) - Za sortiranje

## 🎨 Dodavanje sadržaja

### Kreiranje blog posta

1. Idite na `/studio`
2. Kliknite na "Blog postovi"
3. Kliknite "Create" dugme
4. Popunite sva obavezna polja
5. Kliknite "Publish"

### Dodavanje partnera

1. Idite na `/studio`
2. Kliknite na "Partneri"
3. Kliknite "Create" dugme
4. Odaberite tip partnera (Maloprodaja/Veleprodaja)
5. Popunite podatke
6. Kliknite "Publish"

## 🔧 Development

### Instalacija paketa

```bash
npm install
```

### Pokretanje development servera

```bash
npm run dev
```

Sajt će biti dostupan na `http://localhost:3000`
Studio će biti dostupan na `http://localhost:3000/studio`

## 📦 Production Deployment

Pre deployovanja na production:

1. Proverite da su sve environment varijable postavljene
2. Dodajte production URL u CORS Origins na Sanity projektu:
   - Idite na Sanity Manage → vaš projekat → API → CORS Origins
   - Dodajte `https://vas-domen.com`

## 🔍 Napomene

- Blog postovi se automatski sortiraju po datumu objave (najnoviji prvi)
- Partneri se sortiraju po polju "order", zatim po nazivu
- Samo aktivni partneri (isActive: true) se prikazuju na sajtu
- Slike se automatski optimizuju preko Sanity CDN-a

## 📚 Korisni linkovi

- [Sanity Documentation](https://www.sanity.io/docs)
- [Sanity GROQ Query Language](https://www.sanity.io/docs/groq)
- [Next.js Sanity Integration](https://www.sanity.io/plugins/next-sanity)
