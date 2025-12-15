import axios from "axios";

export default async function handler(req, res) {
  try {
    const { dramaId } = req.query;

    if (!dramaId) {
      return res.status(400).json({ error: "dramaId wajib diisi" });
    }

    const DRAMABOX_URL = "https://dramabox.sansekai.my.id";

    const response = await fetch(`${DRAMABOX_URL}/detail?dramaId=${dramaId}`);

    const data = await response.json();

    return res.status(200).json({
      success: true,
      source: "dramabox",
      data
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Gagal ambil data Dramabox",
      error: e.toString()
    });
  }
}
