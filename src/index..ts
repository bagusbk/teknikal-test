import app from "./app"

const PORT = process.env.POST || 3000
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));