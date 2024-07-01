import { useState, CSSProperties } from 'react';

interface WebsitePreviewProps {
  url: string;
  style?: CSSProperties;
}

const WebsitePreview = ({ url, style }: WebsitePreviewProps) => {
  const [loading, setLoading] = useState(true);

  return (
    <div style={{ ...containerStyle, ...style }}>
      {loading && <div style={loadingStyle}>Loading...</div>}
      <a href={url} target="_blank" rel="noopener noreferrer" style={linkStyle}>
        <iframe
          src={url}
          style={{ ...iframeStyle, display: loading ? 'none' : 'block' }}
          title="Website Preview"
          onLoad={() => setLoading(false)}
        />
      </a>
    </div>
  );
};

const containerStyle: CSSProperties = {
  position: 'relative',
  width: '100%',
  height: '500px',
  border: '1px solid #ccc',
  borderRadius: '10px',
  overflow: 'hidden',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  margin: '20px 0',
};

const iframeStyle: CSSProperties = {
  width: '100%',
  height: '100%',
  border: 'none',
  borderRadius: '10px',
};

const linkStyle: CSSProperties = {
  display: 'block',
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 1,
  padding:'20px'
};

const loadingStyle: CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: '#999',
  fontSize: '18px',
};

export default WebsitePreview;

