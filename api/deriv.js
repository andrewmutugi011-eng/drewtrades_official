export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });
  
  const { action, stake, digit } = req.body;

  if (action === 'buy') {
    // This runs on SERVER so LIVE works
    return res.json({
      success: true,
      message: 'Server ready for REAL trade',
      config: {
        symbol: 'R_75',
        contract_type: 'DIGITOVER',
        barrier: digit || 3,
        stake: stake || 1,
        currency: 'USD',
        duration: 1,
        duration_unit: 't'
      }
    });
  }
  return res.json({ status: 'Phoenix REAL backend online' });
}
