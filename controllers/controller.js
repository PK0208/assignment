const User = require('../models/users');

exports.createUser = (req, res, next) => {
    const user = new User({
        name: req.body.name,
        mobile: req.body.mobile,
        email: req.body.email,
        password: req.body.password,
        address: {
            street: req.body.address.street,
            locality: req.body.addresslocality,
            city: req.body.addresscity,
            state: req.body.addressstate,
            pincode: req.body.address.pincode,
            coordinatesType: req.body.address.coordinatesType,
            coordinates: req.body.address.coordinates
        }
    })

    user.save().then(
        () => {
            res.status(201).json({
                message: 'User Created successfully',
                userDetails: user,
            })
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            })
        }
    )

}


exports.getAllusers = (req, res, next) => {
    User.find().then(
        (users) => {
            res.status(200).json(users);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            })
        }
    )
}


exports.getUser = (req, res, next) => {
    User.findOne({
        name: req.params.name
    }).then(
        (user) => {
            res.status(200).json(user);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            })
        }
    )
}


exports.updateUser = (req, res, next) => {
    console.log('Update by One');
    const user = new User({
        name: req.params.name,
        mobile: req.body.mobile,
        email: req.body.email,
        password: req.body.password,
        address: {
            street: req.body.address.street,
            locality: req.body.addresslocality,
            city: req.body.addresscity,
            state: req.body.addressstate,
            pincode: req.body.address.pincode,
            coordinatesType: req.body.address.coordinatesType,
            coordinates: req.body.address.coordinates
        }
    });

    var myValues = { name: req.params.name };
    var newvalues = {
        $set: {
            name: req.params.body,
            mobile: req.body.mobile,
            email: req.body.email, address: req.body.address,
        }
    };

    User.updateOne(myValues, newvalues).then(
        () => {
            res.status(200).json({
                message: 'User Updated successfully',
                userDetails: user,
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            })
        }
    )

}

exports.deleteUser = (req, res, next) => {
    User.deleteOne({
        name: req.params.name
    }).then(
        () => {
            res.status(200).json({
                message: 'User Deleted successfully',
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            })
        }
    )
}

exports.getUserByCreatedAt = (req, res, next) => {

    var pageNo = parseInt(req.query.pageNo)
    var size = parseInt(req.query.size)

    console.log('Limit', pageNo)
    console.log('skip', size)

    var query = {}

    query.skip = size * (pageNo - 1)
    query.limit = size
    query.sort = ({ _id: -1 })

    User.find({}, {}, query).then(
        (users) => {
            res.status(200).json(users);
        })
        .catch(
            (error) => {
                res.status(400).json({
                    error: error
                })
            }
        )
}

exports.getUserByCoordinates = (req, res, next) => {
    const long = req.query.long;
    const lat = req.query.lat;

    User.find({
        location: {
            $near: {
                $maxDistance: 1000,
                $geometry: {
                    type: "Point",
                    coordinates: [long, lat]
                }
            }
        }
    }).find((error, results) => {
        if (error) {
            console.log('error', error);
        } else {
            console.log('results', results);
            //results.json(results);
            res.status(200).json(results)
        }

    });

}