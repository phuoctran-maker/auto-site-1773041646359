"use client";

import { useState, useEffect } from "react";

export default function PhoneLandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: "📸",
      title: "Camera 200MP",
      description:
        "Chụp ảnh siêu nét với độ phân giải 200MP, AI nâng cao và zoom quang học 10x.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: "⚡",
      title: "Chip Titan X1",
      description:
        "Hiệu năng vượt trội với chip Titan X1, xử lý AI tốc độ cao gấp 3 lần thế hệ trước.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "🔋",
      title: "Pin 6000mAh",
      description:
        "Dùng liên tục 2 ngày không lo hết pin, sạc nhanh 120W đầy pin chỉ trong 20 phút.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: "🖥️",
      title: "Màn hình AMOLED",
      description:
        "Tấm nền AMOLED 6.8 inch, tần số quét 144Hz, độ sáng 2000 nits siêu rực rỡ.",
      color: "from-orange-500 to-red-500",
    },
  ];

  const specs = [
    { label: "Màn hình", value: "6.8\" AMOLED 144Hz" },
    { label: "Camera chính", value: "200MP f/1.7" },
    { label: "Chip xử lý", value: "Titan X1 4nm" },
    { label: "RAM", value: "16GB LPDDR5X" },
    { label: "Bộ nhớ", value: "512GB UFS 4.0" },
    { label: "Pin", value: "6000mAh / 120W" },
    { label: "Kết nối", value: "5G / WiFi 7 / BT 5.4" },
    { label: "Hệ điều hành", value: "Android 15" },
  ];

  const reviews = [
    {
      name: "Nguyễn Minh Tuấn",
      role: "Nhiếp ảnh gia",
      avatar: "🧑‍💻",
      rating: 5,
      comment:
        "Camera 200MP thực sự ấn tượng! Tôi chưa thấy chiếc điện thoại nào chụp đẹp đến vậy. Hoàn toàn thay thế được máy ảnh chuyên nghiệp.",
    },
    {
      name: "Trần Thu Hà",
      role: "Content Creator",
      avatar: "👩‍🎨",
      rating: 5,
      comment:
        "Pin trâu cực kỳ! Tôi quay video cả ngày mà vẫn còn pin. Màn hình đẹp, màu sắc chuẩn, ai làm nội dung nên có máy này.",
    },
    {
      name: "Lê Văn Đức",
      role: "Game thủ Pro",
      avatar: "🧑‍🎮",
      rating: 5,
      comment:
        "Chip Titan X1 mạnh khủng. Chơi game nặng nhất cũng không giật lag, màn hình 144Hz cực mượt. Đây là chiếc phone gaming tốt nhất!",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/10 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-sm font-bold">N</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              NovaTech
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition-colors">
              Tính năng
            </a>
            <a href="#specs" className="hover:text-white transition-colors">
              Thông số
            </a>
            <a href="#reviews" className="hover:text-white transition-colors">
              Đánh giá
            </a>
            <a href="#pricing" className="hover:text-white transition-colors">
              Giá cả
            </a>
          </div>
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30">
            Mua ngay
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl"></div>
        </div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm text-gray-300 mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Ra mắt 2025 — Đặt trước ngay hôm nay
              </div>

              <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
                <span className="text-white">Nova</span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Ultra 25
                </span>
                <br />
                <span className="text-white text-4xl md:text-5xl font-light">
                  Pro Max
                </span>
              </h1>

              <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
                Điện thoại thông minh thế hệ mới với AI tiên tiến, camera đỉnh
                cao và hiệu năng chưa từng có. Trải nghiệm tương lai ngay hôm
                nay.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
                <button className="group relative bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/40 text-lg">
                  <span className="relative z-10">Mua ngay — 29.990.000đ</span>
                </button>
                <button className="flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 hover:bg-white/5 text-lg">
                  <span>▶</span> Xem video
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                {[
                  { number: "200MP", label: "Camera" },
                  { number: "6000", label: "mAh Pin" },
                  { number: "144Hz", label: "Màn hình" },
                ].map((stat, i) => (
                  <div key={i} className="text-center lg:text-left">
                    <div className="text-3xl font-black bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-gray-500 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Phone Mockup */}
            <div className="flex justify-center items-center">
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/40 to-blue-500/40 blur-3xl scale-75 rounded-full"></div>

                {/* Phone Body */}
                <div className="relative w-64 h-[520px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[50px] border border-white/20 shadow-2xl shadow-purple-500/20 overflow-hidden">
                  {/* Phone Screen */}
                  <div className="absolute inset-1.5 bg-gradient-to-b from-indigo-950 via-purple-950 to-black rounded-[44px] overflow-hidden">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center px-6 pt-4 text-xs text-white/60">
                      <span>9:41</span>
                      <span>●●●</span>
                    </div>

                    {/* Dynamic Island */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full"></div>

                    {/* Screen Content */}
                    <div className="flex flex-col items-center justify-center h-full pb-10 gap-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-3xl flex items-center justify-center text-4xl shadow-lg shadow-purple-500/50">
                        📱
                      </div>
                      <div className="text-center">
                        <div className="text-white font-bold text-sm">
                          Nova Ultra 25
                        </div>
                        <div className="text-purple-400 text-xs">Pro Max</div>
                      </div>
                      {/* Animated bars */}
                      <div className="flex gap-1 mt-2">
                        {[40, 70, 50, 90, 60].map((h, i) => (
                          <div
                            key={i}
                            className="w-2 bg-gradient-to-t from-purple-600 to-blue-400 rounded-full animate-pulse"
                            style={{
                              height: `${h}%`,
                              maxHeight: "40px",
                              animationDelay: `${i * 0.2}s`,
                            }}
                          ></div>
                        ))}
                      </div>
                    </div>

                    {/* Home Indicator */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-20 h-1 bg-white/30 rounded-full"></div>
                  </div>

                  {/* Side buttons */}
                  <div className="absolute right-0 top-20 w-1 h-12 bg-gray-600 rounded-l-full"></div>
                  <div className="absolute left-0 top-16 w-1 h-8 bg-gray-600 rounded-r-full"></div>
                  <div className="absolute left-0 top-28 w-1 h-8 bg-gray-600 rounded-r-full"></div>
                </div>

                {/* Floating badges */}
                <div className="absolute -right-8 top-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-3 py-2 text-center animate-bounce">
                  <div className="text-lg">📸</div>
                  <div className="text-xs text-white font-bold">200MP</div>
                </div>
                <div className="absolute -left-10 bottom-20 bg-white/10 backdrop-blur-sm border border-white/20