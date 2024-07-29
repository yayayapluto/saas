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
==========================================
              Tugas (${tanggalHariIni})
==========================================
Judul Tugas        : ${title}
Mata Pelajaran     : ${mapel}
Jenis Tugas        : ${jenis}
Deadline           : ${due}
Detail Tugas       : ${detail}
Minggu depan harus : ${action_due}
==========================================
`;

  document.getElementById("outputText").textContent = output;
  document.getElementById("output").classList.remove("hidden");
}

function copyText() {
  const text = document.getElementById("outputText").textContent;
  navigator.clipboard.writeText(text).then(() => {
    alert("Text copied to clipboard");
  });
}
