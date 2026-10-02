import { useRef, useState } from 'react';
import QRInput from './components/QRInput.jsx';
import QRPreview from './components/QRPreview.jsx';
import DownloadButton from './components/DownloadButton.jsx';

function App() {
  const [input, setInput] = useState('');
  const [contentType, setContentType] = useState('text');
  const [qrValue, setQrValue] = useState('');
  const [validationMessage, setValidationMessage] = useState('');
  const canvasRef = useRef(null);

  const handleGenerate = () => {
    const trimmedInput = input.trim();

    if (!trimmedInput) {
      setValidationMessage('Please enter something to create a QR code.');
      setQrValue('');
      return;
    }

    if (contentType === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedInput)) {
      setValidationMessage('Please enter a valid email address.');
      setQrValue('');
      return;
    }

    if (contentType === 'phone' && trimmedInput.replace(/\D/g, '').length < 5) {
      setValidationMessage('Please enter a phone number with at least 5 digits.');
      setQrValue('');
      return;
    }

    let value = trimmedInput;
    if (contentType === 'url') {
      try {
        const url = new URL(trimmedInput);
        if (url.protocol !== 'http:' && url.protocol !== 'https:') {
          throw new Error('Unsupported URL protocol');
        }
      } catch {
        setValidationMessage('Please enter a valid URL starting with http:// or https://.');
        setQrValue('');
        return;
      }
    }

    if (contentType === 'phone') {
      value = `tel:${trimmedInput}`;
    } else if (contentType === 'email') {
      value = `mailto:${trimmedInput}`;
    }

    setQrValue(value);
    setValidationMessage('');
  };

  const handleClear = () => {
    setInput('');
    setQrValue('');
    setValidationMessage('');
  };

  const handleDownload = () => {
    if (!canvasRef.current) {
      setValidationMessage('Generate a QR code before downloading it.');
      return;
    }

    const downloadLink = document.createElement('a');
    downloadLink.href = canvasRef.current.toDataURL('image/png');
    downloadLink.download = 'qr-code.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    downloadLink.remove();
  };

  return (
    <main className="page-shell">
      <section className="generator-card" aria-labelledby="page-title">
        <div className="brand-mark" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
        <p className="eyebrow">Simple. Fast. Yours.</p>
        <h1 id="page-title">QR Code Generator</h1>
        <p className="intro">
          Turn text, a link, a phone number, or an email into a scannable QR code.
        </p>

        <QRInput
          input={input}
          contentType={contentType}
          validationMessage={validationMessage}
          onInputChange={(value) => {
            setInput(value);
            if (validationMessage) setValidationMessage('');
          }}
          onContentTypeChange={(value) => {
            setContentType(value);
            setValidationMessage('');
          }}
        />

        <button
          className="button button-primary generate-button"
          type="button"
          onClick={handleGenerate}
          disabled={!input.trim()}
        >
          Generate QR Code
        </button>

        <QRPreview value={qrValue} canvasRef={canvasRef} />

        {qrValue && (
          <div className="action-row">
            <DownloadButton onDownload={handleDownload} />
            <button className="button button-secondary" type="button" onClick={handleClear}>
              Clear
            </button>
          </div>
        )}
        {!qrValue && input && (
          <button className="button button-secondary clear-button" type="button" onClick={handleClear}>
            Clear
          </button>
        )}
      </section>
      <footer className="page-footer">Made for sharing, one scan at a time.</footer>
    </main>
  );
}

export default App;
