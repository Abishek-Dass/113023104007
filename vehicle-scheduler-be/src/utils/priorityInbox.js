const priorityMap = {
    Placement: 3,
    Result: 2,
    Event: 1
};

function getTopNotifications(notifications, limit = 10) {

    return notifications
        .map(notification => ({
            ...notification,
            score: priorityMap[notification.type] || 0
        }))
        .sort((a, b) => b.score - a.score)
        .slice(0, limit);
}

module.exports = getTopNotifications;