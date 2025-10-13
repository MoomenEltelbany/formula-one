function DriverHeader({ driver, image }) {
    const fullName = `${driver.name} ${driver.surname}`;

    return (
        <header>
            <h2 className="text-4xl mb-6 text-red-500 font-extrabold text-center tracking-widest uppercase drop-shadow-md">
                🏎️ Driver Spotlight: {fullName}
            </h2>
            <img
                src={image}
                alt={`${fullName}, Formula 1 driver racing for position ${driver.number}`}
                className="w-80 h-80 object-cover object-top rounded-lg border-2 border-red-500 shadow-md mx-auto"
            />
        </header>
    );
}

export default DriverHeader;
