# ImDuy 🌐

[![Website](https://img.shields.io/badge/Website-imduy.id.vn-38bdf8?style=for-the-badge&logo=googlechrome&logoColor=white)](https://imduy.id.vn)
[![Astro](https://img.shields.io/badge/Astro-7.4-BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare_Pages-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://pages.cloudflare.com)
[![License](https://img.shields.io/badge/License-MIT-green.style?style=for-the-badge)](LICENSE)

![ImDuy Banner](public/default-og.jpg)

> **ImDuy** là blog cá nhân của **Lê Khánh Duy** — không gian ghi chép kỹ thuật, chia sẻ kiến thức phát triển phần mềm, kiến trúc hệ thống và những trải nghiệm thực tế trong quá trình xây dựng sản phẩm công nghệ.

---

## 🌟 Điểm nổi bật (Key Features)

- ⚡ **Tốc độ tải trang siêu nhanh (Zero-JS SSG)**: Xây dựng trên nền tảng Astro 7 với cơ chế Static Site Generation, tối ưu hóa điểm số Lighthouse 100/100.
- 🎨 **Thiết kế Vercel / Linear Aesthetic**: Bảng màu hiện đại Deep Onyx (`#09090b`) kết hợp ánh sáng Electric Blue neon (`#38bdf8`), chuyển đổi Dark/Light mode tức thì.
- ✍️ **Typography Tiếng Việt chuẩn mực**:
  - Văn bản & Tiêu đề: **Be Vietnam Pro** hiển thị sắc nét dấu tiếng Việt.
  - Khối mã nguồn: **JetBrains Mono** chuyên nghiệp cho lập trình viên.
  - Phông chữ tự lưu trữ (self-hosted) 100% khi build, không phụ thuộc vào CDN bên thứ ba lúc chạy.
- 💬 **Bình luận Giscus qua GitHub Discussions**: Hệ thống bình luận serverless, lưu trữ bảo mật trên GitHub, tự động đồng bộ theme Dark/Light theo website.
- 🔍 **Tìm kiếm tĩnh toàn văn (Pagefind)**: Tìm kiếm bài viết tức thì ngay trên client mà không cần máy chủ hay cơ sở dữ liệu riêng.
- 🖼️ **OpenGraph động & 3D Glassmorphic Cover**: Tự động sinh ảnh cover đẹp mắt khi chia sẻ bài viết lên mạng xã hội (Facebook, LinkedIn, Zalo, Twitter/X).
- 📱 **Responsive & Accessible**: Tối ưu hiển thị hoàn hảo từ điện thoại di động đến màn hình lớn, tuân thủ các chuẩn trợ năng (A11y).
- 🏷️ **Quản lý nội dung khoa học**: Hỗ trợ phân loại bài viết theo Tag, lưu trữ (Archives), phân trang và phân cấp bài viết.
- 📡 **Tích hợp sẵn RSS Feed & Sitemap**: Tự động sinh `/rss.xml` và `/sitemap-index.xml` hỗ trợ SEO tối đa.

---

## 💻 Công nghệ sử dụng (Tech Stack)

| Thành phần            | Công nghệ                                                                              |
| :-------------------- | :------------------------------------------------------------------------------------- |
| **Framework**         | [Astro v7](https://astro.build/) (Static Output)                                       |
| **Ngôn ngữ**          | [TypeScript](https://www.typescriptlang.org/)                                          |
| **Styling**           | [TailwindCSS v4](https://tailwindcss.com/) + Custom CSS Variables                      |
| **Typography**        | Be Vietnam Pro & JetBrains Mono (Astro Fonts API)                                      |
| **Công cụ tìm kiếm**  | [Pagefind](https://pagefind.app/)                                                      |
| **Bình luận**         | [Giscus](https://giscus.app/) (GitHub Discussions API)                                 |
| **Code Highlighting** | [Shiki](https://shiki.style/) (`github-dark` & `github-light`)                         |
| **Sinh ảnh OG**       | [Satori](https://github.com/vercel/satori) + [Sharp](https://sharp.pixelplumbing.com/) |
| **Hosting & CDN**     | [Cloudflare Pages](https://pages.cloudflare.com/)                                      |

---

## 📂 Cấu trúc thư mục (Project Structure)

```bash
imduy/
├── public/                 # File tĩnh phục vụ trực tiếp
│   ├── favicon.svg         # Favicon vector chữ D Electric Blue
│   ├── favicon.ico         # Favicon đa độ phân giải
│   ├── default-og.jpg      # Ảnh OpenGraph mặc định (1200x630)
│   └── pagefind/           # Chỉ mục tìm kiếm (tự sinh khi build)
├── src/
│   ├── assets/             # Hình ảnh và icon vector
│   ├── components/         # Các Astro / React component dùng lại
│   ├── content/            # Quản lý bài viết & trang tĩnh
│   │   ├── pages/about.md  # Trang Giới thiệu cá nhân
│   │   └── posts/          # Danh sách bài viết (Markdown/MDX)
│   ├── custom/             # Vùng tùy biến độc lập với theme gốc
│   │   ├── Head.astro      # Chèn mã theo dõi, analytics vào <head>
│   │   ├── PostEnd.astro   # Tích hợp Giscus Comments ở cuối bài viết
│   │   └── BodyEnd.astro   # Chèn script trước thẻ </body>
│   ├── i18n/               # Cấu hình bản địa hóa Tiếng Việt (vi)
│   ├── layouts/            # Layout chung cho toàn bộ trang web
│   ├── pages/              # Routing của Astro (Home, Posts, Tags...)
│   └── styles/             # Global CSS, Typography và Theme color
├── astro-paper.config.ts   # Cấu hình siêu dữ liệu trang web (ImDuy)
├── astro.config.ts         # Cấu hình Astro integrations, fonts & markdown
└── package.json            # Quản lý dependencies & build scripts
```

---

## 🚀 Khởi chạy cục bộ (Getting Started)

### Yêu cầu môi trường

- **Node.js**: `>= 22.23.4` (khuyên dùng Node 22 LTS)
- **Package Manager**: [pnpm](https://pnpm.io/) (`>= 10.x`)

### Các bước cài đặt

1. **Clone repository về máy**:

   ```bash
   git clone https://github.com/lkduy2602/imduy.git
   cd imduy
   ```

2. **Cài đặt các gói phụ thuộc**:

   ```bash
   pnpm install
   ```

3. **Chạy máy chủ phát triển (Development Server)**:

   ```bash
   pnpm dev
   ```

   Mở trình duyệt tại [http://localhost:4321](http://localhost:4321) để xem website.

4. **Kiểm tra mã nguồn & Kiểm thử Type**:

   ```bash
   pnpm astro check
   ```

5. **Biên dịch bản chạy chính thức (Production Build)**:

   ```bash
   pnpm build
   ```

   Lệnh này sẽ biên dịch toàn bộ HTML tĩnh, sinh chỉ mục Pagefind và lưu vào thư mục `dist/`.

6. **Xem trước bản Build (Preview)**:
   ```bash
   pnpm preview
   ```

---

## 🌐 Triển khai lên Cloudflare Pages (Deployment)

Dự án được cấu hình sẵn để triển khai tĩnh hoàn toàn trên **Cloudflare Pages**:

1. Kết nối repository `lkduy2602/imduy` với Cloudflare Pages.
2. Thiết lập thông số build:
   - **Framework preset**: `Astro`
   - **Build command**: `pnpm build`
   - **Build output directory**: `dist`
3. Cài đặt biến môi trường trong Cloudflare Dashboard:
   - `NODE_VERSION` = `22`
   - `PNPM_VERSION` = `10`
4. Cấu hình tên miền tùy chỉnh: Thêm `imduy.id.vn` trong tab **Custom domains**.

---

## 👤 Tác giả (Author)

**Lê Khánh Duy**

- Website: [imduy.id.vn](https://imduy.id.vn)
- LinkedIn: [linkedin.com/in/lkduy2602](https://www.linkedin.com/in/lkduy2602/)
- GitHub: [@lkduy2602](https://github.com/lkduy2602)
- Email: [lkduy2602@gmail.com](mailto:lkduy2602@gmail.com)

---

## 📜 Giấy phép (License)

Dự án được phát triển dựa trên theme mã nguồn mở [AstroPaper](https://github.com/satnaing/astro-paper) của [Sat Naing](https://satnaing.dev) và được phát hành theo giấy phép [MIT License](LICENSE).
