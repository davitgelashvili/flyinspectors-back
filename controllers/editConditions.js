const ConditionsModal = require("../jsonModels/ConditionsModal");

const editConditions = async (req, res) => {
    try {
      const { 
        title,
        description
      } = req.body;

      await ConditionsModal.findOneAndUpdate(
        { 
          title: {
            en: title.en,
            ka: title.ka
          },
          description: {
              en: description.en,
              ka: description.ka
          }
        }
      );

      return res.status(200).send("Car seat has been reserved!");
    } catch (error) {
        return res.status(500).send("Something went wrong while creating car!");
    }
};

module.exports = {editConditions}