const { getDepots, getVehicles } =
    require("../services/vehicleService");

const knapsack =
    require("../utils/knapsack");

const getData = async (req, res) => {
    try {

        const depotResponse =
            await getDepots();

        const vehicleResponse =
            await getVehicles();

        const depots =
            depotResponse.depots;

        const vehicles =
            vehicleResponse.vehicles;

        const schedules = depots.map(
            depot => {

                const result =
                    knapsack(
                        vehicles,
                        depot.MechanicHours
                    );

                return {
                    depotId: depot.ID,
                    mechanicHours:
                        depot.MechanicHours,
                    totalImpact:
                        result.maxImpact,
                    selectedTasks:
                        result.selectedTasks
                };
            }
        );

        res.json({
            schedules
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: error.message
        });
    }
};

module.exports = {
    getData
};