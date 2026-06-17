const getTopNotifications =
    require("../utils/priorityInbox");

const getPriorityNotifications =
    async (req, res) => {

    const notifications = [
        {
            id: 1,
            type: "Placement",
            message: "TCS Hiring"
        },
        {
            id: 2,
            type: "Event",
            message: "Tech Fest"
        },
        {
            id: 3,
            type: "Result",
            message: "Semester Results"
        }
    ];

    const result =
        getTopNotifications(notifications);

    res.status(200).json(result);
};

module.exports = {
    getPriorityNotifications
};