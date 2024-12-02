const servicesModal = require("../jsonModels/servicesModal");

const editServices = async (req, res) => {
    try {
      const { id, title, description } = req.body;
      // const { userId, status } = req.query;
      
      const clients = await servicesModal.find();
      console.log(description)
      
      const filtered = clients.filter((item) => item.id === id)
      console.log(filtered)

      await servicesModal.findOneAndUpdate(
        { id: id },
        { title: title },
        { description: description }
      );
    
    
      // const send = await clients.save();
    
      // return res.status(200).send(send);
      return res.status(200).send("Car seat has been reserved!");
    } catch (error) {
        return res.status(500).send("Something went wrong while creating car!");
    }
};

module.exports = {editServices}