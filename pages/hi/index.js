export default function handler(req, res) {
    res.status(200).json({ text: 'Hello' })
    res.end(JSON.stringify({ 'a':1 }));
}
