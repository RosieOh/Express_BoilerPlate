const getAllProducts = (req, res) => {
    res.json({ message: "전체 제품 목록입니다." });
  };
  
  const getProductById = (req, res) => {
    res.json({ message: `제품 ID: ${req.params.id}` });
  };
  
  module.exports = { getAllProducts, getProductById };
  