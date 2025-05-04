import React from "react";

const HEADER_BG = "#cb312c";
const BG_COLOR = "#f9f9f8";
const ACCENT = "#1f3145";

const SLIDER_IMG = "https://ext.same-assets.com/3060174560/1790433369.jpeg";
const QR_IMG = "https://ext.same-assets.com/3060174560/2072461534.svg";

const thongBaoList = [
  {
    title: "Thông báo tuyển sinh đi học tại Của-ba năm 2024",
    date: "15/8/2024",
  },
  {
    title: "Hướng dẫn đảm bảo an toàn thông tin, tham gia môi trường mạng an toàn đối với hoạt động giảng dạy, quản lý giáo dục",
    date: "1/3/2024",
  },
  {
    title: "Thông báo nhận bằng tốt nghiệp THPT - Năm học 2022-2023",
    date: "23/2/2024"
  },
  {
    title: "Giới thiệu Học bổng Chính phủ New Zealand bậc Trung học",
    date: "22/2/2024"
  }
];

const thuMoiList = [
  {
    title: "[Khẩn] Thư mời họp Cha mẹ học sinh Lớp 10 chuyên trường THPT Mạc Đĩnh Chi - Năm học 2023-2024",
    date: "11/8/2021"
  }
];

const tinNoiBatList = [
  {
    title: "Lễ tuyên dương học sinh giỏi năm học 2024 - 2025",
    date: "29/4/2025"
  },
  {
    title: "Thông tin tuyển sinh lớp 10 - Năm học: 2025 - 2026",
    date: "28/4/2025"
  },
  {
    title: "Lịch công tác tuần từ 28/4/2025 đến 04/05/2025",
    date: "27/4/2025"
  }
];

const tinMoiNhatList = [
  "Lễ tuyên dương học sinh giỏi năm học 2024 - 2025",
  "Thông tin tuyển sinh lớp 10 - Năm học 2025 - 2026",
  "Chung kết Rubik trường THPT Mạc Đĩnh Chi",
  "Lịch công tác tuần từ 28/4/2025 đến 04/05/2025",
  "Công bố công khai thực hiện dự toán thu chi ngân sách quý 1/2025",
];

const docNhieuNhatList = [
  "Thông tin tuyển sinh lớp 10 - Năm học 2025 - 2026",
  "Chung kết Rubik trường THPT Mạc Đĩnh Chi",
  "Kết quả HSG lớp 12 trường THPT Mạc Đĩnh Chi",
  "Kết quả thi khoa học kỹ thuật và giải toán trên máy tính cầm tay...",
  "Kết quả thi HSG lớp 12 trường THPT Mạc Đĩnh Chi"
];

const thongKeTruyCap = {
  dangOnline: 9,
  homNay: 27,
  homQua: 25,
  tuanNay: 1_528,
  thangNay: 1_966,
  tong: 7_296
};

const tacNghiepList = [
  "Cổng dữ liệu ngành GD&ĐT",
  "Sổ điểm điện tử",
  "Lịch công tác tuần",
  "Thông tin lịch thi tuyển sinh",
  "Hệ thống khảo thí",
  "Quản lý nhân sự",
];

const videoDemo = {
  title: "Trường THPT Mạc Đĩnh Chi - Tuyển dụng HSG các năm",
  url: "https://www.youtube.com/embed/47JWS-cqzDc",
};

const boxRows = [
  {
    section: "KẾ HOẠCH",
    items: [
      "Lịch công tác tuần từ 28/04/2025 đến 04/05/2025",
      "Lịch công tác tuần từ 21/04/2025 đến 27/04/2025",
      "Lịch công tác tuần từ 13/04/2025 đến 20/04/2025",
    ],
  },
  {
    section: "ĐOÀN THỂ",
    items: [
      "Triển khai kế hoạch STEM-CEO và Tuyển truyền, giáo dục lý tưởng cho học sinh",
      "Trường THPT Mạc Đĩnh Chi tổ chức các hoạt động tháng thanh niên",
    ],
  },
  {
    section: "GIÁO DỤC - STEM",
    items: [
      "Kết quả English Eloquence Contest - Cuộc thi Hùng Biện Tiếng Anh 2023",
      "Học sinh đạt giải tại các cuộc thi cấp thành phố"
    ],
  },
  {
    section: "KHOA HỌC KỸ THUẬT",
    items: [
      "Kết quả cuộc thi Khoa Học Kỹ Thuật học sinh THPT năm học 2022 - 2023",
    ],
  },
];

