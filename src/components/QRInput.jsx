const contentTypes = [
  { value: 'text', label: 'Text' },
  { value: 'url', label: 'URL' },
  { value: 'phone', label: 'Phone number' },
  { value: 'email', label: 'Email' },
];

const placeholders = {
  text: 'Type a message or any text...',
  url: 'https://example.com',
  phone: '+1 555 123 4567',
  email: 'hello@example.com',
};

function QRInput({
  input,
  contentType,
  validationMessage,
  onInputChange,
  onContentTypeChange,
}) {
  return (
    <div className="input-section">
      <label className="field-label" htmlFor="content-type">
        What should your QR code contain?
      </label>
      <select
        className="content-type-select"
        id="content-type"
        value={contentType}
        onChange={(event) => onContentTypeChange(event.target.value)}
      >
        {contentTypes.map((type) => (
          <option key={type.value} value={type.value}>
            {type.label}
          </option>
        ))}
      </select>

      <label className="field-label input-label" htmlFor="qr-input">
        {contentType === 'phone'
          ? 'Phone number'
          : contentType === 'email'
            ? 'Email address'
            : contentType === 'url'
              ? 'Website address'
              : 'Your text'}
      </label>
      <input
        className="text-input"
        id="qr-input"
        type={contentType === 'email' ? 'email' : contentType === 'url' ? 'url' : 'text'}
        value={input}
        onChange={(event) => onInputChange(event.target.value)}
        placeholder={placeholders[contentType]}
        aria-describedby={validationMessage ? 'input-validation' : undefined}
      />
      {validationMessage && (
        <p className="validation-message" id="input-validation" role="alert">
          {validationMessage}
        </p>
      )}
    </div>
  );
}

export default QRInput;
