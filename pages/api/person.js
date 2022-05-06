let a = 0;

export default function handler(req, res) {
  res.status(200)
    .json({ text: a++ });
}
