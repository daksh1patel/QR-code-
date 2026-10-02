function DownloadButton({ onDownload }) {
  return (
    <button className="button button-primary download-button" type="button" onClick={onDownload}>
      <svg viewBox="0 0 20 20" aria-hidden="true">
        <path d="M10 2.5v9m0 0 3.5-3.5M10 11.5 6.5 8M3.5 13v3h13v-3" />
      </svg>
      Download PNG
    </button>
  );
}

export default DownloadButton;
