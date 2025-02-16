const db = require("../config/mariaDb");

// 모든 유저 가져오기
const getUsers = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM users");
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "데이터베이스 오류" });
  }
};

// 특정 유저 가져오기
const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await db.query("SELECT * FROM users WHERE id = ?", [id]);
    if (rows.length === 0) {
      return res.status(404).json({ error: "유저를 찾을 수 없음" });
    }
    res.json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "데이터베이스 오류" });
  }
};

module.exports = { getUsers, getUserById };
