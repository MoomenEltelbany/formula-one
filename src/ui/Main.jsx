function Main({ children }) {
    return (
        <main className="bg-neutral-900 m-8 p-6 sm:p-8 rounded-xl shadow-lg max-w-5xl mx-auto text-white flex flex-col items-center gap-5 tracking-wider">
            {children}
        </main>
    );
}

export default Main;
