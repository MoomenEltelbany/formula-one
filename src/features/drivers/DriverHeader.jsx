function DriverHeader({ driver, image }) {
    return (
        <>
            <h2 className="text-4xl mb-6 text-red-500 font-extrabold text-center tracking-widest uppercase drop-shadow-md">
                🏎️ Driver Spotlight: {driver.name} {driver.surname}
            </h2>
            <img
                src={image}
                alt={`Photo of ${driver.name} ${driver.surname}`}
                className="w-80 h-80 object-cover object-top rounded-lg border-2 border-red-500 shadow-md"
            />
        </>
    );
}

export default DriverHeader;
