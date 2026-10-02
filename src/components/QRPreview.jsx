import { QRCodeCanvas } from 'qrcode.react';

function QRPreview({ value, canvasRef }) {
  return (
    <section className={`preview-section${value ? ' has-code' : ''}`} aria-live="polite">
      {value ? (
        <>
          <div className="qr-frame">
            <QRCodeCanvas
              ref={canvasRef}
              value={value}
              size={220}
              level="H"
              includeMargin
            />
          </div>
          <p className="preview-caption">Your QR code is ready to scan.</p>
        </>
      ) : (
        <div className="empty-preview">
          <div className="empty-qr-icon" aria-hidden="true">
            <span />
            <span />
            <span />
            <i />
          </div>
          <p>Your QR code will appear here</p>
          <span>Enter your content above and select Generate.</span>
        </div>
      )}
    </section>
  );
}

export default QRPreview;
