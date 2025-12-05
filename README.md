# 🧪 Cypress E2E Testing – Home & IBE Ga Website

Repo ini berisi automation testing E2E menggunakan **Cypress** untuk project internal Web Garuda Indonesia.  
Tujuannya adalah membantu tim Development & QA menjalankan test secara konsisten di environment **Dev**, **Staging**, dan **Production**.

---

## 📦 1. Prasyarat

Pastikan sudah terinstall:

- **Node.js** (disarankan versi LTS terbaru)
- **NPM** atau **Yarn**
- OS: Windows / macOS / Linux

Cek versi Node:

```sh
node -v
```
Instalasi Project
Tahapan setelah meng-clone repository:
Clone repo:
```
git clone https://github.com/deddyprianto/tester-cypress.git
```
Masuk ke folder project:
```
cd tester-cypress
```
Masuk ke folder project:
```
npm install
```

Struktur utama folder Cypress:
```
cypress/
  ├── e2e/                 # Kumpulan test case
  ├── fixtures/            # Data dummy (opsional)
  ├── support/             # Custom commands dan konfigurasi global
  └── tsconfig.json        # Konfigurasi Typescript
```

Menjalankan Test dengan UI Cypress
```
npm run test-ui-cypress
```

Menjalankan test di Dev (Terminal)
```
npm run test:dev
```

Menjalankan test di Staging (Terminal)
```
npm run test:stg
Environment: CYPRESS_BASE_URL=https://ga-ibe-stg.asyst.co.id
```
Menjalankan test di Production
```
npm run test:prod
Environment: CYPRESS_BASE_URL=https://ibe.garuda-indonesia.com
```

Cara Menambah Test Baru
Buat file baru di:
```
cypress/e2e/<nama-test>.cy.ts
```

Gunakan template dasar Cypress:
```
describe("Nama Test", () => {
  it("cek fitur basic", () => {
    cy.visit("/");
    cy.contains("Garuda").should("be.visible");
  });
});

```

Untuk debugging lebih mudah, gunakan mode UI:

```
npm run test-ui-cypress
```