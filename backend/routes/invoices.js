const express = require("express");
const router = express.Router();

router.post("/invoices", (req, res) => {
  const invoice = req.body;
  console.log("Invoice received:", invoice);
  res.json({ success: true, invoiceId: Date.now() });
});

router.get("/invoices", (req, res) => {
  res.json([{ invoiceId: 1, party: "ABC Pvt Ltd", amount: 5000 }]);
});

module.exports = router;
