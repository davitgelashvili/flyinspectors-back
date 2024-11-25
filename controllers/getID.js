const ClientModal = require("../jsonModels/clientModal");

const getID = async (req, res) => {
    try {
      const { userId } = req.query;
      console.log(userId)
      const user = await ClientModal.find();
  
      return res.status(200).send(user);
    } catch (error) {
      console.log(error)
      return res.status(500).send("Something went wrong while getting cars!");
    }
};

module.exports = {getID}