const Tea = require('./TeaModel');

const TeaController = {};
// Logic for handling requests and talking to the model; where you get, create, update, & delete teas
// const TeaController = {
//   createTea (req, res, next) {
//     console.log("req.body", req.body);
//     const { name, origin, caffeineLevel, image, type, description, color } = req.body
//     console.log("name",name)
//     const newTea = Tea.create(req.body)
//       .then((createdTea) => res.locals.teas = createdTea)
//       .catch((err) => {
//         console.error('Error creating tea', err);
//         return next({
//           log: 'TeaController.createTea: Error creating tea in db',
//           status: 404,
//           message: { err: 'Failed to create tea' },
//         });
//       });
//   },
// };

TeaController.createTea = async (req, res, next) => {
  const { name, origin, caffeineLevel, image, type, description, color } =
    req.body;
  //console.log(req.body);
  //console.log("name",name)
  const newTea = await Tea.create({
    name: name,
    origin: origin,
    caffeineLevel: caffeineLevel,
    image: image,
    type: type,
    description: description,
    color: color,
  });
  console.log('newTea', newTea);
  res.locals.teas = newTea;
  //console.log(res.locals.teas)
  return res.status(201).json(newTea)
};


TeaController.getTeas = (req, res, next) => {
  Tea.find({})
    .then((teas) => {
      console.log(teas);
      res.locals.teas = teas;
      next();
    })
    .catch((err) => {
      next({
        log: 'error in get teas',
        status: 500,
        message: { err: 'error in get teas' },
      });
    });
};

module.exports = TeaController;
