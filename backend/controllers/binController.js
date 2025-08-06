const Bin = require('../models/Bin');

exports.createBin = async (req, res) => {
    try {
        const bin = await Bin.create(req.body);
        res.status(201).json(bin);
    } catch (err) {
        res.status(400).json({ error: 'Failed to create bin' });
    }
};

exports.getBins = async (req, res) => {
    const bins = await Bin.find();
    res.json(bins);
};

exports.updateBin = async (req, res) => {
    try {
        const bin = await Bin.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(bin);
    } catch (err) {
        res.status(400).json({ error: 'Update failed' });
    }
};

exports.deleteBin = async (req, res) => {
    try {
        await Bin.findByIdAndDelete(req.params.id);
        res.json({ message: 'Bin deleted' });
    } catch (err) {
        res.status(400).json({ error: 'Deletion failed' });
    }
};
