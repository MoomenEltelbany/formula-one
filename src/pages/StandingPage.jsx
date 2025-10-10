import ConstructorStanding from "../features/standings/ConstructorStanding";
import DriversStandingTable from "../features/standings/DriversStandingTable";
import StandingHeader from "../features/standings/StandingHeader";

function StandingPage() {
    return (
        <>
            <StandingHeader />
            <DriversStandingTable />
            <ConstructorStanding />
        </>
    );
}

export default StandingPage;
