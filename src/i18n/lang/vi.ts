import type { UIStrings } from "../types";

export default {
  nav: {
    home: "Trang chủ",
    posts: "Bài viết",
    tags: "Thẻ",
    about: "Giới thiệu",
    archives: "Lưu trữ",
    search: "Tìm kiếm",
  },
  post: {
    publishedAt: "Đăng ngày",
    updatedAt: "Cập nhật",
    sharePostIntro: "Chia sẻ bài viết:",
    sharePostOn: "Chia sẻ bài viết trên {{platform}}",
    sharePostViaEmail: "Chia sẻ bài viết qua email",
    tagLabel: "Thẻ",
    backToTop: "Lên đầu trang",
    tableOfContents: "Mục lục",
    goBack: "Quay lại",
    editPage: "Chỉnh sửa trang",
    previousPost: "Bài trước",
    nextPost: "Bài tiếp theo",
  },
  pagination: {
    prev: "Trước",
    next: "Sau",
    page: "Trang",
  },
  home: {
    socialLinks: "Mạng xã hội",
    featured: "Nổi bật",
    recentPosts: "Bài viết mới nhất",
    allPosts: "Tất cả bài viết",
  },
  footer: {
    copyright: "Bản quyền",
    allRightsReserved: "Đã đăng ký bản quyền.",
  },
  pages: {
    tagTitle: "Thẻ",
    tagDesc: "Tất cả các bài viết có gắn thẻ",

    tagsTitle: "Thẻ",
    tagsDesc: "Tất cả các thẻ được sử dụng trong bài viết.",

    postsTitle: "Bài viết",
    postsDesc: "Tất cả các bài viết tôi đã đăng.",

    archivesTitle: "Lưu trữ",
    archivesDesc: "Tất cả các bài viết đã lưu trữ.",

    searchTitle: "Tìm kiếm",
    searchDesc: "Tìm kiếm bài viết bất kỳ...",
  },
  a11y: {
    skipToContent: "Chuyển đến nội dung chính",
    skipTableOfContents: "Bỏ qua mục lục",
    openMenu: "Mở menu",
    closeMenu: "Đóng menu",
    toggleTheme: "Chuyển đổi giao diện sáng/tối",
    searchPlaceholder: "Tìm kiếm bài viết...",
    noResults: "Không tìm thấy kết quả",
    goToPreviousPage: "Đến trang trước",
    goToNextPage: "Đến trang tiếp theo",
  },
  notFound: {
    title: "404 Không tìm thấy",
    message: "Trang không tồn tại",
    goHome: "Trở về trang chủ",
  },
} satisfies UIStrings;
