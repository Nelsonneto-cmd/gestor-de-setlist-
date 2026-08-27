import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
const API_URL = import.meta.env.VITE_API || 'https://ecommerce-server-da8db68ou01pc73c70c8g.onrender.com';
  const [setlists, setSetlists] = useState([]);

  const [title, setTitle] = useState('');
  const [bandName, setBandName] = useState('');
  
  const [selectedSetlist, setSelectedSetlist] = useState(null);
  const [songTitle, setSongTitle] = useState('');
  const [songArtist, setSongArtist] = useState('');
  const [songKey, setSongKey] = useState('');

  const fetchSetlists = async () => {

    try {
    const res = await axios.get(`${API_URL}/api/setlists`);
      setSetlists(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchSetlists();
  }, []);

  const handleCreateSetlist = async (e) => {
    e.preventDefault();
    if (!title || !bandName) return;
    await axios.post(`${API_URL}/api/setlists`, { title, bandName });
    setTitle('');
    setBandName('');
    fetchSetlists();
  };

  const handleAddSong = async (e) => {
    e.preventDefault();
    if (!selectedSetlist || !songTitle) return;
    await axios.post(`${API_URL}/api/setlists/${selectedSetlist}/songs`, {
      title: songTitle,
      artist: songArtist,
      key: songKey
    });
    setSongTitle('');
    setSongArtist('');
    setSongKey('');
    fetchSetlists();
  };

  const handleDeleteSetlist = async (id) => {
    await axios.delete(`${API_URL}/api/setlists/${id}`);
    fetchSetlists();
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1 className="no-print">Gestor de Setlists</h1>

      {/* Criar Setlist */}
      <section className="no-print" style={{ background: '#f4f4f4', padding: '1rem', borderRadius: '8px', marginBottom: '2rem' }}>
        <h3>Novo Setlist</h3>
        <form onSubmit={handleCreateSetlist}>
          <input placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)} style={{ marginRight: '8px' }} />
          <input placeholder="Banda" value={bandName} onChange={(e) => setBandName(e.target.value)} style={{ marginRight: '8px' }} />
          <button type="submit">Criar</button>
        </form>
      </section>

      {/* Lista de Setlists */}
      <h2 className="no-print">Setlists Guardados</h2>
      {setlists.map((s) => (
        <div key={s._id} className="setlist-card" style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2>{s.title} <small>({s.bandName})</small></h2>
            <div className="no-print">
              <button onClick={handlePrint} style={{ marginRight: '8px', cursor: 'pointer' }}>🖨️ Imprimir / PDF</button>
              <button onClick={() => handleDeleteSetlist(s._id)} style={{ color: 'red', cursor: 'pointer' }}>Apagar</button>
            </div>
          </div>

          <ol style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
            {s.songs && s.songs.map((song, idx) => (
              <li key={idx}>
                <strong>{song.title}</strong> {song.artist && `— ${song.artist}`} {song.key && <span style={{ color: '#555' }}>[{song.key}]</span>}
              </li>
            ))}
          </ol>

          {/* Form para adicionar música */}
          <form className="no-print" onSubmit={handleAddSong} style={{ marginTop: '1rem', borderTop: '1px solid #eee', paddingTop: '1rem' }}>
            <h4>+ Adicionar Música</h4>
            <input placeholder="Música" value={selectedSetlist === s._id ? songTitle : ''} onChange={(e) => { setSelectedSetlist(s._id); setSongTitle(e.target.value); }} style={{ marginRight: '8px' }} />
            <input placeholder="Artista" value={selectedSetlist === s._id ? songArtist : ''} onChange={(e) => { setSelectedSetlist(s._id); setSongArtist(e.target.value); }} style={{ marginRight: '8px' }} />
            <input placeholder="Tom (ex: Am)" value={selectedSetlist === s._id ? songKey : ''} onChange={(e) => { setSelectedSetlist(s._id); setSongKey(e.target.value); }} style={{ marginRight: '8px' }} />
            <button type="submit" onClick={() => setSelectedSetlist(s._id)}>Adicionar</button>
          </form>
        </div>
      ))}
    </div>
  );
}

export default App;