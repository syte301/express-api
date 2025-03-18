import express from 'express';

const router = express.Router();

const getUserDetails = async (req, res) => {
    res.status(200).send(`Users detail for: ${req.params.id} `);
};


router
  .route("/")
  .get( async (req, res) => {
    res.status(200).send('Users list')
})
.post(async (req, res) => {
   res.status(201).send(req.body);
});


router
  .route("/:id")
  .get(getUserDetails)
  .put(async (req, res) => {
     res.status(200).send(req.body);
  })
.delete(async (req, res) => {
    res.status(200).send(`Users ${req.params.id} is deleted`)
});



export default router;