const test = (req, res) => {
    res.status(200).json({ message: 'hello' });
};

export {test};