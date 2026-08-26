const express = require('express');
const router = express.Router();
const Setlist = require('../models/Setlist');

// Listar todos
router.get('/', async (req, res) => {
  try {
    const setlists = await Setlist.find();
    res.json(setlists);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Criar Setlist
router.post('/', async (req, res) => {
  const { title, bandName } = req.body;
  try {
    const newSetlist = new Setlist({ title, bandName, songs: [] });
    await newSetlist.save();
    res.status(201).json(newSetlist);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Adicionar Música a um Setlist
router.post('/:id/songs', async (req, res) => {
  try {
    const setlist = await Setlist.findById(req.params.id);
    if (!setlist) return res.status(404).json({ message: 'Setlist não encontrado' });

    setlist.songs.push(req.body); // { title, artist, key, duration }
    await setlist.save();
    res.status(201).json(setlist);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Apagar Setlist
router.delete('/:id', async (req, res) => {
  try {
    await Setlist.findByIdAndDelete(req.params.id);
    res.json({ message: 'Setlist removido com sucesso' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;