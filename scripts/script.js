const downloadBtn = document.getElementById("download-btn");

if (downloadBtn) {
  downloadBtn.addEventListener("click", () => {
    try {
      const link = document.createElement("a");
      link.href =
        "./Resources/PDF/CV-Luis-Angel-Marin-Rodriguez-2025_compressed.pdf";
      link.download = "CV-Luis-Angel-Marin-Rodriguez-2025_compressed.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading CV:", error);
      alert("Sorry, there was an error downloading the CV. Please try again.");
    }
  });
} else {
  console.error("Download button not found!");
}
