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

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Dramabox error: ${response.status}`);
    }

    const data = await response.json();

    return res.status(200).json({
      success: true,
      dramaId,
      data
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Serverless function crashed",
      detail: error.message
    });
  }
}
