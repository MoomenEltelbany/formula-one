const IMAGE =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/2024-08-25_Motorsport%2C_Formel_1%2C_Gro%C3%9Fer_Preis_der_Niederlande_2024_STP_3973_by_Stepro_%28medium_crop%29.jpg/1024px-2024-08-25_Motorsport%2C_Formel_1%2C_Gro%C3%9Fer_Preis_der_Niederlande_2024_STP_3973_by_Stepro_%28medium_crop%29.jpg";

const TEAMIMAGE =
    "https://upload.wikimedia.org/wikipedia/en/4/44/Red_bull_racing.png";

function HomeLeader() {
    return (
        <section className="bg-black py-12">
            <main className="bg-neutral-900 m-8 p-6 sm:p-8 rounded-xl shadow-lg max-w-5xl mx-auto text-white relative">
                <h2 className="text-3xl font-title mb-6 text-red-500 text-center tracking-wide">
                    🏆 Championship Leader
                </h2>
                <div className="flex flex-col sm:flex-row items-center gap-8">
                    <img
                        src={IMAGE}
                        alt="Max Verstappen"
                        className="w-80 h-80 object-cover object-top rounded-lg border-2 border-red-500 shadow-md"
                    />

                    <div className="text-center sm:text-left space-y-2">
                        <h3 className="text-2xl font-semibold">
                            Max Verstappen
                        </h3>
                        <p className="text-red-400 font-medium">
                            Red Bull Racing
                        </p>
                        <p className="text-lg">🏁 575 Points</p>
                    </div>
                    <div className="w-20 h-7 absolute bottom-4 right-4">
                        <img
                            src={TEAMIMAGE}
                            alt="Max Verstappen"
                            className="w-20 h-7 object-cover object-top  shadow-md"
                        />
                    </div>
                </div>
            </main>
        </section>
    );
}

export default HomeLeader;
