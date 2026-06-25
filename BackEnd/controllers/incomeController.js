const XLSX = require("xlsx");
const Income = require("../models/Income");

exports.addIncome = async (req, res) => {
  const userId = req.user.id;

  try {
    const { icon, source, amount, date } = req.body;

    if (!source || !amount || !date) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newIncome = new Income({
      userId,
      icon,
      source,
      amount,
      date: new Date(date),
    });

    await newIncome.save();
    res.status(200).json(newIncome);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding income", error: error.message });
  }
};

exports.getAllIncome = async (req, res) => {
  const userId = req.user.id;

  try {
    const incomes = await Income.find({ userId }).sort({ date: -1 });
    res.status(200).json(incomes);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching income sources", error: error.message });
  }
};

exports.deleteAllIncome = async (req, res) => {
  if (req.user.email === "david34@gmail.com") {
        return res.status(403).json({ message: "Data deletion is disabled in Demo Mode." });
    }
  try {
    const userId = req.user.id;
    await Income.deleteMany({ userId });
    res
      .status(200)
      .json({ message: "All income sources deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting all income sources",
      error: error.message,
    });
  }
};

exports.deleteIncomeWithID = async (req, res) => {
  if (req.user.email === "david34@gmail.com") {
        return res.status(403).json({ message: "Data deletion is disabled in Demo Mode." });
    }
  try {
    await Income.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Income deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting income", error: error.message });
  }
};

exports.downloadIncomeExcel = async (req, res) => {
  const userId = req.user.id;
  try {
    const income = await Income.find({ userId }).sort({ date: -1 });

    const data = income.map((item) => ({
      Source: item.source,
      Amount: item.amount,
      Date: item.date.toISOString().split("T")[0],
    }));

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(wb, ws, "Income");
    XLSX.writeFile(wb, "income_details.xlsx");
    res.download("income_details.xlsx");
  } catch (error) {
    res.status(500).json({
      message: "Error downloading income Excel",
      error: error.message,
    });
  }
};
