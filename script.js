// Tunggu hingga seluruh dokumen HTML siap (DOM Ready)
$(function () {
  // Shorthand for $(document).ready()

  // --- Inisialisasi Typed.js ---
  const typedOptions = {
    strings: [
      "Web Developer",
      "Blockchain Enthusiast",
      "Mahasiswa Teknik Informatika",
      "Problem Solver",
      "Coffee Lover",
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1500,
    startDelay: 500,
    loop: true,
    showCursor: true,
    cursorChar: "|",
  };
  if ($("#typing-effect").length) {
    const typed = new Typed("#typing-effect", typedOptions);
  }

  // --- Kode Efek Glow Scroll Foto ---
  let lastScrollTop = 0;
  const heroPhoto = $(".hero-photo img");
  const heroSection = $("#hero");
  if (heroPhoto.length > 0 && heroSection.length > 0) {
    $(window).on("scroll", function () {
      let currentScrollTop = $(this).scrollTop();
      let heroOffsetTop = heroSection.offset() ? heroSection.offset().top : 0;
      let heroBottom = heroOffsetTop + heroSection.outerHeight();

      if (currentScrollTop > 50 && currentScrollTop < heroBottom + 100) {
        if (currentScrollTop > lastScrollTop) {
          heroPhoto.removeClass("glow-bottom").addClass("glow-top");
        } else if (currentScrollTop < lastScrollTop) {
          heroPhoto.removeClass("glow-top").addClass("glow-bottom");
        }
      } else {
        heroPhoto.removeClass("glow-top glow-bottom");
      }
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    });
  }

  // ================== Fungsi Carousel Keahlian ==================
  const carouselTrack = $(".carousel-track");
  const carouselWrapper = $(".carousel-wrapper");
  if (carouselTrack.length > 0 && carouselWrapper.length > 0) {
    const cards = $(".carousel-track .card");
    if (cards.length > 0) {
      let isDragging = false;
      let startX,
        scrollLeft,
        currentTranslateX = 0;
      let autoScrollInterval;
      const autoScrollSpeed = 20;
      const autoScrollIntervalTime = 50;
      const cardWidth = cards.first().outerWidth(true) || 0;
      const totalOriginalWidth = cardWidth * (cards.length / 2);

      function startAutoScroll() {
        if (totalOriginalWidth <= 0) return;
        clearInterval(autoScrollInterval);
        autoScrollInterval = setInterval(() => {
          currentTranslateX -=
            autoScrollSpeed / (1000 / autoScrollIntervalTime);

          if (Math.abs(currentTranslateX) >= totalOriginalWidth) {
            currentTranslateX += totalOriginalWidth;
          }
          carouselTrack.css("transform", `translateX(${currentTranslateX}px)`);
          carouselTrack.css("transition", "none");
        }, autoScrollIntervalTime);
      }

      function stopAutoScroll() {
        clearInterval(autoScrollInterval);
      }

      startAutoScroll();
      carouselWrapper.on("mouseenter", stopAutoScroll);
      carouselWrapper.on("mouseleave", startAutoScroll);
      carouselWrapper.on("mousedown touchstart", function (e) {
        if (totalOriginalWidth <= 0) return;
        isDragging = true;
        startX =
          e.type === "touchstart" && e.originalEvent
            ? e.originalEvent.touches[0].pageX
            : e.pageX;
        scrollLeft = currentTranslateX;
        carouselWrapper.addClass("active");
        carouselTrack.css("transition", "none");
        stopAutoScroll();
      });
      $(document).on("mousemove touchmove", function (e) {
        if (!isDragging) return;
        const x =
          e.type === "touchmove" && e.originalEvent
            ? e.originalEvent.touches[0].pageX
            : e.pageX;
        const walk = (x - startX) * 1.5;
        currentTranslateX = scrollLeft + walk;
        const maxTranslate = 0;
        const minTranslate = -totalOriginalWidth;
        if (currentTranslateX > maxTranslate) currentTranslateX = maxTranslate;
        if (currentTranslateX < minTranslate) currentTranslateX = minTranslate;
        carouselTrack.css("transform", `translateX(${currentTranslateX}px)`);
      });
      $(document).on("mouseup touchend", function () {
        if (!isDragging) return;
        isDragging = false;
        carouselWrapper.removeClass("active");
        if (totalOriginalWidth > 0) {
          if (Math.abs(currentTranslateX) >= totalOriginalWidth) {
            currentTranslateX += totalOriginalWidth;
            carouselTrack.css(
              "transform",
              `translateX(${currentTranslateX}px)`
            );
          } else if (currentTranslateX > 0) {
            currentTranslateX -= totalOriginalWidth;
            carouselTrack.css(
              "transform",
              `translateX(${currentTranslateX}px)`
            );
          }
        }
        if (!carouselWrapper.is(":hover")) {
          startAutoScroll();
        }
      });
      $(window).on("blur", () => {
        if (isDragging) {
          isDragging = false;
          carouselWrapper.removeClass("active");
          if (!carouselWrapper.is(":hover")) {
            startAutoScroll();
          }
        }
      });
    }
  }

  // ================== Fungsi Chart Bitcoin (Menggunakan Candlestick Chart.js) ==================
  const chartCanvas = document.getElementById("btc-chart"); // Targetkan canvas
  const currentPriceContainer = $("#btc-price-current");
  const loadingIndicator = $(".loading-indicator");
  let btcChartInstance = null; // Variabel untuk menyimpan instance Chart.js
  let lastBtcPrice = 0;

  async function fetchBitcoinDataAndDrawChart() {
    if (
      !chartCanvas ||
      chartCanvas.tagName !== "CANVAS" ||
      !currentPriceContainer.length ||
      !loadingIndicator.length
    ) {
      console.error(
        "Elemen canvas '#btc-chart' atau elemen harga/loading tidak ditemukan/valid."
      );
      if (loadingIndicator.length)
        loadingIndicator.text("Error: Elemen chart tidak valid.");
      return;
    }

    // Reset state sebelum fetch
    loadingIndicator.show().text("Memuat data chart...");
    currentPriceContainer.text("Memuat harga saat ini...");
    // Hancurkan chart lama jika ada sebelum fetch baru
    if (btcChartInstance) {
      btcChartInstance.destroy();
      btcChartInstance = null;
    }

    try {
      // 1. Ambil data OHLC 90 hari
      const ohlcResponse = await fetch(
        "https://api.coingecko.com/api/v3/coins/bitcoin/ohlc?vs_currency=usd&days=90"
      );

      // Cek status respons secara manual karena fetch tidak reject promise untuk 4xx/5xx
      if (!ohlcResponse.ok) {
        // Jika status 429, beri pesan spesifik
        if (ohlcResponse.status === 429) {
          throw new Error(
            `Rate Limit: Terlalu banyak permintaan ke API CoinGecko. Coba lagi nanti. (Status: ${ohlcResponse.status})`
          );
        } else {
          throw new Error(
            `Gagal mengambil data OHLC: ${ohlcResponse.status} ${ohlcResponse.statusText}`
          );
        }
      }
      const ohlcData = await ohlcResponse.json();

      if (!ohlcData || !Array.isArray(ohlcData) || ohlcData.length === 0) {
        throw new Error("Data OHLC tidak valid atau kosong.");
      }

      const financialData = ohlcData.map((item) => ({
        x: item[0],
        o: item[1],
        h: item[2],
        l: item[3],
        c: item[4],
      }));

      // 2. Ambil harga saat ini
      const currentResponse = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
      );
      if (!currentResponse.ok) {
        // Gagal ambil harga saat ini tidak fatal, chart masih bisa tampil
        console.warn(
          `Gagal mengambil harga saat ini: ${currentResponse.status} ${currentResponse.statusText}`
        );
        currentPriceContainer.text("Gagal memuat harga saat ini.");
        // Jangan throw error, lanjutkan ke chart
      } else {
        const currentData = await currentResponse.json();
        if (
          !currentData ||
          !currentData.bitcoin ||
          typeof currentData.bitcoin.usd === "undefined"
        ) {
          console.warn("Data harga saat ini tidak valid.");
          currentPriceContainer.text("Data harga saat ini tidak valid.");
        } else {
          const currentPrice = currentData.bitcoin.usd;
          const formatter = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          });
          currentPriceContainer.text(
            `Harga Saat Ini: ${formatter.format(currentPrice)}`
          );

          if (lastBtcPrice !== 0 && currentPrice < lastBtcPrice) {
            currentPriceContainer.addClass("down");
          } else {
            currentPriceContainer.removeClass("down");
          }
          lastBtcPrice = currentPrice;
        }
      }

      // 3. Render Chart.js Candlestick
      loadingIndicator.hide();

      if (typeof Chart === "undefined") {
        console.error("Chart.js library tidak dimuat.");
        loadingIndicator.show().text("Gagal memuat library chart.");
        return;
      }

      const chartData = {
        datasets: [
          {
            label: "Harga Bitcoin (OHLC)",
            data: financialData,
          },
        ],
      };

      const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            mode: "index",
            intersect: false,
            backgroundColor: "rgba(26, 26, 46, 0.9)",
            titleColor: "#c7a4ff",
            bodyColor: "#e0e0e0",
          },
          colors: {
            enabled: true,
            forceOverride: true,
          },
        },
        scales: {
          x: {
            type: "time",
            time: {
              unit: "day",
              tooltipFormat: "PP",
            },
            ticks: {
              color: "rgba(224, 224, 224, 0.7)",
              maxRotation: 0,
              autoSkip: true,
              maxTicksLimit: 10,
            },
            grid: {
              color: "rgba(70, 130, 180, 0.1)",
            },
          },
          y: {
            ticks: {
              color: "rgba(224, 224, 224, 0.7)",
            },
            grid: {
              color: "rgba(70, 130, 180, 0.1)",
            },
          },
        },
      };

      // Buat instance baru (karena sudah dihancurkan di awal)
      console.log("Creating new Chart.js candlestick instance...");
      const ctx = chartCanvas.getContext("2d");
      if (!ctx) {
        console.error("Could not get 2D context from canvas.");
        loadingIndicator
          .show()
          .text("Error: Gagal mendapatkan konteks canvas.");
        return;
      }

      btcChartInstance = new Chart(ctx, {
        type: "candlestick",
        data: chartData,
        options: chartOptions,
      });
      console.log(
        "New Chart.js candlestick instance created:",
        btcChartInstance
      );
    } catch (error) {
      console.error("Error fetching/drawing Bitcoin candlestick chart:", error);
      // Tampilkan pesan error yang lebih spesifik jika ada
      const errorMessage = error.message.includes("Rate Limit")
        ? error.message // Tampilkan pesan rate limit
        : "Error saat memproses data chart."; // Pesan generik
      if (loadingIndicator.length) loadingIndicator.show().text(errorMessage);
      if (
        currentPriceContainer.length &&
        !error.message.includes("harga saat ini")
      )
        // Jangan timpa error harga jika error utama bukan dari harga
        currentPriceContainer.text("Gagal memuat harga.");
      // Pastikan chart dihancurkan jika ada error
      if (btcChartInstance) {
        btcChartInstance.destroy();
        btcChartInstance = null;
      }
    }
  }

  // Panggil fungsi fetch data jika container chart (canvas) ada
  if (chartCanvas && chartCanvas.tagName === "CANVAS") {
    setTimeout(fetchBitcoinDataAndDrawChart, 150); // Delay 150ms

    // Interval untuk refresh harga saat ini (tetap sama)
    setInterval(async () => {
      // Hanya refresh harga jika chart berhasil dimuat sebelumnya
      if (!btcChartInstance || !currentPriceContainer.length) return;
      try {
        const currentResponse = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
        );
        if (!currentResponse.ok) return;
        const currentData = await currentResponse.json();
        if (
          !currentData ||
          !currentData.bitcoin ||
          typeof currentData.bitcoin.usd === "undefined"
        )
          return;
        const currentPrice = currentData.bitcoin.usd;
        const formatter = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        });
        currentPriceContainer.text(
          `Harga Saat Ini: ${formatter.format(currentPrice)}`
        );
        if (lastBtcPrice !== 0 && currentPrice < lastBtcPrice) {
          currentPriceContainer.addClass("down");
        } else {
          currentPriceContainer.removeClass("down");
        }
        lastBtcPrice = currentPrice;
      } catch (e) {
        console.warn("Failed to refresh current price:", e);
        // Mungkin tampilkan pesan error kecil di area harga?
        // currentPriceContainer.text("Gagal refresh harga.");
      }
    }, 60000); // 1 menit
  } else {
    console.warn(
      "Element with id 'btc-chart' is not a canvas or not found. Chart will not be initialized."
    );
    if (loadingIndicator.length)
      loadingIndicator.text("Error: Elemen chart tidak ditemukan/valid.");
  }

  const modalOpenButtons = $(".btn-detail");
  const modalCloseButtons = $(".modal-close-button");
  const modals = $(".modal");

  modalOpenButtons.on("click", function () {
    const modalId = $(this).data("modal-target");
    const targetModal = $("#" + modalId);
    if (targetModal.length) {
      targetModal.addClass("active");
      $("body").css("overflow", "hidden"); // Mencegah scroll body saat modal terbuka
    }
  });

  function closeModal(modal) {
    if (modal.hasClass("active")) {
      modal.removeClass("active");
      $("body").css("overflow", ""); // Kembalikan scroll body
    }
  }

  modalCloseButtons.on("click", function () {
    const modalToClose = $(this).closest(".modal");
    closeModal(modalToClose);
  });

  // Tutup modal jika klik di luar area konten modal (overlay)
  modals.on("click", function (event) {
    if ($(event.target).is(".modal")) {
      // Pastikan yang diklik adalah overlay modal, bukan kontennya
      closeModal($(this));
    }
  });

  // Tutup modal dengan tombol Escape
  $(document).on("keydown", function (event) {
    if (event.key === "Escape") {
      modals.each(function () {
        closeModal($(this));
      });
    }
  });

  // ===========================================================
}); // Akhir $(function() { ... });