const liEnKetWebsites = [
  {title: "Báo Giáo dục và Đào tạo", url: "#"},
  {title: "Tin Sở GD&ĐT", url: "#"},
  {title: "Văn bản Sở GD&ĐT", url: "#"},
  {title: "Nhắc việc", url: "#"},
];

export default function App() {
  return (
    <div style={{ minHeight: "100vh", background: BG_COLOR, fontFamily: 'Roboto, Arial, sans-serif' }}>
      {/* Header */}
      <header style={{ background: HEADER_BG, color: "#fff", padding: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, maxWidth: 1280, margin: "0 auto", padding: "8px 16px" }}>
          <img
            src="https://ext.same-assets.com/3060174560/681068853.png"
            alt="Logo"
            width={64}
            height={64}
            style={{ background: "#fff", borderRadius: 8, border: "2px solid #fff" }}
          />
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 800, fontSize: 20, letterSpacing: 1 }}>NGÀNH GIÁO DỤC VÀ ĐÀO TẠO THÀNH PHỐ HỒ CHÍ MINH</div>
            <div style={{ color: ACCENT, fontWeight: 900, fontSize: 28, textTransform: 'uppercase', letterSpacing: 1 }}>TRƯỜNG THPT MẠC ĐĨNH CHI</div>
          </div>
          <nav style={{ display: 'flex', gap: 18 }}>
            <a href="#" style={{ color: '#fff', fontWeight: 600, textDecoration: 'none' }}>GIỚI THIỆU</a>
            <a href="#" style={{ color: '#fff', fontWeight: 600, textDecoration: 'none' }}>THÔNG BÁO</a>
            <a href="#" style={{ color: '#fff', fontWeight: 600, textDecoration: 'none' }}>CÔNG KHAI</a>
            <a href="#" style={{ color: '#fff', fontWeight: 600, textDecoration: 'none' }}>KẾ HOẠCH</a>
            <a href="#" style={{ color: '#fff', fontWeight: 600, textDecoration: 'none' }}>ĐOÀN THỂ</a>
            <a href="#" style={{ color: '#fff', fontWeight: 600, textDecoration: 'none' }}>GIÁO DỤC</a>
          </nav>
        </div>
      </header>
      {/* Slider/Banner ảnh lớn dưới Header */}
      <div style={{
        background: 'linear-gradient(#fbfbfa, #f0f0ee 60%, #f9ece3 100%)',
        minHeight: 120, display: 'flex', justifyContent: 'center', alignItems: 'center',
        borderBottom: '1.5px solid #eee',
      }}>
        <img
          src={SLIDER_IMG}
          alt="Banner trường"
          style={{ borderRadius: 8, marginTop: 16, marginBottom: 10, maxWidth: '90%', height: 176, objectFit: 'cover', boxShadow: '0 4px 24px #0001' }}
        />
      </div>
      {/* Main layout grid */}
      <main style={{
        maxWidth: 1280,
        margin: '0 auto',
        padding: '16px 0',
        display: 'grid',
        gridTemplateColumns: '1.2fr 2.2fr 1.1fr',
        gap: 18
      }}>
        {/* Cột trái – THÔNG BÁO/THƯ MỜI */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Thông báo */}
          <div style={{ background: '#fff', borderRadius: 8, boxShadow: '0 1px 6px #0001', padding: 12 }}>
            <strong style={{ color: HEADER_BG }}>THÔNG BÁO</strong>
            <ul style={{ margin: 0, paddingLeft: 20, marginTop: 8 }}>
              {thongBaoList.map((t, i) => (
                <li key={i} style={{ marginBottom: 3, fontSize: 15 }}>
                  <span style={{ fontWeight: 600 }}>{t.title}</span>
                  <span style={{ fontSize: 13, color: '#888', marginLeft: 6 }}>({t.date})</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Thư mời */}
          <div style={{ background: '#fff', borderRadius: 8, boxShadow: '0 1px 6px #0001', padding: 12 }}>
            <strong style={{ color: HEADER_BG }}>THƯ MỜI</strong>
            <ul style={{ margin: 0, paddingLeft: 20, marginTop: 8 }}>
              {thuMoiList.map((t, i) => (
                <li key={i} style={{ marginBottom: 3, fontSize: 15 }}>
                  <span style={{ fontWeight: 600 }}>{t.title}</span>
                  <span style={{ fontSize: 13, color: '#888', marginLeft: 6 }}>({t.date})</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Liên kết websites (bổ sung dưới cùng) */}
          <div style={{ background: '#fff', borderRadius: 8, boxShadow: '0 1px 6px #0001', padding: 11 }}>
            <strong style={{ color: HEADER_BG }}>LIÊN KẾT WEBSITE</strong>
            <ul style={{ margin: 0, paddingLeft: 20, marginTop: 8 }}>
              {liEnKetWebsites.map((w) => (
                <li key={w.title} style={{ marginBottom: 3, fontSize: 15 }}>
                  <a href={w.url} style={{ color: '#2a4d9a', textDecoration: 'underline' }}>{w.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>
        {/* Cột giữa – Tin nổi bật, sự kiện... */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {/* Tin nổi bật  */}
          <div style={{ background: '#fff', borderRadius: 8, boxShadow: '0 1px 8px #0002', padding: 16 }}>
            <strong style={{ color: HEADER_BG }}>TIN NỔI BẬT</strong>
            <ul style={{ margin: 0, paddingLeft: 20, marginTop: 8 }}>
              {tinNoiBatList.map((t, i) => (
                <li key={i} style={{ marginBottom: 3, fontSize: 15 }}>
                  <span style={{ fontWeight: 600 }}>{t.title}</span>
                  <span style={{ fontSize: 13, color: '#888', marginLeft: 6 }}>({t.date})</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Tin tức - sự kiện */}
          <div style={{ background: '#fff', borderRadius: 8, boxShadow: '0 1px 8px #0002', padding: 14 }}>
            <strong style={{ color: HEADER_BG }}>TIN TỨC - SỰ KIỆN</strong>
            <div style={{ padding: '12px 0', fontSize: 15 }}>Đang cập nhật...</div>
          </div>
          {/* Các box row nội dung dạng grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16 }}>
            {boxRows.map(row => (
              <div key={row.section} style={{ background: '#fff', borderRadius: 8, boxShadow: '0 1px 6px #0002', padding: 11, minHeight: 115 }}>
                <strong style={{ color: HEADER_BG }}>{row.section}</strong>
                <ul style={{ margin: 0, paddingLeft: 20, marginTop: 8 }}>
                  {row.items.map(it => (
                    <li key={it} style={{ fontSize: 15, marginBottom: 2 }}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        {/* Cột phải - sidebar: Tin mới nhất và QR, tác nghiệp */}
        <aside style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Tin mới nhất */}
          <div style={{ background: '#fff', borderRadius: 8, boxShadow: '0 1px 6px #0001', padding: 10 }}>
            <strong style={{ color: HEADER_BG }}>TIN MỚI NHẤT</strong>
            <ul style={{ margin: 0, paddingLeft: 20, marginTop: 8 }}>
              {tinMoiNhatList.map((item, i) => (
                <li key={i} style={{ marginBottom: 3, fontSize: 15 }}>{item}</li>
              ))}
            </ul>
          </div>
          {/* Đọc nhiều nhất */}
          <div style={{ background: '#fff', borderRadius: 8, boxShadow: '0 1px 6px #0001', padding: 10 }}>
            <strong style={{ color: HEADER_BG }}>ĐỌC NHIỀU NHẤT</strong>
            <ol style={{ margin: 0, paddingLeft: 22, marginTop: 8 }}>
              {docNhieuNhatList.map((item, i) => (
                <li key={i} style={{ marginBottom: 3, fontSize: 15 }}>{item}</li>
              ))}
            </ol>
          </div>
          {/* PHẦN MỀM TÁC NGHIỆP */}
          <div style={{ background: '#fff', borderRadius: 8, boxShadow: '0 1px 6px #0001', padding: 10 }}>
            <strong style={{ color: HEADER_BG }}>PHẦN MỀM TÁC NGHIỆP</strong>
            <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {tacNghiepList.map(tn => (
                <button
                  key={tn}
                  style={{
                    width: '100%',
                    background: '#f9f9f9',
                    border: `1.2px solid #e4cba2`,
                    color: HEADER_BG,
                    fontWeight: 600,
                    borderRadius: 7,
                    padding: '5px 0',
                    cursor: 'pointer',
                    fontSize: 15,
                    transition: 'background .2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = '#e4cba2'}
                  onMouseLeave={e => e.currentTarget.style.background = '#f9f9f9'}
                  type="button"
                >
                  {tn}
                </button>
              ))}
            </div>
          </div>
          {/* Video demo */}
          <div style={{ background: '#fff', borderRadius: 8, boxShadow: '0 1px 6px #0001', padding: 8 }}>
            <strong style={{ color: HEADER_BG }}><span role="img" aria-label="play">▶️</span> VIDEO GIỚI THIỆU</strong>
            <div style={{ marginTop: 6 }}>
              <iframe
                width="100%"
                height="120"
                src={videoDemo.url}
                title={videoDemo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ borderRadius: 8 }}
              ></iframe>
            </div>
          </div>
          {/* QR CODE  */}
          <div style={{ background: '#fff', borderRadius: 8, boxShadow: '0 1px 6px #0001', padding: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <strong style={{ color: HEADER_BG, marginBottom: 6 }}>MÃ QR CODE TRUY CẬP WEB</strong>
            <img src={QR_IMG} alt='QRCode' width={90} height={90} />
          </div>
          {/* Thống kê truy cập */}
          <div style={{ background: '#fff', borderRadius: 8, boxShadow: '0 1px 6px #0001', padding: 10, fontSize: 15 }}>
            <strong style={{ color: HEADER_BG }}>THỐNG KÊ TRUY CẬP</strong>
            <div>Đang online: <b>{thongKeTruyCap.dangOnline}</b></div>
            <div>Hôm nay: <b>{thongKeTruyCap.homNay}</b></div>
            <div>Hôm qua: <b>{thongKeTruyCap.homQua}</b></div>
            <div>Tuần này: <b>{thongKeTruyCap.tuanNay}</b></div>
            <div>Tháng này: <b>{thongKeTruyCap.thangNay}</b></div>
            <div>Tổng lượt: <b>{thongKeTruyCap.tong}</b></div>
          </div>
        </aside>
      </main>
      {/* Footer */}
      <footer style={{ background: HEADER_BG, color: '#fff', padding: 16, marginTop: 40 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, maxWidth: 1280, margin: '0 auto' }}>
          <img src="https://ext.same-assets.com/3060174560/681068853.png" alt='Logo trường' width={50} height={50} style={{ background: '#fff', borderRadius: 8 }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 600 }}>CỔNG THÔNG TIN ĐIỆN TỬ TRƯỜNG THPT MẠC ĐĨNH CHI</div>
            <div style={{ fontSize: 13 }}>Địa chỉ: Số 41 Tân Hòa Đông, P14, Q6, TPHCM | SĐT: (028) 3 6756951 | Email: c3macdinhchi.tphcm@moet.edu.vn</div>
            <div style={{ fontSize: 12, marginTop: 2 }}>&copy; Bản quyền thuộc Trường THPT Mạc Đĩnh Chi</div>
          </div>
          <a
            href="tel:02836756951"
            style={{ background: '#fff', color: HEADER_BG, borderRadius: 24, padding: "6px 22px", fontWeight: 700, fontSize: 16, boxShadow: '0 1px 6px #0002', border: `2px solid ${HEADER_BG}` }}
          >
            (028) 36756951
          </a>
        </div>
      </footer>
    </div>
  );
}
