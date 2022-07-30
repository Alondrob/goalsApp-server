const getGoals = (req, res) => {
    res.status(200).json({message: 'Get goals'})
}

const setGoal = (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({message: 'Set goal'})
}

const updateGoal = (req, res) => {
    console.log('request object', req)
    res.status(200).json({message: `Update goal ${req.params.id}`})
}

const deleteGoal = (req, res) => {
    res.status(200).json({message: 'Delete goals'})
}



module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}