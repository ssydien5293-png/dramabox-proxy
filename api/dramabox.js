export default async function handler(req, res) {
  try {
    const { dramaId } = req.query;

    if (!dramaId) {
      return res.status(400).json({
        success: false,
        error: "dramaId wajib diisi"
      });
    }

    const url = `https://dramabox.sansekai.my.id/?dramaId=${dramaId}`;

    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0",
        "Accept": "text/html"
      }
    });

    const html = await response.text();

    return res.status(200).json({
      success: true,
      dramaId,
      rawType: "html",
      htmlSnippet: html.slice(0, 3000)
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
}
