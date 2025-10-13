/* eslint-disable react-refresh/only-export-components */
function DriverDetailsPage() {
    return <div className="h-full bg-teal-600">DriverDetailsPage</div>;
}

export async function loader({ params }) {
    console.log(params.driverId);
}

export default DriverDetailsPage;
