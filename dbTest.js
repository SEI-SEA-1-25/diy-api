const models = require("./models");

const makeNeopet = async () => {
  models.neopet.create({
    hails_from: "Neopia Central",
    species: "Gnorbu",
    name: "Captain Tuan"
  });
};

// makeNeopet();

const updateNeopet = async () => {
    try {
        const options = {
            where: { name: "Captain Tuan" },
            defaults: { 
                land_id: 1,
             }
        }
        const [neopet]  = await models.neopet.findOrCreate(options)
    } catch (err) {
        console.log(err)
    }
}

updateNeopet()