function formatDate() {
  const dateInput = document.getElementById("due");
  const dateValue = dateInput.value;

  if (dateValue) {
    const [year, month, day] = dateValue.split("-");
    const formattedDate = `${day}-${month}-${year}`;
    dateInput.dataset.formatted = formattedDate;
  }
}

function generateDetail() {
  const title = document.getElementById("title").value;
  const mapel = document.getElementById("mapel").value;
  const jenis = document.getElementById("jenis").value;
  const due =
    document.getElementById("due").dataset.formatted ||
    document.getElementById("due").value;
  const detail = document.getElementById("detail").value;
  const action_due = document.getElementById("action_due").value;

  const today = new Date();
  const bulanIndonesia = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  const tanggalHariIni = `${today.getDate()} ${
    bulanIndonesia[today.getMonth()]
  } ${today.getFullYear()}`;

  const output = `
================================
      Tugas (${tanggalHariIni})
      #TugasSekolah
================================
Judul Tugas        : ${title}
Mata Pelajaran     : ${mapel}
Jenis Tugas        : ${jenis}
Deadline           : ${due}
Detail Tugas       : ${detail}
Minggu depan harus : ${action_due}
================================
`;

  document.getElementById("outputText").textContent = output;
  document.getElementById("output").classList.remove("hidden");
}

function copyText() {
  const text = document.getElementById("outputText").textContent;
  const formattedText = `\`\`\`${text}\`\`\``; // Add triple backticks for WhatsApp code formatting
  navigator.clipboard.writeText(formattedText).then(() => {
    alert("Text copied to clipboard");
  });
}

function generateAnnouncement() {
  const ann_title = document.getElementById("ann_title").value;
  const ann_detail = document.getElementById("ann_detail").value;

  const today = new Date();
  const bulanIndonesia = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  const tanggalHariIni = `${today.getDate()} ${
    bulanIndonesia[today.getMonth()]
  } ${today.getFullYear()}`;

  const ann_output = `
================================
    Pengumuman (${tanggalHariIni})
    #InfoSekolah
================================
Judul Pengumuman   : ${ann_title}
Detail Pengumuman  : ${ann_detail}
================================
`;

  document.getElementById("ann_outputText").textContent = ann_output;
  document.getElementById("ann_output").classList.remove("hidden");
}

function copyAnnouncementText() {
  const text = document.getElementById("ann_outputText").textContent;
  const formattedText = `\`\`\`${text}\`\`\``; // Add triple backticks for WhatsApp code formatting
  navigator.clipboard.writeText(formattedText).then(() => {
    alert("Text copied to clipboard");
  });
}
